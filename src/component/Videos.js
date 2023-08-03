import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const VideoDetails = () => {
    const [videos,setVideos] = useState()

    const getVideoDetails=()=>{
        fetch('https://karthikreddy567.pythonanywhere.com/videos/').then(res=>res.json()).then(json=>setVideos(json))
    }
    useEffect(()=>{
        getVideoDetails()
    },[])
    return ( 
        <Container fluid="xs">
        <Row xs={1} md={3} className="g-4">
      {videos && videos.map(video => (
        <Col key={video.id}>
          <Card>
            <Card.Img variant="top" src={video.thumbnail} />
            <Card.Body>
              <Card.Title>{video.videoName}</Card.Title>
              <Card.Text>
                {video.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="success" href={video.url} target="_blank">View Video</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
     );
}
 
export default VideoDetails;