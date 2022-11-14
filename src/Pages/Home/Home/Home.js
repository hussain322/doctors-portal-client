import React from "react";
import AppointmentHome from "../AppointmentHome/AppointmentHome";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExceptPart from "../ExceptPart/ExceptPart";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ExceptPart />
      <AppointmentHome />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
