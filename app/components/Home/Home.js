var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';
import lyon from '../../../tools/images/lyon_desktop.png';
import lyonMobile from '../../../tools/images/lyon_mobile.png';
import shanghai from '../../../tools/images/shanghai_desktop.jpg';
import shanghaiWide from '../../../tools/images/shanghai_wide.jpg';
import shanghaiMobile from '../../../tools/images/shanghai_mobile.jpg';
import paris from '../../../tools/images/paris_desktop.jpg';
import parisMobile from '../../../tools/images/paris_mobile.jpg';
import cv from '../../../tools/cv.pdf';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import Duo from '../Duo/Duo';
import axios from 'axios';
import config from "../../../config";


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

export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hometowns: hometowns
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

    this.changeHometown();
  }

  changeHometown () {
    setInterval(() => {
      this.setState((state, props) => {
        state.hometowns.some((town, key) => {
          if (town.opacity == 1) {
            town.opacity = 0;
            state.hometowns[(key+1)%state.hometowns.length].opacity = 1;
            return true;
          }
        })
      })
    }, 5000);

  }

  createHometowns () {

    return this.state.hometowns.map((item, key) => {
      let srcset = `${item.srcsetXL} 1800w, ${item.srcsetMobile} 360w`
      return <img src={item.src} alt={item.name} className="home-city" srcSet={srcset} sizes="100vw" style={{opacity: item.opacity}}/>
    })
  }

  render () {
    return (
      <div>
        <div className="home-banner container">
          <div className="title home-title">Welcome to my sh*t</div>
          {this.createHometowns()}
        </div>
        <Who />

        <What currentProject={this.state.currentProject}/>

        <Contact />

        {/* <Map /> */}
      </div>
    );
  }
}
