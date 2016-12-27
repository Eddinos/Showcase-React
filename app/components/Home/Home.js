var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';

// const ppSrc = "http://img11.deviantart.net/1286/i/2012/151/6/6/like_a_dino_sir__by_username_065-d51sebi.jpg";

console.log(pp);
// const Who = () => (
//   <div className="home-who content">
//     <img src={ppSrc} alt="dinosir"/>
//     <p className="bio">I'm a sir, a dino sir</p>
//   </div>
// )

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="home-banner container">
          <div className="title">Welcome to my sh*t</div>
        </div>
        <div className="home-who content">
          <img src={pp} alt="dinosir"/>
          <p className="bio">I'm a sir, a dino sir</p>
        </div>
        {/* <Link to="/pikachu"><div className="content" style={{backgroundColor: 'blue'}}>
          Who am i
        </div></Link> */}
        <div className="content" style={{backgroundColor: 'yellow'}}>
          What I do
        </div>
        <div className="content" style={{backgroundColor: 'white'}}>
          Miscellaneous
        </div>
        <div className="content" style={{color: 'white', backgroundColor: 'black'}}>
          Contact me
        </div>
      </div>
    );
  }
}
