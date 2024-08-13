import React from "react";
import aboutProduct from "../assets/icons/Product.png";
// Logo
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import arrow from "../assets/arrow.png";
import product1 from "../assets/product1.png";

function Product() {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 w-full max-w-6xl mb-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img src={aboutProduct} alt="Illustration" className="w-72 h-auto" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          The unseen of spending three years at Pixelgrade
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Example</h2>
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

      {/* Company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justift-between items-center gap-8 ">
          <div className="md:w-1/3 ">
            <img src={product1} alt="" className="w-60 mx-auto " />
          </div>
          {/* Stats */}
          <div className="md:w-2/3 mx-auto ">
            <div className="">
              <p className="md:w-10/12 text-sm text-neutralDGrey mb-8 leading-7 text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                architecto mollitia quas aperiam reprehenderit, voluptates animi
                impedit? Veniam quis nulla rem doloremque voluptas blanditiis
                enim, rerum atque eos ullam porro?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium impedit maxime
                dignissimos deserunt repellat repellendus quia, repudiandae eius
                error. Architecto?
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="mb-3 text-base text-neutralDGrey">
                British Dragon Boat Racing Associationly
              </p>
              <div>
                <div className=" flex items-center gap-8 flex-wrap">
                  <img src={logo} alt="" className="cursor-pointer" />
                  <img src={logo1} alt="" className="cursor-pointer" />
                  <img src={logo2} alt="" className="cursor-pointer" />
                  <img src={logo3} alt="" className="cursor-pointer" />
                  <img src={logo4} alt="" className="cursor-pointer" />
                  <img src={logo5} alt="" className="cursor-pointer" />
                  <div className="flex items-center gap-8 ">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-600"
                    >
                      More All Costumers{" "}
                      <img src={arrow} alt="" className="inline-block w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
