function setMeta(attr, val) {
    let meta = document.querySelector(`meta[${attr}]`);
    if (!meta) {
        const [key, value] = attr.split("=");
        meta = document.createElement("meta");
        meta.setAttribute(key, value.replace(/"/g, ""));
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", val);
}

function updateMeta(project) {
    document.title = project.الاسم;
    const tags = [
        ['property="twitter:title"', project.الاسم],
        ['property="og:title"', project.الاسم],
        ['name="description"', project.الوصف],
        ['property="og:description"', project.الوصف],
        ['property="twitter:description"', project.الوصف],
        ['property="og:image"', project.الصور[0]],
        ['property="twitter:image"', project.الصور[0]],
    ];
    for (const [attr, val] of tags) setMeta(attr, val);

    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.href = "../" + project.الشعار;
    document.head.appendChild(icon);
}

function updatePage(project, label) {
    document.querySelector(".project").innerHTML = `
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
            <a href="${project.الرابط}" class="mainbut">${label}</a>
        </div>
        <div class="buttom">
            <div class="imgs">
                ${project.الصور
                    .map(
                        (src) =>
                            `<img class="cover" src="../${src}" alt="${project.الاسم} ${project.الوصف}">`
                    )
                    .join("")}
            </div>
            <div class="dis"><div id="markdown-container" dir="rtl"></div></div>
        </div>
    `;

    fetch(project.ريدمي)
        .then(function (res) {
            if (!res.ok) throw new Error("الملف غير موجود");
            return res.text();
        })
        .then(function (text) {
            document.getElementById("markdown-container").innerHTML =
                marked.parse(text);
        })
        .catch(function () {
            document.getElementById("markdown-container").innerHTML =
                project.الشرح;
            if (typeof translatePage === "function") translatePage();
        });
}

function loadProject() {
    const id = location.hash.slice(1);
    fetch("../data/projects.json")
        .then(function (res) {
            if (!res.ok) throw new Error("فشل التحميل");
            return res.json();
        })
        .then(function (data) {
            const project = data.find((p) => p.اسم_المستودع == id);
            if (!project) return (location.href = "/404.html");

            const label = project.النوع === "تطبيق" ? "تنزيل" : "ألقى نظرة";
            updatePage(project, label);
            updateMeta(project);
        })
        .catch(function (err) {
            console.error("خطأ:", err);
            location.href = "/404.html";
        });
}

loadProject();
