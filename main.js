document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".page-wrapper");

  const tabCompany = document.getElementById("tabCompany");
  const tabPersonal = document.getElementById("tabPersonal");

  const homeSection = document.getElementById("homeSection");
  const companySection = document.getElementById("companySection");
  const personalSection = document.getElementById("personalSection");
  const modeCaption = document.getElementById("modeCaption");

  const companyBackBtn = document.getElementById("companyBackBtn");
  const personalBackBtn = document.getElementById("personalBackBtn");

  // ===== حالت صفحه (Home / Company / Personal) =====
  function setMode(mode) {
    wrapper.classList.remove("mode-home", "mode-company", "mode-personal");
    homeSection.classList.add("hidden");
    companySection.classList.add("hidden");
    personalSection.classList.add("hidden");
    tabCompany.classList.remove("active");
    tabPersonal.classList.remove("active");

    if (mode === "company") {
      wrapper.classList.add("mode-company");
      companySection.classList.remove("hidden");
      tabCompany.classList.add("active");
      modeCaption.innerHTML = "Company profile &amp; business structure.";
    } else if (mode === "personal") {
      wrapper.classList.add("mode-personal");
      personalSection.classList.remove("hidden");
      tabPersonal.classList.add("active");
      modeCaption.innerHTML = "Direct personal contact with CEO &amp; Founder.";
    } else {
      wrapper.classList.add("mode-home");
      homeSection.classList.remove("hidden");
      modeCaption.innerHTML =
        "Select <strong>Company</strong> or <strong>Personal</strong> to view details.";
    }
  }

  tabCompany.addEventListener("click", () => setMode("company"));
  tabPersonal.addEventListener("click", () => setMode("personal"));

  companyBackBtn.addEventListener("click", () => setMode("home"));
  personalBackBtn.addEventListener("click", () => setMode("home"));

  // شروع روی Home
  setMode("home");

  // ===== Sub tabs (Company) =====
  const subTabs = document.querySelectorAll(".sub-tab");
  const subPanels = {
    registration: document.getElementById("company-registration"),
    owners: document.getElementById("company-owners"),
    activities: document.getElementById("company-activities"),
  };

  function setSubTab(name) {
    subTabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.subtab === name);
    });

    Object.entries(subPanels).forEach(([key, panel]) => {
      if (key === name) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  }

  subTabs.forEach((btn) => {
    btn.addEventListener("click", () => setSubTab(btn.dataset.subtab));
  });

  // به صورت پیش‌فرض وارد Registration شو
  setSubTab("registration");

  // ===== Activities (۹ کلید + صفحه دیتیل) =====
  const activitiesHome = document.getElementById("activitiesHome");
  const activityDetail = document.getElementById("activityDetail");
  const actTitle = document.getElementById("actTitle");
  const actHeader = document.getElementById("actHeader");
  const actBody = document.getElementById("actBody");
  const actBack = document.getElementById("activityBack");

  const activityMeta = {
    pkd_49_41: {
      title: "49.41Z – Road freight transport",
      header:
        "Main international and domestic road freight transport activity of SAEID4061 Sp. z o.o.",
    },
    pkd_43: {
      title: "43 – Specialised construction & building works",
      header:
        "Construction and specialised building works related to depots, logistic bases and company infrastructure.",
    },
    pkd_52: {
      title: "52 – Warehousing & logistics support",
      header:
        "Warehousing and logistics support services connected with road freight transport.",
    },
    pkd_56: {
      title: "56 – Food service activities",
      header:
        "Food services related to long-distance transport, drivers and business partners.",
    },
    pkd_96: {
      title: "96 – Other personal service activities",
      header:
        "Additional personal service activities supporting company operations and clients.",
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
        "Office administration, back-office support and customer service for transport operations.",
    },
  };

  document.querySelectorAll(".activity-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.act;
      const data = activityMeta[key];
      if (!data) return;

      // نمایش صفحه دیتیل
      activitiesHome.classList.add("hidden");
      activityDetail.classList.remove("hidden");

      actTitle.textContent = data.title;
      actHeader.textContent = data.header;
      actBody.innerHTML = ""; // فعلاً خالی – بعداً ماژول قیمت و مدارک اضافه می‌کنیم
    });
  });

  actBack.addEventListener("click", () => {
    activityDetail.classList.add("hidden");
    activitiesHome.classList.remove("hidden");
  });
});
