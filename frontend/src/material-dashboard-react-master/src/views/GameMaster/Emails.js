import React, { useEffect, useState } from 'react'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Card from '../../components/Card/Card'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/material-dashboard-react/views/iconsStyle'
import { withSyncStoreData } from '../../../../hocs/async'

const useStyles = makeStyles(styles)

let websocket = null

function Emails({emails}) {
  const classes = useStyles()

  const [mails, setMails] = useState(emails)

  const [sentMails, setSentMails] = useState([])

  useEffect(() => {
    const url = '/ws/'
    let wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
    websocket = new WebSocket(wsScheme + '://' + window.location.host + url)
  }, [])

  // https://codesandbox.io/s/ql08j35j3q
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

      if (destination.droppableId === 'sentMailsDroppable') {
        websocket.send(JSON.stringify({
          type: 'message',
          'payload': {
            'namespace': 'email_sent',
            'data': droppableIdToList(source.droppableId)[source.index]
          }
        }))
      }

      setMails(result.mailsDroppable)
      setSentMails(result.sentMailsDroppable)
    }
  }

  return (
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
                        <CardHeader>{mail.object}</CardHeader>
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
                        <CardHeader>{mail.object}</CardHeader>
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
  )
}

export default withSyncStoreData('emails', '/gamemaster/emails/', '/ws/')(Emails)
