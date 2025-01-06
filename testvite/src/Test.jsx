import React from "react";

const Test = (props) => {
  const john = 56;
  const diff = props.siva - john;
  props.data(diff);
  return (
    <>
      <p>siva: {props.siva}</p>
      <p>john: {john}</p>
    </>
  );
};

export default Test;
