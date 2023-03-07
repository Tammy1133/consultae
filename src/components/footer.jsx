import React from "react";
import logo from "../utils/logo.png";

export const Footer = () => {
  return (
    <div className="  bg-fuchsia-800 text-white  ">
      <div className=" py-5 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex  items-center">
            <img src={logo} alt="" className="h-[50px]" />
            <h4 className="font-bold">Consultae</h4>
          </div>

          <div className="pt-3 font-semibold ml-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            necessitatibus?
          </div>
        </div>

        <div className="pt-10 md:pt-0 md:pl-6 pl-2">
          <h2>Newsletter</h2>

          <div className="mt-3">
            <p className="max-w-[80%]">
              Subscribe to our newsletter to get more information
            </p>
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-slate-800 text-white w-[75%] py-2 pl-2 outline-none"
            />
            <button className="w-[75%] bg-purple-600 rounded-md py-2 mt-6">
              {" "}
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-2 flex justify-center items-center w-screen bg-fuchsia-900 text-white">
        <h4 className="pt-2">&copy; Tammy</h4>

        <p className="pt-3 md:pt-4  pl-5">All rights reserved</p>
      </div>
    </div>
  );
};
