var React = require('react');
import { Component } from 'react';
import s from './Header.scss'

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="container">
          <div className="title">Welcome to my sh*t</div>
        </div>
      </div>
    );
  }
}
