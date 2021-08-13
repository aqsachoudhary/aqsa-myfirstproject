import React from "react";
import "../styles/CustomeInput.css";

const CustomeInput = ({
  placeholder,
  type,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <>
      <div className="fieldContainer">
        {/* <label>{placeholder}</label> */}
        {/* <div className={"leftBox"}> */}
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="error">{error}</p>}
        {/* </div> */}
      </div>
    </>
  );
};
export default CustomeInput;
