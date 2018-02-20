var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../../molecules/AppBar/AppBar';
import pp from '../../../../tools/images/Dino-sir.jpg';
import lyon from '../../../../tools/images/lyon_desktop.png';
import lyonMobile from '../../../../tools/images/lyon_mobile.png';
import shanghai from '../../../../tools/images/shanghai_desktop.jpg';
import shanghaiWide from '../../../../tools/images/shanghai_wide.jpg';
import shanghaiMobile from '../../../../tools/images/shanghai_mobile.jpg';
import paris from '../../../../tools/images/paris_desktop.jpg';
import parisMobile from '../../../../tools/images/paris_mobile.jpg';
import cv from '../../../../tools/cv.pdf';
import Map from '../../atoms/Map/Map';
import Contact from '../../organisms/Contact/Contact';
import Card from '../../atoms/Card/Card';
import NavLink from '../../atoms/NavLink/NavLink';
import Duo from '../../bonds/Duo/Duo';
import axios from 'axios';
import config from "../../../../config";
import Banner from '../../atoms/Banner/Banner';
import { connect } from 'react-redux';
import { changeColor } from '../../../actions'

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

  componentDidMount () {
    let currentProjectAPI = `${config.projectsAPI}?id=${currentProjectID}`;
    axios.get(currentProjectAPI)
    .then((response) => {
      this.setState({currentProject: response.data.projects})
    })
    .catch((error) => {
      console.log(error.message);
    })
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
    var bgImg = this.setCurrentHometown();
    return (
      <div className="home">
        <Banner title="Welcome to my sh*t" backgroundImage={`url(${bgImg})`} />
        <div onClick={this.props.onColorClick} style={{color: this.props.customColor}}>REDUX</div>
        <select value={this.props.customColor} onChange={this.props.onColorClick}>
          <option value="red">RED</option>
          <option value="blue">BLUE</option>
          <option value="green">GREEN</option>
          <option value="darksalmon">SALMON</option>
          <option value="darkmagenta">DEEP PURPLE</option>
        </select>

        <Who />

        <What currentProject={this.state.currentProject}/>

        <Contact />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customColor: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColorClick (e) {
      let color = e ? e.target.value : 'red'
      dispatch(changeColor(color))
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default Home