import Image from "next/image";
import React from "react";

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
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
    {
      icon: "/assets/icon-3.svg",
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
    {
      icon: "/assets/icon-4.svg",
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
    {
      icon: "/assets/icon-5.svg",
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
    {
      icon: "/assets/icon-6.svg",
      title: "働き方",
      description: "出社、リモートいずれでもOK!",
    },
  ],
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        {/* top */}
        <div className="max-w-xl mx-auto text-center mb-20">
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
          {servicesContent.items.map((item, index) => (
            <div key={index} className="flex space-x-10">
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
                <p className="leading-relaxed text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
