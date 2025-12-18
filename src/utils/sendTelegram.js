export default async function sendTelegramMessage(isManewal, massege, formData) {
    const { cName, cEmail, cPhone, cProject, cMessage } = isManewal ?? formData;
    let message = isManewal
        ? `
    *طلب عمل جديد*
    *الاسم:* ${cName}
    *البريد:* ${cEmail}
    *الهاتف:* ${cPhone || "غير محدد"}
    *المشروع:* ${cProject}
    *الرسالة:* ${cMessage || "بدون رسالة"}`
        : massege;

    if (isManewal) {
        if (!cName || !cEmail || !cProject) {
            notify({
                type: "تحذير",
                children: "من فضلك املأ الحقول المطلوبة!",
            });
            return;
        }
    }

    const apiKey = process.env.NEXT_PUBLIC_TELEGRAM;

    try {
        const res = await fetch(
            `https://api.telegram.org/${apiKey}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: "1742032331",
                    parse_mode: "Markdown",
                    text: message,
                }),
            }
        );

        const result = await res.json();

        if (result.ok) {
            isManewal ??
                notify({
                    type: "تمام",
                    children: "تم ارسال الطلب بنجاح",
                });
            setFormData({
                cName: "",
                cEmail: "",
                cPhone: "",
                cProject: "",
                cMessage: "",
            });
        } else {
            notify({
                type: "خطأ",
                children: "للأسف حدث خطأ في الإرسال",
            });
        }
    } catch (error) {
        console.error("Error:", error);
        notify({
            type: "خطأ",
            children: "حدث خطأ أثناء الإرسال.",
        });
    }
}
