// ===== LANGUAGE DATA =====
const languageList = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
    { code: "pl", label: "Polski" },
    // در آینده می‌توانیم زبان‌های دیگر را هم اضافه کنیم
];

const translations = {
    en: {
        dir: "ltr",
        tabCompany: "Company",
        tabCompanyCaption: "Company profile & registration data",
        tabPersonal: "Personal",
        tabPersonalCaption: "Direct personal contact with CEO & Founder",

        companyDetailsTitle: "Company details",
        companyDetailsSubtitle: "Official registration data of the company:",
        labelCompany: "Company",
        labelKRS: "KRS",
        labelNIP: "NIP",
        labelREGON: "REGON",
        labelRegisteredSeat: "Registered seat",
        labelCorrAddress: "Correspondence address",
        labelDirectContact: "Direct contact / 24h for urgent transport inquiries",

        personalTitle: "Personal direct contact",
        personalText: "For direct contact with CEO & Founder, you can use the same WhatsApp, Telegram and Email shown below.",
        langLabel: "Language"
    },
    fa: {
        dir: "rtl",
        tabCompany: "شرکت",
        tabCompanyCaption: "پروفایل و اطلاعات ثبت شرکت",
        tabPersonal: "شخصی",
        tabPersonalCaption: "ارتباط مستقیم با مدیرعامل و بنیان‌گذار",

        companyDetailsTitle: "مشخصات شرکت",
        companyDetailsSubtitle: "اطلاعات رسمی ثبت شرکت:",
        labelCompany: "شرکت",
        labelKRS: "KRS",
        labelNIP: "NIP",
        labelREGON: "REGON",
        labelRegisteredSeat: "آدرس ثبت‌شده",
        labelCorrAddress: "آدرس مکاتبات",
        labelDirectContact: "ارتباط مستقیم / ۲۴ ساعته برای بارهای فوری",

        personalTitle: "ارتباط مستقیم شخصی",
        personalText: "برای ارتباط مستقیم با مدیرعامل و بنیان‌گذار می‌توانید از همان واتساپ، تلگرام و ایمیل زیر استفاده کنید.",
        langLabel: "زبان"
    },
    pl: {
        dir: "ltr",
        tabCompany: "Firma",
        tabCompanyCaption: "Profil firmy i dane rejestrowe",
        tabPersonal: "Osobisty",
        tabPersonalCaption: "Bezpośredni kontakt z CEO & Founder",

        companyDetailsTitle: "Dane firmy",
        companyDetailsSubtitle: "Oficjalne dane rejestracyjne spółki:",
        labelCompany: "Spółka",
        labelKRS: "KRS",
        labelNIP: "NIP",
        labelREGON: "REGON",
        labelRegisteredSeat: "Siedziba zarejestrowana",
        labelCorrAddress: "Adres korespondencyjny",
        labelDirectContact: "Kontakt bezpośredni / 24h dla pilnych zleceń transportowych",

        personalTitle: "Bezpośredni kontakt osobisty",
        personalText: "Do bezpośredniego kontaktu z CEO & Founder możesz użyć tego samego WhatsAppa, Telegramu i Emaila poniżej.",
        langLabel: "Język"
    }
};

// ===== ELEMENTS =====
const pageWrapper = document.getElementById("page");
const companyTab = document.getElementById("companyTab");
const personalTab = document.getElementById("personalTab");
const companySection = document.getElementById("companySection");
const personalSection = document.getElementById("personalSection");
const langSelect = document.getElementById("languageSelect");

// ===== INIT LANGUAGE SELECT =====
function initLanguageSelect() {
    languageList.forEach(lang => {
        const opt = document.createElement("option");
        opt.value = lang.code;
        opt.textContent = lang.label;
        langSelect.appendChild(opt);
    });

    // پیش‌فرض: انگلیسی
    langSelect.value = "en";
    applyLanguage("en");

    langSelect.addEventListener("change", () => {
        const code = langSelect.value;
        applyLanguage(code);
    });
}

// ===== APPLY LANGUAGE =====
function applyLanguage(code) {
    const data = translations[code] || translations.en;

    // جهت صفحه
    if (data.dir === "rtl") {
        document.body.classList.add("rtl");
    } else {
        document.body.classList.remove("rtl");
    }

    // برچسب‌های زبان
    const map = {
        tabCompany: "tabCompany",
        tabCompanyCaption: "tabCompanyCaption",
        tabPersonal: "tabPersonal",
        tabPersonalCaption: "tabPersonalCaption",
        companyDetailsTitle: "companyDetailsTitle",
        companyDetailsSubtitle: "companyDetailsSubtitle",
        labelCompany: "labelCompany",
        labelKRS: "labelKRS",
        labelNIP: "labelNIP",
        labelREGON: "labelREGON",
        labelRegisteredSeat: "labelRegisteredSeat",
        labelCorrAddress: "labelCorrAddress",
        labelDirectContact: "labelDirectContact",
        personalTitle: "personalTitle",
        personalText: "personalText"
    };

    Object.keys(map).forEach(key => {
        const els = document.querySelectorAll(`[data-i18n="${key}"]`);
        els.forEach(el => {
            el.textContent = data[key] || translations.en[key] || "";
        });
    });

    // برچسب "Language"
    const langLabelEl = document.querySelector(".lang-label");
    if (langLabelEl) {
        langLabelEl.textContent = data.langLabel || "Language";
    }
}

// ===== TAB HANDLERS =====
function setCompanyMode() {
    companyTab.classList.add("active");
    personalTab.classList.remove("active");
    companySection.classList.add("active");
    personalSection.classList.remove("active");
    pageWrapper.classList.add("company-mode");
    pageWrapper.classList.remove("personal-mode");
}

function setPersonalMode() {
    personalTab.classList.add("active");
    companyTab.classList.remove("active");
    personalSection.classList.add("active");
    companySection.classList.remove("active");
    pageWrapper.classList.add("personal-mode");
    pageWrapper.classList.remove("company-mode");
}

companyTab.addEventListener("click", setCompanyMode);
personalTab.addEventListener("click", setPersonalMode);

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSelect();
    setCompanyMode(); // شروع روی شرکت
});
