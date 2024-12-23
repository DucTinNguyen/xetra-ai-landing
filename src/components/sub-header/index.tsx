/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ic_arrow_right from "@/icon/arrow-circle-right.svg";
import telegram from "@/icon/telegram.svg";
import github from "@/icon/github.svg";
import x from "@/icon/x.svg";
import national from "@/icon/naltional.svg";
import medium from "@/icon/medium.svg";
import Image from "next/image";

// const socials = [telegram, x, medium, github]
const socials = [
  {
    link: "https://t.me/XetraAI",
    icon: telegram,
  },
  {
    link: "https://x.com/XetraAI",
    icon: x,
  },
  {
    link: "https://dapp.xetra.io/",
    icon: medium,
  },
  {
    link: "https://docs.xetra.io",
    icon: github,
  },
];
const InformationSocial = () => {
  return (
    <main className="bg-[#1B1B1B] h-[44px] lg:h-10">
      <section className="w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto flex items-center h-full justify-between">
        <div className="px-3 py-2 flex items-center justify-center lg:justify-start w-full lg:w-fit gap-x-[10px]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#FF6A00] inline-block"></span>
          <span className="text-white text-xs font-inter font-medium">
            Unleashing an ecosystem of apps
          </span>
          <Image src={ic_arrow_right} alt="icon" />
        </div>
        <section className=" hidden lg:flex items-center">
          <div className="flex items-center px-4 py-1">
            <span className="text-white text-sm font-normal text-clip">
              let's connect
            </span>
            <figure className="flex gap-x-4 ml-4">
              {socials.map((item, index) => {
                return (
                  <Image
                    src={item.icon}
                    key={index}
                    alt={""}
                    className="cursor-pointer"
                  />
                );
              })}
            </figure>
          </div>
          <span className="w-[1px] h-6 bg-[#D8D8D8] inline-block mx-2"></span>
          <div className="flex items-center px-4 gap-x-2">
            <Image src={national} alt="national" />
            <span className="text-white font-inter text-sm font-medium">
              EN
            </span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default InformationSocial;
