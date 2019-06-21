import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editSmurf, deleteSmurf } from "../../actions";
import { Icon } from "semantic-ui-react";

const Smurf = props => {
  return (
    <div>
      <p> {props.smurf.age} </p>
      <p> {props.smurf.name} </p>
      <p> {props.smurf.height} </p>
      <Link to={`/smurf/${props.smurf.id}`} onClick={props.editSmurf}> Edit </Link>
      <Icon link name="trash" onClick={() => props.deleteSmurf(props.smurf.id)} />
    </div>
  );
};

export default connect(null, { editSmurf, deleteSmurf })(Smurf);