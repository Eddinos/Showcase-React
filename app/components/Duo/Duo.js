import React from 'react';
import { Component } from 'react';
import './Duo.scss';

export default class Duo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var className = `duo ${this.props.className || ''}`
    return (
      <div className={className} style={this.props.style}>
        <div className="duo__element duo__element--left">
          {this.props.eltLeft}
        </div>
        <div className="duo__element duo__element--right">
          {this.props.eltRight}
        </div>
      </div>
    )
  }
}
