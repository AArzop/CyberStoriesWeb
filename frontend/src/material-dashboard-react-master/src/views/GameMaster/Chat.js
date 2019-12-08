import React, { useState } from 'react'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import CustomInput from '../../components/CustomInput/CustomInput'
import Card from '../../components/Card/Card'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'

const useStyles = makeStyles(styles)

export default function Chat () {
  const classes = useStyles()

  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && value !== '') {
      setMessages([value, ...messages])
      setValue('')
    }
  }

  return (
    <Card>
      <CardHeader color={'primary'}>
        <h5 className={classes.cardTitleWhite}>Chat</h5>
      </CardHeader>
      <CardBody style={{ padding: 40, paddingTop: 0 }}>
        <CustomInput
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
          labelText={'Message'}
          formControlProps={{}}
        />
        <br/>
        <br/>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <Card style={{ padding: 10, display: 'inline' }}>{message}</Card>
            <br/>
            <br/>
          </React.Fragment>
        ))}
      </CardBody>
    </Card>
  )
}
