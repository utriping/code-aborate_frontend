"use client";
import React from "react";
import { motion } from "framer-motion";
import apple from "../public/assets/Apple/Apple_Logo_0.svg";
import netflix from "../public/assets/Netflix/Netflix_Logo_0.svg";
import spotify from "../public/assets/Spotify/Spotify_Symbol_0.svg";
import google from "../public/assets/Google/Google_Symbol_0.svg";
import meta from "../public/assets/Meta/Meta_idwdgcJw5c_0.svg";
import Image from "next/image";

const CompanyTicker = () => {
  const logos = [apple, google, meta, netflix, spotify];
  const repeatLogos = [...logos, ...logos, ...logos, ...logos, ...logos];
  return (
    // <section className="mt-5 overflow-hidden">
    //   <div className="border-4 border-l-0 border-r-0 border-[#B10F2E] w-full h-40 bg-[#F3DFC1]">
    //     <div className="p-3 grid grid-cols-2 md:grid-cols-3 flex items-center justify-around h-full">
    //       {[apple, google, meta, netflix, spotify].map((element, index) => {
    //         if (element == meta || element == netflix) {
    //           return (
    //             <Image
    //               src={element}
    //               className="transparent"
    //               key={index}
    //               width={150}
    //               height={150}
    //             ></Image>
    //           );
    //         }
    //         return (
    //           <Image
    //             src={element}
    //             className="transparent"
    //             key={index}
    //             width={70}
    //             height={70}
    //           ></Image>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>

    <section className="mt-10 overflow-hidden">
      <div className="relative border-4 border-l-0 border-r-0 border-[#B10F2E] w-full h-40 bg-[#F3DFC1] flex items-center">
        <motion.div
          className="flex gap-16 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 100,
            repeat: Infinity,
          }}
        >
          {/* First set */}
          {logos.map((element, index) => (
            <Image
              key={index}
              src={element}
              alt="company logo"
              width={element === meta || element === netflix ? 150 : 70}
              height={element === meta || element === netflix ? 150 : 70}
              className="object-contain"
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((element, index) => (
            <Image
              key={`dup-${index}`}
              src={element}
              alt="company logo"
              width={element === meta || element === netflix ? 150 : 70}
              height={element === meta || element === netflix ? 150 : 70}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTicker;
