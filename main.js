
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
    { code: "az", label: "Azərbaycan" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" },
    { code: "tk", label: "Türkmençe" },
    { code: "tg", label: "Тоҷикӣ" },
    { code: "kk", label: "Қазақша" }
];

// ===== ترجمه‌ها =====
// برای ساده شدن، متن کامل فقط برای فارسی، انگلیسی و لهستانی است
// بقیه زبان‌ها اگر ترجمه نداشته باشند، خودکار از انگلیسی استفاده می‌کنند
const translations = {
    en: {
        tagline: "International Road Transport – Europe • Middle East • Central Asia",
        language_label: "Language",
        tab_personal: "Personal",
        tab_company: "Company",
        personal_title: "Personal Contact",
        personal_desc: "For direct contact with the CEO & Founder, you can use the same email, Telegram and WhatsApp shown in the company section.",
        company_header: "Company details",
        company_label: "Company",
        krs_label: "KRS",
        regon_label: "REGON",
        nip_label: "NIP",
        registered_seat_label: "Registered seat",
        correspondence_address_label: "Correspondence address",
        email_label: "Email",
        telegram_label: "Telegram",
        whatsapp_label: "WhatsApp"
    },
    fa: {
        tagline: "حمل‌ونقل بین‌المللی جاده‌ای – اروپا • خاورمیانه • آسیای مرکزی",
        language_label: "زبان",
        tab_personal: "شخصی",
        tab_company: "شرکت",
        personal_title: "تماس شخصی",
        personal_desc: "برای ارتباط مستقیم با مدیرعامل و بنیان‌گذار، می‌توانید از همان ایمیل، تلگرام و واتساپ بخش شرکت استفاده کنید.",
        company_header: "مشخصات رسمی شرکت",
        company_label: "شرکت",
        krs_label: "شماره KRS",
        regon_label: "شماره REGON",
        nip_label: "شماره NIP",
        registered_seat_label: "نشانی ثبت‌شده شرکت",
        correspondence_address_label: "نشانی مکاتبات",
        email_label: "ایمیل",
        telegram_label: "تلگرام",
        whatsapp_label: "واتساپ"
    },
    pl: {
        tagline: "Międzynarodowy transport drogowy – Europa • Bliski Wschód • Azja Centralna",
        language_label: "Język",
        tab_personal: "Osobiste",
        tab_company: "Firma",
        personal_title: "Kontakt osobisty",
        personal_desc: "Do bezpośredniego kontaktu z CEO & Founder możesz użyć tego samego e-maila, Telegrama i WhatsAppa jak w sekcji firmowej.",
        company_header: "Dane spółki",
        company_label: "Spółka",
        krs_label: "KRS",
        regon_label: "REGON",
        nip_label: "NIP",
        registered_seat_label: "Siedziba rejestrowa",
        correspondence_address_label: "Adres do korespondencji",
        email_label: "E-mail",
        telegram_label: "Telegram",
        whatsapp_label: "WhatsApp"
    }
};

// ===== کمکی: گرفتن ترجمه با fallback =====
function t(key, lang) {
    const langData = translations[lang] || {};
    const enData = translations["en"] || {};
    return langData[key] || enData[key] || "";
}

// ===== تنظیم زبان روی صفحه =====
function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(key, lang);
    });
}

// ===== پر کردن منوی زبان =====
function initLanguageSelect() {
    const select = document.getElementById("language-select");
    if (!select) return;

    // پاک‌سازی
    select.innerHTML = "";

    languageList.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.code;
        opt.textContent = item.label;
        select.appendChild(opt);
    });

    // زبان پیش‌فرض: localStorage یا مرورگر
    let defaultLang =
        localStorage.getItem("saeid4061_lang") ||
        (navigator.language || "en").toLowerCase();

    // مچ کردن کد
    const found = languageList.find(l => defaultLang.startsWith(l.code));
    if (found) {
        defaultLang = found.code;
    } else {
        defaultLang = "en";
    }

    select.value = defaultLang;
    applyLanguage(defaultLang);

    select.addEventListener("change", () => {
        const lang = select.value;
        localStorage.setItem("saeid4061_lang", lang);
        applyLanguage(lang);
    });
}

// ===== تب‌های Personal / Company =====
function initTabs() {
    const personalBtn = document.getElementById("personal-tab");
    const companyBtn = document.getElementById("company-tab");
    const personalSection = document.getElementById("personal-section");
    const companySection = document.getElementById("company-section");

    if (!personalBtn || !companyBtn || !personalSection || !companySection) return;

    const showSection = (target) => {
        if (target === "personal") {
            personalSection.classList.add("visible");
            companySection.classList.remove("visible");
            personalBtn.classList.add("active");
            companyBtn.classList.remove("active");
        } else {
            companySection.classList.add("visible");
            personalSection.classList.remove("visible");
            companyBtn.classList.add("active");
            personalBtn.classList.remove("active");
        }
    };

    personalBtn.addEventListener("click", () => showSection("personal"));
    companyBtn.addEventListener("click", () => showSection("company"));

    // پیش‌فرض: Company (چون مهم‌تره)
    showSection("company");
}

// ===== بک‌گراند روز / شب =====
function setBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 18) {
        body.style.backgroundImage = "url('assets/bg-day.jpg')";
        body.style.backgroundColor = "#0b3d91";
    } else {
        body.style.backgroundImage = "url('assets/bg-night.jpg')";
        body.style.backgroundColor = "#001528";
    }
}

// ===== شروع =====
document.addEventListener("DOMContentLoaded", () => {
    setBackground();
    setInterval(setBackground, 60 * 60 * 1000); // هر ۱ ساعت یک‌بار

    initLanguageSelect();
    initTabs();
});
