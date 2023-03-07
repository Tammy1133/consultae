import React from "react";
import Strategy from "../utils/strate.jpg";
import mountain from "../utils/mount2.jpg";
import CountUp from "react-countup";

export const About = () => {
  return (
    <div className="my-16">
      <h5 className="font-bold text-3xl text-center   ">About us</h5>
      <div className="border-t-4 border-fuchsia-800 w-20 mx-auto"></div>

      <div className="mt-11 text-center    font-medium">
        <p className="px-4 md:px-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt
          odio nostrum illum reprehenderit quia sint earum officia accusamus
          consequuntur excepturi voluptatum quasi debitis molestiae sequi natus
          vel doloribus corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio pariatur cupiditate doloribus, quisquam dolore
          facere iste vel necessitatibus. Eos vitae porro illum distinctio
          doloremque incidunt a nesciunt sed quia. Illum.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-[50px]">
        <div className=" shadow-2xl flex flex-col items-center py-3">
          <i className="bi bi-currency-exchange text-3xl  text-fuchsia-800"></i>
          <div className="pt-2 font-bold ">Financial Projections</div>
          <div className="pt-2 px-3 text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sed
            quidem repellat, mollitia facere modi dolores architecto molestiae,
            quos quis voluptatibus? Neque placeat officiis enim doloribus.
          </div>
        </div>
        <div className="relative">
          <div className="absolute bg-fuchsia-800 h-[100%] w-[100%] z-30 opacity-25"></div>
          <img
            src={Strategy}
            alt=""
            className="absolute object-cover h-[100%] w-[100%]"
          />

          <div className=" shadow-2xl flex flex-col items-center py-3 relative z-40 text-white">
            <i className="bi bi-search-heart-fill text-3xl  text-white"></i>
            <div className="pt-2 font-bold ">Strategy & Consulting</div>
            <div className="pt-2 px-3 text-sm text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              sed quidem repellat, mollitia facere modi dolores architecto
              molestiae, quos quis voluptatibus? Neque placeat officiis enim
              doloribus.
            </div>
            s
          </div>
        </div>
        <div className=" shadow-2xl flex flex-col items-center py-3">
          <i className="bi bi-headset text-3xl  text-fuchsia-800"></i>
          <div className="pt-2 font-bold ">Online Consulting</div>
          <div className="pt-2 px-3 text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sed
            quidem repellat, mollitia facere modi dolores architecto molestiae,
            quos quis voluptatibus? Neque placeat officiis enim doloribus.
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-36 relative pb-6">
        <div className="absolute bg-fuchsia-900 h-[100%] w-screen z-30 opacity-40"></div>

        <img
          src={mountain}
          alt=""
          className="absolute w-screen h-[100%] object-cover brightness-50"
        />

        <div className="relative px-5 z-50">
          <h4 className="text-white text-center  font-bold text-base sm:text-xl pt-7">
            We advice you, you call the right decisions
          </h4>
          <h4 className="text-white text-center text-xs sm:text-lg">
            We help entrepreneurs get their act together before they talk to
            investors
          </h4>

          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 justify-center text-white">
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-3xl">
                  <CountUp end={100} enableScrollSpy={true} />
                </h3>
                <h3 className="text-base p-0 m-0">Companies controlled</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-3xl">
                  <CountUp end={50} enableScrollSpy={true} />
                </h3>
                <h3 className="text-base p-0 m-0">Consultants</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-3xl">
                  <CountUp end={500} enableScrollSpy={true} />
                </h3>
                <h3 className="text-base p-0 m-0">Awards</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-3xl">
                  <CountUp end={1000} enableScrollSpy={true} />
                </h3>
                <h3 className="text-base p-0 m-0">Consultants</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
