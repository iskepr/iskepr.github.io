"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TLink from "@/components/TLink";
export default function AboutS() {
    useEffect(() => {
        Aos.init();
    }, []);

    const quote = [
        "السَّلَامُ عَلَيْكُمْ، أَنَا مُحَمَّدٌ، مُطَوِّرٌ وَمُصَمِّمُ مَوَاقِعَ",
        "بِاسْتِخْدَامِ Next.js وَتَطْبِيقَاتٍ بِاسْتِخْدَامِ Flutter.",
        "بَدَأْتُ رِحْلَتِي فِي عَالَمِ الْبَرْمَجَةِ عَامَ ١٤٤٣هـ، لِأَنَّهَا تُـمَكِّنُنِي مِنْ",
        "تَحْوِيلِ أَفْكَارِي وَخَيَالِي إِلَى شَيْءٍ حَقِيقِيٍّ عَلَى أَرْضِ الْوَاقِعِ.",
    ];
    return (
        <section className="flex items-center justify-center relative max-md:hidden">
            <div className="flex items-start justify-center relative max-md:!m-5">
                <div speed={-1}>
                    <Image
                        src="/imgs/me/mecafe.webp"
                        className="rounded-full !ml-10 max-md:hidden"
                        width={80}
                        height={80}
                        data-aos="fade-left"
                        data-aos-delay={100}
                        alt="محمد سيد عبد العليم مبرمج مواقع سكيبر Mohamed Sayed AbdElalem web dev"
                    />
                </div>
                <p
                    className="text-6xl absolute right-21 top-[-2rem] rotate-180 text-(--yello) max-md:right-0"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    “
                </p>
                <p
                    className="text-6xl absolute left-[-2rem] bottom-[-3rem] text-(--yello) max-md:left-[-0.5rem]"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    “
                </p>
                <div className="text font-medium text-3xl max-md:text-[1.2rem] max-md:w-[85%]">
                    {quote.map((gom, i) => (
                        <p key={i} className="!mb-2">
                            {gom.split(" ").map((w, i) => (
                                <span
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                    data-aos-duration="200"
                                    className="inline-block !mr-1"
                                >
                                    {w}{" "}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>
            </div>
            <div
                className="!absolute !bottom-[9rem] !right-[15%] max-md:right-0 max-md:scale-[0.7]"
            >
                <TLink
                    data-aos="fade-up"
                    href={"/About"}
                    type="submit"
                    className="lightBut  text-3xl cursor-pointer"
                    style={{
                        boxShadow: "#125206 0 0 200px 200px",
                    }}
                >
                    عني
                </TLink>
            </div>
        </section>
    );
}
