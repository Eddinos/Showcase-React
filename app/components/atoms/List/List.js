import React from 'react';
import { Component, PropTypes } from 'react';
import './List.scss';

// TODO make the list component free from any type of item
export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={`technos ${this.props.className || ''}`}>
        <span>Those technologies were used in the creation of this project : </span>
        <ul className="technos__list">
          {this.props.technos.map((item, key) => {
            return (
              <li key={key}>
                <div className="itemContainer">
                  <div className="label">{item}</div>
                  <div className={`technos__pic technos__pic--${item.split(' ')[0]}`}></div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
