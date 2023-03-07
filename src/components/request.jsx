import React from "react";
import call from "../utils/call.jpg";

export const Request = () => {
  return (
    <div id="contact">
      <div className="  relative">
        <div className="absolute z-30 h-[100%] w-screen bg-fuchsia-800  opacity-50"></div>
        <div className="absolute z-30 h-[100%] w-screen bg-black  opacity-50"></div>
        <img
          className="absolute h-[100%] w-screen object-cover"
          src={call}
          alt=""
        />

        <div className="relative text-white z-40 p-3">
          <h2 className="text-center mt-5 font-bold text-4xl">
            Request a call back
          </h2>
          <p className="mt-1 text-center sm:max-w-[80%] lg:max-w-[50%] mx-auto">
            Would you like to speak to our financial advicers, just submit your
            contact details and we will reach iout to you as soon as possible.
            You can also email us if you prefer that communication channel
          </p>

          <form className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-5 pb-6">
            <input
              type="text"
              className="py-2 px-2 rounded-md"
              placeholder="How can we help you *"
            />
            <input
              type="text"
              className="py-2 px-2 rounded-md"
              placeholder="Your name*"
            />
            <input
              type="text"
              className="py-2 px-2 rounded-md"
              placeholder="Phone number*"
            />

            <button className="hidden md:block uppercase bg-purple-900 rounded-xl">
              Submit
            </button>
          </form>

          <button className=" md:hidden w-[150px] py-2 mt-3 uppercase bg-purple-900 rounded-xl">
            Submit
          </button>
        </div>
      </div>

      <div className=" relative ">
        <div className="absolute z-30 h-[100%] w-screen bg-slate-400  opacity-50"></div>
      </div>
    </div>
  );
};
