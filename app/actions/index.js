import { getProjects } from '../api'

export const changeColor = (color) => {
  return {
    type: 'CHANGE_COLOR',
    color
  }
}

export const receiveProjects = projects => ({
  type: 'RECEIVE_PROJECTS',
  projects
})

export const getAllProjects = () => dispatch => {
  console.log('moi par contre je peux aller me faire foutre');
  getProjects().then((data) => {
    dispatch(receiveProjects(data.projects))
  })
}
