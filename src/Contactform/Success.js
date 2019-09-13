import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class Success extends Component {
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
      values: { firstName, lastName, email }
    } = this.props;

    return (
      <div>
        <Typography variant="h5" align="center">
          Thank You, {firstName + " " + lastName} For Your Submission!
        </Typography>
        <br />
        <Typography align="center">
          A confirmation email will be sent to {email}
        </Typography>
      </div>
    );
  }
}


