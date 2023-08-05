import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Home = () => {

    const mystle=()=>{
      
    }
    return ( 
    <Carousel as="div" indicators={false} prevIcon={null} nextIcon={null}>
      <Carousel.Item className="HomeContainer">
        <Carousel.Caption className="justify-content-end">
          <h1 className="title animate__animated animate__fadeInDown">Genz Funtastic</h1>
          <p className="helptext animate__animated animate__fadeInDown">You will encounter experiences here that are beyond your wildest dreams,
            <br/> including horror, crime, suspense, fantasy, and puzzles that will challenge your assumptions.</p>
          <Button variant="danger" className="animate__animated animate__fadeInDown animate__delay-0.5s" href="https://www.youtube.com/@genzfuntastic?sub_confirmation=1" target="_blank">Subscribe</Button>
          <>
          <br/>
          <Button variant="outline-light" className="animate__animated animate__fadeInDown animate__delay-1s" disabled>Horror</Button>{' '}
          <Button variant="outline-light" className="animate__animated animate__fadeInDown animate__delay-2s" disabled>Crime</Button>{' '}
          <Button variant="outline-light" className="animate__animated animate__fadeInDown animate__delay-3s" disabled>Adventure</Button>{' '}
          <Button variant="outline-light" className="animate__animated animate__fadeInDown animate__delay-4s" disabled>Scifi</Button>{' '}
          </>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     );
}
 
export default Home;