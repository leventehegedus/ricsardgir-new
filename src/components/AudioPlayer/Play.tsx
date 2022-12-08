import React from "react";
import { FaRegPlayCircle } from "react-icons/fa"
export default function Play(props) {
  const { handleClick } = props;

  return (
    <button onClick={() => handleClick()}>
      <FaRegPlayCircle size={"2em"} className="hover:text-gir-500"/>
    </button>
  );
}
