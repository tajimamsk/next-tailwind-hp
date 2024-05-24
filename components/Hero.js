"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
  text: {
    subTitle: "グロシードゼミナール",
    title: "はたらくにトキメキを",
    discription:
      "私たちはテクノロジーのエキスパートとして新たな価値と良質なサービスを創造します。お客様と従業員と、成長と尊重の輪を広げ、はたらくにトキメキをつくります。",
  },
  images: {
    img1: "/assets/hero-img-1.jpg",
    img2: "/assets/hero-img-2.jpg",
    img3: "/assets/hero-img-3.jpg",
    img5: "/assets/hero-img-4.jpg",
    img4: "/assets/hero-img-5.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  }, []);

  return (
    <>
      <section id="home" className="py-20 max-md:py-0">
        <div className="container px-4 mx-auto">
          <div
            className="lg:flex justify-between items-center
          max-md: overflow-hidden"
          >
            {/* left */}
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              <span
                className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 
                 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight 
                 before:left-0 before:top-0 before:bottom-0 before:z-[-1]'
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {heroContent.text.subTitle}
              </span>
              <h1
                className="text-4xl lg:text-5xl font-bold text-heading mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {heroContent.text.title}
              </h1>
              <p
                className="leading-relaxed text-body mb-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {heroContent.text.discription}
              </p>
              <div
                className="flex space-x-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link href={""} className="btnGreen">
                  資料はこちらから
                </Link>
                <Link href={""} className="btnBlue">
                  申し込み
                </Link>
              </div>
            </div>

            {/* right */}
            <div className="lg:w-6/12 space-y-2">
              {/* top */}
              <div className="flex space-x-2 items-stretch">
                <div className="w-8/12">
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="img1"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                  />
                </div>
                <div className="w-4/12 self-end space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="img2"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-down"
                        data-aos-delay="100"
                      />
                    </div>
                    <div className="bg-purpleLight rounded-2xl rounded-tr-[200px]" />
                  </div>
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="img3"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    />
                  </div>
                </div>
              </div>

              {/* bottom */}
              <div className="flex space-x-2">
                <div className="w-4/12">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-yellowLight rounded-2xl rounded-bl-[200px]" />
                    <Image
                      src={heroContent.images.img4}
                      width={394}
                      height={394}
                      alt="img4"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    />
                  </div>
                </div>
                <div className="w-5/12">
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="img5"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
