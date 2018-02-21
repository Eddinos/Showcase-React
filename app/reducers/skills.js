export default function skills (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SKILLS':
      return getSkills(state, action)
    default:
      return state
  }
}

const getSkills = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_SKILLS':
        return action.skills
    default:
      return state
  }
}
