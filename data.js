const DEFAULT_SITE_DATA = {
  siteVersion: 2,
  forms: {
    goldenbell: "",
    booth: "",
    questions: "",
    goldenbellOpenText: "7월 20일 오픈 예정"
  },
  howToEnjoy: [
    {
      title: "6월부터 스탬프 카드 받기",
      text: "근처 작은도서관에서 독서골든벨 스탬프 카드를 받아주세요."
    },
    {
      title: "선정도서 대출하고 도장 받기",
      text: "리딩시티 선정도서를 대출할 때마다 작은도서관에서 스탬프를 받을 수 있습니다."
    },
    {
      title: "골든벨 참여 혜택 챙기기",
      text: "스탬프 도장 5개 이상이면 행사 당일 선착순 100명 선물을 받을 수 있습니다. 골든벨 참여자는 도장 1개당 10점씩, 최대 150점까지 가산점을 받을 수 있습니다."
    },
    {
      title: "선정도서 작가 만나기",
      text: "작가와의 만남에서 선정도서 작가를 직접 만나 책 이야기를 나눌 수 있습니다."
    }
  ],
  notice: {
    award: "시상금 및 등수별 지급 기준은 추후 공지 예정입니다.",
    booth: "체험부스는 오후 1시부터 4시까지 운영합니다. 두빛나래 캐리커처 1개 부스가 확정되었으며, 나머지 세부 구성은 추후 공지 예정입니다.",
    performance: "공연 2팀을 진행 예정이며, 팀명과 시간은 추후 공지 예정입니다.",
    authorTalk: "선정도서 작가 섭외가 진행 중이며, 동부 2회·서부 2회로 운영 예정입니다. 날짜와 장소는 추후 공지 예정입니다."
  },
  authorMeetings: [
    {
      author: "최지안",
      honorific: "최지안 작가님",
      bookTitle: "빨간돌을 찾아줘",
      bookCover: "./covers/find-red-stone.png",
      authorPhoto: "",
      status: "섭외 중",
      note: "선정도서 『빨간돌을 찾아줘』 작가와의 만남을 기획 중입니다. 날짜와 장소는 추후 공지 예정입니다."
    },
    {
      author: "최은영",
      honorific: "최은영 작가님",
      bookTitle: "사월의 바다",
      bookCover: "./covers/april-sea.png",
      authorPhoto: "",
      status: "섭외 중",
      note: "선정도서 『사월의 바다』 작가와의 만남을 기획 중입니다. 날짜와 장소는 추후 공지 예정입니다."
    }
  ],
  books: [
    {
      category: "역사",
      color: "#1d76a8",
      items: [
        { title: "할매", author: "황선영", publisher: "창비", cover: "./covers/halmae.png", summary: "전쟁과 시대의 아픔을 지나온 한 인물의 삶을 통해 역사 속 개인의 기억을 돌아보게 하는 책입니다.", point: "한 사람의 생애가 시대의 역사와 어떻게 연결되는지 생각하며 읽어보세요.", yes24: "", aladin: "" },
        { title: "사월의 바다", author: "최은영", publisher: "마루비", cover: "./covers/april-sea.png", summary: "4월의 아픈 기억을 배경으로, 잊지 않아야 할 사건과 마음을 어린이·청소년의 눈높이에서 바라보게 하는 작품입니다.", point: "기억, 추모, 공동체의 책임이라는 단어를 떠올리며 읽어보세요.", yes24: "", aladin: "" },
        { title: "국립중앙박물관", author: "한소곤", publisher: "개암나무", cover: "./covers/national-museum.png", summary: "박물관이라는 공간을 통해 우리 문화유산과 역사 자료가 어떤 이야기를 품고 있는지 살펴보는 책입니다.", point: "유물은 왜 보존되어야 하는지, 박물관이 하는 일을 중심으로 읽어보세요.", yes24: "", aladin: "" }
      ]
    },
    {
      category: "화성",
      color: "#2856a3",
      items: [
        { title: "한중록", author: "혜경궁홍씨", publisher: "문학동네", cover: "./covers/hanjungrok.png", summary: "조선 왕실의 비극과 궁중 생활을 당사자의 기록으로 들여다볼 수 있는 고전입니다.", point: "사도세자, 정조, 혜경궁 홍씨의 관계와 시대 배경을 함께 살펴보세요.", yes24: "", aladin: "" },
        { title: "낙서독립운동", author: "한영미", publisher: "산하", cover: "./covers/graffiti-independence.png", summary: "일제강점기 독립을 향한 마음과 행동을 ‘낙서’라는 소재로 풀어낸 역사 동화입니다.", point: "작은 행동이 어떻게 저항과 연대의 의미를 가질 수 있는지 생각해보세요.", yes24: "", aladin: "" },
        { title: "1795년, 정조의 행복한 행차", author: "윤민용", publisher: "봄봄", cover: "./covers/jeongjo-parade.png", summary: "정조의 1795년 화성 행차를 통해 조선 후기 왕실 문화와 화성의 역사적 의미를 만나는 책입니다.", point: "정조가 왜 화성을 중요하게 여겼는지, 행차가 백성에게 어떤 의미였는지 읽어보세요.", yes24: "", aladin: "" }
      ]
    },
    {
      category: "판타지/SF",
      color: "#f47d1f",
      items: [
        { title: "프로젝트 헤일메리", author: "앤디 위어", publisher: "알에이치코리아", cover: "./covers/project-hail-mary.png", summary: "우주와 과학을 배경으로 인류의 위기를 해결하려는 모험을 그린 SF 소설입니다.", point: "문제 해결 과정, 과학적 추론, 낯선 존재와의 협력을 중심으로 읽어보세요.", yes24: "", aladin: "" },
        { title: "빨간돌을 찾아줘", author: "최지안", publisher: "문학동네", cover: "./covers/find-red-stone.png", summary: "상상력과 모험의 흐름 속에서 중요한 무언가를 찾아가는 과정을 담은 어린이 문학 작품입니다.", point: "등장인물이 왜 빨간돌을 찾는지, 모험이 끝난 뒤 무엇이 달라지는지 살펴보세요.", yes24: "", aladin: "" },
        { title: "구멍창", author: "백희나", publisher: "스토리보울", cover: "./covers/hole-window.png", summary: "백희나 작가 특유의 상상력과 이미지가 돋보이는 이야기로, 작은 창과 틈을 통해 새로운 세계를 바라보게 합니다.", point: "현실과 상상이 만나는 장면, 인물의 마음 변화를 중심으로 읽어보세요.", yes24: "", aladin: "" }
      ]
    },
    {
      category: "환경",
      color: "#229a67",
      items: [
        { title: "나는 선량한 기후파괴자입니다", author: "토마스 브루너", publisher: "동녘", cover: "./covers/climate-destroyer.png", summary: "평범한 일상 속 선택이 기후위기와 어떻게 연결되는지 돌아보게 하는 환경 교양서입니다.", point: "내가 선한 의도로 한 행동도 환경에 영향을 줄 수 있다는 점을 생각해보세요.", yes24: "", aladin: "" },
        { title: "에너지가 문제야", author: "이지유", publisher: "위즈덤", cover: "./covers/energy-problem.png", summary: "에너지 사용과 기후 변화, 생활 속 과학 문제를 어린이·청소년이 이해하기 쉽게 설명하는 책입니다.", point: "전기, 연료, 소비 습관이 지구 환경과 어떻게 연결되는지 확인해보세요.", yes24: "", aladin: "" },
        { title: "미세미세한 맛 플라수프", author: "김지형", publisher: "두마리토끼책", cover: "./covers/plastic-soup.png", summary: "플라스틱과 미세플라스틱 문제를 이야기로 접하며 환경오염의 심각성을 생각하게 하는 책입니다.", point: "편리함 뒤에 남는 쓰레기와 바다 생태계 문제를 중심으로 읽어보세요.", yes24: "", aladin: "" }
      ]
    },
    {
      category: "문화예술",
      color: "#8a57a3",
      items: [
        { title: "조선 미술관", author: "탁현규", publisher: "블랙피쉬", cover: "./covers/joseon-art-museum.png", summary: "조선 시대 그림과 미술을 통해 옛사람들의 삶, 취향, 시대정신을 살펴보는 예술 교양서입니다.", point: "그림 속 인물, 풍경, 물건이 어떤 이야기를 들려주는지 관찰해보세요.", yes24: "", aladin: "" },
        { title: "할머니의 아이돌", author: "이송현", publisher: "다산", cover: "./covers/grandma-idol.png", summary: "세대가 다른 인물들이 대중문화와 관계를 맺으며 서로를 이해해가는 과정을 담은 이야기입니다.", point: "좋아하는 마음, 세대 차이, 가족 관계가 어떻게 표현되는지 살펴보세요.", yes24: "", aladin: "" },
        { title: "꽃에 미친 김군", author: "김동성", publisher: "보림", cover: "./covers/kim-gun-flowers.png", summary: "꽃과 자연, 예술적 열정을 따라가며 한 인물의 몰입과 아름다움에 대한 마음을 만나는 그림책입니다.", point: "김군이 왜 꽃에 마음을 빼앗겼는지, 그림과 색감이 주는 느낌을 함께 보세요.", yes24: "", aladin: "" }
      ]
    }
  ]
};

const STORAGE_KEY = "goldenbell-2026-site-data";

function cloneDefaultData() {
  return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}

function loadSiteData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneDefaultData();
    const parsed = JSON.parse(saved);
    if (parsed.siteVersion !== DEFAULT_SITE_DATA.siteVersion) {
      resetSiteData();
      return cloneDefaultData();
    }
    return mergeSiteData(cloneDefaultData(), parsed);
  } catch (error) {
    console.warn("Saved site data could not be loaded.", error);
    return cloneDefaultData();
  }
}

function saveSiteData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetSiteData() {
  localStorage.removeItem(STORAGE_KEY);
}

function mergeSiteData(base, override) {
  if (!override || typeof override !== "object") return base;
  const mergedBooks = base.books.map((group, groupIndex) => {
    const overrideGroup = Array.isArray(override.books) ? override.books[groupIndex] : null;
    if (!overrideGroup) return group;
    return {
      ...group,
      ...overrideGroup,
      items: group.items.map((book, bookIndex) => ({
        ...book,
        ...((overrideGroup.items || [])[bookIndex] || {})
      }))
    };
  });
  return {
    ...base,
    ...override,
    forms: { ...base.forms, ...(override.forms || {}) },
    notice: { ...base.notice, ...(override.notice || {}) },
    howToEnjoy: Array.isArray(override.howToEnjoy) ? override.howToEnjoy : base.howToEnjoy,
    authorMeetings: Array.isArray(override.authorMeetings) ? override.authorMeetings : base.authorMeetings,
    books: mergedBooks
  };
}

function bookSearchUrl(store, book) {
  const keyword = encodeURIComponent(`${book.title} ${book.author}`.trim());
  if (store === "yes24") return `https://www.yes24.com/Product/Search?domain=ALL&query=${keyword}`;
  return `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${keyword}`;
}
