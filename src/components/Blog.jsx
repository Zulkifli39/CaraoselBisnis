import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import arrow from "../assets/arrow.png";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Creating StreamLined Safegurding Processes with Oneren",
      image: blog1,
    },
    {
      id: 2, // Ubah id agar unik
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog2,
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: blog3,
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 text-sm mb-8 md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta.
          </p>
        </div>

        {/* All Blogs */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative cursor-pointer mx-auto w-full max-w-xs mb-32"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-t-md"
              />
              <div className="text-center px-4 py-6 bg-white shadow-lg rounded-b-md absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-11/12 md:w-3/4 rounded-t-md">
                <h3 className="text-xl font-semibold mb-2 h-36">
                  {blog.title}
                </h3>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <a
                    href="/"
                    className="font-bold text-brandPrimary hover:text-neutral-600 flex items-center"
                  >
                    More All Customers
                    <img src={arrow} alt="" className="ml-2 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
