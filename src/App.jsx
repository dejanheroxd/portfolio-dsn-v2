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

      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        document.body.style.position = "static";
      }, 2000);
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
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

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Contact from "./pages/contact/Contact";
// import About from "./pages/about/About";
// import { useEffect, useState } from "react";
// import PreLoader from "./components/navbar/PreLoader";
// import { AnimatePresence } from "framer-motion";
// import ContactSec from "./pages/contact/Contact";
// import ScrollToTop from "./components/navbar/ScrollToTop";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const LocomotiveScroll = (await import("locomotive-scroll")).default;
//       const locomotiveScroll = new LocomotiveScroll();

//       // Save the current scroll position
//       const scrollY = window.scrollY;

//       // Lock scroll position and hide overflow
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;

//       setTimeout(() => {
//         setIsLoading(false);
//         document.body.style.cursor = "default";

//         // Restore scroll position and reset styles
//         document.body.style.overflow = "visible";
//         document.body.style.position = "static";
//         document.body.style.top = "";

//         // Scroll to the top
//         window.scrollTo(0, 0);
//       }, 2000);
//     })();
//   }, []);

//   return (
//     <div>
//       <AnimatePresence mode="wait">
//         {isLoading && <PreLoader />}
//       </AnimatePresence>
//       <Router>
//         <ScrollToTop />
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//           </Routes>
//         </AnimatePresence>
//       </Router>
//     </div>
//   );
// }

// export default App;
