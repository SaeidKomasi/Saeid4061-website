document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".page-wrapper");
    const body = document.body;

    // Tabs
    const companyTabBtn = document.getElementById("company-tab");
    const personalTabBtn = document.getElementById("personal-tab");
    const companySection = document.getElementById("company-section");
    const personalSection = document.getElementById("personal-section");

    // Language
    const languageSelect = document.getElementById("language-select");

    // i18n map – متن‌ها برای fa / en / pl
    const translations = {
        en: {
            languageLabel: "Language",
            tabCompany: "Company",
            tabPersonal: "Personal",
            companyDetailsTitle: "Company details",
            companyDetailsSubtitle: "Official registration data of the company:",
            fieldCompany: "Company",
            fieldRegistered: "Registered seat",
            fieldCorrespondence: "Correspondence address",
            companyFooter: "Direct contact / 24h for urgent transport inquiries:",
            personalTitle: "Personal direct contact",
            personalSubtitle:
                "For direct contact with CEO & Founder, you can use the same WhatsApp, Telegram and Email shown below."
        },
        fa: {
            languageLabel: "زبان",
            tabCompany: "شرکت",
            tabPersonal: "شخصی",
            companyDetailsTitle: "مشخصات شرکت",
            companyDetailsSubtitle: "اطلاعات رسمی ثبت شرکت:",
            fieldCompany: "شرکت",
            fieldRegistered: "آدرس ثبت شرکت",
            fieldCorrespondence: "آدرس مکاتبات",
            companyFooter:
                "راه ارتباط مستقیم / ۲۴ ساعته برای درخواست حمل‌های فوری:",
            personalTitle: "ارتباط مستقیم شخصی",
            personalSubtitle:
                "برای ارتباط مستقیم با مدیرعامل و مؤسس، می‌توانید از همان واتساپ، تلگرام و ایمیلی که در پایین نمایش داده شده استفاده کنید."
        },
        pl: {
            languageLabel: "Język",
            tabCompany: "Firma",
            tabPersonal: "Osobisty",
            companyDetailsTitle: "Dane firmy",
            companyDetailsSubtitle:
                "Oficjalne dane rejestracyjne spółki:",
            fieldCompany: "Spółka",
            fieldRegistered: "Siedziba zarejestrowana",
            fieldCorrespondence: "Adres do korespondencji",
            companyFooter:
                "Kontakt bezpośredni / 24h w pilnych sprawach transportowych:",
            personalTitle: "Bezpośredni kontakt osobisty",
            personalSubtitle:
                "Do bezpośredniego kontaktu z CEO & Founder możesz używać tego samego numeru WhatsApp, Telegramu i e-maila podanego poniżej."
        }
    };

    function getLangKey(code) {
        if (code === "fa") return "fa";
        if (code === "pl") return "pl";
        // سایر زبان‌ها متن انگلیسی را می‌گیرند
        return "en";
    }

    function applyTranslations(langCode) {
        const key = getLangKey(langCode);
        const dict = translations[key];

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const token = el.getAttribute("data-i18n");
            if (dict[token]) {
                el.textContent = dict[token];
            }
        });

        // RTL فقط برای فارسی
        if (langCode === "fa") {
            body.classList.add("rtl");
        } else {
            body.classList.remove("rtl");
        }
    }

    function activateTab(tab) {
        if (tab === "company") {
            companyTabBtn.classList.add("active");
            personalTabBtn.classList.remove("active");
            companySection.classList.add("active");
            personalSection.classList.remove("active");

            // بک‌گراند روز
            wrapper.classList.remove("night-bg");
        } else {
            personalTabBtn.classList.add("active");
            companyTabBtn.classList.remove("active");
            personalSection.classList.add("active");
            companySection.classList.remove("active");

            // بک‌گراند شب
            wrapper.classList.add("night-bg");
        }
    }

    // رویداد تب‌ها
    companyTabBtn.addEventListener("click", () => activateTab("company"));
    personalTabBtn.addEventListener("click", () => activateTab("personal"));

    // رویداد زبان
    languageSelect.addEventListener("change", (e) => {
        applyTranslations(e.target.value);
    });

    // مقدار اولیه
    applyTranslations(languageSelect.value || "en");
    activateTab("company");
});
