import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'
import { lerpColor3 } from '../utils/color'

const gbstyles = {
  growingBar: {
    height: '14px',
    borderRadius: '7px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row'
  }
}

class GrowingBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0
    }

    this.maxScore = 100

    this.grow = this.grow.bind(this)
  }

  componentWillReceiveProps (nextProps, nextContext) {
    this.grow(nextProps.value)
  }

  componentDidMount () {
    this.grow(this.props.value)
  }

  grow (value) {
    let count = 0
    const intervalId = setInterval(() => {
      if (this.state.width < value) {
        this.setState(state => ({
          width: state.width + 1
        }))
      }
      if (count++ >= value) {
        window.clearInterval(intervalId)
      }
    }, 1)
  }

  render () {
    const color = lerpColor3('#ff2a2a', '#ffaa00', '#69d453', this.state.width / 100)
    return (
      <div className={classNames(this.props.classes.wrapper, this.props.className)}>
        <div
          className={classNames(
            'm-1',
            this.props.classes.growingBar
          )}
          style={{
            width: this.state.width,
            backgroundColor: color
          }}
        />
        <div
          style={{
            color: color,
            fontWeight: 'bold'
          }}
        >{this.state.width} %
        </div>
      </div>
    )
  }
}

GrowingBar = withStyles(gbstyles)(GrowingBar)

const styles = {
  bar: {
    marginLeft: '100px'
  },
  pseudo: {
    cursor: 'pointer',
    color: 'grey',
    '&:hover': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'grey'
    }
  },
  cell: {
    borderBottom: '1px solid rgba(100, 100, 100, 0.3)'
  }
}

class LeaderboardRow extends Component {
  render () {
    const entry = this.props.entry

    const globalScore = this.props.globalScore

    return (
      <div className={'row'}>
        <div
          className={classNames('col-sm p-1', this.props.classes.cell)}>
          <NavLink to={`/leaderboard/${entry.id}/`} className={this.props.classes.pseudo}>
            {entry.pseudo}
          </NavLink>
        </div>
        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
          <GrowingBar value={globalScore(entry)} className={this.props.classes.bar}/>
        </div>
        <div className={classNames('col-sm p-1', this.props.classes.cell)} data-test-class={'numberOfGamesCell'}>
          {entry.gameResults.length > 10 ? '10+' : entry.gameResults.length}
        </div>
      </div>
    )
  }
}

LeaderboardRow.propTypes = {}

LeaderboardRow.defaultProps = {
  entry: {},
  globalScore: () => 0
}

export default compose(
  withStyles(styles)
)(LeaderboardRow)
