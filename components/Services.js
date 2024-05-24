"use client";
import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const servicesContent = {
  text: {
    subtitle: "グローシードの特徴",
    title: "Reactに強い!",
    description: "React! React! React! React! React! React! React!",
  },
  items: [
    {
      icon: "/assets/icon-1.svg",
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
    {
      icon: "/assets/icon-2.svg",
      title: "教材費",
      description: "Udemyの費用を全額補助いたします。",
    },
    {
      icon: "/assets/icon-3.svg",
      title: "研修",
      description:
        "２ヶ月の研修を受けていただき、ポートフォリオを作成していただきます。",
    },
    {
      icon: "/assets/icon-4.svg",
      title: "福利厚生",
      description:
        "通勤手当、保険各種、IT機器購入制度、ChatGPT権限制度、GitHub Copilot権限制度など",
    },
    {
      icon: "/assets/icon-5.svg",
      title: "給与",
      description:
        "月給30万円〜60万円 ※固定残業代45時間分含む。時間超過分は追加支給します。",
    },
    {
      icon: "/assets/icon-6.svg",
      title: "勤務時間",
      description:
        "9:00〜18:00あるいは10:00〜19:00（休憩1時間/実働8時間）※プロジェクトにより異なる場合があります。※残業時間：月10時間程度。個人差あり。",
    },
  ],
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        {/* top */}
        <div
          className="max-w-xl mx-auto text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span
            className="inline-block py-1 pl-3 text-heading font-semibold relative mb-7 
            before:content-[' '] before:absolute before:w-2/3 before:bg-pinkLight before:left-0
            before:top-0 before:bottom-0 before:-z-10 z-50"
          >
            {servicesContent.text.subtitle}
          </span>
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
            {servicesContent.text.title}
          </h2>
          <p className="text-body leading-relaxed">
            {servicesContent.text.description}
          </p>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item, index) => {
            index *= 100;
            return (
              <div
                key={index}
                className="flex space-x-10"
                data-aos="fade-up"
                data-aos-delay={index}
              >
                <div className="w-14 shrink-0">
                  <span
                    className="inline-flex items-center justify-center p-2 
                w-[70px] h-[70px] rounded-lg bg-white shadow-2xl"
                  >
                    <Image src={item.icon} width={60} height={60} alt="icon" />
                  </span>
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-3">{item.title}</h3>
                  <p className="leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
