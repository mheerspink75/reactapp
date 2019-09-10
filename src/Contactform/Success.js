import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export class Success extends Component {
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
    return (
      <div>
        <Typography variant="h5" align="center">
          Thank You For Your Submission!
        </Typography>
        <br />
        <Typography align="center">
          A confirmation email will be sent to the email address that you
          provided...
        </Typography>
      </div>
    );
  }
}

export default Success;
