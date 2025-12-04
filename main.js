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

  // زیرتب‌های Company
  const subTabs = document.querySelectorAll(".sub-tab");
  const subPanels = {
    registration: document.getElementById("company-registration"),
    owners: document.getElementById("company-owners"),
    activities: document.getElementById("company-activities"),
  };

  // اکتیویتی‌ها
  const activityButtons = document.querySelectorAll(".activity-btn");
  const activitiesListView = document.getElementById("activitiesListView");
  const activityDetailView = document.getElementById("activityDetailView");
  const activityBackBtn = document.getElementById("activityBackBtn");
  const activityDetailTitle = document.getElementById("activityDetailTitle");
  const activityDetailHeader = document.getElementById("activityDetailHeader");
  const activityDetailBody = document.getElementById("activityDetailBody");

  // زبان (فعلاً فقط سوئیچ ظاهری؛ می‌تونی بعداً دیکشنری اضافه کنی)
  const languageSelect = document.getElementById("languageSelect");

  // متن هدر هر شاخه
  const activityMeta = {
    pkd_49_41: {
      title: "49.41Z – Road freight transport",
      header:
        "Main international and domestic road freight transport activity of SAEID4061 Sp. z o.o.",
    },
    pkd_45: {
      title: "45 – Motor vehicles trade & repair",
      header:
        "Wholesale & retail trade of motor vehicles and basic maintenance for company fleet.",
    },
    pkd_52: {
      title: "52 – Warehousing & logistics support",
      header:
        "Warehousing and logistics support services connected with road freight transport.",
    },
    pkd_56: {
      title: "56 – Food services (drivers & partners)",
      header:
        "Food service activities related to long-distance transport for drivers and partners.",
    },
    pkd_96: {
      title: "96 – Other personal service activities",
      header:
        "Additional personal service activities supporting company operations.",
    },
    pkd_49_other: {
      title: "49 – Other land transport & pipelines",
      header:
        "Supplementary land transport activities supporting the main road freight business.",
    },
    pkd_68: {
      title: "68 – Real estate related activities",
      header:
        "Rental and use of real estate for offices, parking and logistics spaces.",
    },
    pkd_70: {
      title: "70 – Head offices & consultancy",
      header:
        "Head office and management consulting related to international transport projects.",
    },
    pkd_82: {
      title: "82 – Office administrative & support",
      header:
        "Office administration and back-office support for transport operations.",
    },
  };

  /* ===== حالت صفحه (home / company / personal) ===== */
  function setMode(mode) {
    pageWrapper.classList.remove("mode-home", "mode-company", "mode-personal");
    tabCompany.classList.remove("active");
    tabPersonal.classList.remove("active");

    homeSection.classList.add("hidden");
    companySection.classList.add("hidden");
    personalSection.classList.add("hidden");

    if (mode === "company") {
      pageWrapper.classList.add("mode-company");
      tabCompany.classList.add("active");
      companySection.classList.remove("hidden");
      modeCaption.innerHTML = `Company profile &amp; registration data.`;
    } else if (mode === "personal") {
      pageWrapper.classList.add("mode-personal");
      tabPersonal.classList.add("active");
      personalSection.classList.remove("hidden");
      modeCaption.innerHTML = `Direct personal contact with CEO &amp; Founder.`;
    } else {
      pageWrapper.classList.add("mode-home");
      homeSection.classList.remove("hidden");
      modeCaption.innerHTML = `Select <strong>Company</strong> or <strong>Personal</strong> to view details.`;
    }
  }

  tabCompany.addEventListener("click", () => setMode("company"));
  tabPersonal.addEventListener("click", () => setMode("personal"));
  // حالت اولیه
  setMode("home");

  /* ===== زیرتب‌های Company ===== */
  function setSubTab(name) {
    subTabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.subtab === name);
    });

    Object.entries(subPanels).forEach(([key, panel]) => {
      if (key === name) {
        panel.classList.remove("hidden");
        panel.classList.add("visible");
      } else {
        panel.classList.add("hidden");
        panel.classList.remove("visible");
      }
    });

    // وقتی وارد Activities می‌شیم، نمای لیست اکتیویتی‌ها پیش‌فرض باشه
    if (name === "activities") {
      activitiesListView.classList.remove("hidden");
      activityDetailView.classList.add("hidden");
      activityButtons.forEach((b) => b.classList.remove("active"));
    }
  }

  // کلیک روی زیرتب‌ها
  subTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      setSubTab(btn.dataset.subtab);
    });
  });

  // زیرتب پیش‌فرض
  setSubTab("registration");

  /* ===== اکتیویتی‌ها (لیست ↔ جزئیات) ===== */
  function openActivityDetail(id) {
    const meta = activityMeta[id];
    if (!meta) return;

    // دکمه فعال
    activityButtons.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.activity === id)
    );

    // سوئیچ به نمای جزئیات
    activitiesListView.classList.add("hidden");
    activityDetailView.classList.remove("hidden");

    // هدر جزئیات
    activityDetailTitle.textContent = meta.title;
    activityDetailHeader.textContent = meta.header;

    // بدنه فعلاً خالی؛ بعداً آیتم‌های قیمت/مدارک/… را اینجا اضافه می‌کنیم
    activityDetailBody.innerHTML = "";
  }

  activityButtons.forEach((btn) => {
    btn.addEventListener("click", () => openActivityDetail(btn.dataset.activity));
  });

  activityBackBtn.addEventListener("click", () => {
    activityButtons.forEach((b) => b.classList.remove("active"));
    activityDetailView.classList.add("hidden");
    activitiesListView.classList.remove("hidden");
  });

  /* ===== زبان (Placeholder) ===== */
  languageSelect &&
    languageSelect.addEventListener("change", () => {
      // اینجا بعداً دیکشنری ترجمه قرار می‌دیم.
      // فعلاً فقط برای تست، مقدار انتخاب‌شده در کنسول:
      console.log("Language:", languageSelect.value);
    });
});
