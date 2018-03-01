import React from 'react';
import { Component, PropTypes } from 'react';
import './Resume.scss';
import cvPDF from '../../../../tools/cv.pdf'
import Slider from '../../bonds/Slider/Slider';
import Skills from '../../organisms/Skills/Skills';
import Duo from '../../bonds/Duo/Duo';
import Banner from '../../atoms/Banner/Banner';
import Experience from '../../molecules/Experience/Experience';
import bannerImg from '../../../../tools/images/venice_desktop.jpg';
import { getXp, getSkills } from '../../../api'
import { getAllSkills, getAllExperiences } from '../../../actions'
import { connect } from 'react-redux';


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

export class ResumePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: {},
      experiences: []
    }
  }

  componentDidMount() {
    if (this.props.experiences.length === 0) {
      this.props.getExperiences();
    }
    if (this.props.skills.length === 0) {
      this.props.getSkills();
    }
  }

  createSkillsComponents() {
    let skillsComponents = [];
    let skills = this.props.skills;
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

  createXpComponents() {
    if (!this.props.experiences) {
      return []
    }
    return this.props.experiences.map((item, key) => {
      let logoCmpnt = <img className="xpLogo" src={item.logo} alt=""/>;
      let description = <Experience data={item} key={key}> banana </Experience>//<div className="content-text">{item.title}</div>;
      var eltLeft = key%2 === 0 ? logoCmpnt : description ;
      var eltRight = key%2 !== 0 ? logoCmpnt : description;
      return (
        <Duo
          style={{padding: '5vh 0'}}
          key={key}
          eltLeft={(() => <Slider direction="in" side="left">{eltLeft}</Slider>)()}
          eltRight={(() => <Slider direction="in" side="right">{eltRight}</Slider>)()}>
        </Duo>
      )
    });
  }

  render () {
    return (
      <div className="resume">
        <Banner title="My resume" backgroundImage={`url(${bannerImg})`} />
        <Duo eltLeft={<PdfText />} eltRight={<PdfLink />} style={pdfStyle}/>
        {this.createSkillsComponents()}
        <h1 className="content-text mid-title mid-title--blue">Work Experiences</h1>
        {this.createXpComponents()}
        <div style={{height: '200px'}}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
    experiences: state.experiences
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSkills () {
      dispatch(getAllSkills())
    },
    getExperiences () {
      dispatch(getAllExperiences())
    }
  }
}

const Resume = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumePage)

export default Resume
