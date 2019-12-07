import { AUTHENTICATE, LOGOUT } from '../actions/authentication'

const initialState = {
  // eslint-disable-next-line no-undef
  authenticated: true, //USER_AUTHENTICATED,
  // eslint-disable-next-line no-undef
  username: 'Emmanuel',//USERNAME,
  // eslint-disable-next-line no-undef
  email: 'meric.emmanuel@gmail.com'//EMAIL
}

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
        username: action.payload.username,
        email: action.payload.email
      }
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        username: '',
        email: ''
      }
    default:
      return state
  }
}
