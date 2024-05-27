"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        {/* 左 */}
        <div className="lg:w-5/12 mb-10 lg:mb-0">
          <span
            className="inline-block py-1 pl-3 text-heading font-semibold relative mb-7 
            before:content-[' '] before:absolute before:w-2/3 before:bg-pinkLight 
            before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
          >
            {blogContent.text.subtitle}
          </span>
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
            {blogContent.text.title}
          </h2>
          <p className="text-body leading-relaxed">
            {blogContent.text.description}
          </p>
        </div>

        {/* 右 */}
        <div className="lg:w-5/12 text-left lg:text-right">
          <div className="inline-flex ml-auto space-x-3">
            <div
              className={`${isBeginning ? "" : ""}
              group trasition-all duration-300 ease-in-out w-12 h-12 
              cursor-pointer bg-[#E1E7EA] rounded-full inline-flex
              justify-center items-center`}
            >
              <FaChevronLeft
                className={`${isBeginning ? "" : ""}
                text-3xl text-green-500 transition-all duration-300 
                ease-in-out group-hover:text-white`}
              />
            </div>
            <div
              className={`${isEnd ? "" : ""}
              group trasition-all duration-300 ease-in-out w-12 h-12 
              cursor-pointer bg-[#E1E7EA] rounded-full inline-flex
              justify-center items-center`}
            >
              <FaChevronRight
                className={`${isEnd ? "" : ""}
                text-3xl text-green-500 transition-all duration-300 
                ease-in-out group-hover:text-white`}
              />
            </div>
          </div>
        </div>

        {/* スライド */}

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
