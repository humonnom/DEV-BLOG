import React from "react";

function Brick({ inside, width, height }) {
  console.log(width);
  console.log(height);
  return (
    <div>
      <p>{inside}</p>
    </div>
  );
}

export default Brick;
