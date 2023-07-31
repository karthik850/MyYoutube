import Recat from 'react'
import Container from 'react-bootstrap/Container';
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';
import { MdEmail } from "react-icons/md";

const SocialMedia = (props) => {
    return ( 
        <Container fluid="md">
            {!props.footer ? <><h2>For Any queries and business promotion please contact using below links</h2>
            <p>Please Subscribe</p></>:null}
            <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://www.instagram.com/genzfuntastic/"
          target="_blank"
          rel="noreferrer"
          className="iconColor  home-social-icons"
        >
          <AiOutlineInstagram className="social-icon"/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100093287951919"
          target="_blank"
          rel="noreferrer"
          className="iconColor  home-social-icons"
        >
          <AiOutlineFacebook className="social-icon"/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.youtube.com/@genzfuntastic/"
          target="_blank"
          rel="noreferrer"
          className="iconColor home-social-icons"
        >
          <AiOutlineYoutube className="social-icon"/>
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:genzfunfacts@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="iconColor home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
        </Container>
     );
}
 
export default SocialMedia;