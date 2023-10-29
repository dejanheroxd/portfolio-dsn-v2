import React from "react";
import Footer from "../home/FooterSec/Footer";
import man1 from "../../assets/man1.jpg";

export default function Contact() {
  return (
    <>
      <div className="h-[858px] bg-dennisDark">
        <div>
          <div>
            <div>
              <p className="text-[48px] text-white sm:text-[70px] lg:text-[100px] xl:text-[115px] 2xl:text-[120px]">
                Let's get in contact
              </p>
            </div>
            <div>
              <div className="ml-0 mr-[16px] mt-3 h-12 w-12 overflow-hidden rounded-full sm:ml-[-7px] sm:mr-3 sm:mt-5 sm:h-16 sm:w-16 lg:mr-4 lg:mt-6 lg:h-24 lg:w-24 xl:mt-9">
                <img src={man1} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="text-white">
                <p className="text-[10px] text-dennisGray">CONTACT DETAILS</p>
                <p>info.tgd@gmail.com</p>
                <p>+20 9 29 43 75 30</p>
              </div>
              <div className="text-white">
                <p className="text-[10px] text-dennisGray">SOCIALS</p>
                <p>Awwwards</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
