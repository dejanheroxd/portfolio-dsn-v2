import React from "react";
import HeadingSec from "./HeadingSec";
import ExploringSec from "./ExploringSec";
import ServicesSec from "./ServicesSec";
import TestimonailSec from "./TestimonailSec";
import ContactSec from "../home/ContactSec/ConstactSec";
import Transition from "../../components/navbar/Transition";

export default function About() {
  return (
    <Transition page={"About"}>
      <div className="mt-24 border border-green-400 bg-gradient-to-t from-zinc-200">
        <HeadingSec />
        <ExploringSec />
        <ServicesSec />
        <TestimonailSec />
        <ContactSec />
      </div>
    </Transition>
  );
}
