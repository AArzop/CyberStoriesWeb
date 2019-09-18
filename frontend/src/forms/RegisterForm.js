import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { combineValidators, minimalLength, required, sameAs, validEmail } from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {}

class RegisterForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/registration/'}
        method={'POST'}
        buttonDisplayText={'VALIDER'}
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
            name: 'email',
            displayName: 'Email',
            placeholder: 'Email',
            initialValue: '',
            type: 'email',
            clientSideValidation: validEmail
          },
          {
            name: 'password1',
            displayName: 'Password',
            placeholder: 'Password',
            initialValue: '',
            type: 'password',
            clientSideValidation: minimalLength(8)
          },
          {
            name: 'password2',
            displayName: 'Confirm password',
            initialValue: '',
            placeholder: 'Confirm password',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('password1', 'Confirmed password is different')
            ])
          }
        ]}
        onSubmitted={() => {
          this.props.history.push('/')
        }}
      />
    )
  }
}

RegisterForm.propTypes = {}

RegisterForm.defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(RegisterForm)
