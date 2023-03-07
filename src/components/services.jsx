import React from "react";

export const Services = () => {
  return (
    <div>
      <h5 className="font-bold text-3xl text-center   ">Our services</h5>
      <div className="border-t-4 border-fuchsia-800 w-20 mx-auto"></div>

      <div className="mt-5 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        <div className="flex  ">
          <div className=" mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-calendar-minus text-white text-2xl"></i>
          </div>
          <div>
            <h5 className="text-xl">Corporate Finance</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
        <div className="flex  ">
          <div className="mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-bar-chart-steps text-white text-2xl"></i>
          </div>
          <div>
            <h5 className="text-xl">Economic consulting</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
        <div className="flex  ">
          <div className="mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-bell text-white text-2xl"></i>
          </div>
          <div>
            <h5 className="text-xl">Forensic</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
        <div className="flex  ">
          <div className="mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-alarm text-white text-2xl"></i>
          </div>
          <div>
            <h5 className="text-xl">Strategic communications</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
        <div className="flex  ">
          <div className="mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-cpu text-white text-2xl"></i>
          </div>
          <div>
            <h5 className="text-xl">Technology consulting</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-[-10px] p-3 rounded-full bg-fuchsia-800 flex items-center justify-center mr-4">
            <i className="bi bi-bell text-white text-2xl "></i>
          </div>
          <div>
            <h5 className="text-xl">Healthcare consulting</h5>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi, sunt explicabo esse laborum rerum error soluta incidunt
              assumenda ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
