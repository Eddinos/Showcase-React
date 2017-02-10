var React = require('react');
import { Component } from 'react';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import config from "../../../config";
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import './Contact.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: {},
      contact: {},
      openRequiredFieldsDialog: false,
      openMsgSentSnackbar: false
    }
  }

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleOpenRFD () {
    this.setState({ openRequiredFieldsDialog: true });
  }

  handleCloseRFD () {
    this.setState({ openRequiredFieldsDialog: false });
  }

  handleOpenMSS () {
    this.setState({ openMsgSentSnackbar: true });
  }

  handleCloseMSS () {
    this.setState({ openMsgSentSnackbar: false });
  }

  makeChangeHandler(property) {
    return (event) => {
      // Set the error message of the corresponding input
      var er = this.state.errorText;
      er[property] = event.target.value == '' ? 'This field is required' : '';

      // If dealing with email field, value should match the classical email address regex
      if (property == 'email' && event.target.value != '') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(event.target.value)) {
          er[property] = 'Email address should match the format \'smthing@smthing.smthing\'';
        }
      }

      // Update the object containing the data used to send the message
      var contactMessage = this.state.contact;
      contactMessage[property] = event.target.value;


      this.setState({ contact: contactMessage})
      this.setState({ errorText: er });
    }
  }

  sendMessage() {
    const errors = this.state.errorText;

    // Check if the form is filled
    if(!errors || (Object.keys(errors).length === 0 && errors.constructor === Object)) {
      this.handleOpenRFD();
    }
    else {
      // Check if the form is correctly filled, might be improved later
      for(var label in errors) {
        if(errors[label] != '' || Object.keys(errors).length < 4) {
          this.handleOpenRFD();
          return;
        }
      }

      //Send email
      axios.post(config.contactAPI, {
        name: this.state.contact.firstName + ' ' + this.state.contact.lastName,
        from: this.state.contact.email,
        message: this.state.contact.message
      })
      .then( (response) => {
        this.handleOpenMSS();
      })
      .catch( (error) => {
        console.log(error);
      });
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        disabled={false}
        onTouchTap={this.handleCloseRFD.bind(this)}
      />
    ];

    return (
      <div className="home-contact content">
        <Dialog
          title="Missing information"
          actions={actions}
          modal={true}
          open={this.state.openRequiredFieldsDialog}
        >
          Please be sure to fill all the required fields
        </Dialog>
        <Snackbar
          open={this.state.openMsgSentSnackbar}
          message="Your message was sent successfully"
          autoHideDuration={4000}
          onRequestClose={this.handleCloseMSS.bind(this)}
        />
        <div className="contact-elts">
          <div className="contact-msg">
            <h4>Contact me !</h4>
            <p>Please feel free to contact me if you have any questions you believe I could answer, or if you just want to say hello</p>
          </div>
          <div className="contact-form">
              <div className="name">
                <TextField
                  floatingLabelText='First Name'
                  errorText={this.state.errorText.firstName}
                  onBlur={this.makeChangeHandler('firstName').bind(this)}
                />
                <TextField
                  floatingLabelText='Last Name'
                  errorText={this.state.errorText.lastName}
                  onBlur={this.makeChangeHandler('lastName').bind(this)}
                />
              </div>
              <div className="mail-address">
                <TextField
                  floatingLabelText='Email address'
                  errorText={this.state.errorText.email}
                  onBlur={this.makeChangeHandler('email').bind(this)}
                  fullWidth={true}
                />
              </div>
              <div className="message">
                <TextField
                  floatingLabelText='Your message'
                  errorText={this.state.errorText.message}
                  onBlur={this.makeChangeHandler('message').bind(this)}
                  fullWidth={true}
                  multiLine={true}
                  rows={4}
                  className="tf"
                />
              </div>
              <FlatButton
                label="Send"
                className="send-button"
                secondary={false}
                onClick={this.sendMessage.bind(this)}
              />
          </div>
        </div>
      </div>
    )
  }
}

Contact.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}