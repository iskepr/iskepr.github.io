"use client";
import Image from "next/image";
import { useState } from "react";
import { notify } from "@/components/notify";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Contact() {
    useEffect(() => {
        Aos.init();
    }, []);

    const [formData, setFormData] = useState({
        cName: "",
        cEmail: "",
        cPhone: "",
        cProject: "",
        cMessage: "",
    });

    const filds = [
        {
            name: "cName",
            title: "ما هو اسمك؟",
            place: "محمد سيد",
        },
        {
            name: "cEmail",
            title: "ما هو بريدك؟",
            place: "skeprcontact@gmail.com",
        },
        {
            name: "cPhone",
            title: "ما هو رقم هاتفك؟",
            place: "+2011548550...",
        },
        {
            name: "cProject",
            title: "فيما تحتاجني؟",
            place: "تصميم, برمجة, تحرير فيديو...",
        },
        {
            name: "cMessage",
            title: "ما هي رسالتك؟",
            place: "السلام عليكم محمد, كنت احتاج مساعدتك في...",
            type: "long",
        },
    ];

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function sendTelegramMessage(isManewal, data) {
        const { cName, cEmail, cPhone, cProject, cMessage } = formData;
        let message = isManewal
            ? `
    *طلب عمل جديد*
    *الاسم:* ${cName}
    *البريد:* ${cEmail}
    *الهاتف:* ${cPhone || "غير محدد"}
    *المشروع:* ${cProject}
    *الرسالة:* ${cMessage || "بدون رسالة"}`
            : `*زائر جديد*
    *الip:* ${data[1]}
    *البلد:* ${data[0]}`;

        if (isManewal) {
            if (!cName || !cEmail || !cProject) {
                notify({
                    type: "تحذير",
                    children: "من فضلك املأ الحقول المطلوبة!",
                });
                return;
            }
        }

        try {
            const res = await fetch(
                `https://api.telegram.org/bot7882906682:AAFrbBdASaSB2fPTRMsKDfE1oXpEHylkayo/sendMessage`,
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

    async function getip() {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            const ip = data.ip;

            let country = "Unknown";
            try {
                const locationResponse = await fetch(
                    `https://ipinfo.io/${ip}/json`,
                    {
                        signal: AbortSignal.timeout(3000),
                    }
                );
                if (locationResponse.ok) {
                    const locationData = await locationResponse.json();
                    country = `${locationData.country}/${locationData.city}/${locationData.timezone}`;
                }
            } catch (err) {
                console.warn("Location fetch timeout or error:", err);
            }

            return [country, ip];
        } catch (error) {
            console.error("Error fetching IP:", error);
            return ["Unknown", "Unknown"];
        }
    }

    if (process.env.NODE_ENV === "production") {
        (async () => {
            const ipData = await getip();
            await sendTelegramMessage(false, ipData);
        })();
    }

    return (
        <div className="relative h-[80%]">
            <div className="light top-0 right-0"></div>
            <div
                className="GlassBG !m-10 !p-5 rounded-2xl flex justify-between z-10 h-full"
                data-aos="fade-up"
            >
                <div className="w-[80%]">
                    <h2 className="text-3xl font-bold">تواصل معي</h2>
                    <br />
                    <form
                        className="flex flex-col gap-5 relative"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendTelegramMessage(true);
                        }}
                    >
                        {filds.map((fild, i) => (
                            <div key={i} className="w-full">
                                <h3 className="text-2xl" data-aos="fade-up">
                                    <span className="text-gray-500 text-[15px]">
                                        {i + 1}.
                                    </span>{" "}
                                    {fild.title}
                                </h3>
                                {fild.type === "long" ? (
                                    <textarea
                                        type="text"
                                        name={fild.name}
                                        value={formData[fild.name]}
                                        onChange={handleChange}
                                        placeholder={fild.place}
                                        data-aos="fade-up"
                                        className="text-[20px] w-3/4 border-b-2 outline-none"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name={fild.name}
                                        value={formData[fild.name]}
                                        onChange={handleChange}
                                        placeholder={fild.place}
                                        data-aos="fade-up"
                                        className="text-[20px] w-3/4 border-b-2 outline-none"
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            data-aos="fade-up"
                            className="lightBut cursor-pointer mt-5"
                        >
                            ارسال
                        </button>
                    </form>
                </div>
                <Image
                    src="/imgs/me/meAzhar.webp"
                    className="rounded-3xl scale-[1.1] object-cover w-1/2"
                    width={300}
                    height={300}
                    alt="محمد سيد سكيبر مبرمج mohamed sayed skepr programmer"
                />
            </div>
            <div className="light bottom-0 left-0"></div>
        </div>
    );
}
