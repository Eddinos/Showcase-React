import React from 'react';
import { Component, PropTypes } from 'react';
import './Resume.scss';
import cvPDF from '../../../tools/cv.pdf'
import Slider from '../Slider/Slider';
import Skills from '../Skills/Skills';
import Duo from '../Duo/Duo';

//TODO fetch it from server
const skills = {
  front: {
    title: 'Front-end sills',
    sliderSide: 'left',
    barStyle: {backgroundColor: '#ff9125'},
    technos: [
      {techno: 'javascript',value: 75},
      {techno: 'Angular',value: 80},
      {techno: 'jQuery',value: 65},
      {techno: 'React',value: 70},
      {techno: "CSS", value: 75},
      {techno: "Sass", value: 80}
    ]
  },
  back: {
    title: 'Back-end sills',
    sliderSide: 'right',
    barStyle: {backgroundColor: '#2191ff'},
    technos: [
      {techno: 'C#',value: 55},
      {techno: '.Net WebAPI 2',value: 60},
      {techno: 'Node',value: 45},
      {techno: "MongoDB", value: 35},
      {techno: "SQL Server", value: 40}
    ]
  },
  tools: {
    title: 'Tools and methodologies',
    sliderSide: 'bottom',
    barStyle: {backgroundColor: '#00e498'},
    technos: [
      {techno: 'Git, Gitflow', value: 80},
      {techno: 'Agile methodology', value: 67},
      {techno: 'Continuous integration', value: 75},
      {techno: 'responsive design', value: 50},
      {techno: 'UX development', value: 30}
    ]
  }
}

const PdfLink = (props) => {
  return (
    <a className="pdfLink" href={cvPDF} target="_blank">
      <div className="pdf">
        <span className="icon-file-pdf"></span>
      </div>
    </a>
  )
}
const PdfText = (props) => {
  return (
    <div className="content-text">
      <p>
        As simple as it gets, my resume available as a plain old PDF file
      </p>
    </div>
  )
}
const pdfStyle = {background: '#f9f9f9', padding: '15vh 0'};

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: skills
    }
  }

  createSkillsComponents() {
    let skillsComponents = [];
    let skills = this.state.skills;
    for (var type in skills) {
      if (skills.hasOwnProperty(type)) {
        skillsComponents.push(
          <Slider direction="in" side={skills[type].sliderSide} key={type}>
            <Skills skills={skills[type].technos} barStyle={skills[type].barStyle} title={skills[type].title} />
          </Slider>
        )
      }
    }
    return skillsComponents;
  }

  render () {
    let skillsComponents = this.createSkillsComponents();

    return (
      <div className="resume">
        <div className="banner home-banner">
          <h1 className="container title">
            Ma resume
          </h1>
        </div>
        <Duo eltLeft={<PdfText />} eltRight={<PdfLink />} style={pdfStyle}/>
        {skillsComponents}
        <h1 className="content-text">Work Experiences</h1>
        <Duo eltLeft={(() => <div>Wow</div>)()} />
      </div>
    )
  }
}
