import { combineReducers } from 'redux'
import projects, * as fromProjects from './projects'
import skills from './skills'
import experiences from './experiences'

const initialState = {
  projects: [],
  color: 'black',
  skills: [],
  experiences: []
}

export default combineReducers({
  color,
  projects,
  skills,
  experiences
})

const getSingleProject = (state, id) => fromProjects.getSingleProject(state.cart, id)

function color (state = 'black', action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return setColor(state, action)
    default:
      return state
  }
}




export function setColor (state = 'black', action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.color
    default:
      return state

  }
}
