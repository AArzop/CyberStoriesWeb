import React, { Component } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Table from 'components/Table/Table.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import { compose } from 'redux'
import { withLeaderboardEntries, withWebsocketLeaderboardEntries } from '../../../../actions/leaderboard'
import withStyles from 'react-jss'
import { lerpColor3 } from '../../../../utils/color'
import classNames from 'classnames'

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
    const color = lerpColor3('#e63b38', '#f6940e', '#56b05a', this.state.width / 100)
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
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
}

const useStyles = makeStyles(styles)

function TableList ({ leaderboardEntries }) {
  const classes = useStyles()

  const nonEmptyFilter = (entry) => entry.gameResults.length > 0

  const globalScoreSort = (entry1, entry2) => {
    const globalScore1 = globalScore(entry1)
    const globalScore2 = globalScore(entry2)
    return globalScore1 < globalScore2 ? 1
      : globalScore1 === globalScore2 ? 0
        : -1
  }

  const globalScore = (entry) => (
    Math.max(...entry.gameResults.map(
      current => (
        current.stage1Score +
        current.stage2Score +
        current.stage3Score +
        current.stage4Score
      )
    )) / 4
  )

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Best scores
            </h4>
            <p className={classes.cardCategoryWhite}>
              Based on best personal average score
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={['Rank', 'Name', 'Score', 'Company', 'Date']}
              tableData={leaderboardEntries
                .filter(nonEmptyFilter)
                .sort(globalScoreSort)
                .map((entry, index) => (
                  [index + 1, entry.pseudo, () => <GrowingBar value={globalScore(entry)}/>, 'Murex', entry.gameResults[0].date]
                ))}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}

export default compose(
  withWebsocketLeaderboardEntries,
  withLeaderboardEntries,
  withStyles(styles)
)(TableList)
