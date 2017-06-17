import React from 'react';
import { Component, PropTypes } from 'react';
import './Resume.scss';
import cvPDF from '../../../tools/cv.pdf'
import Slider from '../Slider/Slider';

export default class Resume extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="resume">
        <div className="banner home-banner">
          <h1 className="container title">
            Ma resume
          </h1>
        </div>
        <Slider direction="in" side="right">
          <div className="content">
            <div className="elements">
              <div className="content-text">
                <p>
                  As simple as it gets, my resume available as a plain old PDF file
                </p>
              </div>
              <a className="pdfLink" href={cvPDF} target="_blank">
                <div className="pdf">
                  <span className="icon-file-pdf"></span>
                </div>
              </a>
            </div>
          </div>
        </Slider>


      </div>
    )
  }
}
