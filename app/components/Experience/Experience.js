import React from 'react';
import { Component, PropTypes } from 'react';
import './Experience.scss';
import Text from '../Text/Text';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render () {
    return (
      <div className="experience">
        <div className="header">
          <h4 className="title jobTitle">{this.state.title}</h4>
          <div className="duration">
            <div className="duration--from">From: {this.state.duration.from}</div>
            <br/>
            <div className="duration--to">To: {this.state.duration.to || 'still going !'}</div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="description"><Text>{this.state.text}</Text></div>
      </div>
    )
  }
}
