// INITIAL STATE
const initialState = {
  username: '',
  email: '',
  accountBalance: 0,
  transaction: []
}

// ACTION CONSTANTS
const SET_USER = 'SET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

// ACTION BUILDERS
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}
export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

// REDUCER
export default (state=initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOGOUT_USER:
      return initialState
    case SET_USER: 
      const {username, email} = payload
      return {...state, username, email}
    default: return state
  }
}