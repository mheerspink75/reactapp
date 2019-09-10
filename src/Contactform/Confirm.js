import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
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
        <ListItem>
          <ListItemText>Name: {firstName + " " + lastName}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Email: {email}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Comment: {comment}</ListItemText>
        </ListItem>
        <ListItem>
          <Button label="Confirm" color="primary" onClick={this.continue}>
            Confirm
          </Button>
          <Button label="Back" color="secondary" onClick={this.back}>
            Back
          </Button>
        </ListItem>
      </List>
    );
  }
}

export default Confirm;

