import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default class FormContactInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const canContinue = (values.firstName.length > 0 && values.lastName.length > 0 && values.email.length > 0);
    const continueButton = <Button color="primary" label="Continue" onClick={this.continue}>Continue</Button>;

    return (
      <List>
        <ListItemText
          primary="Please enter your contact information and continue to leave a
          comment....."
        />
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
        {canContinue ? continueButton : <Button disabled>Continue</Button>}
      </List>
    );
  }
}

