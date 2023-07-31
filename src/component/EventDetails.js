import Alert from 'react-bootstrap/Alert';
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const EventDetails = (props) => {
    return ( 

    <Alert variant="dark">
      <Row>
      <Col xs={6} md={4}>
          <Image src={props.event.eventImage} rounded className="eventImage"/>
      </Col>
        <Col>
        <Alert.Heading>{props.event.eventName}</Alert.Heading>
      <p>
      {props.event.eventDescription}
      </p>
      <hr />
      <p className="mb-0">
        when-{props.event.eventDate}
      </p></Col>
      </Row>
      
    </Alert>
     );
}
 
export default EventDetails;