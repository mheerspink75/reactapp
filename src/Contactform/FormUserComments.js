import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default class FormUserComments extends Component {
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
          <Button  label="Continue" color="primary" onClick={this.continue}>
            Continue
          </Button>
          <Button label="Back" color="primary" onClick={this.back}>
            Back
          </Button>
        </List>
    );
  }
}

