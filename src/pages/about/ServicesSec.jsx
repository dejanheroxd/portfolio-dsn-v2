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
    <div className="w-full justify-center  pb-52">
      <p className="pb-20 pl-[168px] text-[62px] text-dennisDark">
        I can help you with ...
      </p>
      <div className="flex justify-center gap-x-8">
        {services.map((service) => (
          <div className="w-[500px]">
            <div className="">
              <p className="w-[450px] border-b-[2px] border-b-gray-300 pb-5 text-dennisGray">
                {service.number}
              </p>
              <p className="py-8 text-[44px] text-dennisDark">{service.type}</p>
              <p className="w-[455px] text-[19px] text-dennisDark">
                {service.skill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
