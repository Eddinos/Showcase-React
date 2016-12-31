var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';

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

const Contact = () => (
  <div className="home-contact content">
    <p>Tu cherches le, contact ?</p>
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
        {/* <Link to="/pikachu"><div className="content" style={{backgroundColor: 'blue'}}>
          Who am i
        </div></Link> */}
        <What />
        <Misc />
        <Contact />
      </div>
    );
  }
}
