import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const AppointmentHome = () => {
  return (
    <section className="mt-32" style={{ background: `url(${appointment})` }}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="hidden md:block">
          <img src={doctor} alt="" className="w-4/5 -mt-32" />
        </div>
        <div className="p-10">
          <h3 className="text-2xl font-bold text-primary">Appointment</h3>
          <h2 className="text-4xl font-semibold text-white">
            Make an appointment today
          </h2>
          <p className="text-white my-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHome;
