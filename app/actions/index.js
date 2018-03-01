import { getProjects, getSkills, getXp, getSingleProject } from '../api'

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

export const receiveSkills = skills => ({
  type: 'RECEIVE_SKILLS',
  skills
})

export const receiveExperiences = experiences => ({
  type: 'RECEIVE_XP',
  experiences
})

export const receiveProject = project => ({
  type: 'RECEIVE_PROJECT',
  project
})

export const selectSingleProject = (id, projects) => ({
  type: 'SELECT_SINGLE_PROJECT',
  id,
  projects
})

export const getAllProjects = () => dispatch => {
  return getProjects().then((data) => {
    dispatch(receiveProjects(data.projects))
  })
}

export const getAllSkills = () => dispatch => {
  getSkills().then(data => {
    dispatch(receiveSkills(data))
  })
}

export const getAllExperiences = () => dispatch => {
  getXp().then(data => {
    dispatch(receiveExperiences(data))
  })
}

export const getProject = (id) => dispatch => {
  getSingleProject(id).then(data => {
    dispatch(receiveProject(data))
  })
}

export const selectProject = (id) => (dispatch, getState) => {
  return dispatch(selectSingleProject(id, getState().projects))
}
