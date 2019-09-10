import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

export class FormUserComments extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <List>
          <ListItemText primary="Please enter a comment and continue to verify your information..." />
          <ListItem>
            <TextField
              multiline
              fullWidth
              id="outlined-multiline-flexible"
              label="Enter a comment"
              rowsMax="4"
              margin="normal"
              variant="outlined"
              onChange={handleChange("comment")}
              defaultValue={values.comment}
            />
          </ListItem>
          <Button color="primary" label="Continue" onClick={this.continue}>
            Continue
          </Button>
          <Button label="Back" onClick={this.back} color="secondary">
            Back
          </Button>
        </List>
      </div>
    );
  }
}

export default FormUserComments;
