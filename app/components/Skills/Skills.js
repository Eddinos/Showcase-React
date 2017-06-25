import React from 'react';
import { Component, PropTypes } from 'react';
import './Skills.scss';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: props.skills,
      barStyle: props.barStyle
    };
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
        <div className="content-text">{this.props.title}</div>
        {this.state.skills ? (
          <table className="skills__table">
            <tbody>
              <tr>
                <td></td>
                <td className="table__legend">
                  <div className="threshold">0%</div>
                  <div className="threshold">25%</div>
                  <div className="threshold">75%</div>
                  <div className="threshold">100%</div>
                </td>
              </tr>
              {this.state.skills.map((item, key) => {
                let barStyle = this.state.trigger ? {width: `${item.value}%`, transitionDelay: `0.${key%3}s`} : {width: `0%`};
                return (<tr key={key} className="content-text">
                          <td className="table__item">{item.techno}</td>
                          <td className="table__item"><div className="progress"><div className="bar" style={Object.assign(barStyle, this.state.barStyle)}></div></div></td>
                        </tr>)
              })}
            </tbody>
          </table>)
          : <div className="content content-text">Oh no ! All my skills have disappeared ! </div> }
      </div>
    )
  }
}
