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
let workSection = document.querySelector(".wordk");
let storySection = document.querySelector(".story");
let contactSection = document.querySelector(".contact");

let meimg = document.querySelector(".meimg");
let metext = document.querySelector(".me .text");
let me = document.querySelector(".me");

window.onscroll = function () {
  let value = window.scrollY;
  let width = window.screen.availWidth;
  meimg.style.top = value * 0.9 + "px";
  metext.style.bottom = value + "px";

  if (value >= 100 && width < 700) {
    metext.style.opacity = 0;
  } else {
    metext.style.opacity = 1;
  }
  if (width > 700) {
    me.style.top = value * .4 + "px";
  }

  if (window.scrollY >= workSection.offsetTop) {
    contactSection.style.display = "none";
    startSection.style.display = "none";
    workSection.style.display = "block";
    storySection.style.display = "none";
  }
  if (window.scrollY >= storySection.offsetTop) {
    contactSection.style.display = "none";
    startSection.style.display = "none";
    workSection.style.display = "none";
    storySection.style.display = "block";
  }
  if (window.scrollY >= contactSection.offsetTop) {
    contactSection.style.display = "block";
    startSection.style.display = "none";
    workSection.style.display = "none";
    storySection.style.display = "none";
  }
};
