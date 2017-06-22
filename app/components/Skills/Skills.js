import React from 'react';
import { Component, PropTypes } from 'react';
import './Skills.scss';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {skills: props.skills};
  }

  componentWillReceiveProps (newProps) {
    if (newProps.sliderDone) {
        this.setState({
          trigger: true
        });
    }
  }

  render () {
    return (
      <div className="skills">
        <div className="content-text">Skills</div>
        {this.state.skills ? (
          <div className="content">
            {this.state.skills.map((item, key) => {
              let barStyle = this.state.trigger ? {width: `${item.value}%`} : {width: `0%`};
              return (<div className="content-text" key={key}>{item.techno}: <div className="progress"><div className="bar" style={barStyle}></div></div></div>)
            })}
          </div>) : <div className="content content-text">Oh no ! All my skills have disappeared ! </div> }
      </div>
    )
  }
}
