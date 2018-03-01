import React from 'react';
import { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import './Presenter.scss';

export default class Presenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // When window is scrolled, component is handling stuff
    window.addEventListener('scroll', () => { this.handleScroll(); });

    // w/ onload event it triggers too early and animation is played out of the viewport
    // window.onload = () => {
      this.setChildrenClass();
      this.handleScroll();
    // }
  }

  componentWillReceiveProps() {
    this.setChildrenClass();
  }

  setChildrenClass() {
    for(var i in this.refs) {
      let elt = findDOMNode(this.refs[i]);
      elt.classList.add('project-card');
    }
  }

  // All the children animation is triggered when visible
  handleScroll () {
    for(var i in this.refs) {
      let elt = findDOMNode(this.refs[i]);
      if(this.checkVisible(elt)) {
        // Timeout used for style effect, %3 is too avoid too long delay between first and last
        setTimeout(() => {
          if(elt.classList.contains('blossom')) {
            elt.classList.remove('blossom');
          }
          elt.classList.add('blossom');
        }, 200*(i%3))
      }
    }
  }

  // If the bounding rectangle of the element is above the lower part of viewport then return true;
  checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top - viewHeight >= 0);
  }

  render() {
    return (
      <div className="presenter">
        {/* Adding a ref to each child */}
        {React.Children.map(this.props.children, (element, idx) => {
          return React.cloneElement(element, { ref: idx });
        })}
      </div>
    )
  }
}
