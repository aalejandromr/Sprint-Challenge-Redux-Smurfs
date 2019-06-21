import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const SmurfForm = () => {
  const [smurf, setSmurf] = React.useState({
    age: null,
    name: null,
    height: null
  });

  const handleChange = e => {
    // debugger;
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    console.log(smurf);
  };

  return (
    <Form>
      <Form.Field>
        <label>Age</label>
        <input name="age" placeholder="Age" onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input name="name" placeholder="Name" />
      </Form.Field>
      <Form.Field>
        <label>Height</label>
        <input name="height" placeholder="Height" />
      </Form.Field>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
};
