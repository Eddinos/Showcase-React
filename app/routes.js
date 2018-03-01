import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import Pikachu from './components/pages/Pikachu/Pikachu'
import Home from './components/pages/Home/Home'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Project from './components/organisms/Project/Project'
import Resume from './components/pages/Resume/Resume'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/pikachu" component={Pikachu}/>
    <Route path="/portfolio" component={Portfolio}>
      <Route path="project/:projectID" component={Project}/>
    </Route>
    <Route path="/resume" component={Resume}/>
    {/*<IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>*/}
  </Route>
)
