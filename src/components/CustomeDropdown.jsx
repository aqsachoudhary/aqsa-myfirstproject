import React from "react";
const CustomeDropdown = ({
  label,
  value,
  onChange,
  defaultOption,
  list,
  error,
}) => {
  return (
    <>
      <div className={"fieldBox"}>
        <label>{label}</label>
        <div className="leftBox">
          <select value={value} onChange={onChange}>
            <option value="">{defaultOption}</option>

            {list.map((text) => (
              <option value={text}>{text}</option>
            ))}
          </select>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};
export default CustomeDropdown;
