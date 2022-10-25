import React from "react";
import "./formInput.css";

const FormInput = ({ placeholder }) => {
  return (
    <div>
      {/* <label>Username</label> */}
      <input placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
