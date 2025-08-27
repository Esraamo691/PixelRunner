import React from "react";
import homeImg from "../../assets/homeImg.png";
export default function Home() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-8/12">
          <div className="p-3">
            <h1 className=" text-6xl font-bold mb-5">
              Manage Your Activity With <span className=" text-indigo-600">Apprexy</span>
            </h1>
            <p className=" text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              et ipsa placeat quidem ut voluptate quo reiciendis minus vero
              facilis.
            </p>
            <button className="px-4 py-3 border rounded-xl mt-3 hover:bg-slate-800 hover:text-slate-100 hover:dark:bg-slate-100 hover:dark:text-slate-800">Get Started Today</button>
          </div>
        </div>
        <div className="w-4/12">
          <img src={homeImg} className="w-full" />
        </div>
      </div>
    </>
  );
}
