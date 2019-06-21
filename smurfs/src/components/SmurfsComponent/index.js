import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../../actions";
import { AppLoader } from "../Utils/Loader";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isFetching) {
      return <AppLoader />;
    }
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    );
  }
}

const stateToProps = state => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  failure: state.failure,
  errors: state.errors
});

export default connect(
  stateToProps,
  { getSmurfs }
)(SmurfList);
