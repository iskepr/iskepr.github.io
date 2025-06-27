window.addEventListener("load", function () {
    // تحريك عناصر الصفحة بعد التحميل
    meimg.style.transform = "translateY(100px)";
    metext.style.marginBottom = "-100px";
    startlinks.style.transform = "translateY(200px)";
    circle.style.top = "400px";

    // تحريك صورة الشخصية بعد الشاشة التحميلية
    setTimeout(function () {
        meimg.style.transition = "1s";
        meimg.style.transform = "translateY(0px)";
    }, 200);

    // تحريك النص بعد الشاشة التحميلية
    setTimeout(function () {
        metext.style.transition = "1s";
        metext.style.marginBottom = "270px";
    }, 200);

    // تحريك الروابط بعد الشاشة التحميلية
    setTimeout(function () {
        startlinks.style.transition = "1s";
        startlinks.style.transform = "translateY(0px)";
    }, 200);

    // تحريك الدائرة بعد الشاشة التحميلية
    setTimeout(function () {
        circle.style.transition = "1s";
        circle.style.top = "30px";
    }, 100);
});

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

if (window.innerWidth > 500) {
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
                startlinks.style.transform =
                    "translateY(" + -value * 0.8 + "px)";
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
}

// -- works section
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const workDiv = document.getElementById("work1");
const imageElement = workDiv.getElementsByTagName("img")[0];
const textElement = workDiv.getElementsByTagName("h3")[0];
const link = document.getElementById("worklink");
const section = document.querySelector(".works");
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
        link.href = "project/#" + project.اسم_المستودع;

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
    translatePage();
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projectData.length;
    updateProject(currentIndex);
    translatePage();
});

function sendTelegramMessage() {
    let cName = document.getElementById("cName").value;
    let cEmail = document.getElementById("cEmail").value;
    let cProject = document.getElementById("cProject").value;
    let selectedBudget = document.querySelector('input[name="budget"]:checked');
    let cBudget = selectedBudget ? selectedBudget.value : "غير محدد";
    let selectedSkill = document.querySelector('input[name="skill"]:checked');
    let cSkill = selectedSkill ? selectedSkill.value : "غير محدد";
    let token = "7882906682:AAFrbBdASaSB2fPTRMsKDfE1oXpEHylkayo";
    let chatID = "1742032331";

    let message =
        `🔔 *طلب عمل جديد* 🔔\n\n` +
        `👤 *الاسم:* ${cName}\n` +
        `📧 *البريد:* ${cEmail}\n` +
        `📌 *المشروع:* ${cProject}\n` +
        `💰 *الميزانية:* ${cBudget}\n` +
        `🛠 *المهارة المطلوبة:* ${cSkill}`;

    let url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatID,
            text: message,
            parse_mode: "Markdown",
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                alert("تم إرسال الطلب بنجاح إلى تيليجرام!");
            } else {
                alert("للاسف حدث خطا");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("حدث خطأ أثناء الإرسال.");
        });
}
