import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import EventDetails from './EventDetails';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import { Image } from 'react-bootstrap';

const Events = () => {
  const [events, setEvents] = useState([])

  const getEventDetails = () => {
    fetch('https://karthikreddy567.pythonanywhere.com/videos/events').then(res => res.json()).then(json => setEvents(json))
  }
  useEffect(() => {
    getEventDetails()
  }, [])
  return (
    <Container fluid="xs">
      {events.length > 0 ? null : <p>No events right now</p>}
      {/* <Row  className="g-4"> */}

      <Row>
        <Col>

          {events && events.map((event, index) => (
            <>
              <Accordion bg="dark" ActiveKey="0" key={event.id} className="animate__animated animate__fadeInDown">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{event.eventName} {index < 2 ? <Badge bg="success" className="badgeText">New</Badge> : null}</Accordion.Header>
                  <Accordion.Body>

                    <Row>
                      <Col xs={12} md={4}>
                        <Card>
                          <Card.Img variant="top" src={event.eventImage} />

                        </Card>
                      </Col>
                      <Col xs={12} md={8}>

                        <Card className="text-center" style={{ height: "100%" }}>
                          {/* <Card.Header>Featured</Card.Header> */}
                          <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <Card.Text>
                              {event.eventDescription}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                          </Card.Body>
                          <Card.Footer className="text-muted">when - {event.eventDate}</Card.Footer>
                        </Card>
                      </Col>
                    </Row>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
            </>
          ))}
        </Col>
      </Row>


      {/* </Row> */}
    </Container>
  );
}

export default Events;