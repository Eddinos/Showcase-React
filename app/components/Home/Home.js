var React = require('react');
import { Component } from 'react';
import s from './Home.scss';
import { Link } from 'react-router';
import AppBar from '../AppBar/AppBar';
import { images } from '../../../config';
import pp from '../../../tools/images/Dino-sir.jpg';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import Card from '../Card/Card';
import NavLink from '../NavLink/NavLink';
import axios from 'axios';
import config from "../../../config";

const Who = () => (
  <div className="home-who content">
    <img src={pp} alt="dinosir"/>
    <p className="bio content-text">I'm a dino sir</p>
  </div>
)

const currentProjectID = 2;

const What = () => (
  // <div className="home-what content">
  //   <div className="elements">
  //     <div className="content-text">
  //       <h4>My projects</h4>
  //       <p>Check out my last realization, but also other school and personal works</p>
  //     </div>
      <NavLink to="/portfolio" className="prout">
        <Card
          source="http://www.basketusa.com/wp-content/uploads/2017/02/okafor-1.jpg"
          title="The last project"
          description="Wow much cool great job such engineer"
        />
      </NavLink>
  //   </div>
  // </div>
)

const Misc = () => (
  <div className="home-misc content">
    <p className="content-text">Thank god for these rap recordings <br/>I can ball like him on every verse and chorus</p>
  </div>
)



export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    let currentProjectAPI = `${config.projectsAPI}?id=${currentProjectID}`;
    axios.get(currentProjectAPI)
    .then((response) => {
      this.setState({currentProject: response.data.projects})
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  render () {
    return (
      <div>
        <div className="home-banner container">
          <div className="title">Welcome to my sh*t</div>
        </div>
        <Who />
        <div className="home-what content">
          <div className="elements">
            <div className="content-text">
              <h4>My projects</h4>
              <p>Check out my last realization, but also other school and personal works</p>
            </div>
            {this.state.currentProject ? (
              <NavLink to={`/portfolio/project/${this.state.currentProject.id}`} className="prout">
                <Card
                  source={this.state.currentProject.media}
                  title={this.state.currentProject.title}
                  description={this.state.currentProject.shortDescription}
                />
              </NavLink>
            ) : (
              <What />
            )}

          </div>
        </div>
        <Misc />
        <Contact />


        {/* <Map /> */}
      </div>
    );
  }
}
