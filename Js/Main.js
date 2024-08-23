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

// fetch data

// مسار ملف JSON
const storys = [
  {
    "title": "الولاده",
    "subtitle": "",
    "img": "Assets/imgs/طفل طرش.jpg"
  },
  {
    "title": "",
    "subtitle": "في سن الخامسة، حصلت على أول جهاز إلكتروني لي، وهو جهاز كمبيوتر. كانت تلك اللحظة مليئةبالدهشة والإعجاب، حيث يمكن للمستخدمأسرني تمامًا كيف يمكن لهذا الجهاز أن يعمل بهذا الشكل المذهل. تملكني الفضول الشديد لمعرفة أسرار تشغيله وفهمآلية عمله، مما أشعل في داخلي شرارة الشغف بالتكنولوجيا.",
    "img": "Assets/imgs/الكمبيوتر.jpeg"
  },
  {
    "title": "",
    "subtitle": "في سن الخامسة، حصلت على أول جهاز إلكتروني لي، وهو جهاز كمبيوتر. كانت تلك اللحظة مليئةبالدهشة والإعجاب، حيث يمكن للمستخدمأسرني تمامًا كيف يمكن لهذا الجهاز أن يعمل بهذا الشكل المذهل. تملكني الفضول الشديد لمعرفة أسرار تشغيله وفهمآلية عمله، مما أشعل في داخلي شرارة الشغف بالتكنولوجيا.",
    "img": "Assets/imgs/الكمبيوتر.jpeg"
  }
];

const contentDiv = document.getElementById('storys');
// جلب البيانات باستخدام fetch
storys.forEach(item => {
  // إنشاء عنصر div جديد للبطاقة
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.setAttribute('data-aos', 'fade-up');

  // إنشاء scard left
  const scardLeft = document.createElement('div');
  scardLeft.classList.add('scard', 'left');
  
  const imgElement = document.createElement('img');
  imgElement.classList.add('cardimg');
  imgElement.src = item.img;
  imgElement.alt = item.title || 'Image';
  scardLeft.appendChild(imgElement);

  const subtitleElementLeft = document.createElement('p');
  subtitleElementLeft.classList.add('subtitle');
  subtitleElementLeft.textContent = item.subtitle;
  scardLeft.appendChild(subtitleElementLeft);

  cardDiv.appendChild(scardLeft);

  // إنشاء scard right
  const scardRight = document.createElement('div');
  scardRight.classList.add('scard', 'right');

  const titleElement = document.createElement('h2');
  titleElement.id = 'title';
  titleElement.textContent = item.title;
  scardRight.appendChild(titleElement);

  const subtitleElementRight = document.createElement('p');
  subtitleElementRight.classList.add('subtitle');
  subtitleElementRight.textContent = item.subtitle;
  scardRight.appendChild(subtitleElementRight);

  cardDiv.appendChild(scardRight);

  // إضافة البطاقة إلى contentDiv
  contentDiv.appendChild(cardDiv);

  // إضافة عنصر hrt بعد كل بطاقة
  const hrtDiv = document.createElement('div');
  hrtDiv.classList.add('hrt');
  hrtDiv.setAttribute('data-aos', 'fade-up');
  contentDiv.appendChild(hrtDiv);
});