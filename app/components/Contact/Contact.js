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
import CircularProgress from 'material-ui/CircularProgress';
import Duo from '../Duo/Duo';
import './Contact.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: {},
      contact: {},
      openRequiredFieldsDialog: false,
      openMsgSentSnackbar: false,
      snackBarMessage: '',
      disableFields: false
    }
  }

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleRFD (show) {
    this.setState({ openRequiredFieldsDialog: show });
  }

  handleMSS (show) {
    this.setState({ openMsgSentSnackbar: show });
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
      this.handleRFD(true);
    }
    else {
      // Check if the form is correctly filled, might be improved later
      for(var label in errors) {
        if(errors[label] != '' || Object.keys(errors).length < 4) {
          this.handleRFD(true);
          return;
        }
      }

      this.setState({ disableFields: true })

      //Send email
      axios.post(config.contactAPI, {
        name: this.state.contact.firstName + ' ' + this.state.contact.lastName,
        from: this.state.contact.email,
        message: this.state.contact.message
      })
      .then( (response) => {
        this.setState({ snackBarMessage: response.data.msg, disableFields: false });
        this.handleMSS(true);
      })
      .catch( (error) => {
        this.setState({ snackBarMessage: error.toString(), disableFields:false })
        this.handleMSS(true);
        console.log(error);
      });
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={() => {this.handleRFD(false)}}
      />
    ];

    var msg = (
      <div className="contact-msg">
        <h4>Contact me !</h4>
        <p>Please feel free to send a message if you have any questions you believe I could answer, or if you just want to say hello</p>
      </div>
    );

    // Should be a component
    var form = (
      <div className="contact-form">
          <div className="loading-container">
            <CircularProgress
              size={80}
              style={{display: this.state.disableFields ? 'block' : 'none',
                      position: 'relative',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
            />
          </div>
          <div className="name">
            <TextField
              floatingLabelText='First Name'
              errorText={this.state.errorText.firstName}
              onBlur={this.makeChangeHandler('firstName').bind(this)}
              disabled={this.state.disableFields}
              style={{filter: this.state.disableFields ? 'blur(3px)' : 'none'}}
            />
            <TextField
              floatingLabelText='Last Name'
              errorText={this.state.errorText.lastName}
              onBlur={this.makeChangeHandler('lastName').bind(this)}
              disabled={this.state.disableFields}
              style={{filter: this.state.disableFields ? 'blur(3px)' : 'none'}}
            />
          </div>
          <div className="mail-address">
            <TextField
              floatingLabelText='Email address'
              errorText={this.state.errorText.email}
              onBlur={this.makeChangeHandler('email').bind(this)}
              fullWidth={true}
              disabled={this.state.disableFields}
              style={{filter: this.state.disableFields ? 'blur(3px)' : 'none'}}
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
              disabled={this.state.disableFields}
              style={{filter: this.state.disableFields ? 'blur(3px)' : 'none'}}
            />
          </div>
          <FlatButton
            label="Send message"
            className="send-button"
            secondary={false}
            disabled={this.state.disableFields}
            onClick={this.sendMessage.bind(this)}
          />
      </div>
    )

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
          message={this.state.snackBarMessage}
          autoHideDuration={4000}
          onRequestClose={() => {this.handleMSS(false)}}
        />
        <div className="contact-elts">


        </div>
        <Duo className="contact-elts"
          eltLeft={msg}
          eltRight={form}
        />
      </div>
    )
  }
}

Contact.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
