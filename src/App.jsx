import React from "react";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import GetStarted from "./components/GetStarted";
import Eyes from "./components/Eyes";
import LocomotiveScroll from "locomotive-scroll";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Analytics } from "@vercel/analytics/react"

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <AboutUs/>
      <Marquee />
      <GetStarted />
      <Eyes />
      <ContactUs />
      <Analytics />
    </div>
  );
}

export default App;
