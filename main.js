
const languageList = [
  { code: "fa", label: "فارسی" },          // Persian
  { code: "en", label: "English" },        // English
  { code: "es", label: "Español" },        // Spanish
  { code: "de", label: "Deutsch" },        // German
  { code: "nl", label: "Nederlands" },     // Dutch
  { code: "de-at", label: "Deutsch (AT)"}, // Austrian German
  { code: "hu", label: "Magyar" },         // Hungarian
  { code: "cs", label: "Čeština" },        // Czech
  { code: "pl", label: "Polski" },         // Polish
  { code: "fr", label: "Français" },       // French
  { code: "ro", label: "Română" },         // Romanian
  { code: "tr", label: "Türkçe" },         // Turkish
  { code: "mn", label: "Монгол" },         // Mongolian
  { code: "ru", label: "Русский" },        // Russian
  { code: "ar", label: "العربية" },        // Arabic
  { code: "ka", label: "ქართული" },        // Georgian
  { code: "az", label: "Azərbaycan" },     // Azerbaijani
  { code: "zh", label: "中文" },           // Chinese
  { code: "ja", label: "日本語" },        // Japanese
  { code: "tk", label: "Türkmençe" },      // Turkmen
  { code: "tg", label: "Тоҷикӣ" },        // Tajik
  { code: "kk", label: "Қазақша" }         // Kazakh
];

// ترجمه‌ها
const translations = {
  en: {
    subtitle:
      "International Road Transport · Europe · Middle East · Central Asia",
    mainHeading: "International Road Transport by Road",
    mainDescription:
      "Registered Polish company focused on safe and reliable road freight between Europe, the Middle East and Central Asia.",
    tabCompany: "Company",
    tabPersonal: "Personal / Private",
    companyNameTitle: "SAEID4061 SP. Z O.O. – Registered Company Data",
    labelKrs: "KRS:",
    labelRegon: "REGON:",
    labelNip: "NIP (Tax ID):",
    labelAddress: "Registered Address:",
    labelManagement: "Management:",
    labelCapital: "Share Capital:",
    valueKrs: "0001065392",
    valueRegon: "526744160",
    valueNip: "5372677546",
    address1: "ul. Orzechowa 32/1",
    address2: "21-500 Biała Podlaska",
    address3: "Lublin, Poland",
    management1: "Saeid Komasi – President of the Board",
    management2: "Mehdi Rezazadeh – Member of the Board",
    capitalValue: "5,000 PLN",
    personalHeading: "Personal & VIP Transport",
    personalDescription:
      "Dedicated solutions for managers, specialists and private clients. This section is under development.",
    footer:
      "SAEID4061 SP. Z O.O. · International Road Transport · All rights reserved."
  },

  fa: {
    subtitle: "حمل‌ونقل بین‌المللی جاده‌ای · اروپا · خاورمیانه · آسیای مرکزی",
    mainHeading: "حمل‌ونقل بین‌المللی جاده‌ای",
    mainDescription:
      "شرکت ثبت‌شده در لهستان با تمرکز بر حمل بار جاده‌ای ایمن و قابل‌اعتماد در مسیرهای اروپا، خاورمیانه و آسیای مرکزی.",
    tabCompany: "کمپانی",
    tabPersonal: "شخصی / پرسونل",
    companyNameTitle: "SAEID4061 SP. Z O.O. – اطلاعات رسمی ثبت شرکت",
    labelKrs: "شماره KRS:",
    labelRegon: "REGON:",
    labelNip: "NIP (کد مالیاتی):",
    labelAddress: "آدرس ثبت‌شده:",
    labelManagement: "مدیریت:",
    labelCapital: "سرمایه ثبتی:",
    valueKrs: "0001065392",
    valueRegon: "526744160",
    valueNip: "5372677546",
    address1: "لهستان، لوبلین، شهر بیالا پودلاسکا",
    address2: "خیابان Orzechowa پلاک 32 واحد 1",
    address3: "کد پستی 21-500، Biała Podlaska",
    management1: "سعید کماسی – رئیس هیئت‌مدیره",
    management2: "مهدی رضا‌زاده – عضو هیئت‌مدیره",
    capitalValue: "۵۰۰۰ زلوتی",
    personalHeading: "حمل‌ونقل شخصی و VIP",
    personalDescription:
      "راه‌حل‌های اختصاصی برای مدیران، متخصصان و مشتریان خصوصی. این بخش در حال تکمیل است.",
    footer:
      "SAEID4061 SP. Z O.O. · حمل‌ونقل بین‌المللی جاده‌ای · کلیه حقوق محفوظ است."
  },

  pl: {
    subtitle:
      "Międzynarodowy transport drogowy · Europa · Bliski Wschód · Azja Centralna",
    mainHeading: "Międzynarodowy transport drogowy towarów",
    mainDescription:
      "Polska spółka zarejestrowana, specjalizująca się w bezpiecznym i rzetelnym transporcie drogowym między Europą, Bliskim Wschodem i Azją Centralną.",
    tabCompany: "Firma",
    tabPersonal: "Prywatne / Personalne",
    companyNameTitle: "SAEID4061 SP. Z O.O. – Dane rejestrowe spółki",
    labelKrs: "KRS:",
    labelRegon: "REGON:",
    labelNip: "NIP:",
    labelAddress: "Siedziba zarejestrowana:",
    labelManagement: "Zarząd:",
    labelCapital: "Kapitał zakładowy:",
    valueKrs: "0001065392",
    valueRegon: "526744160",
    valueNip: "5372677546",
    address1: "ul. Orzechowa 32/1",
    address2: "21-500 Biała Podlaska",
    address3: "woj. lubelskie, Polska",
    management1: "Saeid Komasi – Prezes Zarządu",
    management2: "Mehdi Rezazadeh – Członek Zarządu",
    capitalValue: "5 000 PLN",
    personalHeading: "Transport osobowy i VIP",
    personalDescription:
      "Indywidualne rozwiązania dla menedżerów, specjalistów oraz klientów prywatnych. Sekcja w przygotowaniu.",
    footer:
      "SAEID4061 SP. Z O.O. · Międzynarodowy transport drogowy · Wszystkie prawa zastrzeżone."
  }
};

// برای بقیه زبان‌ها اگر ترجمه جدا نداریم، از انگلیسی استفاده می‌شود
function getStrings(langCode) {
  if (translations[langCode]) return translations[langCode];
  return translations["en"];
}

// مقدار دهی اولیه
const languageSelect = document.getElementById("language-select");
const subtitleText = document.getElementById("subtitle-text");
const mainHeading = document.getElementById("main-heading");
const mainDescription = document.getElementById("main-description");
const tabCompany = document.getElementById("tab-company");
const tabPersonal = document.getElementById("tab-personal");
const personalHeading = document.getElementById("personal-heading");
const personalDescription = document.getElementById("personal-description");
const footerText = document.getElementById("footer-text");

// فیلدهای مشخصات شرکت
const companyNameTitle = document.getElementById("company-name-title");
const labelKrs = document.getElementById("label-krs");
const labelRegon = document.getElementById("label-regon");
const labelNip = document.getElementById("label-nip");
const labelAddress = document.getElementById("label-address");
const labelManagement = document.getElementById("label-management");
const labelCapital = document.getElementById("label-capital");

const valueKrs = document.getElementById("value-krs");
const valueRegon = document.getElementById("value-regon");
const valueNip = document.getElementById("value-nip");
const valueAddressLine1 = document.getElementById("value-address-line1");
const valueAddressLine2 = document.getElementById("value-address-line2");
const valueAddressLine3 = document.getElementById("value-address-line3");
const valueManagementLine1 = document.getElementById("value-management-line1");
const valueManagementLine2 = document.getElementById("value-management-line2");
const valueCapital = document.getElementById("value-capital");

// پر کردن دراپ‌داون زبان‌ها
languageList.forEach((lang) => {
  const option = document.createElement("option");
  option.value = lang.code;
  option.textContent = lang.label;
  languageSelect.appendChild(option);
});

// زبان پیش‌فرض
let currentLang = "fa";

// اعمال ترجمه روی صفحه
function applyLanguage(langCode) {
  currentLang = langCode;
  const t = getStrings(langCode);

  subtitleText.textContent = t.subtitle;
  mainHeading.textContent = t.mainHeading;
  mainDescription.textContent = t.mainDescription;
  tabCompany.textContent = t.tabCompany;
  tabPersonal.textContent = t.tabPersonal;
  personalHeading.textContent = t.personalHeading;
  personalDescription.textContent = t.personalDescription;
  footerText.textContent = t.footer;

  companyNameTitle.textContent = t.companyNameTitle;
  labelKrs.textContent = t.labelKrs + " ";
  labelRegon.textContent = t.labelRegon + " ";
  labelNip.textContent = t.labelNip + " ";
  labelAddress.textContent = t.labelAddress;
  labelManagement.textContent = t.labelManagement;
  labelCapital.textContent = t.labelCapital + " ";

  valueKrs.textContent = t.valueKrs;
  valueRegon.textContent = t.valueRegon;
  valueNip.textContent = t.valueNip;
  valueAddressLine1.textContent = t.address1;
  valueAddressLine2.textContent = t.address2;
  valueAddressLine3.textContent = t.address3;
  valueManagementLine1.textContent = t.management1;
  valueManagementLine2.textContent = t.management2;
  valueCapital.textContent = t.capitalValue;

  // جهت متن برای فارسی و عربی
  if (langCode === "fa" || langCode === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
}

// تغییر زبان از دراپ‌داون
languageSelect.addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

// تغییر زبان با پرچم‌ها
document.querySelectorAll(".flag-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    languageSelect.value = lang;
    applyLanguage(lang);
  });
});

// مدیریت تب‌ها
const tabButtons = document.querySelectorAll(".tab-btn");
const companySection = document.getElementById("company-section");
const personalSection = document.getElementById("personal-section");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.getAttribute("data-tab");
    if (tab === "company") {
      companySection.classList.remove("hidden");
      personalSection.classList.add("hidden");
    } else {
      companySection.classList.add("hidden");
      personalSection.classList.remove("hidden");
    }
  });
});

// راه‌اندازی اولیه
languageSelect.value = currentLang;
applyLanguage(currentLang);
