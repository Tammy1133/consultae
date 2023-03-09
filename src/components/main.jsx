import React, { useEffect } from "react";
import { About } from "./about";
import { Companies } from "./companies";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Meet } from "./meet";
import { Navbar } from "./navbar";
import { Request } from "./request";
import { Services } from "./services";
import ScrollToTop from "react-scroll-to-top";

export const Main = () => {
  useEffect(() => {
    window.addEventListener("scroll", console.log("scroll"));
  }, []);

  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Meet></Meet>
      <Request></Request>
      <Companies></Companies>
      <Footer></Footer>
      <ScrollToTop smooth />
    </div>
  );
};

export default Main;
