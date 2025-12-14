"use client";
import Image from "next/image";
import { useState } from "react";
import sendTelegramMessage from "@/utils/sendTelegram";
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

    return (
        <div className="relative h-[80%]">
            <div className="light top-0 right-0"></div>
            <div
                className="GlassBG m-10! p-5! rounded-2xl flex justify-between z-10 h-full max-md:mx-5!"
                data-aos="fade-up"
            >
                <div className="w-[80%] max-md:w-full">
                    <h2 className="text-3xl font-bold">تواصل معي</h2>
                    <br />
                    <form
                        className="flex flex-col gap-5 relative"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendTelegramMessage(true, "", formData);
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
                                        className="text-[20px] w-3/4 border-b-2 outline-none max-md:w-full"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name={fild.name}
                                        value={formData[fild.name]}
                                        onChange={handleChange}
                                        placeholder={fild.place}
                                        data-aos="fade-up"
                                        className="text-[20px] w-3/4 border-b-2 outline-none max-md:w-full"
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
                    className="rounded-3xl scale-[1.1] object-cover w-1/2 max-md:hidden"
                    width={300}
                    height={300}
                    alt="محمد سيد سكيبر مبرمج mohamed sayed skepr programmer"
                />
            </div>
            <div className="light bottom-0 left-0"></div>
        </div>
    );
}
