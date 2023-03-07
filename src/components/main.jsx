import React from "react";
import { About } from "./about";
import { Companies } from "./companies";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Meet } from "./meet";
import { Navbar } from "./navbar";
import { Request } from "./request";
import { Services } from "./services";

export const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Meet></Meet>
      <Request></Request>
      <Companies></Companies>
      <Footer></Footer>
    </div>
  );
};

export default Main;
