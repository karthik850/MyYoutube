import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

const SubscriberStory = () => {
    const [stories,setStories] = useState([])

    const getStories = () => {
        fetch('https://karthikreddy567.pythonanywhere.com/videos/post').then(res => res.json()).then(json => setStories(json))
      }
      useEffect(() => {
        getStories()
      }, [])
    return ( 
        <Container fluid="md">
            <p>please find the stories</p>
            <Accordion defaultActiveKey="0">
            {stories && stories.map(story =>{
                return (<><Accordion.Item eventKey={story.id}>
                <Accordion.Header>{story.storyTitle}</Accordion.Header>
                <Accordion.Body>
                    <div dangerouslySetInnerHTML={{ __html:story.story }} />
                </Accordion.Body>
            </Accordion.Item> <br/></>)
            })}
            </Accordion>
            
        </Container>
     );
}
 
export default SubscriberStory;