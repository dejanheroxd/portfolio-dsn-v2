import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { useEffect, useState } from "react";
import PreLoader from "./components/navbar/PreLoader";
import { AnimatePresence } from "framer-motion";
import ContactSec from "./pages/home/ContactSec/ConstactSec";
import ScrollToTop from "./components/navbar/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
