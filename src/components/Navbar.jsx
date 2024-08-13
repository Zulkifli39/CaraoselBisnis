import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaX, FaBars } from "react-icons/fa6";

import foto from "../assets/foto.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Perbaikan: removeEventListener
    };
  }, []); // tambahkan dependensi kosong agar useEffect hanya dipanggil sekali

  // Navbar Items Array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={foto} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Nexcent</span>
          </a>

          {/* Nav Items  */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  offset={-100}
                  className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button large devices */}
        

          {/* Menu BTN For MOBILE */}
          <div className="md:hidden">
            <button
              className="focus:outline-none focus:text-gray-500 text-neutralDGrey"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaX className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navitems for Mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              offset={-100}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
