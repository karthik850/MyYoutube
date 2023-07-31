import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';

const StoryForm = () => {

  const [storyTitle,setStoryTitle] =  useState()
  const [name,setName] = useState()
  const [story,setStory] = useState()
  const [submitData,setSubmitData]= useState()

  const submitformData=(e)=>{
    e.preventDefault()
    let body={
      "storyTitle":e.target["storyTitle"].value,
      "name":e.target["name"].value,
      "story":e.target["story"].value,
    }
    setStory("")
    setStoryTitle("")
    setName("")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };
    fetch('https://karthikreddy567.pythonanywhere.com/videos/post',requestOptions).then(response => {setSubmitData(response.status)
  })
    
    
  }

    return ( 
        <Container fluid="md">
          {submitData ? submitData === 201 ? <Toast bg="success" onClose={()=>setSubmitData(null)}>
        <Toast.Header>
          <strong className="me-auto">Successfully stored</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>Thanks for sharing your story</Toast.Body>
      </Toast> : <Toast bg="danger">
        <Toast.Header>
          <strong className="me-auto">Failed to store</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>Apologize for inconvience please try again!!!</Toast.Body>
      </Toast>:null }
        <Form onSubmit={submitformData} style={{color:"white"}} className="justify-content-begin">
        <p>
        If you want to share your story please write in the below form.
        we will create video for that story and will mention you in the credits.
      </p>
      <Form.Group className="mb-3">
        <Form.Label className="formLabel">Story Title</Form.Label>
        <Form.Control id="storyTitle" placeholder="Enter Story Title" value={storyTitle} onChange={(e)=>setStoryTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="formLabel">Name</Form.Label>
        <Form.Control id="name" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="formLabel">Story</Form.Label>
        <Form.Control as="textarea" id="story"
          placeholder="Leave a story here"
          style={{ height: '100px' }}
          value={story} onChange={(e)=>setStory(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
    </Container>);
}
 
export default StoryForm;