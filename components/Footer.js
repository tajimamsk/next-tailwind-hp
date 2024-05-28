import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

const footerContent = {
  text: {
    logo: "/assets/logo.png",
    description: "成績はもう上がらないと諦めていませんか？",
    footerLinks: [
      {
        heading: "",
        links: [
          {
            href: "#",
            label: "ホーム",
          },
          {
            href: "#",
            label: "サービス",
          },
          {
            href: "#",
            label: "ソリューション",
          },
          {
            href: "#",
            label: "カスタマー",
          },
          {
            href: "#",
            label: "ブログ・ニュース",
          },
        ],
      },
      {
        heading: "その他",
        links: [
          { href: "#", label: "ブログ・ニュース" },
          { href: "#", label: "サポート" },
          { href: "#", label: "サイトマップ" },
          { href: "#", label: "プライバシーポリシー" },
        ],
      },
    ],
  },
  contact: {
    heading: "連絡先",
    description: "お気軽にお電話ください",
    address: {
      street: "東京都豊島区池袋",
      phone: "(0120)123-4567",
      website: "https://origindoc.com",
    },
  },
};

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          {/* 左 */}
          <div>
            <Link href={"#"}>
              <Image
                src={footerContent.text.logo}
                width={90}
                height={60}
                alt="logo"
              />
            </Link>
            <p>{footerContent.text.description}</p>
            <Link href={"#"}>
              <span>もっと見る</span>
              <span>
                <BiChevronRight />
              </span>
            </Link>
          </div>

          {/* 中 */}
          <div>
            <div>
              {footerContent.text.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3>{footerLink.heading}</h3>
                  <ul>
                    {footerLink.links.map((link, index) => (
                      <li key={index}>
                        <Link href={"#"}>
                          <span>{link.label}</span>
                          <span>
                            <BiChevronRight />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 右 */}
          <div>
            <h3>{footerContent.contact.heading}</h3>
            <p>{footerContent.contact.description}</p>
            <ul>
              <li>
                <FaLocationDot />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>p{footerContent.contact.address.phone}</span>
              </li>
              <li>
                <IoIosLink />
                <span>{footerContent.contact.address.street}</span>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright ORIGIN.Doc 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
