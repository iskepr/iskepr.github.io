"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function SimpleSwipe({ project, withVid }) {
    let imgs = [];
    for (let i = 1; i <= project.الصور; i++)
        imgs.push("/imgs/" + project.اسم_المستودع + "/" + i + ".webp");
    const images = withVid ? imgs : imgs.slice(1);
    return (
        <Swiper
            className="w-[90%] !mx-20 !my-10 !mb-5 max-md:!mx-5"
            loop={true}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                740: { slidesPerView: 3 },
                840: { slidesPerView: 4 },
                1024: {
                    spaceBetween: 20,
                    slidesPerView:
                        images.length > 5
                            ? 5
                            : images.length > 3
                            ? images.length - 1
                            : images.length,
                },
            }}
            modules={[Autoplay]}
        >
            {images.map((item, i) => (
                <SwiperSlide key={i}>
                    <Image
                        alt={`${project.الاسم} skepr محمد سكيبر`}
                        src={item}
                        width={250}
                        height={250}
                        className="rounded-xl object-cover w-full"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
