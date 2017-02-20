var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink'

const Who = () => (
  <div className="home-who content">
    <img src={pp} alt="dinosir"/>
    <p className="bio content-text">I'm a dino sir</p>
  </div>
)

const What = () => (
  <div className="home-what content">
    <div className="elements">
      <div className="content-text">
        <h4>My projects</h4>
        <p>Check out my last realization, but also other school and personal works</p>
      </div>
      <NavLink to="/pikachu">
        <Card
          source="http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg"
          title="The last project"
          description="Wow much cool great job such engineer"
        />
      </NavLink>
    </div>
  </div>
)

const Misc = () => (
  <div className="home-misc content">
    <p className="content-text">Thank god for these rap recordings <br/>I can ball like him on every verse and chorus</p>
  </div>
)



export default class Home extends Component {

  render () {
    return (
      <div>
        <div className="home-banner container">
          <div className="title">Welcome to my sh*t</div>
        </div>
        <Who />
        <What />
        <Misc />
        <Contact />


        {/* <Map /> */}
      </div>
    );
  }
}
