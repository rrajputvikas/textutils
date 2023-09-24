import React from "react";

const ToggleSwitch = ({parameter1, parameter2, currentVal, toggle}) => {
  return (
    <div
      className={`form-check form-switch text-${
        currentVal === parameter1 ? parameter2 : parameter1
      }`}
    >
      <input
        className="form-check-input shadow-lg"
        onClick={toggle}
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">
        Switch {currentVal === parameter1 ? parameter2 : parameter1}
      </label>
    </div>
  );
};

export default ToggleSwitch;