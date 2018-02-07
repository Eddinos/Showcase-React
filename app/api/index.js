import axios from 'axios';
import config from '../../config'

const projectsEndPoint = config.projectsAPI
const skillsEndPoint = config.skillsAPI
const xpEndPoint = config.xpAPI

export const getProjects = () => {
  return axios.get(projectsEndPoint)
    .then((response) => {
      return response.data
    })
    .catch(error => errorHandler(error))
}

export const getSkills = () => {
  return axios.get(skillsEndPoint)
    .then(response => {
      return response.data
    })
    .catch(error => errorHandler(error))
}

export const getXp = () => {
  return axios.get(xpEndPoint)
    .then(response => {
      return response.data
    })
    .catch(error => errorHandler(error))
}

const errorHandler = (error) => {
  console.log(error.response.data);
}
