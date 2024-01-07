import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="flex gap-2 justify-center items-center content-center mx-2 my-2">
      <div className="rounded-2xl border-2 px-3 py-2 border-[#E6E7E9] bg-[#F1F1F2] h-8">
        <p className="text-xs font-medium text-[#363C46]">Announcement</p>
      </div>
      <p className="text-xs font-medium text-start md:text-sm">
        We are happy to announce that we raise $2 Million in Seed Funding
      </p>
    </div>
  );
};

export default AnnouncementBar;
