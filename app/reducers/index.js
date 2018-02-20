import { combineReducers } from 'redux'

const initialState = {
  projects: [],
  color: 'black'
}

export default combineReducers({
  color,
  projects,
})

function color (state = 'black', action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return setColor(state, action)
    default:
      return state
  }
}

function projects (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
      return getProjects(state, action)
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


export const getProjects = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
        return action.projects
    default:
      return state
  }
}
