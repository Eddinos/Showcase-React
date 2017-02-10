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
    <p className="bio">I'm a dino sir</p>
  </div>
)

const What = () => (
  <div className="home-what content">
    <p>I used to wanna be like Michael Jordan <br/> Figured that I make it to the NBA and make a fortune</p>
  </div>
)

const Misc = () => (
  <div className="home-misc content">
    <p>Thank god for these rap recordings <br/>I can ball like him on every verse and chorus</p>
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
        <NavLink to="/pikachu">
          <Card
            source="http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg"
            title="My little panel"
            description="You gotta pick the right words CJ gadammit for fuck sake"
          />
        </NavLink>

        {/* <Map /> */}
      </div>
    );
  }
}
