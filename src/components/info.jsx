import React from "react";
import pana from "../assets/pana.png";
import icon from "../assets/icons/icon.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";

function Info() {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6">
      <div className="flex flex-col lg:flex-row items-center justify-between  p-6 w-full max-w-6xl mb-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img src={pana} alt="Illustration" className="w-72 h-auto" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Company Status */}
      <div className="px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3 ">
              Helping a local <br />
              <span className="text-brandPrimary">Busines reinvent itself</span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 mx-auto my-16 md:my-0 flex sm:flex-row flex-col sm:items-center justify-around space-y-8 md:space-y-0 ">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icon} alt="" />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={icon1} alt="" />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,342
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icon2} alt="" />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,343
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={icon3} alt="" />
                <div className="">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,344
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
