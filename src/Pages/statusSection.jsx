import React from "react";

const StatusSection = () => {
  const statusDetails = [
    {
      title: "2 Million",
      subTitle: "Customers",
    },
    {
      title: "1K",
      subTitle: "Downloads",
    },
    {
      title: "$73 Million",
      subTitle: "Transaction",
    },
    {
      title: "2.0",
      subTitle: "Latest Version",
    },
  ];
  return (
    <section className="reveal flex flex-col my-[5rem] lg:flex-row">
      {statusDetails &&
        statusDetails.map((data, index) => (
          <div className="flex flex-col items-center my-[3rem] gap-4" key={index}>
            <p className="text-4xl text-[#582066] font-semibold">
              {data.title}
            </p>
            <p className="text-base font-medium">{data.subTitle}</p>
            <p className="text-sm font-medium text-[#5A6475] w-3/4 md:w-[30%] lg:w-3/5">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
        ))}
    </section>
  );
};

export default StatusSection;
