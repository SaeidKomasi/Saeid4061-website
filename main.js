let currentLang = "fa";

/* ====== ترجمه‌های ثابت رابط کاربری (که کم عوض می‌شوند) ====== */
const t = {
  fa: {
    label_language: "زبان",
    tab_personal: "شخصی",
    tab_company: "شرکت",
    label_whatsapp: "WhatsApp / Phone",
    label_email: "E-mail",
    label_registered_seat: "Registered seat:",
    label_address_reg: "Registration address:",
    label_address_corr: "Correspondence address:"
  },
  en: {
    label_language: "Language",
    tab_personal: "Personal",
    tab_company: "Company",
    label_whatsapp: "WhatsApp / Phone",
    label_email: "E-mail",
    label_registered_seat: "Registered seat:",
    label_address_reg: "Registration address:",
    label_address_corr: "Correspondence address:"
  },
  pl: {
    label_language: "Język",
    tab_personal: "Osobisty",
    tab_company: "Firma",
    label_whatsapp: "WhatsApp / Telefon",
    label_email: "E-mail",
    label_registered_seat: "Siedziba zarejestrowana:",
    label_address_reg: "Adres rejestracyjny:",
    label_address_corr: "Adres do korespondencji:"
  }
};

/* ====== کمک‌تابع برای ادغام محتوای JSON با t ====== */
function mergeContent(extra) {
  Object.keys(extra).forEach((lang) => {
    if (!t[lang]) t[lang] = {};
    Object.assign(t[lang], extra[lang]);
  });
}

/* ====== اعمال ترجمه روی صفحه ====== */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t[currentLang] && t[currentLang][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // جهت صفحه برای فارسی
  if (currentLang === "fa") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }
}

/* ====== بارگذاری محتوای Personal و Company از JSON ====== */
function loadContent() {
  Promise.all([
    fetch("content/personal.json").then((r) => r.json()).catch(() => null),
    fetch("content/company.json").then((r) => r.json()).catch(() => null)
  ]).then(([personalData, companyData]) => {
    if (personalData) mergeContent(personalData);
    if (companyData) mergeContent(companyData);

    // بعد از این که محتوا آمد، ترجمه‌ها را اعمال کن
    applyTranslations();
    setMode("personal");
  });
}

/* ====== سوییچ زبان ====== */
const langSelect = document.getElementById("lang-select");

langSelect.addEventListener("change", (e) => {
  currentLang = e.target.value;
  applyTranslations();
});

/* ====== سوییچ Personal / Company ====== */
const btnPersonal = document.getElementById("btn-personal");
const btnCompany = document.getElementById("btn-company");
const personalSection = document.getElementById("personal-section");
const companySection = document.getElementById("company-section");

function setMode(mode) {
  if (mode === "personal") {
    personalSection.classList.add("active");
    companySection.classList.remove("active");
    btnPersonal.classList.add("active");
    btnCompany.classList.remove("active");
  } else {
    companySection.classList.add("active");
    personalSection.classList.remove("active");
    btnCompany.classList.add("active");
    btnPersonal.classList.remove("active");
  }
}

btnPersonal.addEventListener("click", () => setMode("personal"));
btnCompany.addEventListener("click", () => setMode("company"));

/* ====== مقدار اولیه ====== */

// اول UI ثابت رو نشان بده (لیبل‌ها و دکمه‌ها)
applyTranslations();
// بعد، متن‌های Personal/Company را از JSON بخوان
loadContent();
