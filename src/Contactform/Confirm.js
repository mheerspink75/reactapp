import React, { Component } from "react";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
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
        <ListItemText secondary="Name:  " />
        <ListItemText primary={firstName + " " + lastName} />
        <ListItemText secondary="Email:  " />
        <ListItemText primary={email} />
        <ListItemText secondary="Comment:  " />
        <ListItemText primary={comment} />
        <Button label="Confirm" color="primary" onClick={this.continue}>
          Confirm
        </Button>
        <Button label="Back" color="secondary" onClick={this.back}>
          Back
        </Button>
      </List>
    );
  }
}

export default Confirm;

