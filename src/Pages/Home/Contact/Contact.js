import React from "react";
import bg from "../../../assets/images/bg.png";

const Contact = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary my-2">Contact Us</h3>
        <h2 className="text-4xl font-semibold text-white">
          Stay connected with us
        </h2>
      </div>
      <div>
        <form></form>
      </div>
    </section>
  );
};

export default Contact;
