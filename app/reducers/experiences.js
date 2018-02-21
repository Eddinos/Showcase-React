export default function experiences (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_XP':
      return getExp(state, action)
    default:
      return state
  }
}

const getExp = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_XP':
        return action.experiences
    default:
      return state
  }
}
