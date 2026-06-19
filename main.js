const siteData = loadSiteData();

function setLinkedButton(id, url, readyText, emptyText, download = false) {
  const button = document.getElementById(id);
  if (!button) return;
  if (url && url.trim()) {
    button.href = url.trim();
    button.textContent = readyText;
    button.classList.remove("disabled");
    button.removeAttribute("aria-disabled");
    if (download) button.setAttribute("download", "");
    if (/^https?:\/\//.test(url)) {
      button.target = "_blank";
      button.rel = "noopener";
    }
  } else {
    button.href = "#apply";
    button.textContent = emptyText;
    button.classList.add("disabled");
    button.setAttribute("aria-disabled", "true");
  }
}

function setScheduledButton(id, url, readyText, scheduleText) {
  const button = document.getElementById(id);
  if (!button) return;
  if (url && url.trim()) {
    button.href = url.trim();
    button.textContent = readyText;
    button.classList.remove("disabled", "scheduled");
    button.removeAttribute("aria-disabled");
    if (/^https?:\/\//.test(url)) {
      button.target = "_blank";
      button.rel = "noopener";
    }
  } else {
    button.href = "#apply";
    button.textContent = scheduleText;
    button.classList.add("scheduled");
    button.classList.remove("disabled");
    button.setAttribute("aria-disabled", "true");
  }
}

function renderBooks() {
  const root = document.getElementById("bookGroups");
  if (!root) return;
  root.innerHTML = siteData.books.map((group, groupIndex) => `
    <section class="book-group">
      <h3><span class="dot" style="background:${group.color || "#1366c6"}"></span>${escapeHtml(group.category)}</h3>
      <div class="book-list">
        ${group.items.map((book, bookIndex) => {
          const cover = book.cover ? `
            <div class="book-cover image-cover">
              <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지">
            </div>
          ` : `<div class="book-cover" style="background:${group.color || "#1366c6"}">${escapeHtml(group.category)}</div>`;
          return `
            <article class="book-card" tabindex="0" role="button" data-group="${groupIndex}" data-book="${bookIndex}" aria-label="${escapeHtml(book.title)} 책 정보 보기">
              ${cover}
              <h4>${escapeHtml(book.title)}</h4>
              <p>${escapeHtml(book.author)} | ${escapeHtml(book.publisher)}</p>
              <span class="book-more">책 정보 보기</span>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function bindBookCards() {
  document.querySelectorAll(".book-card").forEach((card) => {
    const open = () => {
      const group = siteData.books[Number(card.dataset.group)];
      const book = group.items[Number(card.dataset.book)];
      openBookModal(group, book);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function openBookModal(group, book) {
  const modal = document.getElementById("bookModal");
  document.getElementById("modalCover").src = book.cover || "";
  document.getElementById("modalCover").alt = `${book.title} 표지`;
  document.getElementById("modalCategory").textContent = group.category;
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalMeta").textContent = `${book.author} | ${book.publisher}`;
  document.getElementById("modalSummary").textContent = book.summary || "책 소개는 추후 보완 예정입니다.";
  document.getElementById("modalPoint").textContent = book.point || "읽기 포인트는 추후 보완 예정입니다.";
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeBookModal() {
  const modal = document.getElementById("bookModal");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindModal() {
  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeBookModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeBookModal();
  });
}

function bindPosterSlider() {
  const slider = document.getElementById("posterSlider");
  if (!slider) return;

  const slides = Array.from(document.querySelectorAll(".poster-slide"));
  const dots = Array.from(document.querySelectorAll(".poster-dot"));
  const caption = document.getElementById("posterCaption");
  const captions = [
    "선정도서 15권을 한눈에 확인할 수 있습니다. 클릭하면 안내 포스터로 전환됩니다.",
    "참가 안내와 대회 정보를 확인할 수 있습니다. 클릭하면 선정도서 포스터로 전환됩니다."
  ];
  let current = 0;
  let timer;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === current);
    });
    if (caption) caption.textContent = captions[current];
  };

  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(current + 1), 4500);
  };

  slider.addEventListener("click", () => {
    show(current + 1);
    restart();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      show(Number(dot.dataset.posterIndex));
      restart();
    });
  });

  restart();
}

function renderNotices() {
  const noticeMap = {
    awardNotice: siteData.notice.award,
    boothNotice: siteData.notice.booth,
    performanceNotice: siteData.notice.performance,
    authorTalkNotice: siteData.notice.authorTalk
  };
  Object.entries(noticeMap).forEach(([id, text]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  });
  const openNotice = document.getElementById("goldenbellOpenNotice");
  if (openNotice) {
    openNotice.textContent = `참가 신청은 ${siteData.forms.goldenbellOpenText || "추후 공지 예정"}입니다.`;
  }
}

function renderButtons() {
  const openText = siteData.forms.goldenbellOpenText || "추후 공지 예정";
  setScheduledButton("goldenbellApply", siteData.forms.goldenbell, "독서골든벨 신청하기", openText);
  setLinkedButton("boothApply", siteData.forms.booth, "체험부스 신청하기", "체험부스 신청 링크 준비 중");
  setLinkedButton("questionsDownload", siteData.forms.questions, "예상문제 다운로드", "예상문제 파일 추후 업로드", true);
  setScheduledButton("goldenbellApplyHero", siteData.forms.goldenbell, "독서골든벨 신청", `독서골든벨 신청 (${openText})`);
  setLinkedButton("questionsHero", siteData.forms.questions, "예상문제 받기", "예상문제 받기", true);
}

function renderHowToEnjoy() {
  const root = document.getElementById("howToEnjoy");
  if (!root) return;
  root.innerHTML = siteData.howToEnjoy.map((item, index) => `
    <article class="howto-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderAuthorMeetings() {
  const root = document.getElementById("authorMeetingCards");
  if (!root) return;
  root.innerHTML = siteData.authorMeetings.map((meeting) => {
    const photo = meeting.authorPhoto ? `
      <img src="${escapeHtml(meeting.authorPhoto)}" alt="${escapeHtml(meeting.honorific || meeting.author)} 사진">
    ` : `
      <div class="author-placeholder" aria-label="작가 사진 준비 중">
        <strong>${escapeHtml((meeting.author || "?").slice(0, 1))}</strong>
        <span>사진 준비 중</span>
      </div>
    `;
    return `
      <article class="author-card">
        <div class="author-photo">${photo}</div>
        <div class="author-book-cover">
          <img src="${escapeHtml(meeting.bookCover)}" alt="${escapeHtml(meeting.bookTitle)} 표지">
        </div>
        <div class="author-info">
          <span class="status planned">${escapeHtml(meeting.status)}</span>
          <h3>${escapeHtml(meeting.honorific || meeting.author)}</h3>
          <p class="author-book">선정도서 『${escapeHtml(meeting.bookTitle)}』</p>
          <p class="muted">${escapeHtml(meeting.note)}</p>
        </div>
      </article>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderBooks();
renderNotices();
renderButtons();
renderHowToEnjoy();
renderAuthorMeetings();
bindBookCards();
bindModal();
bindPosterSlider();
