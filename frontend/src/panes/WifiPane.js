import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import ArticleHeader from '../components/ArticleHeader'
import ArticleSection from '../components/ArticleSection'

const styles = {
  wifiPanel: {
    width: '60%',
    minWidth: '900px',
    margin: 'auto auto',
    '& p': {
      fontFamily: 'sans-serif'
    }
  }
}

class WifiPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wifiPanel}>
        <ArticleHeader>Wifi</ArticleHeader>
        <ArticleSection>Les dangers du wifi</ArticleSection>
        <p>Le Wifi est se qui vous procure une connexion internet. Cela semble être sans dangers mais pourtant
          il y a bien des risques.</p>
      </div>
    )
  }
}

WifiPane.propTypes = {}

WifiPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(WifiPane)
