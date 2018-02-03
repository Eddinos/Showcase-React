import React from 'react';
import {Component} from 'react';

export default class Text extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.children.split('\\n').map((item, key) => {
                                        return <span key={key}>{item}<br/></span>
                                      })}
      </div>
    )
  }
}
