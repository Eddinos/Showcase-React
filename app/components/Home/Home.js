var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="home-banner">
          <div className="container">
            <div className="title">Welcome to my sh*t</div>
          </div>
        </div>
        <Link to="/pikachu"><div className="content" style={{backgroundColor: 'blue'}}>
          Who am i
        </div></Link>
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
