import React, { useState } from 'react'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomInput from '../../components/CustomInput/CustomInput'
import Button from '../../components/CustomButtons/Button'
import Card from '../../components/Card/Card'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'
import { post } from 'fetch-factorized'

const useStyles = makeStyles(styles)

export default function CreateMail () {
  const classes = useStyles()

  const [object, setObject] = useState('')
  const [body, setBody] = useState('')

  const handleCreate = () => {
    if (object === '' || body === '') {
      return
    }
    post('/gamemaster/emails/',
      {
        object: object,
        message: body
      }).then(() => {
      setBody('')
      setObject('')
    })
  }

  return (
    <Card>
      <CardHeader color={'primary'}>
        <h5 className={classes.cardTitleWhite}>Create a Mail</h5>
      </CardHeader>
      <CardBody style={{ padding: 40 }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Object"
              onChange={event => setObject(event.target.value)}
              value={object}
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
              onChange={event => setBody(event.target.value)}
              value={body}
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
        <Button color={'primary'} onClick={handleCreate}>Create</Button>
      </CardBody>
    </Card>
  )
}
