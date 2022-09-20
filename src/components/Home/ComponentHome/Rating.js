import React from "react";
import { AiFillStar } from "react-icons/ai";

function Rating() {
  return (
    <div>
      <AiFillStar color="#FFBA49" />
      <AiFillStar color="#FFBA49" />
      <AiFillStar color="#FFBA49" />
      <AiFillStar color="#FFBA49" />
      <AiFillStar color="#FFBA49" />
      <span className="w-50 ps-1">(10)</span>
    </div>
  );
}

export default Rating;
