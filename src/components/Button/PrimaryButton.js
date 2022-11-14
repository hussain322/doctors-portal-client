import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary border-none bg-gradient-to-r from-secondary to-primary text-white font-semibold">
      {children}
    </button>
  );
};

export default PrimaryButton;
