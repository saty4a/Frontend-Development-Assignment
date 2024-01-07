import React from "react";
import nuxt from "../assets/Logo-1.png";
import miro from "../assets/Logo-2.png";
import lottieFiles from "../assets/Logo-3.png";
import wise from "../assets/Logo-4.png";
import dribbble from "../assets/Logo-5.png";
import kinsta from "../assets/Logo-6.png";
import angelList from "../assets/Logo-7.png";
import behance from "../assets/Logo-8.png";
import Image from "next/image";

const LogoSection = () => {
  const images = [
    { img: nuxt, alt: "nuxt" },
    { img: miro, alt: "miro" },
    { img: lottieFiles, alt: "lottieFiles" },
    { img: wise, alt: "wise" },
    { img: dribbble, alt: "dribbble" },
    { img: kinsta, alt: "kinsta" },
    { img: angelList, alt: "angelList" },
    { img: behance, alt: "behance" },
  ];
  return (
    <section className="reveal flex flex-wrap gap-0 justify-center my-[5rem] md:gap-5">
      {images &&
        images.map((data, index) => (
          <Image
            src={data.img}
            className="w-[81px] mt-4 md:w-[114px]"
            key={index}
            alt={data.alt}
          />
        ))}
    </section>
  );
};

export default LogoSection;
