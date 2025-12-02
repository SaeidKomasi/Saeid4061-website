// main.js  –  SAEID4061 · GREY LION
// نسخه ساده با جاوااسکریپت خالص، بدون فریم‌ورک

// ================== تنظیمات تماس ==================
const WHATSAPP_NUMBER = "48881004737";          // شماره بدون +
const TELEGRAM_USERNAME = "Saeid4061";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

const STORAGE_LANG_KEY = "saeid4061_lang";
const DEFAULT_LANG = "fa"; // پیش‌فرض: فارسی

// ================== لیست زبان‌ها ==================
const languageList = [
  { code: "fa",   label: "فارسی" },          // Persian
  { code: "en",   label: "English" },        // English
  { code: "es",   label: "Español" },        // Spanish
  { code: "de",   label: "Deutsch" },        // German
  { code: "nl",   label: "Nederlands" },     // Dutch
  { code: "de-at",label: "Deutsch (AT)" },   // Austrian German
  { code: "hu",   label: "Magyar" },         // Hungarian
  { code: "cs",   label: "Čeština" },        // Czech
  { code: "pl",   label: "Polski" },         // Polish
  { code: "fr",   label: "Français" },       // French
  { code: "ro",   label: "Română" },         // Romanian
  { code: "tr",   label: "Türkçe" },         // Turkish
  { code: "mn",   label: "Монгол" },        // Mongolian
  { code: "ru",   label: "Русский" },        // Russian
  { code: "ar",   label: "العربية" },        // Arabic
  { code: "ka",   label: "ქართული" },       // Georgian
  { code: "az",   label: "Azərbaycanca" },   // Azeri
  { code: "zh",   label: "中文" },           // Chinese
  { code: "ja",   label: "日本語" },         // Japanese
  { code: "tk",   label: "Türkmençe" },      // Turkmen
  { code: "tg",   label: "Тоҷикӣ" },        // Tajik
  { code: "kk",   label: "Қазақша" }         // Kazakh
];

// ================== متن‌ها (چندزبانه) ==================
// کلیدها:
// siteTitleTop, mainHeading, heroText,
// btnCompany, btnPersonal,
// companyTitle, companyText1,
// personalTitle, personalText1,
// contactTitle, contactWhatsApp, contactTelegram,
// footerText

const translations = {
  // ----- English -----
  en: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "International Road Transport – Europe • Middle East • Central Asia",
    heroText:
      "Polish registered transport company focused on safe and reliable international road freight along EU–Middle East–Central Asia corridors.",
    btnCompany: "Company",
    btnPersonal: "Personal",
    companyTitle: "Company profile",
    companyText1:
      "Full service CMR/TIR road freight, customs documentation (SENT, EPD, EORI) and transit route consulting.",
    personalTitle: "Personal / Crew",
    personalText1:
      "Direct contact with the owner–operator and drivers. We speak Polish, English and Persian.",
    contactTitle: "Direct contact",
    contactWhatsApp: "Write on WhatsApp",
    contactTelegram: "Write on Telegram",
    footerText:
      "SAEID4061 SP. Z O.O. – International Road Transport from Poland"
  },

  // ----- Persian / فارسی -----
  fa: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "حمل‌ونقل بین‌المللی جاده‌ای – اروپا • خاورمیانه • آسیای مرکزی",
    heroText:
      "شرکت حمل‌ونقل ثبت‌شده در لهستان با تمرکز بر حمل بار جاده‌ای ایمن و قابل‌اعتماد در کریدورهای اروپا – خاورمیانه – آسیای مرکزی.",
    btnCompany: "کمپانی",
    btnPersonal: "شخصی / پرسونل",
    companyTitle: "معرفی شرکت",
    companyText1:
      "خدمات کامل حمل‌ونقل CMR/TIR، مدارک گمرکی (SENT، EPD، EORI) و مشاوره مسیر ترانزیت.",
    personalTitle: "بخش شخصی و پرسونل",
    personalText1:
      "ارتباط مستقیم با مالک–راننده و رانندگان شرکت. به فارسی، انگلیسی و لهستانی پاسخ می‌دهیم.",
    contactTitle: "ارتباط مستقیم",
    contactWhatsApp: "پیام در واتساپ",
    contactTelegram: "پیام در تلگرام",
    footerText:
      "SAEID4061 SP. Z O.O. – حمل‌ونقل بین‌المللی از لهستان"
  },

  // ----- Polish / Polski -----
  pl: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "Międzynarodowy transport drogowy – Europa • Bliski Wschód • Azja Centralna",
    heroText:
      "Polska spółka transportowa specjalizująca się w bezpiecznym i niezawodnym transporcie drogowym na korytarzach UE–Bliski Wschód–Azja Centralna.",
    btnCompany: "Firma",
    btnPersonal: "Osobiste",
    companyTitle: "Profil firmy",
    companyText1:
      "Kompleksowe usługi CMR/TIR, dokumenty celne (SENT, EPD, EORI) oraz doradztwo tras tranzytowych.",
    personalTitle: "Strefa osobista / załoga",
    personalText1:
      "Bezpośredni kontakt z właścicielem–operatorem i kierowcami. Mówimy po polsku, angielsku i persku.",
    contactTitle: "Kontakt bezpośredni",
    contactWhatsApp: "Napisz na WhatsApp",
    contactTelegram: "Napisz na Telegramie",
    footerText:
      "SAEID4061 SP. Z O.O. – międzynarodowy transport drogowy z Polski"
  },

  // ----- Turkish / Türkçe -----
  tr: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "Uluslararası karayolu taşımacılığı – Avrupa • Orta Doğu • Orta Asya",
    heroText:
      "AB – Orta Doğu – Orta Asya koridorlarında güvenli ve güvenilir uluslararası karayolu taşımacılığına odaklanan Polonya merkezli bir nakliye şirketi.",
    btnCompany: "Şirket",
    btnPersonal: "Kişisel",
    companyTitle: "Şirket profili",
    companyText1:
      "CMR/TIR karayolu taşımacılığı, gümrük evrakları (SENT, EPD, EORI) ve transit rota danışmanlığı.",
    personalTitle: "Kişisel / Ekip",
    personalText1:
      "Sahip–operatör ve şoförlerle doğrudan iletişim. Lehçe, İngilizce ve Farsça konuşuyoruz.",
    contactTitle: "Doğrudan iletişim",
    contactWhatsApp: "WhatsApp üzerinden yazın",
    contactTelegram: "Telegram üzerinden yazın",
    footerText:
      "SAEID4061 SP. Z O.O. – Polonya’dan uluslararası karayolu taşımacılığı"
  },

  // ----- Russian / Русский -----
  ru: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "Международные автоперевозки – Европа • Ближний Восток • Центральная Азия",
    heroText:
      "Польская транспортная компания, специализирующаяся на безопасных и надёжных международных автоперевозках по коридорам ЕС–Ближний Восток–Центральная Азия.",
    btnCompany: "Компания",
    btnPersonal: "Личное",
    companyTitle: "Профиль компании",
    companyText1:
      "Полный комплекс услуг CMR/TIR, таможенные документы (SENT, EPD, EORI) и консультации по транзитным маршрутам.",
    personalTitle: "Личный раздел / экипаж",
    personalText1:
      "Прямой контакт с владельцем-оператором и водителями. Мы говорим по-польски, по-английски и по-персидски.",
    contactTitle: "Прямой контакт",
    contactWhatsApp: "Написать в WhatsApp",
    contactTelegram: "Написать в Telegram",
    footerText:
      "SAEID4061 SP. Z O.O. – международные автоперевозки из Польши"
  },

  // ----- Arabic / العربية -----
  ar: {
    siteTitleTop: "SAEID4061 · GREY LION",
    mainHeading:
      "النقل البري الدولي – أوروبا • الشرق الأوسط • آسيا الوسطى",
    heroText:
      "شركة نقل مسجلة في بولندا متخصّصة في النقل البري الدولي الآمن والموثوق على ممرات أوروبا – الشرق الأوسط – آسيا الوسطى.",
    btnCompany: "الشركة",
    btnPersonal: "شخصي / الطاقم",
    companyTitle: "نبذة عن الشركة",
    companyText1:
      "خدمات كاملة للنقل البري CMR/TIR، ومستندات الجمارك (SENT، EPD، EORI) واستشارات مسارات الترانزيت.",
    personalTitle: "القسم الشخصي والطاقم",
    personalText1:
      "اتصال مباشر مع مالك الشركة والسائقين. نتحدث البولندية والإنجليزية والفارسية.",
    contactTitle: "اتصال مباشر",
    contactWhatsApp: "اكتب لنا على واتساب",
    contactTelegram: "اكتب لنا على تيليجرام",
    footerText:
      "SAEID4061 SP. Z O.O. – نقل بري دولي من بولندا"
  }
};

// برای بقیه کدها از انگلیسی به عنوان پیش‌فرض استفاده می‌کنیم
// (اگر ترجمه‌ی یک کلید در زبان نبود، متن انگلیسی نمایش داده می‌شود)
function getText(langCode, key) {
  const dict = translations[langCode] || {};
  if (dict[key]) return dict[key];

  // اگر کد مثل de-at بود، اول قسمت اصلی را امتحان کن (de)
  const base = langCode.split("-")[0];
  if (translations[base] && translations[base][key]) {
    return translations[base][key];
  }

  // در نهایت انگلیسی
  return translations.en[key] || "";
}

// ================== اعمال ترجمه روی صفحه ==================
function applyTranslations(langCode) {
  document.documentElement.setAttribute("data-lang", langCode);

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = getText(langCode, key);
    if (!text) return;

    // اگر عنصر placeholder دارد (input و ...)، روی placeholder بگذار
    if (el.placeholder !== undefined && el.tagName === "INPUT") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
}

// ================== راه‌اندازی انتخاب زبان ==================
function initLanguageSelector() {
  const select = document.getElementById("language-select");
  if (!select) return;

  // پاک کردن آیتم‌های قبلی
  select.innerHTML = "";

  // پر کردن لیست زبان‌ها
  languageList.forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang.code;
    opt.textContent = lang.label;
    select.appendChild(opt);
  });

  // زبان ذخیره‌شده
  const savedLang = localStorage.getItem(STORAGE_LANG_KEY);
  const initialLang =
    savedLang && translations[savedLang] ? savedLang : DEFAULT_LANG;

  select.value = initialLang;
  applyTranslations(initialLang);

  select.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
    localStorage.setItem(STORAGE_LANG_KEY, lang);
  });
}

// ================== سوییچ بین Company / Personal ==================
function initViewSwitcher() {
  const btnCompany = document.getElementById("btn-company");
  const btnPersonal = document.getElementById("btn-personal");
  const viewCompany = document.getElementById("view-company");
  const viewPersonal = document.getElementById("view-personal");

  if (!btnCompany || !btnPersonal || !viewCompany || !viewPersonal) {
    // اگر یکی از اینها نبود، خطایی نده
    return;
  }

  function show(view) {
    if (view === "company") {
      viewCompany.style.display = "block";
      viewPersonal.style.display = "none";
      btnCompany.classList.add("active");
      btnPersonal.classList.remove("active");
    } else {
      viewCompany.style.display = "none";
      viewPersonal.style.display = "block";
      btnCompany.classList.remove("active");
      btnPersonal.classList.add("active");
    }
  }

  btnCompany.addEventListener("click", () => show("company"));
  btnPersonal.addEventListener("click", () => show("personal"));

  // پیش‌فرض: صفحه‌ی شرکت
  show("company");
}

// ================== لینک‌های واتساپ و تلگرام ==================
function initSocialLinks() {
  const wa = document.getElementById("whatsapp-link");
  const tg = document.getElementById("telegram-link");

  if (wa) {
    wa.href = WHATSAPP_URL;
    wa.target = "_blank";
    wa.rel = "noopener noreferrer";
  }
  if (tg) {
    tg.href = TELEGRAM_URL;
    tg.target = "_blank";
    tg.rel = "noopener noreferrer";
  }
}

// ================== شروع برنامه بعد از لود صفحه ==================
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
  initViewSwitcher();
  initSocialLinks();
});
