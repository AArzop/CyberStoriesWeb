import React from 'react'
import SocialLogin from 'react-social-login'
import { AUTHENTICATE } from '../../actions/authentication'
import { store } from '../../store/store'
import { withRouter } from 'react-router-dom'
import { createButton, createSvgIcon } from 'react-social-login-buttons'
import { post, get } from '@exifers/fetch-utils'

function Icon ({ width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 90 90">
      <g>
        <path
          d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"
          fill="#FFFFFF"/>
      </g>
    </svg>
  )
}

const config = {
  text: '',
  icon: createSvgIcon(Icon),
  style: { background: '#6b8cd3' },
  activeStyle: { background: '#6079c8' }
}

const FacebookButton = createButton(config)

const FacebookLogin = SocialLogin(
  ({ triggerLogin }) => (
    <FacebookButton
      onClick={triggerLogin}
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        margin: 'auto',
        width: 'auto',
        borderRadius: 7
      }}>
      Continuer avec Facebook
    </FacebookButton>
  )
)

const FacebookLoginButton = ({ history }) => (
  <FacebookLogin
    provider={'facebook'}
    appId={'2440034039385308'}
    onLoginSuccess={(response) => {
      const token = response._token.accessToken
      post('/rest-auth/facebook/', { access_token: token }).then(() => {
        get('/rest-auth/user/').then(json => {
          store.dispatch({ type: AUTHENTICATE, payload: { username: json.username, email: json.email } })
        })
        history.push('/')
      })
    }}
    onLoginFailure={() => {
    }}
  />
)

export default withRouter(FacebookLoginButton)
