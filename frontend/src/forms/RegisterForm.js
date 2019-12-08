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
            displayName: 'Nom d\'utilisateur',
            placeholder: 'Nom d\'utilisateur',
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
            displayName: 'Mot-de-passe',
            placeholder: 'Mot-de-passe',
            initialValue: '',
            type: 'password',
            clientSideValidation: minimalLength(8)
          },
          {
            name: 'password2',
            displayName: 'Confirmer le mot-de-passe',
            initialValue: '',
            placeholder: 'Confirmer le mot-de-passe',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('password1', 'Le mot-de-passe confirmé est différent')
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
