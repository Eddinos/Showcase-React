import React from 'react';
import { Component, PropTypes } from 'react';
import titlePic from '../../../tools/images/adaptedBasketball.jpg';
import './Portfolio.scss';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import Presenter from '../Presenter/Presenter';
import Banner from '../Banner/Banner';
import DataContainer from '../DataContainer/DataContainer';
import axios from 'axios';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import config from "../../../config";

const Intro = () => (
  <div className="intro content-text">
    <h4>Description of my work will be gathered here</h4>
    <span>I've done different shit at school or in my spare time, and I am glad to share it with ya</span>
  </div>
)

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
      projects: []
    }
  }

  componentDidMount() {
    axios.get(config.projectsAPI)
    .then((response) => {
      this.setState({projects: response.data.projects})
    })
    .catch((error) => {
      console.log(error.message);
    })

   // initialization of projects displayed in presenter
   var loadedProjects = [];
   loadedProjects.push(
   {
     source: "http://www.basketusa.com/wp-content/uploads/2017/03/kobe-shaq.jpg",
     title: 'Kobe & Shaq',
     description: "They're here for testing purpose only ! Don't click !"
   }
 );
   this.setState({proyectos: loadedProjects});
  }

  renderProjects () {
    let page = this.props.location.pathname;
    return (
      <div>
        <Presenter>
          {this.state.projects.map((item, key) => {
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
                {React.cloneElement(React.Children.only(this.props.children), {key: page, projects: this.state.projects })}
            </ReactCSSTransitionGroup>
          </div>
        }
      </div>
    )
  }

  render () {
    return (
      <div className="portfolio">
        <Banner
          title="My projects"
          backgroundImg={`url(${titlePic})`}
        />

        <Intro/>

        {this.renderProjects()}
      </div>
    )
  }
}
