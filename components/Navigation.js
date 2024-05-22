"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";

const navigationMenu = [
  {
    href: "#home",
    label: "ホーム",
  },
  {
    href: "#services",
    label: "サービス",
  },
  {
    href: "#solutions",
    label: "ソリューション",
  },
  {
    href: "#testiomonials",
    label: "カスタマー",
  },
  {
    href: "#blog",
    label: "ブログ・ニュース",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  // 768以上
  const [mobile, setMobile] = useState({});
  useEffect(() => {
    function handleResize() {
      setMobile({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (mobile.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {/* web menu */}
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={90}
                  height={60}
                  alt="ロゴ"
                />
              </Link>
            </div>

            {/* menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={index} className="text-body">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* button */}
            <div>
              <Link
                href={"#"}
                className="btnBlue inline-flex lg:inline-block max-lg:hidden"
              >
                申し込み
              </Link>

              {/* for mobile */}
              <button onClick={mobileMenuHandler} className="block lg:hidden">
                <HiOutlineBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div className={navOpen ? "py-0 block w-screen z-[999]" : "hidden"}>
        <div
          onClick={mobileMenuHandler}
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
        >
          <div className="h-screen bg-white w-[380px] top-0 right-0 z-[999] fixed">
            <div className="h-14 px-10 border-b flex items-center">
              <button
                onClick={mobileMenuHandler}
                className="flex items-center space-x-3"
              >
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20">
              <ul className="block mb-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setNavOpen(false)}
                      className="group flex items-center py-2 duration-300 
                      transition-all ease-out hover:text-green-500"
                    >
                      <span>{item.label}</span>
                      <span
                        className="relative left-2 duration-300 transition-all 
                        ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3"
                      >
                        <BiChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
