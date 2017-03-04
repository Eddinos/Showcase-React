import React from 'react';
import { Component, PropTypes } from 'react';
import './Presenter.scss';

export default class Presenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // When window is scrolled, component is handling stuff
    window.addEventListener('scroll', () => { this.handleScroll(); });

    // w/ onload event it triggers too early and animation is played out of the viewport
    window.onload = () => {
      this.handleScroll()
    }
  }

  // All the project-card elements' animation is triggered when visible
  handleScroll () {
    document.querySelectorAll('.project-card').forEach((e, i) => {
      if(this.checkVisible(e)) {
        // Timeout used for style effect, %3 is too avoid too long delay between first and last
        setTimeout(() => {
          if(e.classList.contains('blossom')) {
            e.classList.remove('blossom');
          }
          e.classList.add('blossom');/* += ' blossom';*/
          // var lastIndex = e.className.lastIndexOf(' ');
          // e.className = e.className.substring(0, lastIndex);
        }, 100*(i%3))
      }
    })
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
        {this.props.children}
      </div>
    )
  }
}
