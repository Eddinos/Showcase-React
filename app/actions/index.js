import { getProjects } from '../api'

export const changeColor = (color) => {
  return {
    type: 'CHANGE_COLOR',
    color
  }
}

const receiveProjects = projects => ({
  type: 'RECEIVE_PROJECTS',
  projects
})

export const getAllProjects = () => dispatch => {
  getProjects().then((data) => {
    dispatch(receiveProjects(data.projects))
  })
}
