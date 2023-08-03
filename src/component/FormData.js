import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const StoryForm = () => {

  const [storyTitle,setStoryTitle] =  useState()
  const [name,setName] = useState()
  const [story,setStory] = useState()
  const [submitData,setSubmitData]= useState()

  const submitformData=(e)=>{
    e.preventDefault()
    let body={
      "storyTitle":storyTitle,
      "name":name,
      "story":story,
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
        <Container fluid="xs">
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
        <Form  style={{color:"white"}} className="justify-content-begin">
        <p>
        If you want to share your story please write in the below form.
        we will create video for that story and will mention you in the credits.
      </p>
      <FloatingLabel className="mb-3" label="Story Title" controlId="floatingTextarea">
        {/* <Form.Label className="formLabel">Story Title</Form.Label> */}
        <Form.Control id="storyTitle" value={storyTitle} onChange={(e)=>setStoryTitle(e.target.value)}/>
      </FloatingLabel>
      <FloatingLabel className="mb-3" label="Name(Enter your name)">
        {/* <Form.Label className="formLabel">Name</Form.Label> */}
        <Form.Control id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </FloatingLabel>
      <label className="formLabel">Story</label>
      <div className="mb-3" style={{borderRadius:"10px",paddingTop:"30px"}}>
        
        
        {/* <Form.Control as="textarea" id="story"
          placeholder="Leave a story here"
          style={{ height: '100px' }}
          value={story} onChange={(e)=>setStory(e.target.value)}/> */}
          <ReactQuill theme="snow" style={{ height: '300px',backgroundColor:"white",color:"black"}} value={story} onChange={setStory} />
      </div>
      <div className="mb-3 submit button" >
      <Button variant="primary" type="submit" onClick={submitformData}>
        Submit
      </Button>
      </div>
    </Form> 
    </Container>);
}
 
export default StoryForm;