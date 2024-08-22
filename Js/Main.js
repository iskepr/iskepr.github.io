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
