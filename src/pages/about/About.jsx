import React from "react";
import HeadingSec from "./HeadingSec";
import ExploringSec from "./ExploringSec";
import ServicesSec from "./ServicesSec";
import TestimonailSec from "./TestimonailSec";
import ContactSec from "../home/ContactSec/ConstactSec";

export default function About() {
  return (
    <div className="mt-24 bg-gradient-to-t from-zinc-200">
      <HeadingSec />
      <ExploringSec />
      <ServicesSec />
      <TestimonailSec />
      <ContactSec />
    </div>
  );
}
