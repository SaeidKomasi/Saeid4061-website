// ===== TAB SYSTEM =====
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    };
});

// ===== LANGUAGE SWITCH =====
document.getElementById("langSelector").addEventListener("change", function(){
    alert("Language system is enabled — more languages will be added.");
});
