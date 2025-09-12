"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function SimpleSwipe({ projectData, withVid }) {
    console.log(withVid);
    const images = withVid ? projectData.الصور : projectData.الصور.slice(1);
    return (
        <Swiper
            className="w-[90%] !mx-20 !my-10"
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                740: { slidesPerView: 3 },
                840: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay]}
        >
            {images.map((item, i) => (
                <SwiperSlide key={i}>
                    <Image
                        alt={`${projectData.الاسم} skepr محمد سكيبر`}
                        src={item}
                        width={250}
                        height={250}
                        className="rounded-xl object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
