import React from "react";
import { FaRegPauseCircle } from "react-icons/fa"

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button onClick={() => handleClick()}>
      <FaRegPauseCircle size={"2em"} className="hover:text-gir-500"/>
    </button>
  );
}
