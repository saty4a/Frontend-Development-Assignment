import React from "react";
import logo from "../assets/Logo.png";
import Image from "next/image";
import FooterCard from "@/Components/footerCard";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      content1: "About us",
      content2: "Pricing",
      content3: "Contact us",
      content4: "Features",
    },
    {
      title: "Product",
      content1: "Figma design system",
      content2: "Ios kit",
      content3: "Android kit",
      content4: "Wireframe",
    },
    {
      title: "Resources",
      content1: "Templates",
      content2: "Landing pages",
      content3: "Documentation",
      content4: "Comp library",
    },
    {
      title: "Legal",
      content1: "Privacy policy",
      content2: "Terms & Conditions",
      content3: "Disclaimer",
      content4: "Affiliate programme",
    },
    {
      title: "Support",
      content1: "Help centre",
      content2: "Raise ticket",
      content3: "Report",
      content4: "Refund",
    },
  ];
  return (
    <section className="reveal border-t-2 md:pt-10">
      <Image src={logo} className="mt-10 md:m-auto" alt="logo" />
      <p className="ms-4 mt-5 text-base text-[#5A6475] font-medium text-start md:text-center md:w-2/3 md:m-auto lg:w-1/2 xl:w-2/5">
        Mode UI is a comprehensive design system that empowers designers and
        developers to create cohesive and visually stunning user interfaces
        across various platforms and devices
      </p>
      <div className="flex flex-wrap flex-col md:justify-between lg:justify-evenly gap-5 mt-10 ms-4 md:w-3/5 lg:ms-0 lg:w-full  md:flex-row">
        {footerData &&
          footerData.map((data, index) => (
            <FooterCard data={data} key={index} />
          ))}
      </div>
      <div className="flex gap-2 lg:gap-4 ms-4 my-5 lg:my-7 text-[#5A6475] justify-start md:justify-center">
        <FaGithub className="cursor-pointer" size={20} />
        <FaLinkedin className="cursor-pointer" size={20} />
        <FaDiscord className="cursor-pointer" size={20} />
      </div>
      <p className="ms-4 mb-5 text-sm text-[#5A6475] font-normal text-start md:text-center">
        © 2023 Mode UI Inc. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
