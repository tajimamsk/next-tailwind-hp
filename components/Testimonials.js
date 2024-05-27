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
      testimony: "",
    },
    {
      img: "/assets/person2.png",
      name: "田中さん",
      titleRole: "ノーマルコースを利用",
      testimony: "",
    },
    {
      img: "/assets/person3.png",
      name: "小林さん",
      titleRole: "スペシャルコースを利用",
      testimony: "",
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div>
        <div>
          {/* 右 */}
          <div>
            <span>{testimonialsContent.text.subtitle}</span>
            <h2>{testimonialsContent.text.title}</h2>
            <p>{testimonialsContent.text.description}</p>
            <div>
              <Link href="">資料ダウンロード</Link>
            </div>
          </div>
          {/* 左 */}
          <div>
            <div>
              {/* ２番目だけ弾く */}
              <div>
                <div>
                  <div>
                    {testimonialsContent.testimonials.map((item, index) => {
                      if (index === 1) return null;
                      return (
                        <div>
                          <div>
                            <Image
                              src={item.img}
                              width={579}
                              height={720}
                              alt="img1"
                            />
                            <span>
                              <FaQuoteLeft />
                            </span>
                          </div>

                          <div>
                            <strong>{item.name}</strong>
                            <span>{item.titlerole}</span>
                          </div>

                          <div>
                            <blockquote>『{item.testimony}』</blockquote>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div>
                    <div />

                    <div>
                      <div>
                        <div>
                          <Image
                            src={testimonialsContent.testimonials[1].img}
                            width={579}
                            height={720}
                            alt="img2"
                          />
                          <span>
                            <FaQuoteLeft />
                          </span>
                        </div>
                        <div>
                          <strong>
                            {testimonialsContent.testimonials[1].name}
                          </strong>
                          <span>
                            {testimonialsContent.testimonials[1].titlerole}
                          </span>
                        </div>
                      </div>

                      <blockquote>
                        『{testimonialsContent.testimonials[1].testimony}』
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
