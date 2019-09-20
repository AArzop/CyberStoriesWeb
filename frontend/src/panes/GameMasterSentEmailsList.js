import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import classNames from 'classnames'

const styles = {
  wrapper: {
    border: '3px solid #aaa',
    minWidth: '200px',
    minHeight: '400px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  emptyMessage: {
    margin: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#aaa'
  }
}

class GameMasterSentEmailsList extends Component {
  render () {
    return (
      <div className={classNames(this.props.classes.wrapper)}>
        {this.props.emails.length === 0
          ? <div className={this.props.classes.emptyMessage}><small>Drop an email here to send it to the player</small></div>
          : this.props.emails.map(email => (
            <div key={email.id} className={'my-2'}>{email}</div>
          ))}
      </div>
    )
  }
}

GameMasterSentEmailsList.propTypes = {}

GameMasterSentEmailsList.defaultProps = {
  emails: []
}

export default compose(
  withStyles(styles)
)(GameMasterSentEmailsList)
