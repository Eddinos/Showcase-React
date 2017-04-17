import React from 'react';
import { Component, PropTypes } from 'react';
import './Reference.scss';

export default class Reference extends Component {
  constructor(props) {
    super(props);
    let isEmptyMsg = '';
    let iconType = '';
    if (props.type == 'source') {
      isEmptyMsg = 'Sources for this project is not publicly available yet';
      iconType = 'github';
    }
    else if (props.type == 'web') {
      isEmptyMsg = 'Unfortunately, this gem is not deployed on the world wide web';
      iconType = 'earth';
    }
    else {
      console.error('Only "source" and "web" types are currently handled');
    }
    this.state = {
      isEmptyMsg: isEmptyMsg,
      url: props.url,
      iconType: iconType
    }
  }

  render () {
    return (
      <div className={`reference ${this.props.className || ''}`}>
        <span className={`icon icon-${this.state.iconType}`}></span>
        <span className="msg">{this.state.url ? this.state.url : this.state.isEmptyMsg}</span>
      </div>
    )
  }
}
