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

  shouldComponentUpdate() {
    return this.checkVisible();
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.handleScroll(); });
    findDOMNode(this).addEventListener('animationend', () => this.setState({done: true}))
  }

  handleScroll() {
    if (!this.state.done) {
      this.checkVisible() ? this.setState({classes: this.state.animation}) : this.setState({classes: ''});
    }
  }

  checkVisible() {
    var elm = findDOMNode(this);
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top*1.5 - viewHeight >= 0);
  }

  makeCamelCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  render() {
    let classes = `slider ${this.state.classes}`;
    /* When animation is done, send a custom prop to the children to warn them,
     unless they are not a React cpt (typeof = function) */
    return this.state.done && typeof this.props.children.type !== 'string' ? (
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
