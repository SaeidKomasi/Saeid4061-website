// ====== TRANSLATIONS ======
const translations = {
    en: {
        tagline: "International Road Transport – Europe – Middle East – Central Asia",
        languageLabel: "Language",
        companyTab: "Company",
        personalTab: "Personal",
        tabCaption: "Choose company data or personal contact information.",
        companyDetailsTitle: "Company details",
        companyDetailsSubtitle: "Official registration data of the company:",
        companyNameLabel: "Company",
        registeredAddressLabel: "Registered seat",
        correspondenceAddressLabel: "Correspondence address",
        companyContactNote: "Direct contact / 24h for urgent transport inquiries:",
        personalTitle: "Personal direct contact",
        personalText:
            "For direct contact with CEO & Founder you can use the same WhatsApp, Telegram and Email shown on the right side of the page.",
        whatsappLabel: "WhatsApp / Phone",
        telegramLabel: "Telegram",
        emailLabel: "Email"
    },
    fa: {
        tagline: "حمل‌ونقل بین‌المللی جاده‌ای – اروپا، خاورمیانه، آسیای مرکزی",
        languageLabel: "زبان",
        companyTab: "شرکت",
        personalTab: "شخصی",
        tabCaption: "برای مشاهده اطلاعات شرکت یا ارتباط شخصی، یکی از گزینه‌ها را انتخاب کنید.",
        companyDetailsTitle: "مشخصات شرکت",
        companyDetailsSubtitle: "اطلاعات رسمی ثبت شرکت:",
        companyNameLabel: "نام شرکت",
        registeredAddressLabel: "نشانی ثبت‌شده شرکت",
        correspondenceAddressLabel: "نشانی مکاتبات",
        companyContactNote: "ارتباط مستقیم / ۲۴ ساعته برای حمل‌های فوری (دکمه‌های واتساپ، تلگرام و ایمیل در پایین سمت راست صفحه):",
        personalTitle: "ارتباط مستقیم شخصی",
        personalText:
            "برای ارتباط مستقیم با مدیرعامل و مؤسس، می‌توانید از همان واتساپ، تلگرام و ایمیل در پایینِ سمت راست صفحه استفاده کنید.",
        whatsappLabel: "واتساپ / تلفن",
        telegramLabel: "تلگرام",
        emailLabel: "ایمیل"
    },
    pl: {
        tagline: "Międzynarodowy transport drogowy – Europa – Bliski Wschód – Azja Centralna",
        languageLabel: "Język",
        companyTab: "Firma",
        personalTab: "Osobiste",
        tabCaption: "Wybierz dane firmy lub prywatne dane kontaktowe.",
        companyDetailsTitle: "Dane firmy",
        companyDetailsSubtitle: "Oficjalne dane rejestracyjne spółki:",
        companyNameLabel: "Spółka",
        registeredAddressLabel: "Siedziba zarejestrowana",
        correspondenceAddressLabel: "Adres do korespondencji",
        companyContactNote: "Kontakt bezpośredni / 24h w pilnych sprawach transportowych (przyciski WhatsApp, Telegram i e-mail w prawym dolnym rogu):",
        personalTitle: "Kontakt bezpośredni – prywatny",
        personalText:
            "Do bezpośredniego kontaktu z CEO & Founder możesz użyć tych samych przycisków WhatsApp, Telegram i e-mail w prawym dolnym rogu strony.",
        whatsappLabel: "WhatsApp / Telefon",
        telegramLabel: "Telegram",
        emailLabel: "E-mail"
    }
};

// RTL languages
const rtlLanguages = ["fa", "ar", "ur"];

function applyLanguage(lang) {
    const dict = translations[lang] || translations["en"];
    document.documentElement.lang = lang;

    if (rtlLanguages.includes(lang)) {
        document.body.classList.add("rtl");
    } else {
        document.body.classList.remove("rtl");
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const value =
            (dict && dict[key]) ||
            (translations["en"] && translations["en"][key]) ||
            "";
        el.textContent = value;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language-select");

    // default language
    const defaultLang = "fa";
    languageSelect.value = defaultLang;
    applyLanguage(defaultLang);

    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        applyLanguage(lang);
    });

    // ====== TAB SWITCHING ======
    const companyTabBtn = document.getElementById("companyTab");
    const personalTabBtn = document.getElementById("personalTab");
    const companySection = document.getElementById("company-section");
    const personalSection = document.getElementById("personal-section");

    function activateTab(tab) {
        if (tab === "company") {
            companyTabBtn.classList.add("active");
            personalTabBtn.classList.remove("active");
            companySection.classList.add("active");
            personalSection.classList.remove("active");
        } else {
            personalTabBtn.classList.add("active");
            companyTabBtn.classList.remove("active");
            personalSection.classList.add("active");
            companySection.classList.remove("active");
        }
    }

    companyTabBtn.addEventListener("click", () => activateTab("company"));
    personalTabBtn.addEventListener("click", () => activateTab("personal"));
});
