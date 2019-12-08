import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import map from '../../../../resources/images/map-transparent.png'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'
import { withWebSocketStoreData } from '../../../../hocs/async'
import './radar.css'

const useStyles = makeStyles(styles)

function Map ({ position }) {
  const classes = useStyles()

  return (
    <Card>
      <CardHeader color={'primary'}>
        <h5 className={classes.cardTitleWhite}>Map</h5>
      </CardHeader>
      <CardBody style={{ textAlign: 'center', overflow: 'hidden', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ position: 'relative', width: 980, height: 322, left: '50%', transform: 'translate(-50%,0%)' }}>
          <img src={map} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}/>
          {
            position && (
              <div id={'container'} style={{ top: position.y, left: position.x, position: 'absolute', zIndex: 2 }}>
                <div id={'one'}/>
                <div id={'two'}/>
              </div>
            )
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default withWebSocketStoreData('position', '/ws/')(Map)
