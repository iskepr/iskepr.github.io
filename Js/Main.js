fetch("assets/imgs/animation.json")
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
  meimg.style.transform = "translateY(100px)";
  metext.style.marginBottom = "-100px";
  startlinks.style.transform = "translateY(200px)";
  circle.style.top = "400px";
  setTimeout(function () {
    lodar.style.transform = "translateY(-100%)";
  }, 1000);
  setTimeout(function () {
    meimg.style.transition = "1s";
    meimg.style.transform = "translateY(0px)";
  }, 1100);
  setTimeout(function () {
    metext.style.transition = "1s";
    metext.style.marginBottom = "270px";
  }, 1300);
  setTimeout(function () {
    startlinks.style.transition = "1s";
    startlinks.style.transform = "translateY(0px)";
  }, 1100);
  setTimeout(function () {
    circle.style.transition = "1s";
    circle.style.top = "30px";
  }, 1000);
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
let portfolioSection = document.querySelector(".portfolio");
let storySection = document.querySelector(".story");
let contactSection = document.querySelector(".contact");

let header = document.querySelector('.header');
let startlinks = document.querySelector("#links");
let circle = document.querySelector(".circle");

let meimg = document.querySelector(".myimg");
let metext = document.querySelector(".myname");
let me = document.querySelector(".start");

let prograsbarin = document.querySelector(".prograsbarin");
let prograsbar = document.querySelector(".progras");

window.onscroll = function () {
  let value = window.scrollY;
  let width = window.screen.availWidth;
  if (value > 20) {
    meimg.style.transition = ".3s";
    meimg.style.transform = "translateY(" + value * 0.09 + "px)";

    metext.style.transition = ".3s";
    metext.style.marginBottom = -(value) + "px";
    circle.style.transform = "rotate(" + value * .3 + "deg)";

    if (width < 400) {
      startlinks.style.transform = "translateY(" + -value * 0.8 + "px)";
    }
  } else {
    metext.style.marginBottom = "270px";
    meimg.style.transform = "translateY(0px)";
    startlinks.style.transform = "translateY(0px)";
  }

  prograsbarin.style.width = value / 20 + "%";

  if (window.scrollY >= portfolioSection.offsetTop - 100) {
    header.style.transition = ".3s";
    header.style.transform = "translateY(-60px)";
  } else {
    header.style.transform = "translateY(0px)";
  }

  if (window.scrollY >= contactSection.offsetTop - 100) {
    contactSection.style.opacity = 1;
    startSection.style.opacity = 0;
    portfolioSection.style.opacity = 0;
    storySection.style.opacity = 0;
    prograsbarin.style.width = 100 + "%";
    prograsbar.style.opacity = 0;
  } else {
    contactSection.style.opacity = 1;
    startSection.style.opacity = 1;
    portfolioSection.style.opacity = 1;
    storySection.style.opacity = 1;
    prograsbar.style.opacity = 1;
  }
};
