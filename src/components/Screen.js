import React from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  const limitedValue = value.toString().slice(0, 16);

  return <div className="screen">{limitedValue}</div>;
};

export default Screen;