import React from "react";
import logo from "../utils/logo.png";

export const Navbar = () => {
  return (
    <div className="" id="home">
      <div className="top flex justify-between items-center bg-slate-100 p-3">
        <h1 className="text-slate-600 text-xs md:text-xl pl-5">
          {" "}
          Welcome to our consulting Agency
        </h1>

        <div className="flex items-center ">
          <div className="flex">
            <i className="bi bi-facebook md:text-2xl pl-1 md:pl-3"></i>
            <i className="bi bi-twitter md:text-2xl pl-1 md:pl-3"></i>
            <i className="bi bi-instagram md:text-2xl pl-1 md:pl-3"></i>
          </div>
          <button className="quote p-2 md:p-2 ml-5  text-[8px] md:text-[13px]">
            Get A Quote
          </button>
        </div>
      </div>
      <div className="mid flex flex-col justify-between items-center pb-1 px-7 bg-purple-100 py-2">
        <div className="lg:flex justify-between items-center w-screen ">
          <div className="flex items-center justify-center lg:justify-start  lg:pt-0 lg:mt-4  ml-[-60px] sm:ml-[0]">
            <img src={logo} alt="" className="h-[60px]" />
            <h6 className="text-3xl font-bold  text-purple-800 ">Consultae</h6>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-x-6 gap-y-5  mt-3 lg:mt-0">
            <div>
              <div className="flex items-center justify-center">
                <div className="mt-[-10px]">
                  <i className=" pr-4 bi bi-telephone-fill text-md text-purple-800 "></i>
                </div>
                <div className="flex flex-col gap-y-0">
                  <h3 className="text-sm text-slate-700 p-0 font-semibold  mytext ">
                    08112037963
                  </h3>
                  <h3 className="text-sm text-slate-700">
                    ajayitamilore@gmail.com
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div className="mt-[-10px]">
                  <i className=" pr-4 bi   bi-geo-fill text-md text-purple-800 "></i>
                </div>
                <div className="flex flex-col gap-y-0">
                  <h3 className="text-sm text-slate-700 p-0 font-semibold">
                    40 Barly street, Behind Tipper garage
                  </h3>
                  <h3 className="text-sm text-slate-700 mytext">
                    Ojota, Lagos
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center ">
                <div className="mt-[-10px]">
                  <i className=" pr-4 bi bi-calendar-event text-md text-purple-800 "></i>
                </div>
                <div className="flex flex-col gap-y-0">
                  <h3 className="text-sm text-slate-700 p-0 font-semibold">
                    8am - 10pm
                  </h3>
                  <h3 className="text-sm text-slate-700">Monday-Friday</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fuchsia-900 p-1 w-[75vw] mb-[-30px] rounded-lg z-10">
          <div className="flex justify-center">
            <a href="#home">
              <h3 className="text-[11px] sm:text-sm md:text-xl pl-5 md:pt-1 pt-2 text-white  hover:scale-110 cursor-pointer transition">
                HOME
              </h3>
            </a>
            <a href="#about">
              <h3 className="text-[11px] sm:text-sm md:text-xl pl-5 md:pt-1 pt-2 text-white hover:scale-110 cursor-pointer   transition ">
                ABOUT
              </h3>
            </a>
            <a href="#services">
              <h3 className="text-[11px] sm:text-sm md:text-xl pl-5 md:pt-1 pt-2 text-white hover:scale-110 cursor-pointer   transition ">
                SERVICES
              </h3>
            </a>
            <a href="#contact">
              <h3 className="text-[11px] sm:text-sm md:text-xl pl-5 md:pt-1 pt-2 text-white hover:scale-110 cursor-pointer    transition  ">
                CONTACT US
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
