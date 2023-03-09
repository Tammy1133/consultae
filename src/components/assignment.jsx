import React from "react";

export const Assignment = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-700 py-4 px-5">
        <h3 className="text-white text-3xl uppercase">Logo</h3>
        <div className="flex gap-5 font-bold uppercase text-xl text-white">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        <button className="p-2 uppercase bg-green-700 hover:bg-white hover:text-black ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Assignment;
