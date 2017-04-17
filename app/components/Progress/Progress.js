import React from 'react';
import { Component, PropTypes } from 'react';
import './Progress.scss';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: this.props.percentageValue
      })
    }, 500)

  }

  render() {
    return (
      <div className="progress">
        <div className="progress_bar">
          {this.state &&
            <div className="progress_bar_content skill_one" ref="thingy"
              style={{
                width: `${this.state.value}%`,
                transition: 'width 1s cubic-bezier(.97,1.52,0,.64)'
              }}>
            </div>}
            <div className="progress_value">
              {this.state.value || 0}% completed
            </div>
        </div>
      </div>
    )
  }
}
