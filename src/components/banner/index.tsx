import React from "react";
import space from "@/icon/space.svg";
import BtnCustom from "../button/btn-custom";

import image from "@/images/image 33.svg";
import image1 from "@/images/image (1).svg";
import image2 from "@/images/image.svg";
import image3 from "@/images/image (2).svg";
import image4 from "@/images/image (3).svg";
import Link from "next/link";

import OrbitingPlanets from "./orbit-banner";

const Banner = () => {
  const images = [image, image1, image2, image3, image4];

  return (
    <main className="relative py-8">
      <BtnCustom
        icon={space}
        title="Beta release"
        className="w-[142px] h-[36px] mx-auto relative z-10"
      />
      {/* bg banner */}
      <div className="w-full relative z-[5] top-0 left-0">
        <div className="w-full h-[190px] md:h-[356px] relative overflow-hidden ">
          <div className="absolute z-[5] w-full md:h-[715px] h-[380px] top-0 left-0 overflow-hidden">
            <OrbitingPlanets />
          </div>

          <div
            className="absolute z-10 w-full h-1/2 bottom-0 left-0
          bg-gradient-to-t from-white from-[0.5%] via-transparent to-transparent"
          ></div>
        </div>
      </div>

      {/* banner content */}
      <section className="w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto relative z-10">
        <div className="px-4">
          <h2 className="text-[#0E121B] text-[40px] lg:text-[64px] font-normal leading-[46px] lg:leading-[84px] text-banner font-chakra_petch">
            No Code. <br className=" block md:hidden" />
            No Limits. <br /> Infinite Creativity.
          </h2>
          <p className="w-full lg:w-[514px] mx-auto text-center text-base font-inter text-[#666] mt-3 mb-6">
            Turn your AI dreams into reality with Xetra AI - no coding, no
            limits, just unstoppable innovation on a censorship-resistant
            blockchain.
          </p>
          <Link
            href={"https://dapp.xetra.io"}
            target="_blank"
            className="w-[344px] mx-auto flex items-center justify-center gap-4"
          >
            <button className="px-6 py-3 bg-launch-app-1 border-[#FF6A001F] rounded-lg overflow-hidden text-[#FFFFFF] text-sm font-semibold">
              Launch App
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Banner;
