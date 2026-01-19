fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
    initMenu();
  });

function getLang(){
  return localStorage.getItem("siteLang") || "pt";
}

function initMenu(){
  const openMenu  = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu  = document.getElementById("sideMenu");
  const overlay   = document.getElementById("menuOverlay");

  function closeSideMenu(){
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  openMenu.onclick = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  };

  closeMenu.onclick = closeSideMenu;
  overlay.onclick   = closeSideMenu;

  setActivePage();
  updateMenuLang();
}

/* MARCA PÁGINA ATUAL */
function setActivePage(){
  const current = location.pathname.split("/").pop() || "index.html";

  const pages = {
    "index.html": "menuHome",
    "calculator.html": "menuCalc",
    "items.html": "menuItems",
    "maps.html": "menuMaps",
    "update-log.html": "menuUpdate"
  };

  if (pages[current]) {
    document.getElementById(pages[current]).classList.add("active");
  }
}

function updateMenuLang(){
  const lang = getLang();

  const text = {
  pt:{
    home:"🏠 Início",
    calc:"🔥 Calculadora",
    items:"🗂 Itens",
    maps:"🗺 Mapas",
    update:"📝 Update Log"
  },
  en:{
    home:"🏠 Home",
    calc:"🔥 Calculator",
    items:"🗂 Items",
    maps:"🗺 Maps",
    update:"📝 Update Log"
  }
};

  document.getElementById("menuHome").textContent  = text[lang].home;
  document.getElementById("menuCalc").textContent  = text[lang].calc;
  document.getElementById("menuItems").textContent = text[lang].items;
  document.getElementById("menuMaps").textContent  = text[lang].maps;

document.getElementById("menuUpdate").textContent = text[lang].update;
}
