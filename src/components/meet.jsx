import React from "react";
import first from "../utils/first.jpg";
import second from "../utils/second.jpg";
import third from "../utils/third.jpg";
import fourth from "../utils/fourth.jpg";

export const Meet = () => {
  return (
    <div>
      <div className="mt-28 bg-gray-200 px-2 md:px-6 pb-24 pt-20">
        <h4 className="text-center font-bold text-3xl">Meet Our Team</h4>
        <p className="text-center max-w-[80%] mx-auto">
          We are here to accelerate your business and make everything better
        </p>

        <div className=" gap-10 px-10 grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src={first}
              alt=""
              className="h-[200px] w-[100%]  rounded-t-md object-cover"
            />

            <div className="bgd bg-fuchsia-800 px-2 py-2 text-white rounded-b-2xl">
              <h3 className="font-bold text-lg text-center pt-1">
                Jack Chriswell
              </h3>
              <p className="text-center text-sm"> Developer</p>
            </div>
          </div>
          <div>
            <img
              src={second}
              alt=""
              className="h-[200px] w-[100%]  rounded-t-md object-cover"
            />

            <div className="bgd bg-fuchsia-800 px-2 py-2 text-white rounded-b-2xl">
              <h3 className="font-bold text-lg text-center pt-1">
                Jonathan Gilberth
              </h3>
              <p className="text-center text-sm"> Marketer</p>
            </div>
          </div>
          <div>
            <img
              src={third}
              alt=""
              className="h-[200px] w-[100%]  rounded-t-md object-cover"
            />

            <div className="bgd bg-fuchsia-800 px-2 py-2 text-white rounded-b-2xl">
              <h3 className="font-bold text-lg text-center pt-1">
                Samuel Godson
              </h3>
              <p className="text-center text-sm"> Sales rep</p>
            </div>
          </div>
          <div>
            <img
              src={fourth}
              alt=""
              className="h-[200px] w-[100%]  rounded-t-md object-cover"
            />

            <div className="bgd bg-fuchsia-800 px-2 py-2 text-white rounded-b-2xl">
              <h3 className="font-bold text-lg text-center pt-1">
                John Brethel
              </h3>
              <p className="text-center text-sm"> Security Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
