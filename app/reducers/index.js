const initialState = {
  projects: [],
  color: 'black'
}

export const setColor = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { color: action.color}
    default:
      return state

  }
}


export const getProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
        return { ...state, projects: action.projects }
    default:
      return state
  }
}
