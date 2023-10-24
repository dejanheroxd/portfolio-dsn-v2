import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  console.log(isNavActive);

  function activateNav() {
    setIsNavActive(true);
  }

  function deactivateNav() {
    setIsNavActive(false);
  }

  return (
    <nav className="text-white font-semibold h-24 px-6 absolute top-0 left-0 right-0 flex items-center sm:justify-between sm:px-8 sm:h-20">
      <Link to="/">
        <span>©</span> Code by Dennis
      </Link>
      {isNavActive && (
        <ul className="flex gap-x-9 fixed top-0 left-0 bottom-0 right-0 z-40 bg-dennisDark">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      )}
      {isNavActive && (
        <button
          onClick={() => deactivateNav()}
          className={`${
            isNavActive ? "bg-dennisBlue-100" : "bg-dennisDark"
          } rounded-full fixed top-4 right-4 sm:top-6 sm:right-6 flex justify-center items-center w-[70px] h-[70px] z-50`}
        >
          <div className="relative">
            <span className=" bg-white h-[1px] w-[23px] block absolute top-[-2px] left-[-11px]"></span>
            <span className=" bg-white h-[1px] w-[23px] block absolute top-[2px] left-[-11px]"></span>
          </div>
        </button>
      )}
      {!isNavActive && (
        <button onClick={() => activateNav()} className="absolute right-6 z-40">
          Menu
        </button>
      )}
    </nav>
  );
}
