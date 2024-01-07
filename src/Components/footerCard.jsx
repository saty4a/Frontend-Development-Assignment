import React from "react";

const FooterCard = ({ data }) => {
  return (
    <div className="text-start flex flex-col gap-3 w-[208px] lg:w-[170px] xl:w-[170px]">
      <h5 className="text-[#24282F] text-base font-bold mb-3">{data.title}</h5>
      <p className="footer-text">{data.content1}</p>
      <p className="footer-text">{data.content2}</p>
      <p className="footer-text">{data.content3}</p>
      <p className="footer-text">{data.content4}</p>
    </div>
  );
};

export default FooterCard;
