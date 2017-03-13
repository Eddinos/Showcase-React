import React from 'react';
import { Component, PropTypes } from 'react';

export default class Project extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projectID: props.params.projectID,
      query: props.location.query
    }
    console.log('query');
    console.log(props.location.query);
  }

  render () {
    return (
      <div className="project">
        Project #{this.state.projectID}
        et donc {this.props.parentData}
      </div>
    )
  }
}
