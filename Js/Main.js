fetch("Assets/imgs/animation.json")
  .then((response) => response.json())
  .then((data) => {
    // تهيئة الرسوم المتحركة باستخدام Lottie
    lottie.loadAnimation({
      container: document.getElementById("animationContainer"), // عنصر الـ div الذي سيتم عرض الرسوم المتحركة فيه
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data, // بيانات الرسوم المتحركة من ملف JSON
    });
  });

// prelodar
var lodar = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    lodar.style.transform = "translateY(-100%)";
  }, 2000);
});

// copy Email
function copyEmail() {
  let copyEmail = "skeprContact@gmail.com";
  let copyText = document.querySelector("#copytext");

  navigator.clipboard.writeText(copyEmail);
  copyText.textContent = "نُسِخ!:";
  setTimeout(function () {
    copyText.textContent = "نسخ :";
  }, 2000);
}




// animation contact
let startSection = document.querySelector(".start");
let workSection = document.querySelector(".work");
let storySection = document.querySelector(".story");
let contactSection = document.querySelector(".contact");

let meimg = document.querySelector(".meimg");
let metext = document.querySelector(".me .text");
let me = document.querySelector(".me");

let prograsbarin = document.querySelector(".prograsbarin");
let prograsbar = document.querySelector(".progras");

window.onscroll = function () {
  let value = window.scrollY;
  let width = window.screen.availWidth;
  meimg.style.top = value * 0.9 + "px";
  metext.style.bottom = value + "px";

  prograsbarin.style.width = value / 20.7 + "%";

  if (value >= 100 && width < 1000) {
    metext.style.opacity = 0;
  } else {
    metext.style.opacity = 1;
  }
  if (width > 700) {
    me.style.top = value * 0.4 + "px";
  }

  if (window.scrollY >= contactSection.offsetTop - 300) {
    contactSection.style.opacity = 1;
    startSection.style.opacity = 0;
    workSection.style.opacity = 0;
    storySection.style.opacity = 0;
    prograsbarin.style.width = 100 + "%";
    prograsbar.style.opacity = 0;
    console.log("تم contact الاتصال بنجاح");
  } else if (window.scrollY >= storySection.offsetTop - 200) {
    contactSection.style.opacity = 0;
    startSection.style.opacity = 0;
    workSection.style.opacity = 0;
    storySection.style.opacity = 1;
    prograsbar.style.opacity = 1;

    console.log("تم story المقالات بنجاح");
  } else if (window.scrollY >= workSection.offsetTop - 300) {
    contactSection.style.opacity = 0;
    startSection.style.opacity = 0;
    workSection.style.opacity = 1;
    storySection.style.opacity = 0;
    console.log("تم work المشاريع بنجاح");
  } else if (window.scrollY >= startSection.offsetTop + 200) {
    contactSection.style.opacity = 0;
    startSection.style.opacity = 1;
    workSection.style.opacity = 0;
    storySection.style.opacity = 0;
    console.log("تم start الصفحة الرئيسية بنجاح");
  }
};
