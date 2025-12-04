/* ===== Languages (23 entries) ===== */
const languageList = [
  {code:"en",label:"English"},
  {code:"fa",label:"فارسی"},
  {code:"pl",label:"Polski"},
  {code:"ar",label:"العربية"},
  {code:"tr",label:"Türkçe"},
  {code:"de",label:"Deutsch"},
  {code:"fr",label:"Français"},
  {code:"it",label:"Italiano"},
  {code:"es",label:"Español"},
  {code:"pt",label:"Português"},
  {code:"ru",label:"Русский"},
  {code:"uk",label:"Українська"},
  {code:"ro",label:"Română"},
  {code:"bg",label:"Български"},
  {code:"el",label:"Ελληνικά"},
  {code:"cs",label:"Čeština"},
  {code:"sk",label:"Slovenčina"},
  {code:"hu",label:"Magyar"},
  {code:"nl",label:"Nederlands"},
  {code:"sv",label:"Svenska"},
  {code:"no",label:"Norsk"},
  {code:"da",label:"Dansk"},
  {code:"lt",label:"Lietuvių"}
];

/* ===== i18n labels (full for en/fa/pl; fallback to en for others) ===== */
const translations = {
  en:{dir:"ltr",
    tabCompany:"Company",tabCompanyCaption:"Company profile & registration data",
    tabPersonal:"Personal",tabPersonalCaption:"Direct personal contact with CEO & Founder",
    paneRegistration:"Registration",paneOwners:"Owners & Capital",paneActivities:"Activities",
    personalTitle:"Personal direct contact",
    personalText:"For direct contact with CEO & Founder, you can use the same WhatsApp, Telegram and Email shown below.",
    langLabel:"Language"
  },
  fa:{dir:"rtl",
    tabCompany:"شرکت",tabCompanyCaption:"پروفایل و اطلاعات ثبت شرکت",
    tabPersonal:"شخصی",tabPersonalCaption:"ارتباط مستقیم با مدیرعامل و بنیان‌گذار",
    paneRegistration:"ثبت و اطلاعات",paneOwners:"سهامداران و سرمایه",paneActivities:"فعالیت‌ها",
    personalTitle:"ارتباط مستقیم شخصی",
    personalText:"برای ارتباط مستقیم با مدیرعامل می‌توانید از واتساپ، تلگرام و ایمیل زیر استفاده کنید.",
    langLabel:"زبان"
  },
  pl:{dir:"ltr",
    tabCompany:"Firma",tabCompanyCaption:"Profil firmy i dane rejestrowe",
    tabPersonal:"Osobisty",tabPersonalCaption:"Bezpośredni kontakt z CEO & Founder",
    paneRegistration:"Rejestracja",paneOwners:"Wspólnicy i kapitał",paneActivities:"Działalności",
    personalTitle:"Bezpośredni kontakt osobisty",
    personalText:"Do bezpośredniego kontaktu z CEO & Founder użyj WhatsApp, Telegram i Email poniżej.",
    langLabel:"Język"
  }
};

/* ===== Elements ===== */
const pageWrapper = document.getElementById("page");
const companyTab = document.getElementById("companyTab");
const personalTab = document.getElementById("personalTab");
const companySection = document.getElementById("companySection");
const personalSection = document.getElementById("personalSection");
const langSelect = document.getElementById("languageSelect");

const innerTabs = document.querySelectorAll(".inner-tab");
const paneRegistration = document.getElementById("pane-registration");
const paneOwners = document.getElementById("pane-owners");
const paneActivities = document.getElementById("pane-activities");

/* ===== Helpers ===== */
function $(sel,parent=document){return parent.querySelector(sel)}
function $all(sel,parent=document){return Array.from(parent.querySelectorAll(sel))}
function textDir(code){
  const t=translations[code]; 
  if(t && t.dir) return t.dir;
  return (["ar","fa","ur","he"].includes(code)?"rtl":"ltr");
}

/* ===== Init Language select ===== */
function initLanguageSelect(){
  languageList.forEach(l=>{
    const opt=document.createElement("option");
    opt.value=l.code; opt.textContent=l.label;
    langSelect.appendChild(opt);
  });
  langSelect.value="en";
  applyLanguage("en");
  langSelect.addEventListener("change",()=>{
    const code=langSelect.value;
    applyLanguage(code);
    loadCompanyPanes(code);  // reload pane contents in selected language
  });
}

/* ===== Apply i18n labels ===== */
function applyLanguage(code){
  const base=translations.en;
  const t=translations[code]||base;

  // body dir
  document.body.classList.toggle("rtl", textDir(code)==="rtl");

  // header Language label
  const ll=$(".lang-label"); if(ll) ll.textContent=t.langLabel||base.langLabel;

  // all data-i18n
  $all("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    el.textContent=(t[key]||base[key]||"");
  });
}

/* ===== Company / Personal switch ===== */
function setCompanyMode(){
  companyTab.classList.add("active");
  personalTab.classList.remove("active");
  companySection.classList.add("active");
  personalSection.classList.remove("active");
  pageWrapper.classList.add("company-mode");
  pageWrapper.classList.remove("personal-mode");
}
function setPersonalMode(){
  personalTab.classList.add("active");
  companyTab.classList.remove("active");
  personalSection.classList.add("active");
  companySection.classList.remove("active");
  pageWrapper.classList.add("personal-mode");
  pageWrapper.classList.remove("company-mode");
}
companyTab.addEventListener("click",setCompanyMode);
personalTab.addEventListener("click",setPersonalMode);

/* ===== Inner panes (Company subtabs) ===== */
innerTabs.forEach(btn=>{
  btn.addEventListener("click",()=>{
    innerTabs.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const pane=btn.dataset.pane; // registration | owners | activities
    $all(".pane").forEach(p=>p.classList.remove("active"));
    $("#pane-"+pane).classList.add("active");
  });
});

/* ===== Content loaders (JSON per language) ===== */
async function loadJSON(path){
  try{
    const res = await fetch(path,{cache:"no-store"});
    if(!res.ok) throw new Error(res.statusText);
    return await res.json();
  }catch(e){
    return null;
  }
}

// fallback chain: lang -> en
async function loadCompanyPanes(lang){
  // REGISTRATION
  const reg = await (loadJSON(`content/company/${lang}/registration.json`)||
                     loadJSON(`content/company/en/registration.json`));
  renderRegistration(reg||{});
  // OWNERS
  const own = await (loadJSON(`content/company/${lang}/owners.json`)||
                     loadJSON(`content/company/en/owners.json`));
  renderOwners(own||{});
  // ACTIVITIES
  const act = await (loadJSON(`content/company/${lang}/activities.json`)||
                     loadJSON(`content/company/en/activities.json`));
  renderActivities(act||{});
}

/* ===== Renderers ===== */
function renderKV(container, items){
  // items: [{k:"KRS", v:"0001065392"}, ...]
  container.innerHTML="";
  const block=document.createElement("div");
  block.className="kv";
  (items||[]).forEach(it=>{
    const k=document.createElement("div"); k.className="k"; k.textContent=it.k||"";
    const v=document.createElement("div"); v.className="v"; v.textContent=it.v||"";
    block.appendChild(k); block.appendChild(v);
  });
  container.appendChild(block);
}

function renderRegistration(data){
  paneRegistration.innerHTML="";
  const title=document.createElement("h2"); title.className="info-title";
  title.textContent=(data.title||"Company details");
  const box=document.createElement("div"); box.className="info-block";

  const kvList=[];
  (data.fields||[]).forEach(f=>kvList.push({k:f.label,v:f.value}));
  renderKV(box, kvList);

  paneRegistration.appendChild(title);
  paneRegistration.appendChild(box);
}

function renderOwners(data){
  paneOwners.innerHTML="";
  const title=document.createElement("h2"); title.className="info-title";
  title.textContent=(data.title||"Owners & Capital");
  paneOwners.appendChild(title);

  if(Array.isArray(data.owners)){
    data.owners.forEach(o=>{
      const card=document.createElement("div"); card.className="info-block";
      const kv=[]; 
      kv.push({k:o.role||"Role", v:o.name||""});
      if(o.shares) kv.push({k:"Shares", v:o.shares});
      if(o.pesel) kv.push({k:"PESEL/ID", v:o.pesel});
      renderKV(card, kv);
      paneOwners.appendChild(card);
    });
  }
  if(data.capital){
    const cap=document.createElement("div"); cap.className="info-block";
    const t2=document.createElement("h3"); t2.textContent=(data.capital.title||"Share capital");
    const kv=[]; kv.push({k:"Amount", v:data.capital.amount||""});
    if(data.capital.note) kv.push({k:"Note", v:data.capital.note});
    renderKV(cap, kv);
    paneOwners.appendChild(t2); paneOwners.appendChild(cap);
  }
}

function renderActivities(data){
  paneActivities.innerHTML="";
  const title=document.createElement("h2"); title.className="info-title";
  title.textContent=(data.title||"Business activities");
  paneActivities.appendChild(title);

  (data.items||[]).forEach(a=>{
    const card=document.createElement("div"); card.className="info-block";
    const kv=[]; 
    kv.push({k:"Code", v:a.code||""});
    kv.push({k:"Description", v:a.desc||""});
    renderKV(card, kv);
    paneActivities.appendChild(card);
  });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded",()=>{
  initLanguageSelect();
  setCompanyMode();           // start on Company
  loadCompanyPanes("en");     // load default content
});
