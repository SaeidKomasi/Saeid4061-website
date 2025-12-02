const languageList = [
  { code: "fa", label: "فارسی" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" }, // اسپانیایی
  { code: "de", label: "Deutsch (DE)" }, // آلمانی
  { code: "nl", label: "Nederlands" }, // هلندی
  { code: "de-at", label: "Deutsch (AT)" }, // اتریش
  { code: "hu", label: "Magyar" }, // مجاری
  { code: "cs", label: "Čeština" }, // چک
  { code: "pl", label: "Polski" }, // لهستانی
  { code: "fr", label: "Français" }, // فرانسوی
  { code: "ro", label: "Română" }, // رومانیایی
  { code: "tr", label: "Türkçe" }, // ترکی استانبولی
  { code: "mn", label: "Монгол" }, // مغولی
  { code: "ru", label: "Русский" }, // روسی
  { code: "ar", label: "العربية" }, // عربی
  { code: "ka", label: "ქართული" }, // گرجی
  { code: "az", label: "Azərbaycanca" }, // آذربایجانی
  { code: "zh", label: "中文" }, // چینی
  { code: "ja", label: "日本語" }, // ژاپنی
  { code: "tk", label: "Türkmençe" }, // ترکمنی
  { code: "tg", label: "Тоҷикӣ" }, // تاجیکی
  { code: "kk", label: "Қазақша" } // قزاقی
];

// ترجمه جملات اصلی برای هر زبان
const translations = {
  fa: {
    title: "حمل‌ونقل بین‌المللی جاده‌ای",
    subtitle: "اروپا – خاورمیانه – آسیای مرکزی",
    company: "کمپانی · معرفی شرکت",
    personal: "شخصی · ارتباط مستقیم"
  },
  en: {
    title: "International Road Transport",
    subtitle: "Europe – Middle East – Central Asia",
    company: "Company profile",
    personal: "Personal & contact"
  },
  es: {
    title: "Transporte internacional por carretera",
    subtitle: "Europa – Oriente Medio – Asia Central",
    company: "Perfil de la empresa",
    personal: "Personal y contacto"
  },
  de: {
    title: "Internationaler Straßentransport",
    subtitle: "Europa – Naher Osten – Zentralasien",
    company: "Firmenprofil",
    personal: "Persönlich & Kontakt"
  },
  "de-at": {
    title: "Internationaler Straßentransport",
    subtitle: "Europa – Naher Osten – Zentralasien",
    company: "Unternehmen (AT)",
    personal: "Persönlich & Kontakt"
  },
  nl: {
    title: "Internationaal wegtransport",
    subtitle: "Europa – Midden-Oosten – Centraal-Azië",
    company: "Bedrijfsprofiel",
    personal: "Persoonlijk & contact"
  },
  hu: {
    title: "Nemzetközi közúti szállítás",
    subtitle: "Európa – Közel-Kelet – Közép-Ázsia",
    company: "Cégprofil",
    personal: "Személyes & kapcsolat"
  },
  cs: {
    title: "Mezinárodní silniční doprava",
    subtitle: "Evropa – Blízký východ – Střední Asie",
    company: "Profil společnosti",
    personal: "Osobní & kontakt"
  },
  pl: {
    title: "Międzynarodowy transport drogowy",
    subtitle: "Europa – Bliski Wschód – Azja Centralna",
    company: "Profil firmy",
    personal: "Osobisty i kontakt"
  },
  fr: {
    title: "Transport routier international",
    subtitle: "Europe – Moyen-Orient – Asie centrale",
    company: "Profil de l’entreprise",
    personal: "Personnel & contact"
  },
  ro: {
    title: "Transport rutier internațional",
    subtitle: "Europa – Orientul Mijlociu – Asia Centrală",
    company: "Profil companie",
    personal: "Personal & contact"
  },
  tr: {
    title: "Uluslararası karayolu taşımacılığı",
    subtitle: "Avrupa – Orta Doğu – Orta Asya",
    company: "Şirket profili",
    personal: "Kişisel & iletişim"
  },
  mn: {
    title: "Олон улсын авто замын тээвэр",
    subtitle: "Европ – Ойрх Дорнод – Төв Ази",
    company: "Компанийн танилцуулга",
    personal: "Хувийн & холбогдох"
  },
  ru: {
    title: "Международные автомобильные перевозки",
    subtitle: "Европа – Ближний Восток – Центральная Азия",
    company: "Профиль компании",
    personal: "Лично и контакты"
  },
  ar: {
    title: "النقل البري الدولي",
    subtitle: "أوروبا – الشرق الأوسط – آسيا الوسطى",
    company: "ملف الشركة",
    personal: "شخصي واتصال"
  },
  ka: {
    title: "საერთაშორისო საგზაო გადაზიდვები",
    subtitle: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    company: "კომპანიის პროფილი",
    personal: "პირადი & კონტაქტი"
  },
  az: {
    title: "Beynəlxalq avtomobil daşımaları",
    subtitle: "Avropa – Yaxın Şərq – Mərkəzi Asiya",
    company: "Şirkət profili",
    personal: "Şəxsi & əlaqə"
  },
  zh: {
    title: "国际公路运输",
    subtitle: "欧洲 – 中东 – 中亚",
    company: "公司简介",
    personal: "个人与联系"
  },
  ja: {
    title: "国際道路輸送",
    subtitle: "ヨーロッパ – 中東 – 中央アジア",
    company: "会社概要",
    personal: "個人・連絡先"
  },
  tk: {
    title: "Halkara ýol ulaglary",
    subtitle: "Ewropa – Ýakyn Gündogar – Merkezi Aziýa",
    company: "Kompaniýanyň profili",
    personal: "Şahsy & habarlaşmak"
  },
  tg: {
    title: "Нақлиёти байналмилалии автомобилӣ",
    subtitle: "Аврупо – Шарқи Наздик – Осиёи Марказӣ",
    company: "Профили ширкат",
    personal: "Шахсӣ ва тамос"
  },
  kk: {
    title: "Халықаралық автомобиль тасымалы",
    subtitle: "Еуропа – Таяу Шығыс – Орталық Азия",
    company: "Компания профилі",
    personal: "Жеке & байланыс"
  }
};

// مقدار پیش‌فرض
const defaultLang = "fa";

// پر کردن منوی انتخاب زبان
function initLanguageSelect() {
  const select = document.getElementById("languageSelect");
  languageList.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.label;
    if (lang.code === defaultLang) option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

// اعمال ترجمه روی صفحه
function setLanguage(code) {
  const data = translations[code] || translations[defaultLang];

  document.getElementById("heroTitle").textContent = data.title;
  document.getElementById("heroSubtitle").textContent = data.subtitle;
  document.getElementById("btnCompany").textContent = data.company;
  document.getElementById("btnPersonal").textContent = data.personal;

  // متن پایین که می‌گه چند زبان داریم
  const info = document.getElementById("languagesInfo");
  info.textContent =
    code === "fa"
      ? "سایت در ۲۲ زبان در دسترس است."
      : "Website available in 22 languages.";
}

// سال فوتر
function setYear() {
  document.getElementById("year").textContent =
    new Date().getFullYear().toString();
}

// شروع
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect();
  setLanguage(defaultLang);
  setYear();
});
