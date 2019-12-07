import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { combineValidators, required, sameAs } from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {}

class ChangePasswordForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/password/change/'}
        method={'POST'}
        onSubmitted={() => {
          this.props.history.push('/')
        }}
        buttonDisplayText={'Valider'}
        fields={[
          {
            name: 'old_password',
            displayName: 'Ancien mot-de-passe',
            placeholder: 'Ancien mot-de-passe',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          },
          {
            name: 'new_password1',
            displayName: 'Nouveau mot-de-passe',
            placeholder: 'Nouveau mot-de-passe',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          },
          {
            name: 'new_password2',
            displayName: 'Nouveau mot-de-passe',
            placeholder: 'Nouveau mot-de-passe',
            initialValue: '',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('new_password1', 'Les mots-de-passe sont différents')
            ])
          }
        ]}
      />
    )
  }
}

ChangePasswordForm.propTypes = {}

ChangePasswordForm.defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(ChangePasswordForm)
