import React from "react";
import restingimage from "../utils/resting.png";

export const Hero = () => {
  return (
    <div className="relative">
      <img
        src={restingimage}
        alt=""
        className="absolute w-screen object-cover h-[70vh] brightness-50"
      />

      <div className="relative flex flex-col justify-center h-[70vh]">
        <h2
          className="font-bold text-xl sm:text-3xl md:text-4xl text-white ml-[40px]  "
          //   style={{ wordSpacing: "12px", lineHeight: "47px" }}
        >
          Communication is the key <br />
          for any Global business
        </h2>

        <div className="mt-3 flex ml-[40px] ">
          <div></div>
          <button className="quotewhite p-2 hover:text-white hover:bg-fuchsia-800 hover:scale-110">
            ABOUT US
          </button>
          <button className="quote   ml-5 p-2  hover:text-blue-800 hover:bg-slate-300">
            OUR SERVICES
          </button>
        </div>
      </div>

      <div className="bg-fuchsia-900 text-white pl-3 md:pl-16 py-3 flex  flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <p className="p-0 m-0 font-bold pt-2">
            Would you like to speak to one of our financial advisors?
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            magni?
          </p>
        </div>
        <button
          className="quote py-2 md:mr-20 lg:mr-48  md:h-14 hover:bg-purple-200 hover:text-purple-900 font-bold  "
          style={{ width: "150px" }}
        >
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};
