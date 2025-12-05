document.addEventListener("DOMContentLoaded", () => {
  const pageWrapper = document.querySelector(".page-wrapper");

  // تب‌های اصلی
  const tabCompany = document.getElementById("tabCompany");
  const tabPersonal = document.getElementById("tabPersonal");

  // سکشن‌ها
  const homeSection = document.getElementById("homeSection");
  const companySection = document.getElementById("companySection");
  const personalSection = document.getElementById("personalSection");
  const modeCaption = document.getElementById("modeCaption");

  // دکمه‌های برگشت
  const companyBackBtn = document.getElementById("companyBackBtn");
  const personalBackBtn = document.getElementById("personalBackBtn");

  // زیرتب‌های Company
  const subTabs = document.querySelectorAll(".sub-tab");
  const subPanels = {
    registration: document.getElementById("company-registration"),
    owners: document.getElementById("company-owners"),
    activities: document.getElementById("company-activities"),
  };

  // اکتیویتی‌ها
  const activitiesHome = document.getElementById("activitiesHome");
  const activityDetail = document.getElementById("activityDetail");
  const activityCards = document.querySelectorAll(".activity-card");
  const activityBack = document.getElementById("activityBack");
  const actTitle = document.getElementById("actTitle");
  const actHeader = document.getElementById("actHeader");
  const actBody = document.getElementById("actBody");

  const activityMeta = {
    pkd_49_41: {
      title: "49.41Z – Road freight transport",
      header:
        "Core international and domestic road freight transport activity of SAEID4061 Sp. z o.o.",
    },
    pkd_43: {
      title: "43 – Specialised construction & building works",
      header:
        "Support construction and specialised building works related to infrastructure and logistics facilities.",
    },
    pkd_52: {
      title: "52 – Warehousing & logistics support",
      header:
        "Warehousing, storage and logistics support services connected with road freight operations.",
    },
    pkd_56: {
      title: "56 – Food services (drivers & partners)",
      header:
        "Food service activities related to long-distance transport for drivers, staff and partners.",
    },
    pkd_96: {
      title: "96 – Other personal service activities",
      header:
        "Additional personal service activities supporting company operations and staff.",
    },
    pkd_49_other: {
      title: "49 – Other land transport & pipelines",
      header:
        "Supplementary land transport activities, including additional forms of transport and related services.",
    },
    pkd_68: {
      title: "68 – Real estate related activities",
      header:
        "Use and rental of real estate for offices, parking areas and logistics spaces.",
    },
    pkd_70: {
      title: "70 – Head offices & consultancy",
      header:
        "Head office and management consulting related to international transport and engineering projects.",
    },
    pkd_82: {
      title: "82 – Office administrative & support",
      header:
        "Office administration, documentation handling and back-office support for transport operations.",
    },
  };

  /* ========= حالت صفحه (home / company / personal) ========= */

  function clearModeClasses() {
    pageWrapper.classList.remove("mode-home", "mode-company", "mode-personal");
    tabCompany.classList.remove("active");
    tabPersonal.classList.remove("active");
    homeSection.classList.add("hidden");
    companySection.classList.add("hidden");
    personalSection.classList.add("hidden");
  }

  function setMode(mode) {
    clearModeClasses();

    if (mode === "company") {
      pageWrapper.classList.add("mode-company");
      tabCompany.classList.add("active");
      companySection.classList.remove("hidden");
      modeCaption.innerHTML = "Company profile and registration data.";
      // همیشه در ورود به Company تب ثبت شرکت باز باشد
      setSubTab("registration");
    } else if (mode === "personal") {
      pageWrapper.classList.add("mode-personal");
      tabPersonal.classList.add("active");
      personalSection.classList.remove("hidden");
      modeCaption.innerHTML = "Direct personal contact with CEO &amp; Founder.";
    } else {
      pageWrapper.classList.add("mode-home");
      homeSection.classList.remove("hidden");
      modeCaption.innerHTML =
        'Select <strong>Company</strong> or <strong>Personal</strong> to view details.';
    }
  }

  if (tabCompany) {
    tabCompany.addEventListener("click", () => setMode("company"));
  }
  if (tabPersonal) {
    tabPersonal.addEventListener("click", () => setMode("personal"));
  }
  if (companyBackBtn) {
    companyBackBtn.addEventListener("click", () => setMode("home"));
  }
  if (personalBackBtn) {
    personalBackBtn.addEventListener("click", () => setMode("home"));
  }

  // حالت اولیه
  setMode("home");

  /* ========= زیرتب‌های Company ========= */

  function setSubTab(name) {
    subTabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.subtab === name);
    });

    Object.entries(subPanels).forEach(([key, panel]) => {
      if (!panel) return;
      if (key === name) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });

    // وقتی وارد activities می‌شویم، مطمئن شو صفحه لیست دیده می‌شود
    if (name === "activities" && activitiesHome && activityDetail) {
      activitiesHome.classList.remove("hidden");
      activityDetail.classList.add("hidden");
    }
  }

  subTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.subtab;
      if (name) setSubTab(name);
    });
  });

  // پیش‌فرض تب ثبت شرکت
  setSubTab("registration");

  /* ========= اکتیویتی‌ها ========= */

  function showActivity(actKey) {
    if (!activitiesHome || !activityDetail) return;

    const meta = activityMeta[actKey];
    if (!meta) return;

    activitiesHome.classList.add("hidden");
    activityDetail.classList.remove("hidden");

    if (actTitle) actTitle.textContent = meta.title;
    if (actHeader) actHeader.textContent = meta.header;
    if (actBody) {
      actBody.innerHTML =
        "<p>Detailed commercial offer, pricing and documents for this activity will be provided here.</p>";
    }
  }

  activityCards.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.act;
      if (key) showActivity(key);
    });
  });

  if (activityBack) {
    activityBack.addEventListener("click", () => {
      if (!activitiesHome || !activityDetail) return;
      activityDetail.classList.add("hidden");
      activitiesHome.classList.remove("hidden");
    });
  }

  /* ========= سیستم زبان (۳۰ زبان، ذخیره در localStorage) ========= */

  const langSelect = document.getElementById("languageSelect");
  const RTL_LANGS = ["ar", "fa", "he", "ur"];

  function applyLanguage(lang) {
    // تنظیم lang روی html
    document.documentElement.lang = lang;

    // تنظیم راست‌چین برای زبان‌های راست‌به‌چپ
    if (RTL_LANGS.includes(lang)) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }

    // در آینده اگر فایل ترجمه اضافه شد، این تابع آنها را لود می‌کند
    loadTranslations(lang);
  }

  async function loadTranslations(lang) {
    // اگر فعلاً فایل ترجمه نداریم، خطا می‌گیریم ولی صفحه خراب نمی‌شود
    const path = `/assets/lang/${lang}.json`;
    try {
      const res = await fetch(path);
      if (!res.ok) {
        // فعلاً سکوت؛ فقط لاگ
        console.warn("No translation file for:", lang);
        return;
      }
      const dict = await res.json();
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && dict[key]) {
          el.textContent = dict[key];
        }
      });
    } catch (err) {
      console.error("Translation load error:", err);
    }
  }

  // مقدار اولیه زبان
  const savedLang = localStorage.getItem("language") || "en";
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      localStorage.setItem("language", newLang);
      applyLanguage(newLang);
    });
  }
  applyLanguage(savedLang);
});
