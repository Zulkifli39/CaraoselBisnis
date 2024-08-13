import React from "react";
// Logo Company
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";

function Services() {
  const service = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Vector,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Vector1,
    },
    {
      id: 1,
      title: "Clubs And Groups ",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Vector2,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutral">Our clients</h2>
        <p className="text-neutralDGrey ">
          We heve bee working with some fortune 500+ clients
        </p>

        {/* Company LOgo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={logo} alt="" />
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </div>
      {/* Services Card */}
      <div className="mt-20 md:1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3 ">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {service.map((servic) => (
          <div
            key={servic.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <img
                src={servic.image}
                alt={servic.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {servic.title}
            </h4>
            <p className="text-gray-500 text-center">{servic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
