import React from "react";

export default function ServicesSec() {
  const services = [
    {
      number: "01",
      type: "Design",
      skill:
        "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
    },
    {
      number: "02",
      type: "Development",
      skill:
        "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS. ",
    },
    {
      number: "03",
      type: "The full package",
      skill:
        "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
    },
  ];

  return (
    <div className="w-full justify-center pb-52">
      <div className="pb-20 pl-[26px] text-[42px] text-dennisDark sm:text-[62px] min-[774px]:pl-[120px] 2xl:pl-[232px]">
        <div className="flex  leading-[65px] ">
          I can help you with{" "}
          <div className="hidden pl-6 pt-[46px] 2xl:block">
            <div className="dot-flashing"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-x-8 min-[1446px]:flex-row">
        {services.map((service) => (
          <div key={service.number} className="2x:w-[500px]">
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
