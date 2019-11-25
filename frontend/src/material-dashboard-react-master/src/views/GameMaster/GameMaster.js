import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridItem from '../../components/Grid/GridItem.js'
import GridContainer from '../../components/Grid/GridContainer.js'
import Card from '../../components/Card/Card.js'
import CardHeader from '../../components/Card/CardHeader.js'
import CardBody from '../../components/Card/CardBody.js'

import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle.js'

const useStyles = makeStyles(styles)

export default function GameMaster () {
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
            <span>FILL ME</span>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}
