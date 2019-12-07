import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridItem from '../../components/Grid/GridItem.js'
import GridContainer from '../../components/Grid/GridContainer.js'
import Card from '../../components/Card/Card.js'
import CardHeader from '../../components/Card/CardHeader.js'
import CardBody from '../../components/Card/CardBody.js'

import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle.js'
import map from '../../../../resources/images/map-transparent.png'
import Button from '../../components/CustomButtons/Button'

const useStyles = makeStyles(styles)

export default function GameMaster () {
  const [mails, setMails] = useState([
    {
      title: 'Vous êtes un gagnant !'
    },
    {
      title: 'Aide pour la quête °2'
    },
    {
      title: 'Remboursement frais déplacement',
      sent: true
    },
    {
      title: 'Réunion conseil 14/02'
    },
    {
      title: 'Demande d\'informations',
      sent: true
    },
    {
      title: 'Formation au lean management'
    },
    {
      title: 'Recevez un cadeau pour Noël',
    },
    {
      title: 'Aide pour la quête n°3',
      sent: true
    },
    {
      title: 'Venez voir nos promitions shoppy shop'
    },
    {
      title: 'Rendez-vous Eglise d\'Auteuil 23/06',
      sent: true
    },
    {
      title: 'Retour sur la réunion'
    }
  ]);
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
            <Card>
              <CardHeader color={"primary"}>
                <h5 className={classes.cardTitleWhite}>Map</h5>
              </CardHeader>
              <CardBody style={{textAlign:'center', overflow:'hidden', paddingTop:'5rem', paddingBottom:'5rem'}}>
                <img src={map}/>
              </CardBody>
            </Card>
            <Card>
              <CardHeader color={"primary"}>
                <h5 className={classes.cardTitleWhite}>Send Emails</h5>
              </CardHeader>
              <CardBody style={{display:'flex', flexDirection:'row'}}>
                <Card style={{alignItems:'center'}}>
                  <CardHeader color={"primary"} style={{width:'90%'}}>
                    <h6 className={classes.cardTitleWhite}>Emails</h6>
                  </CardHeader>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  {mails.filter(mail => !mail.sent).map((mail, index) => (
                    <Card style={{margin:5, width:'80%'}}>
                      <CardHeader>{mail.title}</CardHeader>
                    </Card>
                  ))}
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                </Card>
                <Card style={{alignItems:'center'}}>
                  <CardHeader color={"primary"} style={{width:'90%'}}>
                    <h6 className={classes.cardTitleWhite}>Sent</h6>
                  </CardHeader>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  {mails.filter(mail => !!mail.sent).map((mail, index) => (
                    <Card style={{margin:5, width:'80%'}}>
                      <CardHeader>{mail.title}</CardHeader>
                    </Card>
                  ))}
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                  <Card style={{margin:5, width:'80%'}}/>
                </Card>
              </CardBody>
            </Card>
            <Button color={'primary'}>Create a new mail</Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}
