import React from 'react';
import { Component, PropTypes } from 'react';
import './Resume.scss';
import cvPDF from '../../../tools/cv.pdf'

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
        <div className="content">
          <div className="elements">
            <div className="content-text">
              <p>
                As simple as it gets, my resume available as a plain old PDF file
              </p>
            </div>
            <a className="pdf" href={cvPDF} target="_blank">
                <span className="icon-file-pdf"></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
