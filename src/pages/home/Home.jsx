import React from "react";
import HeroSec from "./HeroSec/HeroSec";
import WorkStateSec from "./WorkStateSec/WorkStateSec";
import ConstactSec from "./ContactSec/ConstactSec";
import Footer from "./FooterSec/Footer";

export default function Home() {
  return (
    <div>
      <HeroSec />
      <WorkStateSec />
      <ConstactSec />
      <Footer />
    </div>
  );
}
