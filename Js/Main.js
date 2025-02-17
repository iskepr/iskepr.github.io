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
        <!-- تعديل الزر ليحتوي على id -->
        <li><a class="workbut" href="portfolio.html">أعمالي</a></li>
      </div>
      <div class="logo">
        <li><a class="logotext" href="Index.html">سكِيبر</a></li>
      </div>
      <li><a class="conbut" href="index.html#Contact">التواصل</a></li>
    </div>
`

// دالة لاستخراج قيمة المعلمة من الرابط
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.addEventListener("load", function () {
  // تحريك عناصر الصفحة بعد التحميل
  meimg.style.transform = "translateY(100px)";
  metext.style.marginBottom = "-100px";
  startlinks.style.transform = "translateY(200px)";
  circle.style.top = "400px";

  // إخفاء الشاشة التحميلية تدريجيًا
  setTimeout(function () {
    lodar.style.transform = "translateY(-100%)";
  }, 1000);

  // تحريك صورة الشخصية بعد الشاشة التحميلية
  setTimeout(function () {
    meimg.style.transition = "1s";
    meimg.style.transform = "translateY(0px)";
  }, 1100);

  // تحريك النص بعد الشاشة التحميلية
  setTimeout(function () {
    metext.style.transition = "1s";
    metext.style.marginBottom = "270px";
  }, 1300);

  // تحريك الروابط بعد الشاشة التحميلية
  setTimeout(function () {
    startlinks.style.transition = "1s";
    startlinks.style.transform = "translateY(0px)";
  }, 1100);

  // تحريك الدائرة بعد الشاشة التحميلية
  setTimeout(function () {
    circle.style.transition = "1s";
    circle.style.top = "30px";
  }, 1000);
});

// وظيفة لنسخ البريد الإلكتروني إلى الحافظة
function copyEmail() {
  let copyEmail = "skeprContact@gmail.com"; // البريد المراد نسخه
  let copyText = document.querySelector("#copytext");

  navigator.clipboard.writeText(copyEmail); // نسخ النص إلى الحافظة
  copyText.textContent = "نُسِخ!:"; // تغيير النص بعد النسخ
  setTimeout(function () {
    copyText.textContent = "نسخ :"; // إعادة النص بعد مدة
  }, 2000);
}

// التحكم في الرسوم المتحركة والتأثيرات عند التمرير على الصفحة
let startSection = document.querySelector(".start");
let portfolioSection = document.querySelector(".works");
let contactSection = document.querySelector(".contact");

let startlinks = document.querySelector("#links");
let circle = document.querySelector(".circle");

let meimg = document.querySelector(".myimg");
let metext = document.querySelector(".myname");

let prograsbarin = document.querySelector(".prograsbarin");
let prograsbar = document.querySelector(".progras");

window.onscroll = function () {
  let value = window.scrollY; // الحصول على قيمة التمرير
  let width = window.screen.availWidth; // عرض الشاشة الحالي

  // تحريك العناصر بناءً على التمرير
  if (value > 20) {
    meimg.style.transition = ".3s";
    meimg.style.transform = "translateY(" + value * 0.09 + "px)";

    metext.style.transition = ".3s";
    metext.style.marginBottom = -value + "px";
    circle.style.transform = "rotate(" + value * 0.3 + "deg)";

    // تعديل حركة الروابط للشاشات الصغيرة
    if (width < 400) {
      startlinks.style.transform = "translateY(" + -value * 0.8 + "px)";
    }
  } else {
    // إعادة ضبط العناصر عند العودة للأعلى
    metext.style.marginBottom = "270px";
    meimg.style.transform = "translateY(0px)";
    startlinks.style.transform = "translateY(0px)";
  }

  // تحديث عرض شريط التقدم بناءً على التمرير
  let sHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let sTop = document.documentElement.scrollTop;
  prograsbarin.style.width = (sTop / sHeight) * 100 + "%";

  // إخفاء الهيدر عند التمرير للأسفل
  if (window.scrollY >= portfolioSection.offsetTop - 100) {
    header.style.transition = ".3s";
    header.style.transform = "translateY(-60px)";
  } else {
    header.style.transform = "translateY(0px)";
  }

  // إظهار قسم الاتصال عند الوصول له
  if (window.scrollY >= contactSection.offsetTop - 200) {
    contactSection.style.opacity = 1;
    startSection.style.opacity = 0;
    portfolioSection.style.opacity = 0;
    prograsbar.style.transform = "translateY(100px)";
  } else {
    // إعادة إظهار جميع الأقسام عند الخروج من قسم الاتصال
    contactSection.style.opacity = 1;
    startSection.style.opacity = 1;
    portfolioSection.style.opacity = 1;
    prograsbar.style.transform = "translateY(0px)";
  }
};

// ------------------- works section
// العناصر
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const workDiv = document.getElementById("work1");
const imageElement = workDiv.getElementsByTagName("img")[0];
const textElement = workDiv.getElementsByTagName("h3")[0];
const link = document.getElementById("worklink");

const section = document.querySelector(".works");
// projects
const workTitel = document.getElementById("workTitel");
const workSubtitle = document.getElementById("workSubtitle");

let projectData = [];
let currentIndex = 0;

// تحميل البيانات من ملف JSON
fetch("data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    projectData = data;
    updateProject(0); // تحديث المشروع الأول عند التحميل
  })
  .catch((error) => console.error("خطأ في تحميل ملف JSON:", error));

// تحديث المشروع بناءً على الفهرس
function updateProject(index) {
  const project = projectData[index];
  if (project) {
    imageElement.src = project.الشعار;
    textElement.innerText = project.الاسم;
    workTitel.innerHTML = project.الوصف;
    workSubtitle.innerHTML = project.الشرح;
    link.href = "project.html?id=" + index;

    // تحديث الخلفية
    section.style.setProperty(
      "--background-image",
      `url(../${project.الصور[0]})`
    );
  }
}

// التحكم في المشاريع باستخدام الأزرار
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projectData.length) % projectData.length;
  updateProject(currentIndex);
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectData.length;
  updateProject(currentIndex);
});
