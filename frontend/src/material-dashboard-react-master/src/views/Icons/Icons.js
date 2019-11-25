/*eslint-disable*/
import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'

import styles from 'assets/jss/material-dashboard-react/views/iconsStyle.js'
import GameMasterMapPane from '../../../../panes/GameMasterMapPane'
import GameMasterEmailPane from '../../../../panes/GameMasterEmailPane'

const useStyles = makeStyles(styles)

export default function Icons () {
  const classes = useStyles()
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Game Master</h4>
            <p className={classes.cardCategoryWhite}>
              Manage your player
            </p>
          </CardHeader>
          <CardBody>
            <GameMasterMapPane className={'mt-5 mx-auto'}/>
            <GameMasterEmailPane className={'mt-5 mx-auto'}/>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}