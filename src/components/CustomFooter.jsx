import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import foto from "../assets/foto.png";

function CustomFooter() {
  return (
    <>
      <FlowbiteFooter>
        <div className="w-full px-10 mb-6 ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8 mt-4">
              <img
                src={foto}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238] pl-2 font-bold">Nexcent</span>
              <div>
                <p className="mb-2">Copyright @ 2024 mhadzulkffly</p>
                <p>All right Reserved</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FlowbiteFooter.Title title="about" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">
                    Tailwind CSS
                  </FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Follow us" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
              <div>
                <FlowbiteFooter.Title title="Legal" />
                <FlowbiteFooter.LinkGroup col>
                  <FlowbiteFooter.Link href="#">
                    Privacy Policy
                  </FlowbiteFooter.Link>
                  <FlowbiteFooter.Link href="#">
                    Terms &amp; Conditions
                  </FlowbiteFooter.Link>
                </FlowbiteFooter.LinkGroup>
              </div>
            </div>
          </div>
          <FlowbiteFooter.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
              <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
              <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
              <FlowbiteFooter.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    </>
  );
}

export default CustomFooter;
