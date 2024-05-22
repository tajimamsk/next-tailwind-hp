import Image from "next/image";
import Link from "next/link";
import React from "react";
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
              <button className="block lg:hidden">
                <HiOutlineBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div>
        <div>
          <div>
            <div>
              <button>
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="">
                    <span>ホーム</span>
                    <span>
                      <BiChevronRight />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
