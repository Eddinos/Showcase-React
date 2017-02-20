import React from 'react';
import { Component, PropTypes } from 'react';
import titlePic from '../../../tools/images/adaptedBasketball.jpg';
import './Portfolio.scss';

const Intro = () => (
  <div className="intro content-text">
    <h4>Description of my work will be gathered here</h4>
    <span>I've done different shit at school or in my spare time, and I am glad to share it with ya</span>
  </div>
)

export default class Portfolio extends Component {


  render () {
    return (
      <div className="portfolio">
        <figure className="portfolio-header">
          <img src={titlePic} alt="portfolio header" className="header-img"/>
          <figcaption className="header-caption">
            <h1 className="title">
              My projects
            </h1>
          </figcaption>
        </figure>

        <Intro/>

      </div>
    )
  }
}
