// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function NavigationLink({ leftMargin, name, path }) {
//   const location = useLocation();
//   const isLocationSame = location.pathname === `${path}`;
//   console.log(`is location same : ${isLocationSame}`);;
//   console.log(path);
//   return (
//     <li className="group/ulinks relative">
//       <span
//         className={`invisible absolute bottom-[-10px] ${leftMargin} group-hover/ulinks:visible`}
//       >
//         <span
//           className={`${
//             location.pathname === "/" || location.pathname === "/contact"
//               ? "bg-white"
//               : "bg-dennisDark"
//           } block h-[6px] w-[6px] rounded-full`}
//         ></span>
//       </span>
//       <Link
//         className={`${
//           location.pathname === "/" || location.pathname === "/contact"
//             ? "text-white"
//             : "text-dennisDark"
//         }`}
//         to={`/${path}`}
//       >
//         {name}
//       </Link>
//     </li>
//   );
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavigationLink({ leftMargin, name, path }) {
  const location = useLocation();
  const isLocationSame = location.pathname === (path === "" ? "/" : `/${path}`);
  // console.log(`is location same : ${isLocationSame}`);
  return (
    <li className="group/ulinks relative">
      <span
        className={`${
          isLocationSame ? "visible" : "invisible"
        } absolute bottom-[-10px] ${leftMargin} group-hover/ulinks:visible`}
      >
        <span
          className={`${
            location.pathname === "/" || location.pathname === "/contact"
              ? "bg-white"
              : "bg-dennisDark"
          } block h-[5px] w-[5px] rounded-full`}
        ></span>
      </span>
      <Link
        className={`${
          location.pathname === "/" || location.pathname === "/contact"
            ? "text-white"
            : "text-dennisDark"
        }`}
        to={path === "" ? "/" : `/${path}`}
      >
        {name}
      </Link>
    </li>
  );
}
