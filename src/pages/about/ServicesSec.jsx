import React from "react";

export default function ServicesSec() {
  const services = [
    {
      number: "01",
      type: "Design",
      skill:
        "With a proven record in designing websites and apps, I create effective and user-friendly digital experiences. Strong company branding is essential for any successful website.",
    },
    {
      number: "02",
      type: "Development",
      skill:
        "I create scalable websites from scratch that align perfectly with design. My expertise includes micro animations, transitions, and interactions. For Backend i use MySQL and PHP",
    },
    {
      number: "03",
      type: "The full pack",
      skill:
        "From concept to implementation, I deliver complete websites that truly stand out. My strong design sense and development skills let me create impressive and innovative projects.",
    },
  ];

  return (
    <div className="w-full justify-center pb-80 pt-96">
      <div className="pb-20 pl-[24px] text-[42px] text-dennisDark sm:text-[62px] min-[774px]:pl-[120px] 2xl:pl-[232px]">
        <div className="flex  leading-[65px] ">
          I can help you with{" "}
          <div className="hidden pl-6 pt-[46px] 2xl:block">
            <div className="dot-flashing"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-x-8 min-[1446px]:flex-row">
        {services.map((service) => (
          <div key={service.number} className="2x:w-[500px] pb-8">
            <div className="">
              <p className="w-[300px] border-b-[2px] border-b-gray-300 pb-5 text-dennisGray lg:w-[450px]">
                {service.number}
              </p>
              <p className="py-8 text-[44px] text-dennisDark">{service.type}</p>
              <p className="w-[250px] text-[19px] text-dennisDark lg:w-[455px]">
                {service.skill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
