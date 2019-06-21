import React from "react";

export const Smurf = props => {
  return (
    <div>
      <p> {props.smurf.age} </p>
      <p> {props.smurf.name} </p>
      <p> {props.smurf.height} </p>
    </div>
  );
};
