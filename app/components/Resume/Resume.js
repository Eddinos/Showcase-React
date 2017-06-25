import React from 'react';
import { Component, PropTypes } from 'react';
import './Resume.scss';
import cvPDF from '../../../tools/cv.pdf'
import Slider from '../Slider/Slider';
import Skills from '../Skills/Skills';

export default class Resume extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let Fskills = [{techno: 'javascript',value: 75},
    {techno: 'Angular',value: 80},
    {techno: 'jQuery',value: 65},
    {techno: 'React',value: 70},
    {techno: "CSS", value: 75},
    {techno: "Sass", value: 80}
    ]
    let Bskills = [{techno: 'C#',value: 55},
    {techno: '.Net WebAPI 2',value: 60},
    {techno: 'Node',value: 45},
    {techno: "MongoDB", value: 35},
    {techno: "SQL Server", value: 40}
    ]
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
            <a className="pdfLink" href={cvPDF} target="_blank">
              <div className="pdf">
                <span className="icon-file-pdf"></span>
              </div>
            </a>
          </div>
        </div>
        <Slider direction="in" side="left">
          <Skills skills={Fskills} barStyle={{backgroundColor: 'orange'}} title="Front-end skills">

          </Skills>
        </Slider>
        <Slider direction="in" side="right">
          <Skills skills={Bskills} barStyle={{backgroundColor: '#2191ff'}} title="Back-end skills">

          </Skills>
        </Slider>
      </div>
    )
  }
}
