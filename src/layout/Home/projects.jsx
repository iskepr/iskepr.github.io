import Image from "next/image";

import TLink from "@/components/TLink";
import projects from "@/data/projects.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Projects() {
    return (
        <>
            <div className="prev w-70 h-50 sticky top-50 right-[50%] transform translate-x-1/2 overflow-hidden hidden">
                {projects.map((project, i) => (
                    <Image
                        src={project.الصور[0]}
                        key={i}
                        alt={project.الاسم}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>
            <Swiper
                data-aos="fade-up"
                className="!mx-[-4.5rem] scale-[0.9]"
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                modules={[EffectCoverflow, Autoplay]}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 7000,
                    reverseDirection: true,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                        },
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {projects.slice(0, 5).map((project, i) => (
                    <SwiperSlide
                        key={i}
                        className="swiper-slide flex items-center justify-between !rounded-4xl GlassBG !h-full"
                        style={{
                            transform:
                                "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)",
                            width: "80%",
                            maxWidth: "900px",
                        }}
                    >
                        <TLink
                            href={`/Work/${project.اسم_المستودع}`}
                            title={"• " + project.الاسم}
                        >
                            <div className="rounded-2xl">
                                <Image
                                    src={project.الشعار}
                                    alt={project.الاسم}
                                    width={300}
                                    height={300}
                                    className="rounded-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </TLink>
                        <div className="info !px-5 !py-2">
                            <h2 className="text-3xl font-bold">
                                {project.الاسم}
                            </h2>
                            <p className="text-2xl">{project.الوصف}</p>
                            <a
                                href={`https://github.com/iskepr/${project.اسم_المستودع}`}
                                target="_blank"
                            >
                                المستودع
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
