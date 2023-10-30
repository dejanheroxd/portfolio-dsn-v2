import React from "react";
import HeroSec from "./HeroSec/HeroSec";
import WorkStateSec from "./WorkStateSec/WorkStateSec";
import ContactSec from "./ContactSec/ConstactSec";
import Transition from "../../components/navbar/Transition";

export default function Home() {
  return (
    <Transition page={"Home"}>
      <div>
        <HeroSec />
        <WorkStateSec />
        <ContactSec />
      </div>
    </Transition>
  );
}
