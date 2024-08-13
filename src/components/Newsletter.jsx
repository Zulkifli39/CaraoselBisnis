import React from "react";

function Newsletter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 -mt-6 ">
      <div className="">
        <div className="text-center ">
          <div className="lg-text-5xl w-full mx-auto text-2xl text-neutral-800 font-semibold mb-6 lg-leading-snug">
            <h2 className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perspiciatis iste excepturi quam, soluta error.
            </h2>
            <div className="flex items-center justify-center gap-8">
              <button className="bg-brandPrimary text-white text-lg m-2 p-3 mt-6 rounded-md ">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
