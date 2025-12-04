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

    // زیرتب‌های داخل Company
    const subTabs = document.querySelectorAll(".sub-tab");
    const subPanels = {
        registration: document.getElementById("company-registration"),
        owners: document.getElementById("company-owners"),
        activities: document.getElementById("company-activities"),
    };

    // دکمه‌های اکتیویتی و توضیحات
    const activityButtons = document.querySelectorAll(".activity-btn");
    const activityDetailsBox = document.getElementById("activityDetails");

    const activityTexts = {
        pkd_49_41: `
<strong>49.41Z – Road freight transport</strong><br/>
International and domestic road freight transport with modern Euro 6 trucks.<br/>
Main corridors: European Union – Iran – Poland with focus on time-critical and high-value cargo.<br/><br/>
<ul>
<li>Full truck load (FTL) and part load (LTL) transports</li>
<li>Transport of palletised, industrial and consumer goods</li>
<li>Flexible routing through Central & Eastern Europe, Balkans, Türkiye and the Middle East</li>
</ul>
        `,
        pkd_45: `
<strong>45 – Motor vehicles trade &amp; repair</strong><br/>
Wholesale and retail trade of motor vehicles and spare parts, as well as basic maintenance
and repair of trucks used in the company fleet.
        `,
        pkd_52: `
<strong>52 – Warehousing &amp; logistics support</strong><br/>
Warehousing, temporary storage and logistics support activities connected with road freight
transport, including cross-dock operations and cargo handling.
        `,
        pkd_56: `
<strong>56 – Food services (drivers &amp; partners)</strong><br/>
Food service activities related to company operations – support for drivers and business partners
during long-distance transport projects.
        `,
        pkd_96: `
<strong>96 – Other personal service activities</strong><br/>
Additional service activities connected with company’s transport and consulting services.
        `,
        pkd_49_other: `
<strong>49 – Other land transport &amp; pipelines</strong><br/>
Supplementary land transport services which can support main road freight business.
        `,
        pkd_68: `
<strong>68 – Real estate related activities</strong><br/>
Rental and management of real estate used for company offices, parking and logistics purposes.
        `,
        pkd_70: `
<strong>70 – Head offices &amp; consultancy</strong><br/>
Head office activities and business &amp; management consulting connected with international
transport and logistics projects.
        `,
        pkd_82: `
<strong>82 – Office administrative &amp; support</strong><br/>
Administrative support, back-office services and customer communication related to company
transport operations.
        `
    };

    // تنظیم حالت صفحه (home / company / personal)
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

    // کلیک روی تب‌ها
    tabCompany.addEventListener("click", () => setMode("company"));
    tabPersonal.addEventListener("click", () => setMode("personal"));

    // حالت اولیه: صفحه شروع
    setMode("home");

    // زیرتب‌های Company
    function setSubTab(name) {
        subTabs.forEach(btn => {
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
    }

    subTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.subtab;
            setSubTab(name);
        });
    });

    // حالت اولیه زیرتب: Registration
    setSubTab("registration");

    // اکتیویتی‌ها
    function setActivity(id) {
        activityButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.activity === id);
        });

        activityDetailsBox.innerHTML = activityTexts[id] || "<em>Details will be added soon.</em>";
    }

    activityButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            setActivity(btn.dataset.activity);
        });
    });

    // اکتیویتی اولیه
    setActivity("pkd_49_41");
});
