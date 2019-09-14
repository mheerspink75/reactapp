import React, { Component } from "react";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, comment }
    } = this.props;
    return (
      <List>
        <ListItemText primary="Please verify your contact information before clicking confirm..." />
        <hr />
        <ListItemText secondary="Name:  " />
        <ListItemText primary={firstName + " " + lastName} />
        <ListItemText secondary="Email:  " />
        <ListItemText primary={email} />
        <ListItemText secondary="Comment:  " />
        <ListItemText primary={comment} />
        <hr />
        <Button label="Confirm" color="primary" onClick={this.continue}>
          Confirm
        </Button>
        <Button label="Back" color="primary" onClick={this.back}>
          Back
        </Button>
      </List>
    );
  }
}


