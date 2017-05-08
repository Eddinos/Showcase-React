import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import Pikachu from './components/Pikachu/Pikachu'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Project from './components/Project/Project'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/pikachu" component={Pikachu}/>
    <Route path="/portfolio" component={Portfolio}>
      <Route path="project/:projectID" component={Project}/>
    </Route>
    {/*<IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>*/}
  </Route>
)
