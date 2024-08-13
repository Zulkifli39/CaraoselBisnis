import React from "react";
import { Carousel } from "flowbite-react";
import illustraion1 from "../assets/Illustration.png";

function Home() {
  return (
    <div className="bg-neutralSilver ">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel>
          <div className="my-16 md:my-4 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero TExtt */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 years
                </span>
                <p className="text-neutralDGrey text-base mb-8 ">
                  Where to grow business as photographer:site or sicial media?
                </p>
              </h1>
              <button className="btn-primary">Register</button>
            </div>
            {/* Image Hero */}
            <div>
              <img src={illustraion1} alt="" />
            </div>
          </div>
          <div className="my-16 md:my-4  py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero TExtt */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 years
                </span>
                <p className="text-neutralDGrey text-base mb-8 ">
                  Where to grow business as photographer:site or sicial media?
                </p>
              </h1>
              <button className="btn-primary">Register</button>
            </div>
            {/* Image Hero */}
            <div>
              <img src={illustraion1} alt="" />
            </div>
          </div>
          <div className="my-16 md:my-4 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero TExtt */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 years
                </span>
                <p className="text-neutralDGrey text-base mb-8 ">
                  Where to grow business as photographer:site or sicial media?
                </p>
              </h1>
              <button className="btn-primary">Register</button>
            </div>
            {/* Image Hero */}
            <div>
              <img src={illustraion1} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
