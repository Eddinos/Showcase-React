export default function projects (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
      return getProjects(state, action)
    case 'SELECT_SINGLE_PROJECT':
      return getSingleProject(state, action)
    default:
      return state
  }
}

export const getSingleProject = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_SINGLE_PROJECT':
        return [ { ...action.projects[action.id] }]
    default:
      return state
  }
}

const getProjects = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
        return action.projects
    default:
      return state
  }
}
