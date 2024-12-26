import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import o1 from "@/images/banner/orbit/o1.svg";
import o2 from "@/images/banner/orbit/o2.svg";
import o3 from "@/images/banner/orbit/o3.svg";
import o4 from "@/images/banner/orbit/o4.svg";
import o5 from "@/images/banner/orbit/o5.svg";
import o6 from "@/images/banner/orbit/o6.svg";
import o7 from "@/images/banner/orbit/o7.svg";
import o8 from "@/images/banner/orbit/o8.svg";
import o9 from "@/images/banner/orbit/o9.svg";
import o10 from "@/images/banner/orbit/o10.svg";
import outline01 from "@/images/banner/orbit/outline1.png";

import logo from "@/images/banner/orbit/logo.svg";

const OrbitingPlanets = () => {
  const [scale, setScale] = useState(1);
  const MAX_WIDTH = 714;

  useEffect(() => {
    const updateScale = () => {
      const container = document.querySelector(".orbit-container");
      if (container) {
        const width = container.clientWidth;
        setScale(Math.min(width, MAX_WIDTH) / MAX_WIDTH);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const generateCirclePath = (
    baseRadius: number,
    phaseOffset = 0,
    reverse = false
  ) => {
    const radius = baseRadius * scale;
    const points = 60;
    const xPoints = [];
    const yPoints = [];

    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2 + phaseOffset;
      xPoints.push(Math.cos(reverse ? -angle : angle) * radius);
      yPoints.push(Math.sin(reverse ? -angle : angle) * radius);
    }

    return { x: xPoints, y: yPoints };
  };

  const orbits = {
    orbit12: { radius: 357, offset: Math.PI * (170 / 180) },
    orbit34: { radius: 307, offset: Math.PI * (150 / 180) },
    orbit5: { radius: 270 },
    orbit67: { radius: 230, offset: Math.PI * (160 / 180) },
    orbit89: { radius: 190, offset: Math.PI * (160 / 180) },
    orbit10: { radius: 148 },
  };

  const paths = {
    path1: generateCirclePath(orbits.orbit12.radius, 0),
    path2: generateCirclePath(orbits.orbit12.radius, orbits.orbit12.offset),
    path3: generateCirclePath(orbits.orbit34.radius, 0, true), // Reverse ring 2
    path4: generateCirclePath(
      orbits.orbit34.radius,
      orbits.orbit34.offset,
      true
    ), // Reverse ring 2
    path5: generateCirclePath(orbits.orbit5.radius),
    path6: generateCirclePath(orbits.orbit67.radius, 0, true), // Reverse ring 4
    path7: generateCirclePath(
      orbits.orbit67.radius,
      orbits.orbit67.offset,
      true
    ), // Reverse ring 4
    path8: generateCirclePath(orbits.orbit89.radius, 0),
    path9: generateCirclePath(orbits.orbit89.radius, orbits.orbit89.offset),
    path10: generateCirclePath(orbits.orbit10.radius),
  };

  const ringScales = Object.values(orbits).map(
    (orbit) => (orbit.radius * 2) / MAX_WIDTH
  );

  return (
    <div className="orbit-container relative w-full h-full max-h-[715px] flex items-center justify-center">
      {ringScales.map((ringScale, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            width: `${MAX_WIDTH}px`,
            height: `${MAX_WIDTH}px`,
            transform: `scale(${ringScale * scale})`,
          }}
        >
          <Image
            src={outline01}
            alt={`orbit-ring-${index + 1}`}
            className="w-full h-full"
          />
        </div>
      ))}

      <Image
        src={logo}
        alt="logo"
        className="absolute z-50 -mt-16 animate-[bounce_2.5s_infinite]"
        style={{
          transform: `scale(${scale})`,
        }}
      />

      <motion.div
        className="absolute z-10"
        animate={{ x: paths.path1.x, y: paths.path1.y }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o1} alt="orbit1" />
      </motion.div>

      <motion.div
        className="absolute z-10"
        animate={{ x: paths.path2.x, y: paths.path2.y }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o2} alt="orbit2" />
      </motion.div>

      <motion.div
        className="absolute z-20"
        animate={{ x: paths.path3.x, y: paths.path3.y }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src={o3}
          alt="orbit3"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute z-20"
        animate={{ x: paths.path4.x, y: paths.path4.y }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src={o4}
          alt="orbit4"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute z-30"
        animate={{ x: paths.path5.x, y: paths.path5.y }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o5} alt="orbit5" />
      </motion.div>

      <motion.div
        className="absolute z-40"
        animate={{ x: paths.path6.x, y: paths.path6.y }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o6} alt="orbit6" />
      </motion.div>

      <motion.div
        className="absolute z-40"
        animate={{ x: paths.path7.x, y: paths.path7.y }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o7} alt="orbit7" />
      </motion.div>

      <motion.div
        className="absolute z-50"
        animate={{ x: paths.path8.x, y: paths.path8.y }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src={o8}
          alt="orbit8"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute z-50"
        animate={{ x: paths.path9.x, y: paths.path9.y }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src={o9}
          alt="orbit9"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute z-60"
        animate={{ x: paths.path10.x, y: paths.path10.y }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Image src={o10} alt="orbit10" />
      </motion.div>
    </div>
  );
};

export default OrbitingPlanets;
