import React from 'react';
import { Component, PropTypes } from 'react';
import titlePic from '../../../tools/images/adaptedBasketball.jpg';
import './Portfolio.scss';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import Presenter from '../Presenter/Presenter';
import DataContainer from '../DataContainer/DataContainer'

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
      projects: []
    }
  }

  componentDidMount() {
   // initialization of projects displayed in presenter
   var loadedProjects = [];
   loadedProjects.push({
     source: "http://www.basketusa.com/wp-content/uploads/2017/02/cousins-davis-1-570x325.jpg",
     title: "The Last Project",
     description: "Wow much cool great job such engineer"
   },
   {
     source: "http://www.basketusa.com/wp-content/uploads/2017/02/durant-harden-westbrook-2-570x325.jpg",
     title: 'Another one',
     description: "Wow much cool great job such engineer"
   },
   {
     source: "http://www.basketusa.com/wp-content/uploads/2017/02/davis-asg.jpg",
     title: "The last project",
     description: "Wow much cool great job such engineer"
   },
   {
     source: "http://www.basketusa.com/wp-content/uploads/2017/02/derrick-rose-2-1-570x325.jpg",
     title: "The last project",
     description: "Wow much cool great job such engineer"
   });
   this.setState({projects: loadedProjects});
  }

  render () {
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

        <DataContainer url="http://numbersapi.com/random/trivia">

          <Presenter>
            {this.state.projects.map((item, key) => {
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
{this.props.children}
        </DataContainer>
        {/* <DataContainer url="http://numbersapi.com/random/year">

        </DataContainer> */}

      </div>
    )
  }
}
