// دالة للحصول على معلمة من عنوان URL
const getUrlParam = (param) =>
  new URLSearchParams(window.location.search).get(param);

// دالة لإنشاء أو تحديث Meta Tags
const setMetaTag = (property, content) => {
  let meta = document.querySelector(`meta[${property}]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(
      property.split("=")[0],
      property.split("=")[1].replace(/"/g, "")
    );
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

// دالة لتحميل بيانات المشروع وعرضها
const loadProjectData = () => {
  const projectId = getUrlParam("id");

  fetch("../data/projects.json")
    .then((response) => {
      if (!response.ok) throw new Error("حدث خطأ في تحميل البيانات");
      return response.json();
    })
    .then((data) => {
      if (!data[projectId]) {
        // إذا كان المنتج غير موجود، توجيه المستخدم إلى صفحة 404
        window.location.href = "/404.html";
        return;
      }

      const project = data[projectId];
      const buttonLabel = project.النوع === "تطبيق" ? "تنزيل" : "ألقى نظرة";

      // تحديث الصفحة بالبيانات
      updatePageContent(project, buttonLabel);
      updateMetaTags(project);
    })
    .catch((error) => {
      console.error("حدث خطأ:", error.message);
      // في حالة حدوث خطأ عام، توجيه المستخدم إلى صفحة 404
      window.location.href = "/404.html";
    });
};

// دالة لتحديث محتوى الصفحة
const updatePageContent = (project, buttonLabel) => {
  const projectContainer = document.querySelector(".project");

  // إنشاء محتوى الصفحة باستخدام innerHTML
  projectContainer.innerHTML = `
        <div class="top">
          <div class="detals">
            <img src="../${project.الشعار}" alt="${project.الاسم} ${
    project.الوصف
  }" class="logo">
            <div class="texts">
              <h3>${project.الاسم}</h3>
              <h4>${project.الوصف}</h4>
            </div>
          </div>
          <a href="${project.الرابط}" class="mainbut">${buttonLabel}</a>
        </div>
        <div class="buttom">
          <div class="imgs">
            ${project.الصور
              .map(
                (صورة) => `
              <img class="cover" src="../${صورة}" alt="${project.الاسم} ${project.الوصف}">
            `
              )
              .join("")}
          </div>
          <div class="dis">
            <div id="markdown-container" dir="rtl"></div>
          </div>
        </div>
      `;

  // تحميل ملف الريدمي أو عرض الوصف البديل
  fetch(project.ريدمي)
    .then((res) => {
      if (!res.ok) throw new Error("الملف غير موجود");
      return res.text();
    })
    .then((markdown) => {
      document.getElementById("markdown-container").innerHTML =
        marked.parse(markdown);
    })
    .catch(() => {
      document.getElementById("markdown-container").innerHTML = project.الشرح;
      translatePage();
    });
};

// دالة لتحديث Meta Tags والفافايكون
const updateMetaTags = (project) => {
  document.title = project.الاسم;

  setMetaTag('property="twitter:title"', project.الاسم);
  setMetaTag('property="og:title"', project.الاسم);
  setMetaTag('name="description"', project.الوصف);
  setMetaTag('property="og:description"', project.الوصف);
  setMetaTag('property="twitter:description"', project.الوصف);
  setMetaTag('property="og:image"', project.الصور[0]);
  setMetaTag('property="twitter:image"', project.الصور[0]);

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = project.الشعار;
  document.head.appendChild(favicon);
};

// تشغيل الكود عند تحميل الصفحة
loadProjectData();
