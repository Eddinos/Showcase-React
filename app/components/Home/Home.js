var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';
import cv from '../../../tools/cv.pdf';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import axios from 'axios';
import config from "../../../config";

const Who = () => (
  <div className="home-who content">
    <a href="/resume">
      <img src={pp} alt="dinosir"/>
    </a>
    <div className="home-who__bio">
      <h3 className="content-title">Trust me, I'm an engineer</h3>
      <p className="content-text">Web development enthusiast, basketball player,  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    </div>
  </div>
)

const currentProjectID = 2;

const What = () => (
    <NavLink to="/portfolio" className="prout">
      <Card
        source="http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg"
        title="Jahlil Okafor"
        description="Give it time, it's hosted on free servers !"
      />
    </NavLink>
)

const Misc = () => (
  <div className="home-misc content">
    <p className="content-text">Thank god for these rap recordings <br/>I can ball like him on every verse and chorus</p>
  </div>
)



export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {};
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

  render () {
    return (
      <div>
        <div className="home-banner container">
          <div className="title">Welcome to my sh*t</div>
        </div>
        <Who />
        <div className="home-what content">
          <div className="elements">
            <div className="content-text">
              <h4>My projects</h4>
              <p>Check out my last realization, but also other school and personal works</p>
            </div>
            {this.state.currentProject ? (
              <NavLink to={`/portfolio/project/${this.state.currentProject.id}`}>
                <Card
                  source={this.state.currentProject.media}
                  title={this.state.currentProject.title}
                  description={this.state.currentProject.shortDescription}
                />
              </NavLink>
            ) : (
              <What />
            )}

          </div>
        </div>
        {/* <Misc /> */}
        <Contact />


        {/* <Map /> */}
      </div>
    );
  }
}
