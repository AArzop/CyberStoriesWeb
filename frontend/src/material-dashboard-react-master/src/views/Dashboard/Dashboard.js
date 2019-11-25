import React from 'react'
// react plugin for creating charts
import ChartistGraph from 'react-chartist'
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Store from '@material-ui/icons/Store'
import Backup from '@material-ui/icons/Backup'
import Info from '@material-ui/icons/Info'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'
import Accessibility from '@material-ui/icons/Accessibility'
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import BarChart from '@material-ui/icons/BarChart'
import LocalPostOffice from '@material-ui/icons/LocalPostOffice'
import VideogameAsset from '@material-ui/icons/VideogameAsset'
import People from '@material-ui/icons/People'
// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Table from 'components/Table/Table.js'
import Tasks from 'components/Tasks/Tasks.js'
import CustomTabs from 'components/CustomTabs/CustomTabs.js'
import Danger from 'components/Typography/Danger.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import { withAjaxStoreData } from '../../../../hocs/async'

import { bugs, website, server } from 'variables/general.js'

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Ajax = ({ id, url, config = {}, children }) => {
  const Wrapped = withAjaxStoreData(id, url, config)(props => children(props))
  return (
    <Wrapped/>
  )
}

const useStyles = makeStyles(styles)

export default function Dashboard () {
  const classes = useStyles()
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <VideogameAsset/>
              </CardIcon>
              <p className={classes.cardCategory}>Games played</p>
              <Ajax id={'games'} url={'/services/games/'}>
                {({ games }) => (
                  <h3 className={classes.cardTitle}>
                    {numberWithCommas(games.length)}
                  </h3>
                )}
              </Ajax>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange/>
                As of {new Date().getFullYear()}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store/>
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <Ajax id={'orders'} url={'/services/vr-headset-rents/'}>
                {({orders}) => (
                  <h3 className={classes.cardTitle}>{orders.reduce((acc, order) => acc + order.price, 0)} €</h3>
                )}
              </Ajax>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange/>
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <People/>
              </CardIcon>
              <p className={classes.cardCategory}>Visitors</p>
              <Ajax id={'visitors'} url={'/services/visitors/'}>
                {({ visitors }) => (
                  <h3 className={classes.cardTitle}>{numberWithCommas(visitors.length)}</h3>
                )}
              </Ajax>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange/>
                As of {new Date().getFullYear()}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <LocalPostOffice/>
              </CardIcon>
              <p className={classes.cardCategory}>Orders</p>
              <Ajax id={'orders'} url={'/services/vr-headset-rents/'}>
                {({ orders }) => (
                  <h3 className={classes.cardTitle}>{numberWithCommas(orders.length)}</h3>
                )}
              </Ajax>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update/>
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{' '}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime/> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Enterprise account creations</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime/> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Games</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime/> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Events:"
            headerColor="primary"
            tabs={[
              {
                tabName: 'Phishing',
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: 'Office',
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: 'Admin',
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Leaderboard</h4>
              <p className={classes.cardCategoryWhite}>
                Best scores from 2019
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={['Rank', 'Name', 'Score', 'Company']}
                tableData={[
                  ['1', 'Dakota Rice', '36,738', 'Niger'],
                  ['2', 'Minerva Hooper', '23,789', 'Curaçao'],
                  ['3', 'Sage Rodriguez', '56,142', 'Netherlands'],
                  ['4', 'Philip Chaney', '38,735', 'Korea, South']
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}