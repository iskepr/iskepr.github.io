// preloader (الشاشة التحميلية)
let lodar = document.getElementById("preloader");
let footer = document.querySelector(".footer");
let header = document.querySelector(".header");

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
  // تحميل ملف الترجمة
  fetch("../data/translations.json")
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

      detectLanguage();
      translatePage();
    })
    .catch((error) => console.error("خطأ في تحميل الترجمة:", error));
});
let currentLang = "ar";
let translations = {};

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
  localStorage.setItem("locallang", lang);
  translatePage();
}

// اكتشاف اللغة تلقائيًا
function detectLanguage() {
  const locallang = localStorage.getItem("locallang");
  const browserLanguage = navigator.language || navigator.userLanguage; // لغة المتصفح

  if (locallang) {
    // إذا كانت هناك لغة محفوظة في localStorage، استخدمها
    currentLang = locallang;
  } else if (browserLanguage.startsWith("ar")) {
    // إذا كانت لغة المتصفح عربية
    currentLang = "ar";
  } else {
    // اللغة الافتراضية هي الإنجليزية
    currentLang = "en";
  }
}

// تغيير اللغة تلقائيًا
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  changeLanguage(currentLang); // تحديث اللغة وحفظها
}
