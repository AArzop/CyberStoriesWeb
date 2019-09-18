import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { get } from '../utils/fetch'
import { AUTHENTICATE, setProfile } from '../actions/authentication'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AutoForm, { required } from '../utils/AutoForm'

const styles = {}

class LoginForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/login/'}
        method={'POST'}
        onSubmitted={() => {
          get('/rest-auth/user/').then((json) => {
            this.props.dispatch({
              type: AUTHENTICATE,
              payload: {
                username: json.username,
                email: json.email
              }
            })
            this.props.history.push('/')
          })
        }}
        buttonDisplayText={'Se connecter'}
        feedbackOnValidFields={false}
        fields={[
          {
            name: 'username',
            displayName: 'Username',
            placeholder: 'Username',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'password',
            displayName: 'Password',
            placeholder: 'Password',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          }
        ]}
      />
    )
  }
}

LoginForm.propTypes = {}

LoginForm.defaultProps = {}

export default compose(
  withStyles(styles),
  connect(),
  withRouter
)(LoginForm)
