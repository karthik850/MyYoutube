import React from 'react';
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";


const Profile = () => {
    return ( 
        <Container fluid="md" className="aboutMe">
  
        <blockquote className="blockquote mb-0" >
          <p style={{ textAlign: "justify" }}>
            <h1>Welcome to our spine-chilling corner of YouTube! 🕷️👻🔪</h1>
  <p>Prepare yourself for a heart-pounding rollercoaster of horror, adventure, and crime as we delve into the darkest recesses
    of the unknown. 🏰🌑💀</p>

  <h2>Uncover Unsolved Mysteries</h2>
  <p>We're obsessed with the enigmatic and the unexplained. Join us on a journey to unravel the most perplexing mysteries
    that have left investigators baffled for years.</p>

  <h2>Enter the Haunted Realms</h2>
  <p>Venture into the eerie and haunted locations that send shivers down your spine. Brace yourself for paranormal
    investigations that will test your courage.</p>

  <h2>Unravel Twisted Crimes</h2>
  <p>Explore the sinister minds of serial killers, cold cases, and true crime tales that will leave you questioning the
    very nature of humanity.</p>

  <h2>Cinematic Horror</h2>
  <p>Our cinematic approach to storytelling will make you feel like you're part of a horror movie. Brace yourself for
    thrilling narratives that will keep you on the edge of your seat.</p>

  <h2>Fearless Adventurers</h2>
  <p>We're not afraid to explore the unknown, and we invite you to join us on adrenaline-pumping adventures to some of
    the most isolated and dangerous places on the planet.</p>

  <h2>Authentic Fear</h2>
  <p>No scripts, no staged scares—our experiences are raw, real, and utterly terrifying. We capture genuine reactions to
    ensure you feel the fear alongside us.</p>

  <h2>Engaging Community</h2>
  <p>Our community of horror enthusiasts is passionate, welcoming, and loves to discuss the unexplained, the creepy, and
    the macabre. Be a part of our chilling family!</p>

  <h2>Connect with the Darkness</h2>
  <p>Follow us on our social media channels to stay updated on the latest spine-tingling content and behind-the-scenes
    secrets.</p>

  <h2>Enter at Your Own Risk</h2>
  <p>Remember, once you step into our domain, there's no turning back. Brace yourself for the most immersive, pulse-pounding
    horror, adventure, scary, and crime experiences on YouTube.</p>

  <p>Join us if you dare… 💀🕯️🚪</p>
  <h3>Subscribe Now: <a href="https://www.youtube.com/@genzfuntastic/" target="_blank">Genz Funtasticz</a></h3>
            {/* <a href="#" onClick={onReadMore} style={{float:"right",color:"blue"}}>
              {showfullText ? "Collapse...":"Read more..."}
              </a> */}


            <br />
          </p>
        </blockquote>
    </Container>
     );
}
 
export default Profile;