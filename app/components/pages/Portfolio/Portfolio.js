import React from 'react';
import { Component, PropTypes } from 'react';
import titlePic from '../../../../tools/images/adaptedBasketball.jpg';
import './Portfolio.scss';
import Card from '../../atoms/Card/Card';
import NavLink from '../../atoms/NavLink/NavLink';
import Presenter from '../../organisms/Presenter/Presenter';
import Banner from '../../atoms/Banner/Banner';
import DataContainer from '../../bonds/DataContainer/DataContainer';
import axios from 'axios';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getProjects } from '../../../api'
import { connect } from 'react-redux';


const Intro = () => (
  <div className="intro content-text">
    <h4>Description of my work will be gathered here</h4>
    <span>I've done different shit at school or in my spare time, and I am glad to share it with ya</span>
  </div>
)

export class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
      projects: []
    }
  }

  renderProjects () {
    let page = this.props.location.pathname;
    return (
      <div>
        <Presenter>
          {this.props.projects.map((item, key) => {
              return (
                <Link to={"/portfolio/project/" + item.id + "#project"} key={key}>
                  <Card
                    source={item.media}
                    title={item.title}
                    description={item.shortDescription}
                  />
                </Link>
              )
            })}
        </Presenter>

        {this.props.children &&
          <div className="project-display">
            <ReactCSSTransitionGroup
              transitionName="swap"
              transitionEnterTimeout={900}
              transitionLeaveTimeout={900}
            >
                {React.cloneElement(React.Children.only(this.props.children), {key: page, projects: this.props.projects })}
            </ReactCSSTransitionGroup>
          </div>
        }
      </div>
    )
  }

  render () {
    console.log('Portfolio state', this.props);
    return (
      <div className="portfolio">
        <Banner
          title="My projects"
          backgroundImage={`url(${titlePic})`}
        />

        <Intro/>

        {this.renderProjects()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const Portfolio = connect(
  mapStateToProps,
)(PortfolioPage)

export default Portfolio
