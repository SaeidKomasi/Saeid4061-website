// ========== LANGUAGE DROPDOWN (فقط ظاهر) ==========
document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("languageToggle");
    const langMenu = document.getElementById("languageMenu");

    if (langToggle && langMenu) {
        langToggle.addEventListener("click", () => {
            const visible = langMenu.style.display === "block";
            langMenu.style.display = visible ? "none" : "block";
        });

        langMenu.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li) return;

            const langCode = li.dataset.lang;
            const label = li.textContent.trim();

            langToggle.textContent = `${label} ▾`;
            langMenu.style.display = "none";

            // اینجا بعداً اگر خواستی ترجمهٔ واقعی اضافه می‌کنیم
            console.log("language changed to:", langCode);
        });

        // کلیک بیرون منوی زبان -> بسته شود
        document.addEventListener("click", (e) => {
            if (
                !langToggle.contains(e.target) &&
                !langMenu.contains(e.target)
            ) {
                langMenu.style.display = "none";
            }
        });
    }

    // ========== VIEW SWITCH (Company / Personal) ==========
    const viewButtons = document.querySelectorAll(".view-toggle__btn");
    const viewSections = document.querySelectorAll(".view-section");

    function setView(target) {
        // دکمه‌ها
        viewButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.view === target);
        });

        // بخش‌ها
        viewSections.forEach((sec) => {
            const isTarget = sec.dataset.viewSection === target;
            sec.classList.toggle("active", isTarget);
        });

        // بک‌گراند
        if (target === "company") {
            document.body.classList.remove("mode-personal");
            document.body.classList.add("mode-company");
        } else if (target === "personal") {
            document.body.classList.remove("mode-company");
            document.body.classList.add("mode-personal");
        }

        // اگر هیچ‌کدام انتخاب نشده: حالت خنثی
        if (!target) {
            document.body.classList.remove("mode-company", "mode-personal");
        }
    }

    viewButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.view;
            setView(target);
        });
    });

    // در شروع: هیچ ویویی باز نباشد
    setView(null);

    // ========== SUBTABS داخل COMPANY ==========
    const subTabButtons = document.querySelectorAll(".sub-tab-btn");
    const subViews = document.querySelectorAll(".subview");

    function setSubView(name) {
        subTabButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.subview === name);
        });

        subViews.forEach((sv) => {
            sv.classList.toggle("active", sv.dataset.subview === name);
        });
    }

    subTabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.subview;
            setSubView(name);
        });
    });

    // وقتی برای اولین بار user روی Company کلیک کرد، به صورت پیش‌فرض Registration باز شود.
    const btnCompany = document.getElementById("btnCompany");
    if (btnCompany) {
        btnCompany.addEventListener("click", () => {
            setSubView("registration");
        });
    }
});
