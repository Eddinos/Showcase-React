var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../../molecules/AppBar/AppBar';
import pp from '../../../../tools/images/Dino-sir.jpg';
import lyon from '../../../../tools/images/lyon_desktop.jpg';
import lyonMobile from '../../../../tools/images/lyon_mobile.jpg';
import shanghai from '../../../../tools/images/shanghai_desktop.jpg';
import shanghaiWide from '../../../../tools/images/shanghai_wide.jpg';
import shanghaiMobile from '../../../../tools/images/shanghai_mobile.jpg';
import paris from '../../../../tools/images/paris_desktop.jpg';
import parisMobile from '../../../../tools/images/paris_mobile.jpg';
import Map from '../../atoms/Map/Map';
import Contact from '../../organisms/Contact/Contact';
import Card from '../../atoms/Card/Card';
import NavLink from '../../atoms/NavLink/NavLink';
import Duo from '../../bonds/Duo/Duo';
import config from "../../../../config";
import Banner from '../../atoms/Banner/Banner';
import { connect } from 'react-redux';
import { getAllProjects } from '../../../actions'

const Who = () => {
  const picture = (<a href="/resume" className="profilePicture">
                    <img src={pp} alt="dinosir"/>
                  </a>);
  const text = (
    <div className="home-who__bio">
      <h3 className="content-title">Trust me, I'm an engineer</h3>
      <p className="content-text">Basketball legend, web development genius, blabla lorem ipsum lorem ipsum who reads these self-descriptions anyway</p>
    </div>
  );
  return (
    <Duo className="home-who content"
      eltLeft = {picture}
      eltRight = {text}
    />
  )
}

const currentProjectID = 2;

const WhatPlaceHolder = () => (
    <NavLink to="/portfolio" className="prout">
      <Card
        source="http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg"
        title="Jahlil Okafor"
        description="Give it time, it's hosted on free servers !"
      />
    </NavLink>
)
const What = (props) => {
  var text = (
    <div className="content-text">
      <h4>My projects</h4>
      <p>Check out my last realization, but also other school and personal works</p>
      <NavLink to='/portfolio' className="moreButton">See more projects</NavLink>
    </div>
  );
  var exemple = props.currentProject ? (
      <NavLink to={`/portfolio/project/${props.currentProject.id}`}>
        <Card
          source={props.currentProject.media}
          title={props.currentProject.title}
          description={props.currentProject.shortDescription}
        />
      </NavLink>
    ) : (
      <WhatPlaceHolder />
    );
  return (
    <Duo className="home-what content"
      eltLeft = {text}
      eltRight = {exemple}
    />
  )
}

var hometowns = [
  {
    name: 'Lyon',
    src: lyon,
    srcsetXL: lyon,
    srcsetMobile: lyonMobile,
    opacity: 1
  },
  {
    name: 'SH',
    src: shanghai,
    srcsetXL: shanghaiWide,
    srcsetMobile: shanghaiMobile,
    opacity: 0
  },
  {
    name: 'Paname',
    src: paris,
    srcsetXL: paris,
    srcsetMobile: parisMobile,
    opacity: 0
  }
]

class HomePage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hometown: hometowns[Math.floor(Math.random()*3)]
    };
  }

  componentWillMount () {
    if (!this.props.currentProject) {
      this.props.getProjects();
    }
  }

  setCurrentHometown () {
    if (!this.state.hometown) {
      return '';
    }
    if (screen.width < 480) {
      return this.state.hometown.srcsetMobile;
    }
    else if (screen.width < 1440) {
      return this.state.hometown.src;
    }
    return this.state.hometown.srcsetXL;
  }

  render () {
    console.log('props', this.props);
    var bgImg = this.setCurrentHometown();
    return (
      <div className="home">
        <Banner title="Welcome to my sh*t" backgroundImage={`url(${bgImg})`} />

        <Who />

        <What currentProject={this.props.currentProject}/>

        <Contact />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let id = Math.floor(Math.random()*state.projects.length)
  return {
    currentProject: state.projects[id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects () {
      dispatch(getAllProjects())
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default Home
