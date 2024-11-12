// preloader (الشاشة التحميلية)
var lodar = document.getElementById("preloader");

// دالة لاستخراج قيمة المعلمة من الرابط
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// التحقق من معلمة "lang" في الرابط
document.addEventListener("DOMContentLoaded", function () {
  const urlLang = getQueryParameter("lang"); // قراءة معلمة 'lang' من الرابط
  const savedLanguage = localStorage.getItem("language") || "ar"; // افتراض العربية إذا لم يكن هناك لغة محفوظة

  // إذا كانت هناك لغة محددة في الرابط، استخدمها. إذا لم تكن موجودة، استخدم اللغة المحفوظة.
  const language = urlLang ? urlLang : savedLanguage;

  // تطبيق اللغة المختارة
  setLanguage(language);
});

// التعامل مع زر تغيير اللغة
const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", function (event) {
  event.preventDefault(); // لمنع الانتقال الافتراضي للرابط

  // تبديل اللغة بين العربية والإنجليزية
  const currentLanguage = localStorage.getItem("language") || "ar";
  const newLanguage = currentLanguage === "ar" ? "en" : "ar";

  // تحديث الرابط ليشمل معلمة اللغة
  const newUrl = `${window.location.pathname}?lang=${newLanguage}`;
  window.history.pushState({}, "", newUrl);

  // حفظ اللغة الجديدة في localStorage
  localStorage.setItem("language", newLanguage);

  // تطبيق التغييرات على الموقع
  setLanguage(newLanguage);
});

// دالة لتطبيق اللغة
function setLanguage(language) {
  if (language === "en") {
    // تغيير النصوص إلى الإنجليزية
    langToggle.textContent = "ع"; // تغيير النص في الزر إلى "AR"
    document.documentElement.setAttribute("lang", "en");

    // تغيير النصوص الموجودة في الصفحة إلى الإنجليزية
    document.querySelector("title").textContent = "Mohamed Sayed • Developer";
    document.querySelector(".start .myimg").alt = "Mohamed Sayed Skepr";
    document.querySelector(".start .myname").alt = "Mohamed Sayed Skepr";
    document.querySelector(".progras a").textContent = "Contact";

    // الهيدر
    document.querySelector(".logotext").textContent = "Skepr";
    document.querySelector(".header .workbut").textContent = "Portfolio";
    document.querySelector(".header .conbut").textContent = "Contact";
    document.querySelector(".myname").src = "assets/imgs/MohamedSayed.svg";
    document.querySelector(".circle").src = "assets/imgs/circleen.svg";

    // تغيير العناوين والنصوص الأخرى
    document.querySelector(".portfolio h1").textContent = "My Portfolio";
    document.querySelector(".portfolio .top h1").textContent = "Latest Work";
    document.querySelector(".portfolio .main .left h2").textContent =
      "Elaka Project";
    document.querySelector(".portfolio .main .center h2").textContent =
      "Tatbila Project";
    document.querySelector(".portfolio .main .right h2").textContent =
      "Alif Project";
    document.querySelector(".story h1").textContent = "The Beginning";
    document.querySelector(".contact h3").textContent = "Contact Me";
    // تغير الازرار
    document.querySelector(".portfolio .top a").textContent = "More";

    document.querySelector("footer .power").textContent = "Code by";
    document.querySelector(".footer .power span").textContent = "@Skepr";

    console.log(document.querySelector(".footer .power"));
    console.log(document.querySelector(".footer .power span"));

    // مثال لتغيير placeholder للنماذج
    document
      .querySelectorAll(".textInput input")[0]
      .setAttribute("placeholder", "e.g. Mohamed Sayed");
    document
      .querySelectorAll(".textInput input")[1]
      .setAttribute("placeholder", "e.g. example@gmail.com");
  } else {
    // إعادة النصوص إلى العربية
    langToggle.textContent = "EN"; // تغيير النص في الزر إلى "EN"
    document.documentElement.setAttribute("lang", "ar");

    // تغيير النصوص إلى العربية
    document.querySelector("title").textContent = "مُحمد سَــــــــيد • مُطور";
    document.querySelector(".start .myimg").alt = "محمد سيد سكيبر";
    document.querySelector(".start .myname").alt = "محمد سيد سكيبر";
    document.querySelector(".progras a").textContent = "التواصل";

    // الهيدر
    document.querySelector(".logotext").textContent = "سكِيبر";
    document.querySelector(".header .workbut").textContent = "أعمالي";
    document.querySelector(".header .conbut").textContent = "التواصل";
    document.querySelector(".top .myname").textContent = "التواصل";
    document.querySelector(".myname").src = "assets/imgs/myname.svg";
    document.querySelector(".circle").src = "assets/imgs/circle.svg";

    // تغيير العناوين والنصوص الأخرى
    document.querySelector(".portfolio h1").textContent = "أعمالي";
    document.querySelector(".portfolio .top h1").textContent = "اخر اعمالي";
    document.querySelector(".portfolio .main .left h2").textContent =
      "مشروع علاقة";
    document.querySelector(".portfolio .main .center h2").textContent =
      "مشروع تتبيلة";
    document.querySelector(".portfolio .main .right h2").textContent =
      "مشروع ألف";
    document.querySelector(".story h1").textContent = "البداية";
    document.querySelector(".contact h3").textContent = "التواصل";

    document.querySelector(".portfolio .top a").textContent = "المزيد";

    // تعديل النص داخل العنصر h3
    document.querySelector(".footer .power").textContent =
      "تم برمجة الموقع بواسطة ";

    // إضافة النص إلى العنصر span داخل h3
    document.querySelector(".footer .power span").textContent = "@سكيبر";

    // مثال لتغيير placeholder للنماذج
    document
      .querySelectorAll(".textInput input")[0]
      .setAttribute("placeholder", "مثلا: محمد سيد");
    document
      .querySelectorAll(".textInput input")[1]
      .setAttribute("placeholder", "مثلا: example@gmail.com");
  }
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
let storySection = document.querySelector(".story");
let contactSection = document.querySelector(".contact");

let header = document.querySelector(".header");
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
    storySection.style.opacity = 0;
  } else {
    // إعادة إظهار جميع الأقسام عند الخروج من قسم الاتصال
    contactSection.style.opacity = 1;
    startSection.style.opacity = 1;
    portfolioSection.style.opacity = 1;
    prograsbar.style.transform = "translateY(0px)";
    storySection.style.opacity = 1;
  }
};

// ------------------- works section
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const workDiv = document.getElementById("work1");
const imageElement = workDiv.getElementsByTagName("img")[0];
const textElement = workDiv.getElementsByTagName("h3")[0];
const link = document.getElementById("worklink");

const section = document.querySelector(".works").style;
// projects
const workTitel = document.getElementById("workTitel");
const workSubtitle = document.getElementById("workSubtitle");

let project = "tatbela";
const works = document.querySelectorAll(".work");
const worksLength = works.length;
// تغيير الخلفية عند الضغط على زر "prev"
prev.addEventListener("click", () => {
  if (project == "tatbela") {
    imageElement.src = "../assets/imgs/AlifLogo.svg";
    textElement.innerText = "لغة الف";
    workTitel.innerHTML = "لغة الف";
    workSubtitle.innerHTML = "اول تطبيق تواصل اجاماعي عربي بالملادئ ";
    link.href = "project.html?المعرف=2";
    project = "alif";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/alifscrenshot.png)"
    );
  } else if (project == "alif") {
    imageElement.src = "../assets/imgs/elaka.jpg";
    textElement.innerText = "علاقة";
    workTitel.innerHTML = "علاقة";
    workSubtitle.innerHTML = "اول تطبيق تواصل اجاماعي عربي بالملادئ ";
    link.href = "project.html?المعرف=0";
    project = "elaka";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/elakascreenshot.png)"
    );
  } else if (project == "elaka") {
    imageElement.src = "../assets/imgs/tatbelalogo.svg";
    textElement.innerText = "تتبيلة";
    workTitel.innerHTML = "تتبيلة";
    workSubtitle.innerHTML =
      "موقع لمطعم  بحتوي علي قائمة الطعام و الطلب من الموقع";
    link.href = "project.html?المعرف=1";

    project = "tatbela";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/tatbelascreenshot.png)"
    );
  }
});

// تغيير الخلفية عند الضغط على زر "next"
next.addEventListener("click", () => {
  if (project == "tatbela") {
    imageElement.src = "../assets/imgs/elaka.jpg";
    textElement.innerText = "علاقة";
    workTitel.innerHTML = "علاقة";
    workSubtitle.innerHTML = "اول تطبيق تواصل اجاماعي عربي بالملادئ ";
    link.href = "project.html?المعرف=0";

    project = "elaka";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/elakascreenshot.png)"
    );
  } else if (project == "elaka") {
    imageElement.src = "../assets/imgs/AlifLogo.svg";
    textElement.innerText = "لغة الف";
    workTitel.innerHTML = "لغة الف";
    workSubtitle.innerHTML = "الموقع الرسمي لافضل لغة برمجة عربية لنواه 5";
    link.href = "project.html?المعرف=2";

    project = "alif";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/alifscrenshot.png)"
    );
  } else if (project == "alif") {
    imageElement.src = "../assets/imgs/tatbelalogo.svg";
    textElement.innerText = "تتبيلة";
    workTitel.innerHTML = "تتبيلة";
    workSubtitle.innerHTML =
      "موقع لمطعم  بحتوي علي قائمة الطعام و الطلب من الموقع";
    link.href = "project.html?المعرف=1";

    project = "tatbela";
    section.setProperty(
      "--background-image",
      "url(../assets/imgs/tatbelascreenshot.png)"
    );
  }
});

// // إنشاء البطاقات الخاصة بقسم "القصة"
// const storys = [
//   {
//     title: "الولاده",
//     subtitle: "",
//     img: "assets/imgs/طفل طرش.jpg",
//   },
//   {
//     title: "",
//     subtitle:
//       "في سن الخامسة، حصلت على أول جهاز إلكتروني لي، وهو جهاز كمبيوتر. كانت تلك اللحظة مليئةبالدهشة والإعجاب، حيث يمكن للمستخدمأسرني تمامًا كيف يمكن لهذا الجهاز أن يعمل بهذا الشكل المذهل. تملكني الفضول الشديد لمعرفة أسرار تشغيله وفهمآلية عمله، مما أشعل في داخلي شرارة الشغف بالتكنولوجيا.",
//     img: "assets/imgs/الكمبيوتر.jpeg",
//   },
// ];

// // الحصول على عنصر الـ div الذي سيتم إضافة البطاقات إليه
// const contentDiv = document.getElementById("storys");

// // إنشاء البطاقات بناءً على البيانات
// storys.forEach((item) => {
//   // إنشاء عنصر البطاقة
//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");
//   cardDiv.setAttribute("data-aos", "fade-up");

//   // إنشاء الجزء الأيسر من البطاقة
//   const scardLeft = document.createElement("div");
//   scardLeft.classList.add("scard", "left");

//   // إضافة الصورة إلى الجزء الأيسر
//   const imgElement = document.createElement("img");
//   imgElement.classList.add("cardimg");
//   imgElement.src = item.img;
//   imgElement.alt = item.title || "Image";
//   scardLeft.appendChild(imgElement);

//   // إضافة العنوان الفرعي إلى الجزء الأيسر
//   const subtitleElementLeft = document.createElement("p");
//   subtitleElementLeft.classList.add("subtitle");
//   subtitleElementLeft.textContent = item.subtitle;
//   scardLeft.appendChild(subtitleElementLeft);

//   cardDiv.appendChild(scardLeft);

//   // إنشاء الجزء الأيمن من البطاقة
//   const scardRight = document.createElement("div");
//   scardRight.classList.add("scard", "right");

//   // إضافة العنوان إلى الجزء الأيمن
//   const titleElement = document.createElement("h2");
//   titleElement.id = "title";
//   titleElement.textContent = item.title;
//   scardRight.appendChild(titleElement);

//   // إضافة العنوان الفرعي إلى الجزء الأيمن
//   const subtitleElementRight = document.createElement("p");
//   subtitleElementRight.classList.add("subtitle");
//   subtitleElementRight.textContent = item.subtitle;
//   scardRight.appendChild(subtitleElementRight);

//   cardDiv.appendChild(scardRight);

//   // إضافة البطاقة إلى الـ contentDiv
//   contentDiv.appendChild(cardDiv);

//   // إضافة خط أفقي بعد كل بطاقة
//   const hrtDiv = document.createElement("div");
//   hrtDiv.classList.add("hrt");
//   hrtDiv.setAttribute("data-aos", "fade-up");
//   contentDiv.appendChild(hrtDiv);
// });
