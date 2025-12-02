// ===== LANGUAGE LIST =====
const languageList = [
  { code: "fa", label: "فارسی" }, // Persian (default)
  { code: "en", label: "English" }, // English
  { code: "es", label: "Español" }, // Spanish
  { code: "de", label: "Deutsch" }, // German
  { code: "nl", label: "Nederlands" }, // Dutch
  { code: "de-at", label: "Deutsch (AT)" }, // Austrian German
  { code: "hu", label: "Magyar" }, // Hungarian
  { code: "cs", label: "Čeština" }, // Czech
  { code: "pl", label: "Polski" }, // Polish
  { code: "fr", label: "Français" }, // French
  { code: "ro", label: "Română" }, // Romanian
  { code: "tr", label: "Türkçe" }, // Turkish
  { code: "mn", label: "Монгол" }, // Mongolian
  { code: "ru", label: "Русский" }, // Russian
  { code: "ar", label: "العربية" }, // Arabic
  { code: "ka", label: "ქართული" }, // Georgian
  { code: "az", label: "Azərbaycanca" }, // Azeri
  { code: "zh", label: "中文" }, // Chinese
  { code: "ja", label: "日本語" }, // Japanese
  { code: "tk", label: "Türkmençe" }, // Turkmen
  { code: "tg", label: "Тоҷикӣ" }, // Tajik
  { code: "kk", label: "Қазақша" } // Kazakh
];

// ===== TRANSLATIONS =====
// برای بعضی زبان‌ها ترجمه کامل گذاشتیم.
// بقیه اگر نباشند، به انگلیسی برمی‌گردند.
const translations = {
  fa: {
    // Company mode
    heroTitleCompany: "حمل‌ونقل بین‌المللی جاده‌ای",
    heroSubtitleCompany: "اروپا • خاورمیانه • آسیای مرکزی",
    heroTextCompany:
      "شرکت حمل‌ونقل ثبت‌شده در لهستان با تمرکز بر حمل بار جاده‌ای ایمن و قابل‌اعتماد در کریدورهای اروپا – خاورمیانه – آسیای مرکزی.",
    companyInfoTitle: "اطلاعات شرکت",
    companyInfoItems: [
      "نام شرکت: SAEID4061 Sp. z o.o.",
      "ثبت در KRS: 0001065392 (جمهوری لهستان)",
      "حوزه فعالیت: حمل‌ونقل بین‌المللی جاده‌ای کالا",
      "مسیرها: اروپا، خاورمیانه، آسیای مرکزی",
      "مدیریت: SAEID KOMASI – CEO & Founder"
    ],

    // Personal mode
    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Founder – Grey Lion",
    heroTextPersonal:
      "بنیان‌گذار و مدیرعامل شرکت SAEID4061 Sp. z o.o. با تمرکز بر حمل‌ونقل بین‌المللی، توسعه سیستم‌های مکانیکی نوآورانه و پروژه‌های بلندمدت در حوزه انرژی.",

    contactTitle: "تماس مستقیم",
    contactWhatsAppLabel: "واتساپ (پاسخ مستقیم راننده / مدیرعامل)",
    contactTelegramLabel: "تلگرام (هماهنگی بار و اسناد)",
    contactEmailLabel: "ایمیل رسمی شرکت",

    legalTitle: "اطلاعات رسمی ثبت‌شده در KRS"
  },

  en: {
    heroTitleCompany: "International Road Transport",
    heroSubtitleCompany: "Europe • Middle East • Central Asia",
    heroTextCompany:
      "Polish-registered transport company focused on safe and reliable international road freight along the Europe – Middle East – Central Asia corridors.",
    companyInfoTitle: "Company information",
    companyInfoItems: [
      "Company name: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (Republic of Poland)",
      "Scope: International road transport of goods",
      "Routes: Europe, Middle East, Central Asia",
      "Management: SAEID KOMASI – CEO & Founder"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Founder – Grey Lion",
    heroTextPersonal:
      "Founder and CEO of SAEID4061 Sp. z o.o., focused on international transport, mechanical innovation and long-term energy projects.",

    contactTitle: "Direct contact",
    contactWhatsAppLabel: "WhatsApp (direct line to CEO / driver)",
    contactTelegramLabel: "Telegram (transport & documents)",
    contactEmailLabel: "Official company e-mail",

    legalTitle: "Official company data (KRS)"
  },

  pl: {
    heroTitleCompany: "Międzynarodowy transport drogowy",
    heroSubtitleCompany: "Europa • Bliski Wschód • Azja Centralna",
    heroTextCompany:
      "Polska spółka transportowa koncentrująca się na bezpiecznym i rzetelnym transporcie drogowym towarów na korytarzach Europa – Bliski Wschód – Azja Centralna.",
    companyInfoTitle: "Informacje o spółce",
    companyInfoItems: [
      "Nazwa spółki: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (Rzeczpospolita Polska)",
      "Zakres: międzynarodowy transport drogowy towarów",
      "Trasy: Europa, Bliski Wschód, Azja Centralna",
      "Zarząd: SAEID KOMASI – Prezes Zarządu"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "Prezes Zarządu & Założyciel",
    heroTextPersonal:
      "Założyciel i Prezes Zarządu SAEID4061 Sp. z o.o., odpowiedzialny za rozwój firmy, projekty mechaniczne i długoterminowe projekty energetyczne.",

    contactTitle: "Kontakt bezpośredni",
    contactWhatsAppLabel: "WhatsApp (bezpośredni kontakt z Prezesem / kierowcą)",
    contactTelegramLabel: "Telegram (koordynacja transportu i dokumentów)",
    contactEmailLabel: "Oficjalny adres e-mail spółki",

    legalTitle: "Dane oficjalne spółki (KRS)"
  },

  tr: {
    heroTitleCompany: "Uluslararası Karayolu Taşımacılığı",
    heroSubtitleCompany: "Avrupa • Orta Doğu • Orta Asya",
    heroTextCompany:
      "Polonya’da tescilli, güvenli ve güvenilir uluslararası karayolu yük taşımacılığına odaklanan bir şirket.",
    companyInfoTitle: "Şirket bilgileri",
    companyInfoItems: [
      "Şirket adı: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (Polonya)",
      "Faaliyet alanı: uluslararası karayolu yük taşımacılığı",
      "Güzergâhlar: Avrupa, Orta Doğu, Orta Asya",
      "Yönetim: SAEID KOMASI – CEO & Kurucu"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Kurucu – Grey Lion",
    heroTextPersonal:
      "SAEID4061 Sp. z o.o. kurucusu ve CEO’su; uluslararası taşımacılık, mekanik inovasyon ve enerji projelerine odaklanmaktadır.",

    contactTitle: "Doğrudan iletişim",
    contactWhatsAppLabel: "WhatsApp (doğrudan CEO / şoför)",
    contactTelegramLabel: "Telegram (yük ve evrak koordinasyonu)",
    contactEmailLabel: "Resmi şirket e-postası",

    legalTitle: "Resmi şirket verileri (KRS)"
  },

  de: {
    heroTitleCompany: "Internationaler Straßentransport",
    heroSubtitleCompany: "Europa • Naher Osten • Zentralasien",
    heroTextCompany:
      "In Polen eingetragenes Transportunternehmen mit Fokus auf sicheren und zuverlässigen internationalen Straßengüterverkehr.",
    companyInfoTitle: "Unternehmensdaten",
    companyInfoItems: [
      "Firmenname: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (Republik Polen)",
      "Tätigkeit: internationaler Straßengüterverkehr",
      "Routen: Europa, Naher Osten, Zentralasien",
      "Geschäftsführung: SAEID KOMASI – CEO & Gründer"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Gründer – Grey Lion",
    heroTextPersonal:
      "Gründer und Geschäftsführer von SAEID4061 Sp. z o.o. mit Fokus auf internationalen Transport und mechanische Innovation.",

    contactTitle: "Direkter Kontakt",
    contactWhatsAppLabel: "WhatsApp (direkte Linie zum CEO / Fahrer)",
    contactTelegramLabel: "Telegram (Transport & Dokumente)",
    contactEmailLabel: "Offizielle Firmen-E-Mail",

    legalTitle: "Offizielle Firmendaten (KRS)"
  },

  ru: {
    heroTitleCompany: "Международные автомобильные перевозки",
    heroSubtitleCompany: "Европа • Ближний Восток • Центральная Азия",
    heroTextCompany:
      "Польская транспортная компания, специализирующаяся на безопасных и надёжных международных автомобильных грузоперевозках.",
    companyInfoTitle: "Информация о компании",
    companyInfoItems: [
      "Название: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (Республика Польша)",
      "Сфера деятельности: международные автоперевозки грузов",
      "Маршруты: Европа, Ближний Восток, Центральная Азия",
      "Управление: SAEID KOMASI – CEO & Основатель"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Основатель – Grey Lion",
    heroTextPersonal:
      "Основатель и генеральный директор SAEID4061 Sp. z o.o., развивает международные перевозки и инновационные механические системы.",

    contactTitle: "Прямой контакт",
    contactWhatsAppLabel: "WhatsApp (напрямую с директором / водителем)",
    contactTelegramLabel: "Telegram (грузы и документы)",
    contactEmailLabel: "Официальная почта компании",

    legalTitle: "Официальные данные компании (KRS)"
  },

  ar: {
    heroTitleCompany: "النقل البري الدولي",
    heroSubtitleCompany: "أوروبا • الشرق الأوسط • آسيا الوسطى",
    heroTextCompany:
      "شركة نقل مسجلة في بولندا متخصصة في نقل البضائع برياً بشكل آمن وموثوق بين أوروبا والشرق الأوسط وآسيا الوسطى.",
    companyInfoTitle: "بيانات الشركة",
    companyInfoItems: [
      "اسم الشركة: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (جمهورية بولندا)",
      "النشاط: نقل بري دولي للبضائع",
      "الطرق: أوروبا، الشرق الأوسط، آسيا الوسطى",
      "الإدارة: SAEID KOMASI – الرئيس التنفيذي والمؤسس"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "الرئيس التنفيذي والمؤسس – Grey Lion",
    heroTextPersonal:
      "مؤسس والرئيس التنفيذي لشركة SAEID4061 Sp. z o.o. يركز على النقل الدولي والمشاريع الميكانيكية والطاقوية.",

    contactTitle: "الاتصال المباشر",
    contactWhatsAppLabel: "واتساب (اتصال مباشر بالرئيس التنفيذي / السائق)",
    contactTelegramLabel: "تلغرام (تنسيق الشحن والوثائق)",
    contactEmailLabel: "البريد الإلكتروني الرسمي للشركة",

    legalTitle: "البيانات الرسمية للشركة (KRS)"
  },

  es: {
    heroTitleCompany: "Transporte internacional por carretera",
    heroSubtitleCompany: "Europa • Oriente Medio • Asia Central",
    heroTextCompany:
      "Empresa registrada en Polonia, especializada en transporte internacional de mercancías por carretera de forma segura y fiable.",
    companyInfoTitle: "Información de la empresa",
    companyInfoItems: [
      "Nombre: SAEID4061 Sp. z o.o.",
      "KRS: 0001065392 (República de Polonia)",
      "Actividad: transporte internacional de mercancías por carretera",
      "Rutas: Europa, Oriente Medio, Asia Central",
      "Dirección: SAEID KOMASI – CEO & Fundador"
    ],

    heroTitlePersonal: "SAEID KOMASI",
    heroSubtitlePersonal: "CEO & Fundador – Grey Lion",
    heroTextPersonal:
      "Fundador y CEO de SAEID4061 Sp. z o.o., centrado en transporte internacional e innovación mecánica.",

    contactTitle: "Contacto directo",
    contactWhatsAppLabel: "WhatsApp (línea directa con el CEO / conductor)",
    contactTelegramLabel: "Telegram (coordinación de cargas y documentos)",
    contactEmailLabel: "Correo electrónico oficial de la empresa",

    legalTitle: "Datos oficiales de la empresa (KRS)"
  }
};

// ===== STATE =====
let currentLanguage = "fa";
let currentMode = "company"; // 'company' or 'personal'

// ===== HELPERS =====
function getT(lang) {
  return translations[lang] || translations["en"];
}

// ===== APPLY LANGUAGE & MODE =====
function updateContent() {
  const t = getT(currentLanguage);

  const heroTitleEl = document.getElementById("hero-title");
  const heroSubtitleEl = document.getElementById("hero-subtitle");
  const heroTextEl = document.getElementById("hero-text");
  const companyInfoTitleEl = document.getElementById("company-info-title");
  const companyInfoListEl = document.getElementById("company-info-list");

  const contactTitleEl = document.getElementById("contact-title");
  const contactWhatsAppLabelEl = document.getElementById(
    "contact-whatsapp-label"
  );
  const contactTelegramLabelEl = document.getElementById(
    "contact-telegram-label"
  );
  const contactEmailLabelEl = document.getElementById("contact-email-label");
  const legalTitleEl = document.getElementById("legal-title");

  if (currentMode === "company") {
    heroTitleEl.textContent = t.heroTitleCompany;
    heroSubtitleEl.textContent = t.heroSubtitleCompany;
    heroTextEl.textContent = t.heroTextCompany;
  } else {
    heroTitleEl.textContent = t.heroTitlePersonal;
    heroSubtitleEl.textContent = t.heroSubtitlePersonal;
    heroTextEl.textContent = t.heroTextPersonal;
  }

  companyInfoTitleEl.textContent = t.companyInfoTitle;

  // لیست شرکت
  companyInfoListEl.innerHTML = "";
  t.companyInfoItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    companyInfoListEl.appendChild(li);
  });

  // تماس
  contactTitleEl.textContent = t.contactTitle;
  contactWhatsAppLabelEl.textContent = t.contactWhatsAppLabel;
  contactTelegramLabelEl.textContent = t.contactTelegramLabel;
  contactEmailLabelEl.textContent = t.contactEmailLabel;

  // قانونی
  legalTitleEl.textContent = t.legalTitle;
}

// ===== LANGUAGE SELECT INIT =====
function initLanguageSelect() {
  const select = document.getElementById("language-select");
  select.innerHTML = "";

  languageList.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.label;
    if (lang.code === currentLanguage) option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    updateContent();
  });
}

// ===== MODE BUTTONS =====
function initModeSwitch() {
  const companyBtn = document.getElementById("mode-company");
  const personalBtn = document.getElementById("mode-personal");

  function setMode(mode) {
    currentMode = mode;
    if (mode === "company") {
      companyBtn.classList.add("active");
      personalBtn.classList.remove("active");
    } else {
      personalBtn.classList.add("active");
      companyBtn.classList.remove("active");
    }
    updateContent();
  }

  companyBtn.addEventListener("click", () => setMode("company"));
  personalBtn.addEventListener("click", () => setMode("personal"));

  setMode(currentMode);
}

// ===== DYNAMIC BACKGROUND (DAY / NIGHT) =====
function setDynamicBackground() {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 18) {
    // Day
    body.style.backgroundImage = "url('./assets/bg-day.jpg')";
    body.style.filter = "brightness(1)";
  } else {
    // Night
    body.style.backgroundImage = "url('./assets/bg-night.jpg')";
    body.style.filter = "brightness(0.85)";
  }
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect();
  initModeSwitch();
  setDynamicBackground();

  // هر ۳۰ دقیقه دوباره چک کن
  setInterval(setDynamicBackground, 30 * 60 * 1000);

  // سال فوتر
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
