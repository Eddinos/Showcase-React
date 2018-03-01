var React = require('react');
import { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="container">
          <div className="credits">
            <span className="corp">© Eddine Corp</span>
            <span className="spacer">|</span>
            <span className="about">About</span>
          </div>
        </div>
      </div>
    );
  }
}
