"use client";
import React, { useState } from "react";

export default function Button() {
  const [button, setButton] = useState(0);

  const buttonClick = () => {
    setButton(button + 1);
  };
  return (
    <div>
      <button onClick={buttonClick}>Save {button}</button>
    </div>
  );
}
