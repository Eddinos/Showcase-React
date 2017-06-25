import React from 'react';
import { Component } from 'react';
import {findDOMNode} from 'react-dom';
import './Slider.scss';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      direction: props.direction,
      side: props.side,
      animation: `${props.direction.toLowerCase()}From${this.makeCamelCase(props.side)}`
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.handleScroll(); });
    findDOMNode(this).addEventListener('animationend', () => this.setState({done: true}))
  }

  handleScroll() {
    if (!this.state.done) {
      this.checkVisible(findDOMNode(this)) ? this.setState({classes: this.state.animation}) : this.setState({classes: ''});
    }
  }

  checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top*1.5 - viewHeight >= 0);
  }

  makeCamelCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  render() {
    let classes = `slider ${this.state.classes}`;
    return this.state.done ? (
      <div className={classes}>
        {React.cloneElement(this.props.children, {sliderDone: this.state.done})}
      </div>
    ) : (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
