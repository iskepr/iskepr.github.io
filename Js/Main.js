// preloader (الشاشة التحميلية)
let lodar = document.getElementById("preloader");
let footer = document.querySelector(".footer");
let header = document.querySelector(".header");

footer.innerHTML = `
<div class="top">
      <div class="links">
        <a href="https://github.com/iskepr" target="_blank"><img src="assets/vectors/github.svg"
            alt="github iskepr"></a>
        <a href="https://t.me/Iskepr" target="_blank"><img src="assets/vectors/telegram.svg" alt="telegram iskepr"></a>
        <a href="https://www.facebook.com/itskepr/" target="_blank"><img src="assets/vectors/facebook.svg"
            alt="facebook itskepr"></a>
        <a href="https://www.instagram.com/itskepr/" target="_blank"><img src="assets/vectors/instagram.svg"
            alt="instagram itskepr"></a>
        <a href="https://www.youtube.com/@iskepr/" target="_blank"><img src="assets/vectors/youtube.svg"
            alt="youtube itskepr"></a>
      </div>
      <h3>برمجة <span>@سكيبر</span></h3>
    </div>
    <div class="email" onclick="copyEmail()">
      <h4><span id="copytext">نسخ :</span> skeprContact@gmail.com</h4>
    </div>
`;
header.innerHTML = `
<div class="ul">
      <div class="buts">
        <li><button class="workbut" id="langButton" onclick="toggleLanguage()">EN</button></li>
        <li><a class="workbut" href="portfolio.html">أعمالي</a></li>
      </div>
      <div class="logo">
        <li><a class="logotext" href="/">سكيبر</a></li>
      </div>
      <li><a class="conbut" href="/#Contact">التواصل</a></li>
    </div>
`;

// وظيفة لنسخ البريد الإلكتروني إلى الحافظة
function copyEmail() {
  let copyEmail = "skeprcontact@gmail.com";
  let copyText = document.querySelector("#copytext");

  navigator.clipboard.writeText(copyEmail);
  copyText.textContent = "نُسِخ!:";
  setTimeout(function () {
    copyText.textContent = "نسخ :";
  }, 2000);
}

window.addEventListener("load", function () {
  lodar.style.transform = "translateY(-100%)";
});

let currentLang = "ar";
let translations = {};
// تحميل ملف الترجمة
fetch("data/translations.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    // توليد الترجمة العكسية تلقائيًا
    translations.en = Object.fromEntries(
      Object.entries(translations.ar).map(([arText, enText]) => [
        enText,
        arText,
      ])
    );
    translatePage(); // ترجمة الصفحة بعد تحميل الترجمة
  })
  .catch((error) => console.error("خطأ في تحميل الترجمة:", error));
function translatePage() {
  const bodyTextNodes = getTextNodes(document.body);
  bodyTextNodes.forEach((node) => {
    const originalText = node.nodeValue.trim();
    if (originalText && translations[currentLang]?.[originalText]) {
      node.nodeValue = translations[currentLang][originalText];
    }
  });
}
function getTextNodes(element) {
  let textNodes = [];
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
      textNodes.push(child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      textNodes = textNodes.concat(getTextNodes(child));
    }
  }
  return textNodes;
}
// تغيير اللغة عند الحاجة
function changeLanguage(lang) {
  currentLang = lang;
  translatePage();
}

// تغيير اللغة تلقائيًا
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  translatePage();
}
