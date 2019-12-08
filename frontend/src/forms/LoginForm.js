import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { get } from 'fetch-factorized'
import { AUTHENTICATE } from '../actions/authentication'
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
            displayName: 'Nom d\'utilisateur',
            placeholder: 'Nom d\'utilisateur',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'password',
            displayName: 'Mot-de-passe',
            placeholder: 'Mot-de-passe',
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
