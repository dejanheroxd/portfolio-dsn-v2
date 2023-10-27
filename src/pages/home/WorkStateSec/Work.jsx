// import React from "react";

// export default function Work() {
//   return (
//     <div className="h-[800px] px-40">
//       <div>
//         <p className="text-neutral-500 text-[14px] pb-12 pl-[135px]">
//           Recent Work
//         </p>
//       </div>
//       <div className="border-t border-b h-[248px] border-neutral-300 w-full flex justify-between px-32">
//         <div className="interactable cursor-pointer w-[890px] hover:text-neutral-500/50 hover:ml-[-20px] duration-300 flex items-center text-[109px] text-dennisDark">
//           <p>ENERGYM</p>
//         </div>
//         <div className="flex items-center text-dennisDark text-[19px] gap-x-4">
//           <p>Development</p>
//           <button className="border px-3 py-1 rounded-full border-neutral-300 hover:bg-dennisBlue-100 hover:text-white hover:border-dennisBlue-100 duration-300">
//             Code
//           </button>
//         </div>
//       </div>
//       <div className=" border-b h-[248px] border-neutral-300 w-full flex justify-between px-32">
//         <div className="interactable cursor-pointer w-[890px] hover:text-neutral-500/50 hover:ml-[-20px] duration-300 flex items-center text-[109px] text-dennisDark">
//           <p>DALFORNO</p>
//         </div>
//         <div className="flex items-center text-dennisDark text-[19px] gap-x-4">
//           <p>Development</p>
//           <button className="border px-3 py-1 rounded-full border-neutral-300 hover:bg-dennisBlue-100 hover:text-white hover:border-dennisBlue-100 duration-300">
//             Code
//           </button>
//         </div>
//       </div>
//       <div className=" border-b h-[248px] border-neutral-300 w-full flex justify-between px-32">
//         <div className="interactable cursor-pointer w-[890px] hover:text-neutral-500/50 hover:ml-[-20px] duration-300 flex items-center text-[109px] text-dennisDark">
//           <p>MARCO</p>
//         </div>
//         <div className="flex items-center text-dennisDark text-[19px] gap-x-4">
//           <p>Development</p>
//           <button className="border px-3 py-1 rounded-full border-neutral-300 hover:bg-dennisBlue-100 hover:text-white hover:border-dennisBlue-100 duration-300">
//             Code
//           </button>
//         </div>
//       </div>
//       <div className=" border-b h-[248px] border-neutral-300 w-full flex justify-between px-32">
//         <div className="interactable cursor-pointer w-[890px] hover:text-neutral-500/50 hover:ml-[-20px] duration-300 flex items-center text-[109px] text-dennisDark">
//           <p className="relative">
//             BUREAU{" "}
//             <span className="absolute top-[22px] right-[-70px] text-[45px]">
//               TM
//             </span>
//           </p>
//         </div>
//         <div className="flex items-center text-dennisDark text-[19px] gap-x-4">
//           <p>Development</p>
//           <button className="border px-3 py-1 rounded-full border-neutral-300 hover:bg-dennisBlue-100 hover:text-white hover:border-dennisBlue-100 duration-300">
//             Code
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Work({ name, borderTop }) {
  return (
    <>
      <div
        className={`${
          borderTop ? "border-t" : ""
        } border-b h-[70px] sm:h-[95px] md:h-[130px] lg:h-[170px] xl:h-[200px] 2xl:h-[248px] border-neutral-300 w-full flex justify-between px-4 sm:px-5 lg:px-14 2xl:px-32`}
      >
        <div className="interactable cursor-pointer w-[890px] hover:text-neutral-500/50 hover:ml-[-20px] duration-300 flex items-center text-[26px] sm:text-[5vw] text-dennisDark">
          <p>{name}</p>
        </div>
        <div className="flex items-center text-dennisDark sm:text-[11px] text-[10px] md:text-[13px] 2xl:text-[19px] gap-x-4">
          <p>Development</p>
          <button className="border px-3 py-1 rounded-full border-neutral-300 hover:bg-dennisBlue-100 hover:text-white hover:border-dennisBlue-100 duration-300">
            Code
          </button>
        </div>
      </div>
    </>
  );
}
