import { AUTHENTICATE } from '../actions/authentication'

const initialState = {
  // eslint-disable-next-line no-undef
  authenticated: USER_AUTHENTICATED,
  // eslint-disable-next-line no-undef
  username: USERNAME,
  // eslint-disable-next-line no-undef
  email: EMAIL
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
    default:
      return state
  }
}
