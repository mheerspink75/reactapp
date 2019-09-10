import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

export class FormContactInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <List>
        <ListItemText>
          Please enter your contact information and continue to leave a
          comment.....
        </ListItemText>
        <ListItem>
          <TextField
            required
            margin="dense"
            id="name"
            label="First Name"
            type="first name"
            fullWidth
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </ListItem>
        <ListItem>
          <TextField
            required
            margin="dense"
            id="name"
            label="Last Name"
            type="last name"
            fullWidth
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </ListItem>
        <ListItem>
          <TextField
            required
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
        </ListItem>
        <ListItem>
          <Button color="primary" label="Continue" onClick={this.continue}>
            Continue
          </Button>
        </ListItem>
      </List>
    );
  }
}

export default FormContactInfo;
