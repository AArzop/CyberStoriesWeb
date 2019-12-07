import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Card from '../../components/Card/Card.js'
import CardHeader from '../../components/Card/CardHeader.js'
import CardBody from '../../components/Card/CardBody.js'
import CustomTabs from '../../components/CustomTabs/CustomTabs.js'
import Tasks from '../../components/Tasks/Tasks.js'
import { withAjaxStoreData } from '../../../../hocs/async'

import Input from '@material-ui/icons/Input'
import Send from '@material-ui/icons/Send'
import CallReceived from '@material-ui/icons/CallReceived'
import KeyboardReturn from '@material-ui/icons/KeyboardReturn'

const styles = {
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px'
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none'
  }
}

const useStyles = makeStyles(styles)

function Orders ({ orders }) {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Virtual Reality Headsets Orders</h4>
        <p className={classes.cardCategoryWhite}>
          Amount as of {new Date().getFullYear()}
        </p>
      </CardHeader>
      <CardBody>
        <CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: 'Registered',
              tabIcon: Input,
              tabContent: (
                <Tasks
                  checkedIndexes={[0, 3]}
                  tasksIndexes={orders.filter(order => order.status === 'REGISTERED').map((o, index) => index)}
                  tasks={orders.filter(order => order.status === 'REGISTERED').map(order => order.description)}
                />
              )
            },
            {
              tabName: 'Shipped',
              tabIcon: Send,
              tabContent: (
                <Tasks
                  checkedIndexes={[0]}
                  tasksIndexes={orders.filter(order => order.status === 'SHIPPED').map((o, index) => index)}
                  tasks={orders.filter(order => order.status === 'SHIPPED').map(order => order.description)}
                />
              )
            },
            {
              tabName: 'Received',
              tabIcon: CallReceived,
              tabContent: (
                <Tasks
                  checkedIndexes={[1]}
                  tasksIndexes={orders.filter(order => order.status === 'RECEIVED').map((o, index) => index)}
                  tasks={orders.filter(order => order.status === 'RECEIVED').map(order => order.description)}
                />
              )
            },
            {
              tabName: 'Returned',
              tabIcon: KeyboardReturn,
              tabContent: (
                <Tasks
                  checkedIndexes={[1]}
                  tasksIndexes={orders.filter(order => order.status === 'RETURNED').map((o, index) => index)}
                  tasks={orders.filter(order => order.status === 'RETURNED').map(order => order.description)}
                />
              )
            }
          ]}
        />
      </CardBody>
    </Card>
  )
}

export default withAjaxStoreData('orders', '/services/vr-headset-rents/')(Orders)
