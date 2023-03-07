import React from "react";
import log1 from "../utils/log1.png";
import log2 from "../utils/log2.png";
import log3 from "../utils/log3.png";
import log4 from "../utils/log4.png";
import log5 from "../utils/log5.jpg";

export const Companies = () => {
  return (
    <div className="relative ">
      <div className="absolute bg-slate-200 w-screen h-[100%] opacity-30"></div>
      <div className="py-5  flex justify-between mx-4 md:mx-0 md:px-10 ">
        <img
          src={log1}
          alt=""
          className="h-[30px] w-[50px] md:h-[50px] md:w-[80px] object-cover"
        />
        <img
          src={log2}
          alt=""
          className="h-[30px] w-[50px] md:h-[50px] md:w-[80px] object-cover"
        />
        <img
          src={log3}
          alt=""
          className="h-[30px] w-[50px] md:h-[50px] md:w-[80px] object-cover"
        />
        <img
          src={log4}
          alt=""
          className="h-[30px] w-[50px] md:h-[50px] md:w-[80px] object-cover"
        />
        <img
          src={log5}
          alt=""
          className="h-[30px] w-[50px] md:h-[50px] md:w-[80px] object-cover"
        />
      </div>
    </div>
  );
};
