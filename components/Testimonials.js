import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsContent = {
  text: {
    subtitle: "2023年度 合格者の声",
    title: "難関大へ 2023合格者の声",
    description: "Docsゼミから志望校に合格した方の声がたくさん届いています!",
  },
  testimonials: [
    {
      img: "/assets/person1.png",
      name: "匿名希望",
      titleRole: "スペシャルコースを利用",
      testimony:
        "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    },
    {
      img: "/assets/person2.png",
      name: "田中さん",
      titleRole: "ノーマルコースを利用",
      testimony:
        "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    },
    {
      img: "/assets/person3.png",
      name: "小林さん",
      titleRole: "スペシャルコースを利用",
      testimony:
        "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-light ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          {/* 左 */}
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            <span
              className="inline-block py-1 pl-3 text-heading font-semibold relative mb-7 
              before:content-[' '] before:absolute before:w-2/3 
            before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50"
            >
              {testimonialsContent.text.subtitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5
            "
            >
              {testimonialsContent.text.title}
            </h2>
            <p className="text-body leading-relaxed mb-10">
              {testimonialsContent.text.description}
            </p>
            <div>
              <Link href="" className="btnGreen">
                資料ダウンロード
              </Link>
            </div>
          </div>

          {/* 中 */}
          <div className="lg:w-8/12 ">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              {/* ２番目だけ弾く */}
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialsContent.testimonials.map((item, index) => {
                  if (index === 1) return null;
                  return (
                    <div
                      key={index}
                      className={`bg-white p-7 rounded-lg w-full ${
                        index === 1 ? "" : "mb-6"
                      }`}
                    >
                      <div className="flex space-x-4 items-center">
                        <div className="relative">
                          <Image
                            src={item.img}
                            width={579}
                            height={720}
                            alt="img1"
                            className="object-cover h-14 w-14 rounded-full"
                          />
                          <span
                            className="absolute bottom-0 -right-2 w-5 h-6
                           bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <FaQuoteLeft className="text-sm text-white" />
                          </span>
                        </div>

                        <div className="leading-3">
                          <strong className="block text-heading text-lg">
                            {item.name}
                          </strong>
                          <span className="text-sm">{item.titlerole}</span>
                        </div>
                      </div>

                      <div>
                        <blockquote className="text-body">
                          『{item.testimony}』
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 右 */}
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-yellowLight rounded-full mb-6" />

                  <div className="bg-white p-7 rounded-lg w-full mb-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialsContent.testimonials[1].img}
                          width={579}
                          height={720}
                          alt="img2"
                          className="object-cover w-14 h-14 rounded-full"
                        />
                        <span
                          className="absolute bottom-0 -right-2 
                        w-6 h-6 bg-green-500 rounded-full flex items-center
                        justify-center"
                        >
                          <FaQuoteLeft className="text-sm text-white" />
                        </span>
                      </div>
                      <div className="leading-3">
                        <strong className="block text-heading text-lg">
                          {testimonialsContent.testimonials[1].name}
                        </strong>
                        <span className="text-sm">
                          {testimonialsContent.testimonials[1].titlerole}
                        </span>
                      </div>
                    </div>

                    <blockquote className="text-body">
                      『{testimonialsContent.testimonials[1].testimony}』
                    </blockquote>
                  </div>
                </div>
                <div
                  className="bg-redLight hidden md:inline-block w-10 h-10 
                lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
