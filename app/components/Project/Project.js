import React from 'react';
import { Component, PropTypes } from 'react';
import Progress from '../Progress/Progress';
import './project.scss'

export default class Project extends Component {
  constructor (props) {
    super(props);

    let newProject = props.projects[props.params.projectID-1];
    this.state = {
      projectID: props.params.projectID,
      query: props.location.query,
      currentProject: newProject
    }
  }

  componentWillReceiveProps (nextProps) {
    let newProject = nextProps.projects[nextProps.params.projectID-1];
    // this.setState({
    //   projectID: nextProps.params.projectID,
    //   currentProject: newProject
    // });
  }

  render () {
    return (
      <div className="project" id="project">
        <h1 className="title">{this.state.currentProject.title}</h1>
        <h4 className="description">{this.state.currentProject.longDescription}</h4>
        <Progress percentageValue={this.state.currentProject.completion}/>
      </div>
    )
  }
}
