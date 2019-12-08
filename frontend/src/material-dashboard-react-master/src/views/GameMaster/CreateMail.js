import React from 'react'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomInput from '../../components/CustomInput/CustomInput'
import Button from '../../components/CustomButtons/Button'
import Card from '../../components/Card/Card'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'

const useStyles = makeStyles(styles)

export default function CreateMail() {
  const classes = useStyles()

  return (
    <Card>
      <CardHeader color={'primary'}>
        <h5 className={classes.cardTitleWhite}>Create a Mail</h5>
      </CardHeader>
      <CardBody style={{padding:40}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Object"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Your mail content here ..."
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5
              }}
            />
          </GridItem>
        </GridContainer>
        <Button color={'primary'}>Create</Button>
      </CardBody>
    </Card>
  )
}
