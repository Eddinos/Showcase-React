import React from 'react';
import { Component, PropTypes } from 'react';
import './Reference.scss';

export default class Reference extends Component {
  constructor(props) {
    super(props);
    let isEmptyMsg = '';
    let goMsg = '';
    let iconType = '';
    if (props.type == 'source') {
      isEmptyMsg = 'Sources for this project is not publicly available yet';
      iconType = 'github';
      goMsg = 'Check out the sources !'
    }
    else if (props.type == 'web') {
      isEmptyMsg = 'Unfortunately, this gem is not deployed on the world wide web';
      iconType = 'earth';
      goMsg = "Go have a look !"
    }
    else {
      console.error('Only "source" and "web" types are currently handled');
    }
    this.state = {
      isEmptyMsg: isEmptyMsg,
      goMsg: goMsg,
      url: props.url,
      iconType: iconType
    }
  }

  render () {
    return (
      <a href={this.state.url} target="_blank" rel="noopener" className={`reference ${this.props.className || ''}`}>
        <span className={`icon icon-${this.state.iconType}`}></span>
        {this.state.url ? (<span className="msg">{this.state.goMsg}</span>) : (<span className="msg">{this.state.isEmptyMsg}</span>)}
      </a>
    )
  }
}
