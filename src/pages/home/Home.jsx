import React from "react";
import HeroSec from "./HeroSec/HeroSec";
import WorkStateSec from "./WorkStateSec/WorkStateSec";
import ConstactSec from "./ContactSec/ConstactSec";

export default function Home() {
  return (
    <div>
      <HeroSec />
      <WorkStateSec />
      <ConstactSec />
    </div>
  );
}
