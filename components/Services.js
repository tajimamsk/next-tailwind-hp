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
    <section id="services">
      <div>
        {/* top */}
        <div>
          <span>{servicesContent.text.subtitle}</span>
          <h2>{servicesContent.text.title}</h2>
          <p>{servicesContent.text.description}</p>
        </div>
        {/* bottom */}
        <div>
          {servicesContent.items.map((item, index) => (
            <div key={index}>
              <div>
                <span>
                  <Image src={item.icon} width={60} height={60} alt="icon" />
                </span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
