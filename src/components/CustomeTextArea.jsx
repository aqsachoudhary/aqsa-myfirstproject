import React from "react";
const CustomeTextArea = ({ label, value, onChange, error, onBlur }) => {
  return (
    <>
      <div className="fieldBox">
        <label>{label}</label>
        <div className={"leftBox"}>
          <textarea value={value} onChange={onChange} onBlur={onBlur} />
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
};
export default CustomeTextArea;
