import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridItem from '../../components/Grid/GridItem.js'
import GridContainer from '../../components/Grid/GridContainer.js'
import Card from '../../components/Card/Card.js'
import CardHeader from '../../components/Card/CardHeader.js'
import CardBody from '../../components/Card/CardBody.js'

import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle.js'
import map from '../../../../resources/images/map-transparent.png'
import Button from '../../components/CustomButtons/Button'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import CustomInput from '../../components/CustomInput/CustomInput'
import InputLabel from '@material-ui/core/InputLabel'
import SnackbarContent from '../../components/Snackbar/SnackbarContent'

const useStyles = makeStyles(styles)

export default function GameMaster () {
  const [mails, setMails] = useState([
    {
      title: 'Vous êtes un gagnant !',
      id: 0
    },
    {
      title: 'Aide pour la quête °2',
      id: 1
    },
    {
      title: 'Réunion conseil 14/02',
      id: 3
    },
    {
      title: 'Formation au lean management',
      id: 5
    },
    {
      title: 'Recevez un cadeau pour Noël',
      id: 6
    },
    {
      title: 'Venez voir nos promitions shoppy shop',
      id: 8
    },
    {
      title: 'Retour sur la réunion',
      id: 10
    }
  ])

  const [sentMails, setSentMails] = useState([
    {
      title: 'Rendez-vous Eglise d\'Auteuil 23/06',
      sent: true,
      id: 9
    },
    {
      title: 'Aide pour la quête n°3',
      sent: true,
      id: 7
    },
    {
      title: 'Demande d\'informations',
      sent: true,
      id: 4
    },
    {
      title: 'Remboursement frais déplacement',
      sent: true,
      id: 2
    }
  ])

  const classes = useStyles()

  const droppableIdToList = (id) => {
    if (id === 'mailsDroppable') {
      return mails
    }
    // sentMailsDroppable
    else {
      return sentMails;
    }
  }

  const reorder = (list, indexFrom, indexTo) => {
    const result = Array.from(list)
    const [removed] = result.splice(indexFrom, 1)
    result.splice(indexTo, 0, removed)
    return result
  }

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  }

  const handleDragEnd = (result) => {
    const {source, destination} = result

    // dropped outside of droppable
    if (!destination) {
      return
    }

    // dropped on same list
    if (source.droppableId === destination.droppableId) {
      const mails = reorder(
        droppableIdToList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === 'mailsDroppable') {
        setMails(mails)
      }
      else {
        setSentMails(mails)
      }
    }
    else {
      const result = move(
        droppableIdToList(source.droppableId),
        droppableIdToList(destination.droppableId),
        source,
        destination
      )

      setMails(result.mailsDroppable)
      setSentMails(result.sentMailsDroppable)
    }
  }

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
              <CardHeader color={'primary'}>
                <h5 className={classes.cardTitleWhite}>Map</h5>
              </CardHeader>
              <CardBody style={{ textAlign: 'center', overflow: 'hidden', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <img src={map}/>
              </CardBody>
            </Card>
            <Card>
              <CardHeader color={'primary'}>
                <h5 className={classes.cardTitleWhite}>Send Emails</h5>
              </CardHeader>
              <CardBody style={{ display: 'flex', flexDirection: 'row' }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId={'mailsDroppable'}>
                    {(provided) => (
                      <Card style={{ alignItems: 'center' }} innerRef={provided.innerRef}>
                        <CardHeader color={'primary'} style={{ width: '90%' }}>
                          <h6 className={classes.cardTitleWhite}>Emails</h6>
                        </CardHeader>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        {mails.map((mail, index) => (
                          <Draggable
                            key={mail.id}
                            draggableId={mail.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <Card
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{ margin: 5, width: '80%', ...provided.draggableProps.style }}
                              >
                                <CardHeader>{mail.title}</CardHeader>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                      </Card>
                    )}
                  </Droppable>
                  <Droppable droppableId={'sentMailsDroppable'}>
                    {(provided, snaphost) => (
                      <Card style={{ alignItems: 'center' }} innerRef={provided.innerRef}>
                        <CardHeader color={'primary'} style={{ width: '90%' }}>
                          <h6 className={classes.cardTitleWhite}>Sent</h6>
                        </CardHeader>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        {sentMails.map((mail, index) => (
                          <Draggable
                            key={mail.id}
                            draggableId={mail.id.toString()}
                            index={index}
                            >
                            {(provided) => (
                              <Card
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{ margin: 5, width: '80%', ...provided.draggableProps.style }}
                              >
                                <CardHeader>{mail.title}</CardHeader>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                        <Card style={{ margin: 5, width: '80%' }}/>
                      </Card>
                    )}
                  </Droppable>
                </DragDropContext>
              </CardBody>
            </Card>
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
            <Card>
              <CardHeader color={'primary'}>
                <h5 className={classes.cardTitleWhite}>Chat</h5>
              </CardHeader>
              <CardBody style={{padding:40, paddingTop:0}}>
                <CustomInput
                  onChange={console.log}
                  labelText={"Message"}
                  formControlProps={{}}
                />
                <br/>
                <br/>
                <Card style={{padding:10, display:'inline'}}>Hello</Card><br/>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}
