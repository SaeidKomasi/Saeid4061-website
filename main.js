// لیست زبان‌ها
const languageList = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "nl", label: "Nederlands" },
    { code: "de-at", label: "Deutsch (AT)" },
    { code: "hu", label: "Magyar" },
    { code: "cs", label: "Čeština" },
    { code: "pl", label: "Polski" },
    { code: "fr", label: "Français" },
    { code: "ro", label: "Română" },
    { code: "tr", label: "Türkçe" },
    { code: "mn", label: "Монгол" },
    { code: "ru", label: "Русский" },
    { code: "ar", label: "العربية" },
    { code: "ka", label: "ქართული" },
    { code: "az", label: "Azərbaycanca" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" },
    { code: "tk", label: "Türkmençe" },
    { code: "tg", label: "Тоҷикӣ" },
    { code: "kk", label: "Қазақша" }
];

// ترجمه‌ها
const translations = {
    en: {
        languageLabel: "Language",
        personalTab: "Personal",
        companyTab: "Company",
        emailLabel: "Email",
        telegramLabel: "Telegram",
        phoneLabel: "WhatsApp / Phone",
        personalTitle: "Personal contact",
        personalText:
            "For direct contact with CEO & Founder you can use the same email, Telegram and WhatsApp number shown below.",
        companyTitle: "Company information",
        companyNameLabel: "Company",
        registeredSeatLabel: "Registered seat",
        correspondenceLabel: "Correspondence address",
        companyContactIntro:
            "For fast contact with the company you can also use the WhatsApp, Telegram and email below."
    },
    fa: {
        languageLabel: "زبان",
        personalTab: "شخصی",
        companyTab: "شرکت",
        emailLabel: "ایمیل",
        telegramLabel: "تلگرام",
        phoneLabel: "واتساپ / تلفن",
        personalTitle: "ارتباط مستقیم شخصی",
        personalText:
            "برای ارتباط مستقیم با مدیرعامل می‌توانید از همین ایمیل، تلگرام و شماره واتساپ در پایین صفحه استفاده کنید.",
        companyTitle: "اطلاعات شرکت",
        companyNameLabel: "شرکت",
        registeredSeatLabel: "آدرس ثبت‌شده شرکت",
        correspondenceLabel: "آدرس مکاتبات",
        companyContactIntro:
            "برای تماس سریع با شرکت می‌توانید از واتساپ، تلگرام و ایمیل زیر استفاده کنید."
    },
    pl: {
        languageLabel: "Język",
        personalTab: "Osobisty",
        companyTab: "Firma",
        emailLabel: "E-mail",
        telegramLabel: "Telegram",
        phoneLabel: "WhatsApp / Telefon",
        personalTitle: "Kontakt osobisty",
        personalText:
            "W celu bezpośredniego kontaktu z CEO & Founder można użyć tego samego adresu e-mail, Telegramu oraz numeru WhatsApp podanych poniżej.",
        companyTitle: "Dane spółki",
        companyNameLabel: "Spółka",
        registeredSeatLabel: "Siedziba zarejestrowana",
        correspondenceLabel: "Adres do korespondencji",
        companyContactIntro:
            "W celu szybkiego kontaktu ze spółką można skorzystać z WhatsAppa, Telegramu oraz e-maila poniżej."
    }
};

// بقیه زبان‌ها از انگلیسی استفاده کنند
[
    "es","de","nl","de-at","hu","cs","fr","ro","tr",
    "mn","ru","ar","ka","az","zh","ja","tk","tg","kk"
].forEach(code => {
    if (!translations[code]) {
        translations[code] = translations.en;
    }
});

function isRTL(lang) {
    return lang === "fa" || lang === "ar";
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.body.setAttribute("dir", isRTL(lang) ? "rtl" : "ltr");

    const keys = [
        "languageLabel",
        "personalTab",
        "companyTab",
        "emailLabel",
        "telegramLabel",
        "phoneLabel",
        "personalTitle",
        "personalText",
        "companyTitle",
        "companyNameLabel",
        "registeredSeatLabel",
        "correspondenceLabel",
        "companyContactIntro"
    ];

    keys.forEach(key => {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el && t[key]) {
            el.textContent = t[key];
        }
    });
}

function initLanguageSelect() {
    const select = document.getElementById("languageSelect");
    if (!select) return;

    languageList.forEach(lang => {
        const opt = document.createElement("option");
        opt.value = lang.code;
        opt.textContent = lang.label;
        select.appendChild(opt);
    });

    select.value = "fa";
    applyTranslations("fa");

    select.addEventListener("change", () => {
        applyTranslations(select.value);
    });
}

function initTabs() {
    const personalTab = document.getElementById("personalTab");
    const companyTab = document.getElementById("companyTab");
    const personalSection = document.getElementById("personalSection");
    const companySection = document.getElementById("companySection");

    if (!personalTab || !companyTab || !personalSection || !companySection) return;

    function activate(tab) {
        if (tab === "personal") {
            personalTab.classList.add("active");
            companyTab.classList.remove("active");
            personalSection.classList.remove("hidden");
            companySection.classList.add("hidden");
        } else {
            companyTab.classList.add("active");
            personalTab.classList.remove("active");
            companySection.classList.remove("hidden");
            personalSection.classList.add("hidden");
        }
    }

    personalTab.addEventListener("click", () => activate("personal"));
    companyTab.addEventListener("click", () => activate("company"));

    // پیش‌فرض: Company
    activate("company");
}

function initYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguageSelect();
    initTabs();
    initYear();
});
