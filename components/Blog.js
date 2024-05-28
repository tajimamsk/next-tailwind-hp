"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const blogContent = {
  text: {
    subtitle: "ブログ・ニュース",
    title: "新着ニュース",
    description: "日々のブログや最新ニュースを投稿しています",
  },
  blog: [
    {
      link: "#",
      img: "/assets/post-1.jpg",
      title: "冬季講習の受講受付開始しました",
      description:
        "限定募集 20名 -> 残り2名 ※在籍中の塾生は別枠で確保しています。満席になり次第、募集を締め切ります。検討中の方はお早めにご相談ください。",
      date: "2023年10月",
    },
    {
      link: "#",
      img: "/assets/post-2.jpg",
      title: "春季講習の受講受付開始しました",
      description:
        "限定募集 20名 -> 残り7名 ※在籍中の塾生は別枠で確保しています。満席になり次第、募集を締め切ります。検討中の方はお早めにご相談ください。",
      date: "2024年1月",
    },
    {
      link: "#",
      img: "/assets/post-3.jpg",
      title: "夏季講習の受講受付開始しました",
      description:
        "限定募集 20名 -> 3名 ※在籍中の塾生は別枠で確保しています。満席になり次第、募集を締め切ります。検討中の方はお早めにご相談ください。",
      date: "2024年5月",
    },
    {
      link: "#",
      img: "/assets/post-4.jpg",
      title: "秋季講習の受講受付開始しました",
      description:
        "限定募集 20名 -> 残り4名 ※在籍中の塾生は別枠で確保しています。満席になり次第、募集を締め切ります。検討中の方はお早めにご相談ください。",
      date: "2024年7月",
    },
  ],
};

const Blog = () => {
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsend] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  useEffect(() => {
    const swiper = sliderRef.current.swiper;

    const updateSlideStatus = () => {
      setIsBeginning(swiper.isBeginning);
      setIsend(swiper.isEnd);
    };
    swiper.on("slideChange", updateSlideStatus);
    return () => {
      swiper.off("slideChange", updateSlideStatus);
    };
  }, [sliderRef]);

  // 戻る
  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  // 次
  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden max-md:py-5">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          {/* 左 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className="inline-block py-1 pl-3 text-heading font-semibold relative mb-7 
              before:content-[' '] before:absolute before:w-2/3 before:bg-pinkLight 
              before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {blogContent.text.subtitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {blogContent.text.title}
            </h2>
            <p
              className="text-body leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {blogContent.text.description}
            </p>
          </div>

          {/* 右 */}
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3 max-md:hidden">
              <div
                className={`${
                  isBeginning
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hover:bg-green-500"
                }
                group trasition-all duration-300 ease-in-out w-12 h-12 
                cursor-pointer bg-[#E1E7EA] rounded-full inline-flex
                justify-center items-center`}
                onClick={prevHandler}
              >
                <FaChevronLeft
                  className={`${
                    isBeginning
                      ? "group-hover:text-green-500"
                      : "group-hover:text-white"
                  }
                  text-3xl text-green-500 transition-all duration-300 
                  ease-in-out group-hover:text-white`}
                />
              </div>
              <div
                className={`${
                  isEnd
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hover:bg-green-500"
                }
                group trasition-all duration-300 ease-in-out w-12 h-12 
                cursor-pointer bg-[#E1E7EA] rounded-full inline-flex
                justify-center items-center`}
                onClick={nextHandler}
              >
                <FaChevronRight
                  className={`${
                    isEnd
                      ? "group-hover:text-green-500"
                      : "group-hover:text-white"
                  }
                  text-3xl text-green-500 transition-all duration-300 
                  ease-in-out group-hover:text-white`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* スライド */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          className="z-50 py-32 relative flex items-stretch 
          !overflow-visible before:content-[' '] before:py-32 before:z-50
          before:right-full before:w-screen before:absolute before:-top-5 
          before:-bottom-5 before:bg-light"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {blogContent.blog.map((item, index) => {
            return (
              <SwiperSlide key={index} className="overflow-visible h-full">
                <div className="p-5 rounded-lg bg-white relative mt-10 m-3">
                  <Link
                    href={item.link}
                    className="relative -mt-10 inline-block 
                    overflow-hidden rounded-lg mb-4"
                  >
                    <Image
                      src={item.img}
                      width={782}
                      height={467}
                      alt="blogimg"
                      className="h-60 object-cover"
                    />
                  </Link>
                  <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                    <Link href={item.link} className="text-heading">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mb-6 text-body">{item.description}</p>
                  <span className="text-sm">{item.date}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ボタン */}
        <div className="mx-auto flex-col items-center justify-center w-fit">
          <Link
            href={""}
            className="duration-300 transition-all 
            ease-in-out py-3 px-6 flex border rounded-full space-x-3
            items-center hover:border-gray-400"
          >
            過去のニュースは
            <strong className="text-green-500 px-1 font-semibold">
              こちら
            </strong>
            <span className="text-body">|</span>
            <span
              className="bg-green-500 rounded-full w-8 h-8 flex 
            items-center justify-center"
            >
              <FaChevronRight className="text-white text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
