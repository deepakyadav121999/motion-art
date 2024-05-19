import React from "react";
import '../App.css'

const Content1 = () => {
  return (
    <div className="bg-gray-900 text-white p-2 flex justify-center items-center flex-col gap-10">
      <div className="flex flex-wrap    gap-10 sm:p-3 cetrd">
        <div className="w-3/5 flex flex-col justify-evenly gap-5">
          <p className="sm:text-4xl text-3xl">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </p>
          <p className="text-gray-300">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <div className=" flex justify-center sm:justify-between text-center">
            <p className="bg-gradient-to-r from-indigo-700 via-purple-600 to-orange-400 p-5    sm:w-2/5 rounded-2xl text-xl ">
              Purchase From Envato
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 p-5 items-center">
        <div className="flex justify-center w-3/6 text-center">
          <p className="text-3xl">
            Apply On Any Section Or Enable For Whole Page
          </p>
        </div>

        <div className="flex justify-center flex-col  flex-wrap  sm:flex-row w-full gap-6">
          <div className=" flex flex-col gap-5  p-10 rounded-2xl sm:mb-12 enovo">
            <p className="text-3xl">Apply On Section</p>
            <p className="text-gray-300">
              Apply on section is game-changer, offering an unparalleled way to
              manage apllication directly from your website
            </p>
            <img
              src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png"
              alt=""
            />
          </div>

          <div className="  flex flex-col gap-5 p-10 rounded-2xl sm:mt-12 enovo">
            <p className="text-3xl">Apply On Page</p>
            <p className="text-gray-300">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
            <img 
              src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
