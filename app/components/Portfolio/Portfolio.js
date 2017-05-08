import React from 'react';
import { Component, PropTypes } from 'react';
import titlePic from '../../../tools/images/adaptedBasketball.jpg';
import './Portfolio.scss';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import Presenter from '../Presenter/Presenter';
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
      proyectos: []
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
  //  },
  //  {
  //    source: "http://www.basketusa.com/wp-content/uploads/2017/02/davis-asg.jpg",
  //    title: "The last project",
  //    description: "Wow much cool great job such engineer"
  //  },
  //  {
  //    source: "http://www.basketusa.com/wp-content/uploads/2017/02/derrick-rose-2-1-570x325.jpg",
  //    title: "The last project",
  //    description: "Wow much cool great job such engineer"
   }
 );
   this.setState({proyectos: loadedProjects});
  }

  render () {
    if (!this.state.projects) {
      return (
        <div className="portfolio">
          <figure className="portfolio-header">
            <img src={titlePic} alt="portfolio header" className="header-img"/>
            <figcaption className="header-caption">
              <h1 className="title">
                My projects
              </h1>
            </figcaption>
          </figure>

          <Intro/>
        </div>
      )
    }
    let page = this.props.location.pathname;
    return (
      <div className="portfolio">
        <figure className="portfolio-header">
          <img src={titlePic} alt="portfolio header" className="header-img"/>
          <figcaption className="header-caption">
            <h1 className="title">
              My projects
            </h1>
          </figcaption>
        </figure>

        <Intro/>

        {/* Too bad but I can't think of a better solution right now
          <DataContainer url="http://numbersapi.com/random/trivia"> */}

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
          {this.state.proyectos.map((item, key) => {
            return (
              <NavLink to="/pikachu" key={key}>
                <Card
                  source={item.source}
                  title={item.title}
                  description={item.description}
                />
              </NavLink>
            )
          })}
        </Presenter>

        {this.props.children &&
          <div className="project-display">
            <ReactCSSTransitionGroup
              transitionName="swap"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
                {React.cloneElement(React.Children.only(this.props.children), {key: page, projects: this.state.projects })}
            </ReactCSSTransitionGroup>
          </div>
        }


        {/* </DataContainer> */}
      </div>
    )
  }
}
