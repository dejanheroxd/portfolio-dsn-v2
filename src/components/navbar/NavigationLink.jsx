import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLink({ leftMargin, name, path }) {
  return (
    <li className="group/ulinks relative">
      <span
        className={`invisible absolute bottom-[-10px] ${leftMargin} group-hover/ulinks:visible`}
      >
        <span
          className={`${
            location.pathname === "/" ? "bg-white" : "bg-dennisDark"
          } block h-[6px] w-[6px] rounded-full`}
        ></span>
      </span>
      <Link
        className={`${
          location.pathname === "/" ? "text-white" : "text-dennisDark"
        }`}
        to={`/${path}`}
      >
        {name}
      </Link>
    </li>
  );
}
