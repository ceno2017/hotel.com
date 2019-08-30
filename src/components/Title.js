import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
      <span>{subtitle}</span>
    </div>
  );
};

export default Title;
