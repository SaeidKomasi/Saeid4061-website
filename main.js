const languageList = [
  { code: "fa", label: "فارسی" },            // Persian
  { code: "en", label: "English" },          // English
  { code: "es", label: "Español" },          // Spanish
  { code: "de", label: "Deutsch" },          // German
  { code: "nl", label: "Nederlands" },       // Dutch
  { code: "de-at", label: "Deutsch (AT)" },  // Austrian German
  { code: "hu", label: "Magyar" },           // Hungarian
  { code: "cs", label: "Čeština" },          // Czech
  { code: "pl", label: "Polski" },           // Polish
  { code: "fr", label: "Français" },         // French
  { code: "ro", label: "Română" },           // Romanian
  { code: "tr", label: "Türkçe" },           // Turkish
  { code: "mn", label: "Монгол" },           // Mongolian
  { code: "ru", label: "Русский" },          // Russian
  { code: "ar", label: "العربية" },          // Arabic
  { code: "ka", label: "ქართული" },          // Georgian
  { code: "az", label: "Azərbaycanca" },     // Azeri
  { code: "zh", label: "中文" },             // Chinese
  { code: "ja", label: "日本語" },           // Japanese
  { code: "tk", label: "Türkmençe" },        // Turkmen
  { code: "tg", label: "Тоҷикӣ" },          // Tajik
  { code: "kk", label: "Қазақша" }          // Kazakh
];

// ترجمه جملات اصلی برای هر زبان
const translations = {
  fa: {
    title: "حمل‌ونقل بین‌المللی جاده‌ای",
    subtitle: "اروپا – خاورمیانه – آسیای مرکزی",
    company: "کمپانی",
    personal: "شخصی"
  },
  en: {
    title: "International Road Transport",
    subtitle: "Europe – Middle East – Central Asia",
    company: "Company",
    personal: "Personal"
  },
  es: {
    title: "Transporte internacional por carretera",
    subtitle: "Europa – Oriente Medio – Asia Central",
    company: "Compañía",
    personal: "Personal"
  },
  de: {
    title: "Internationaler Straßentransport",
    subtitle: "Europa – Naher Osten – Zentralasien",
    company: "Unternehmen",
    personal: "Persönlich"
  },
  "de-at": {
    title: "Internationaler Straßentransport",
    subtitle: "Europa – Naher Osten – Zentralasien",
    company: "Unternehmen (AT)",
    personal: "Persönlich"
  },
  nl: {
    title: "Internationaal wegtransport",
    subtitle: "Europa – Midden-Oosten – Centraal-Azië",
    company: "Bedrijf",
    personal: "Persoonlijk"
  },
  hu: {
    title: "Nemzetközi közúti szállítás",
    subtitle: "Európa – Közel-Kelet – Közép-Ázsia",
    company: "Cég",
    personal: "Személyes"
  },
  cs: {
    title: "Mezinárodní silniční doprava",
    subtitle: "Evropa – Blízký východ – Střední Asie",
    company: "Společnost",
    personal: "Osobní"
  },
  pl: {
    title: "Międzynarodowy transport drogowy",
    subtitle: "Europa – Bliski Wschód – Azja Centralna",
    company: "Firma",
    personal: "Osobisty"
  },
  fr: {
    title: "Transport routier international",
    subtitle: "Europe – Moyen-Orient – Asie centrale",
    company: "Entreprise",
    personal: "Personnel"
  },
  ro: {
    title: "Transport rutier internațional",
    subtitle: "Europa – Orientul Mijlociu – Asia Centrală",
    company: "Companie",
    personal: "Personal"
  },
  tr: {
    title: "Uluslararası karayolu taşımacılığı",
    subtitle: "Avrupa – Orta Doğu – Orta Asya",
    company: "Şirket",
    personal: "Kişisel"
  },
  mn: {
    title: "Олон улсын авто замын тээвэр",
    subtitle: "Европ – Ойрх Дорнод – Төв Ази",
    company: "Компанийн",
    personal: "Хувийн"
  },
  ru: {
    title: "Международные автомобильные перевозки",
    subtitle: "Европа – Ближний Восток – Центральная Азия",
    company: "Компания",
    personal: "Личное"
  },
  ar: {
    title: "النقل البري الدولي",
    subtitle: "أوروبا – الشرق الأوسط – آسيا الوسطى",
    company: "الشركة",
    personal: "شخصي"
  },
  ka: {
    title: "საერთაშორისო საგზაო გადაზიდვები",
    subtitle: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    company: "კომპანია",
    personal: "პირადი"
  },
  az: {
    title: "Beynəlxalq avtomobil daşımaları",
    subtitle: "Avropa – Yaxın Şərq – Mərkəzi Asiya",
    company: "Şirkət",
    personal: "Şəxsi"
  },
  zh: {
    title: "国际公路运输",
    subtitle: "欧洲 – 中东 – 中亚",
    company: "公司",
    personal: "个人"
  },
  ja: {
    title: "国際道路輸送",
    subtitle: "ヨーロッパ – 中東 – 中央アジア",
    company: "会社情報",
    personal: "個人"
  },
  tk: {
    title: "Halkara ýol ulaglary",
    subtitle: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa",
    company: "Kompaniýa",
    personal: "Şahsy"
  },
  tg: {
    title: "Нақлиёти байналмилалии автомобилӣ",
    subtitle: "Аврупо – Шарқи Наздик – Осиёи Марказӣ",
    company: "Ширкат",
    personal: "Шахсӣ"
  },
  kk: {
    title: "Халықаралық автомобиль тасымалы",
    subtitle: "Еуропа – Таяу Шығыс – Орталық Азия",
    company: "Компания",
    personal: "Жеке"
  }
};

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
  const t = translations[code] || translations[defaultLang];

  document.getElementById("heroTitle").textContent = t.title;
  document.getElementById("heroSubtitle").textContent = t.subtitle;
  document.getElementById("btnCompany").textContent = t.company;
  document.getElementById("btnPersonal").textContent = t.personal;

  // RTL برای فارسی و عربی
  if (code === "fa" || code === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }

  // متن پایین صفحه درباره تعداد زبان‌ها
  const info = document.getElementById("languagesInfo");
  if (code === "fa") {
    info.textContent = "سایت در ۲۲ زبان در دسترس است.";
  } else {
    info.textContent = "Website available in 22 languages.";
  }
}

// سال فوتر
function setYear() {
  const el = document.getElementById("year");
  if (el) {
    el.textContent = new Date().getFullYear().toString();
  }
}

// شروع
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect();
  setLanguage(defaultLang);
  setYear();
});
