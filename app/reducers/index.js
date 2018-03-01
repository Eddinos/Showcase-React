import { combineReducers } from 'redux'
import projects, * as fromProjects from './projects'
import skills from './skills'
import experiences from './experiences'

const initialState = {
  projects: [],
  skills: [],
  experiences: []
}

export default combineReducers({
  projects,
  skills,
  experiences
})

const getSingleProject = (state, id) => fromProjects.getSingleProject(state.cart, id)
