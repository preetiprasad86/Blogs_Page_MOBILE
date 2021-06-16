import React from "react";
import "./Title.css";

function Title(props) {
  const { children } = props;

  return <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{children}</h1>;
}

export default Title;
