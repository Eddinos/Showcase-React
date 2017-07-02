import React from 'react';
import { Component } from 'react';
import './Duo.scss';

export default class Duo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="duo" style={this.props.style}>
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
