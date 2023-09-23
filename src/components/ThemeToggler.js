import React from "react";

const ThemeToggler = ({ mode, toggleMode }) => {
  return (
    <div
      className={`form-check form-switch text-${
        mode === "light" ? "dark" : "light"
      }`}
    >
      <input
        className="form-check-input shadow-lg"
        onClick={toggleMode}
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
        Enable {mode === "light" ? "dark" : "light"} mode
      </label>
    </div>
  );
};

export default ThemeToggler;
