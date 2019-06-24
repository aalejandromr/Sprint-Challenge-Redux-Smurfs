import React, { useLayoutEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { AppLoader } from "../Utils/Loader";
import { connect } from "react-redux";
import { addSmurf, updateSmurf } from "../../actions"

const SmurfForm = (props) => {
  const [smurf, setSmurf] = React.useState({
    name: "",
    age: "",
    height: ""
  });

  useLayoutEffect(() => {
    if(props.isUpdating)
    {
      setSmurf(...props.smurfs.filter(smurf => smurf.id === parseInt(props.match.params.id)));
    }
  }, [])

  const handleChange = e => {
    // debugger;
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    // debugger;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(props.isUpdating)
    {
      props.updateSmurf(props.match.params.id, smurf).then(res => {
        if(res)
        {
          props.history.push("/")
        }
      });
    }
    props.addSmurf(smurf).then(res => {
      if(res)
      {
        props.history.push("/")
      }
    });
  }
  
  if(props.isFetching)
  {
    return (
      <AppLoader/>
    )
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Age</label>
        <input name="age" value={smurf.age} placeholder="Age" onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input name="name" value={smurf.name} placeholder="Name" onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Height</label>
        <input name="height" value={smurf.height} placeholder="Height" onChange={handleChange}  />
      </Form.Field>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  errors: state.errors,
  isUpdating: state.isUpdating
})

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);