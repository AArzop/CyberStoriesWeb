import React from 'react'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import map from '../../../../resources/images/map-transparent.png'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'
import { withWebSocketStoreData } from '../../../../hocs/async'

const useStyles = makeStyles(styles)

function Map({position}) {
  const classes = useStyles()

  return (
    <Card>
      <CardHeader color={'primary'}>
        <h5 className={classes.cardTitleWhite}>Map</h5>
      </CardHeader>
      <CardBody style={{ textAlign: 'center', overflow: 'hidden', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <span>{JSON.stringify(position)}</span>
        <img src={map}/>
      </CardBody>
    </Card>
  )
}

export default withWebSocketStoreData('position', '/ws/')(Map)
