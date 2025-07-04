// دالة لتحميل بيانات المشاريع وعرضها
const loadProjects = () => {
    fetch("../data/projects.json")
        .then((response) => {
            if (!response.ok) throw new Error("حدث خطأ في تحميل البيانات");
            return response.json();
        })
        .then((data) => {
            // عرض كل مشروع في الصفحة
            displayProjects(data);
        })
        .catch((error) => {
            console.error("حدث خطأ:", error.message);
            alert("حدث خطأ أثناء تحميل المشاريع. يرجى المحاولة لاحقًا.");
        });
};

// دالة لعرض المشاريع في الصفحة
const displayProjects = (projects) => {
    const portfoliosContainer = document.querySelector(".portfolios");

    projects.forEach((project) => {
        const buttonLabel = project.النوع === "تطبيق" ? "تنزيل" : "ألقى نظرة";

        // إنشاء عنصر المشروع باستخدام innerHTML
        const projectCard = `
            <a href="../project/#${project.اسم_المستودع}">
              <div class="portfoliocard" id="project-${project.اسم_المستودع}" data-aos="fade-up">
                <div class="all">
                  <img class="cover" src="../${project.الصور[0]}" alt="${project.الاسم} ${project.الوصف}">
                  <div class="buttom">
                    <div class="detals">
                      <h3>${project.الاسم}</h3>
                      <h4 dir="rtl">${project.الوصف}</h4>
                      <h5>${project.التاريخ}</h5>
                    </div>
                    <img src="../${project.الشعار}" alt="${project.الاسم} ${project.الوصف}" class="logo">
                    <a href="${project.الرابط}" class="mainbut">${buttonLabel}</a>
                  </div>
                </div>
              </div>
            </a>
          `;

        // إضافة المشروع إلى الحاوية
        portfoliosContainer.innerHTML += projectCard;
    });
};

// تشغيل الكود عند تحميل الصفحة
loadProjects();
