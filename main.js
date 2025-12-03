document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const languageSelect = document.getElementById("languageSelect");
    const btnPersonal   = document.getElementById("btn-personal");
    const btnCompany    = document.getElementById("btn-company");

    const personalCard  = document.getElementById("personal-card");
    const companyCard   = document.getElementById("company-card");

    const personalTitle   = document.getElementById("personal-title");
    const personalContent = document.getElementById("personal-content");
    const companyTitle    = document.getElementById("company-title");
    const companyContent  = document.getElementById("company-content");

    const labelLanguage  = document.getElementById("label-language");
    const whatsappLabel  = document.getElementById("whatsapp-label");
    const telegramLabel  = document.getElementById("telegram-label");
    const emailLabel     = document.getElementById("email-label");
    const footerText     = document.getElementById("footer-text");

    const btnWhatsapp = document.getElementById("btn-whatsapp");
    const btnTelegram = document.getElementById("btn-telegram");
    const btnEmail    = document.getElementById("btn-email");

    // لینک‌های تماس
    btnWhatsapp.addEventListener("click", () => {
        window.location.href = "https://wa.me/48737004848";
    });
    btnTelegram.addEventListener("click", () => {
        window.location.href = "https://t.me/Saeid4061";
    });
    btnEmail.addEventListener("click", () => {
        window.location.href = "mailto:saeedkomasy@gmail.com";
    });

    // متون سه‌زبانه
    const translations = {
        en: {
            direction: "ltr",
            languageLabel: "Language",
            modePersonal: "Personal",
            modeCompany: "Company",

            personalTitle: "Personal contact",
            personalHtml: `
                For direct contact with CEO & Founder you can use the same WhatsApp, Telegram and Email shown below.
                <br/><br/>
                Please feel free to contact in English, Polish, Farsi or Turkish.
            `,

            companyTitle: "Company details",
            companyHtml: `
                <strong>Company:</strong> SAEID4061 Sp. z o.o.<br/>
                <strong>KRS:</strong> 0001065392<br/>
                <strong>NIP:</strong> 5372677546<br/>
                <strong>REGON:</strong> 526744160<br/><br/>
                <strong>Registered seat & Correspondence address:</strong><br/>
                Orzechowa 32/1,<br/>
                21-500 Biała Podlaska, Poland
            `,

            whatsappLabel: "WhatsApp / Phone",
            telegramLabel: "Telegram",
            emailLabel: "Email",
            footer: "SAEID KOMASI – GREY LION 2025 ©"
        },
        fa: {
            direction: "rtl",
            languageLabel: "زبان",
            modePersonal: "شخصی",
            modeCompany: "شرکت",

            personalTitle: "ارتباط مستقیم شخصی",
            personalHtml: `
                برای ارتباط مستقیم با مدیرعامل و موسس می‌توانید از همین شماره واتساپ،
                آیدی تلگرام و ایمیل زیر استفاده کنید.
                <br/><br/>
                لطفاً آزادانه به فارسی، انگلیسی، لهستانی یا ترکی پیام بدهید.
            `,

            companyTitle: "مشخصات شرکت",
            companyHtml: `
                <strong>نام شرکت:</strong> SAEID4061 Sp. z o.o.<br/>
                <strong>شماره KRS:</strong> 0001065392<br/>
                <strong>شماره NIP:</strong> 5372677546<br/>
                <strong>شماره REGON:</strong> 526744160<br/><br/>
                <strong>آدرس ثبت‌شده و مکاتبات شرکت:</strong><br/>
                Orzechowa 32/1,<br/>
                21-500 Biała Podlaska, Poland
            `,

            whatsappLabel: "واتساپ / تلفن",
            telegramLabel: "تلگرام",
            emailLabel: "ایمیل",
            footer: "SAEID KOMASI – GREY LION 2025 ©"
        },
        pl: {
            direction: "ltr",
            languageLabel: "Język",
            modePersonal: "Osobisty",
            modeCompany: "Firma",

            personalTitle: "Kontakt osobisty",
            personalHtml: `
                W celu bezpośredniego kontaktu z CEO & Founder można użyć tego samego numeru WhatsApp,
                konta Telegram oraz adresu e-mail podanych poniżej.
                <br/><br/>
                Możliwa komunikacja w języku polskim, angielskim, perskim i tureckim.
            `,

            companyTitle: "Dane spółki",
            companyHtml: `
                <strong>Nazwa spółki:</strong> SAEID4061 Sp. z o.o.<br/>
                <strong>KRS:</strong> 0001065392<br/>
                <strong>NIP:</strong> 5372677546<br/>
                <strong>REGON:</strong> 526744160<br/><br/>
                <strong>Siedziba zarejestrowana i adres korespondencyjny:</strong><br/>
                Orzechowa 32/1,<br/>
                21-500 Biała Podlaska, Polska
            `,

            whatsappLabel: "WhatsApp / Telefon",
            telegramLabel: "Telegram",
            emailLabel: "E-mail",
            footer: "SAEID KOMASI – GREY LION 2025 ©"
        }
    };

    function applyLanguage(lang) {
        const t = translations[lang] || translations.fa;

        if (t.direction === "rtl") {
            body.classList.add("rtl");
        } else {
            body.classList.remove("rtl");
        }

        labelLanguage.textContent = t.languageLabel;
        btnPersonal.textContent   = t.modePersonal;
        btnCompany.textContent    = t.modeCompany;

        personalTitle.textContent = t.personalTitle;
        personalContent.innerHTML = t.personalHtml;

        companyTitle.textContent  = t.companyTitle;
        companyContent.innerHTML  = t.companyHtml;

        whatsappLabel.textContent = t.whatsappLabel;
        telegramLabel.textContent = t.telegramLabel;
        emailLabel.textContent    = t.emailLabel;
        footerText.textContent    = t.footer;
    }

    function setMode(mode) {
        if (mode === "personal") {
            personalCard.classList.add("visible");
            companyCard.classList.remove("visible");
            btnPersonal.classList.add("active");
            btnCompany.classList.remove("active");
        } else {
            companyCard.classList.add("visible");
            personalCard.classList.remove("visible");
            btnCompany.classList.add("active");
            btnPersonal.classList.remove("active");
        }
    }

    // لیسنرها
    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        applyLanguage(lang);
        document.documentElement.lang = lang === "fa" ? "fa" : lang;
    });

    btnPersonal.addEventListener("click", () => setMode("personal"));
    btnCompany.addEventListener("click", () => setMode("company"));

    // مقدار اولیه: فارسی + حالت شرکت
    languageSelect.value = "fa";
    applyLanguage("fa");
    setMode("company");
});
