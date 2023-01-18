import React from "react";
import "./App.css";

function BackButton(props) {
  const { pages, back } = props;

  return (
    <button className={`${pages <= 1 ? "previous" : ""}`} onClick={props.back}>
      Previous
    </button>
  );
}

export default BackButton;
