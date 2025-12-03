// ===== COMPANY + CONTACT DATA (ثابت) =====
const COMPANY = {
    name: "SAEID4061 Sp. z o.o.",
    krs: "0001065392",
    nip: "5372677546",
    regon: "526744160",
    registered: "Orzechowa 32/1, 21-500 Biała Podlaska, Poland",
    correspondence: "Orzechowa 32/1, 21-500 Biała Podlaska, Poland"
};

const CONTACT = {
    phoneDisplay: "+48 881 004 737",
    phoneLink: "tel:+48881004737",
    whatsappLink: "https://wa.me/48881004737",
    telegramUser: "@Saeid4061",
    telegramLink: "https://t.me/Saeid4061",
    email: "saeedkomasy@gmail.com",
    emailLink: "mailto:saeedkomasy@gmail.com"
};

// ===== 23 LANGUAGES LIST =====
const languageList = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
    { code: "pl", label: "Polski" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "ru", label: "Русский" },
    { code: "tr", label: "Türkçe" },
    { code: "ar", label: "العربية" },
    { code: "ku", label: "Kurdî" },
    { code: "nl", label: "Nederlands" },
    { code: "cs", label: "Čeština" },
    { code: "sk", label: "Slovenčina" },
    { code: "hu", label: "Magyar" },
    { code: "ro", label: "Română" },
    { code: "bg", label: "Български" },
    { code: "el", label: "Ελληνικά" },
    { code: "uk", label: "Українська" },
    { code: "hi", label: "हिन्दी" },
    { code: "ur", label: "اردو" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" }
];

// ===== TRANSLATIONS (کامل برای fa / en / pl) =====
const translations = {
    en: {
        languageLabel: "Language",
        companyTab: "Company",
        personalTab: "Personal",
        companyTitle: "Company details",
        companySubtitle: "Official registration data of the company:",
        companyNameLabel: "Company",
        krsLabel: "KRS",
        nipLabel: "NIP",
        regonLabel: "REGON",
        registeredLabel: "Registered seat",
        correspondenceLabel: "Correspondence address",
        personalTitle: "Personal contact",
        personalSubtitle:
            "For direct contact with CEO & Founder you can use the same WhatsApp, Telegram and Email shown below.",
        contactTitle: "Direct contact / 24h for urgent transport inquiries",
        whatsappLabel: "WhatsApp / Phone",
        telegramLabel: "Telegram",
        emailLabel: "Email"
    },
    fa: {
        languageLabel: "زبان",
        companyTab: "شرکت",
        personalTab: "شخصی",
        companyTitle: "مشخصات رسمی شرکت",
        companySubtitle: "اطلاعات ثبتی رسمی شرکت:",
        companyNameLabel: "نام شرکت",
        krsLabel: "شماره KRS",
        nipLabel: "شماره NIP (کد مالیاتی)",
        regonLabel: "شماره REGON",
        registeredLabel: "آدرس ثبت‌شده شرکت",
        correspondenceLabel: "آدرس مکاتبات",
        personalTitle: "ارتباط مستقیم شخصی",
        personalSubtitle:
            "برای ارتباط مستقیم با مدیرعامل و مؤسس می‌توانید از همان واتساپ، تلگرام و ایمیلی که در پایین نمایش داده شده استفاده کنید.",
        contactTitle: "ارتباط مستقیم / ۲۴ ساعته برای حمل‌ونقل‌های فوری",
        whatsappLabel: "واتساپ / تلفن",
        telegramLabel: "تلگرام",
        emailLabel: "ایمیل"
    },
    pl: {
        languageLabel: "Język",
        companyTab: "Firma",
        personalTab: "Osobisty",
        companyTitle: "Dane spółki",
        companySubtitle: "Oficjalne dane rejestrowe spółki:",
        companyNameLabel: "Nazwa spółki",
        krsLabel: "KRS",
        nipLabel: "NIP",
        regonLabel: "REGON",
        registeredLabel: "Siedziba zarejestrowana",
        correspondenceLabel: "Adres do korespondencji",
        personalTitle: "Kontakt osobisty",
        personalSubtitle:
            "Do bezpośredniego kontaktu z CEO & Founder możesz użyć tego samego WhatsAppa, Telegramu i Emaila jak poniżej.",
        contactTitle: "Kontakt bezpośredni / 24h dla pilnych zleceń transportowych",
        whatsappLabel: "WhatsApp / Telefon",
        telegramLabel: "Telegram",
        emailLabel: "Email"
    }
};

// ===== HELPER: get texts with fallback to EN =====
function t(lang, key) {
    const langPack = translations[lang] || translations["en"];
    return langPack[key] || translations["en"][key] || "";
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const select = document.getElementById("language-select");
    const btnCompany = document.getElementById("btn-company");
    const btnPersonal = document.getElementById("btn-personal");
    const companySection = document.getElementById("company-section");
    const personalSection = document.getElementById("personal-section");

    // Fill language dropdown
    languageList.forEach(lang => {
        const opt = document.createElement("option");
        opt.value = lang.code;
        opt.textContent = lang.label;
        select.appendChild(opt);
    });

    // default language
    let currentLang = "fa"; // شروع با فارسی
    select.value = currentLang;
    applyLanguage(currentLang);

    // toggle RTL for some languages
    function updateDirection(lang) {
        const rtlLangs = ["fa", "ar", "ur"];
        if (rtlLangs.includes(lang)) {
            body.classList.add("rtl");
        } else {
            body.classList.remove("rtl");
        }
    }

    updateDirection(currentLang);

    // language change
    select.addEventListener("change", () => {
        currentLang = select.value;
        applyLanguage(currentLang);
        updateDirection(currentLang);
    });

    // mode toggle
    function setMode(mode) {
        if (mode === "company") {
            companySection.classList.remove("hidden");
            personalSection.classList.add("hidden");
            btnCompany.classList.add("active");
            btnPersonal.classList.remove("active");
        } else {
            personalSection.classList.remove("hidden");
            companySection.classList.add("hidden");
            btnPersonal.classList.add("active");
            btnCompany.classList.remove("active");
        }
    }

    btnCompany.addEventListener("click", () => setMode("company"));
    btnPersonal.addEventListener("click", () => setMode("personal"));

    // initial mode
    setMode("company");

    // fill static company & contact data
    document.getElementById("company-name").textContent = COMPANY.name;
    document.getElementById("company-krs").textContent = COMPANY.krs;
    document.getElementById("company-nip").textContent = COMPANY.nip;
    document.getElementById("company-regon").textContent = COMPANY.regon;
    document.getElementById("company-registered").textContent = COMPANY.registered;
    document.getElementById("company-correspondence").textContent = COMPANY.correspondence;

    document.getElementById("whatsapp-number").textContent = CONTACT.phoneDisplay;
    document.getElementById("telegram-user").textContent = CONTACT.telegramUser;
    document.getElementById("email-address").textContent = CONTACT.email;

    const btnWhats = document.getElementById("btn-whatsapp");
    const btnTel = document.getElementById("btn-whatsapp"); // همان دکمه، لینک واتساپ و تلفن
    const btnTg = document.getElementById("btn-telegram");
    const btnMail = document.getElementById("btn-email");

    btnWhats.href = CONTACT.whatsappLink;
    btnTg.href = CONTACT.telegramLink;
    btnMail.href = CONTACT.emailLink;

    // ===== apply texts for given language =====
    function applyLanguage(lang) {
        const keys = [
            "languageLabel",
            "companyTab",
            "personalTab",
            "companyTitle",
            "companySubtitle",
            "companyNameLabel",
            "krsLabel",
            "nipLabel",
            "regonLabel",
            "registeredLabel",
            "correspondenceLabel",
            "personalTitle",
            "personalSubtitle",
            "contactTitle",
            "whatsappLabel",
            "telegramLabel",
            "emailLabel"
        ];

        keys.forEach(key => {
            const selector = `[data-i18n="${key}"]`;
            document.querySelectorAll(selector).forEach(el => {
                el.textContent = t(lang, key);
            });
        });
    }
});
