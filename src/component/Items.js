
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Events from './Events';
import StoryForm from './FormData';
import Profile from './Profile';
import SocialMedia from './SocialMedia';
import MileStones from './TimeLine';
import VideoDetails from './Videos';

const Items = () => {

  const [akey,setAkey] = useState("Videos");
  const handleTabChange = (key) => {
    setAkey(key);
  };
    return ( 
        <Tabs
      activeKey={akey}
      id="fill-tab-example"
      className="mb-3 itemsList"
      fill
      onSelect={handleTabChange}
    >
      <Tab eventKey="Videos" title="Videos" >
        <VideoDetails className={`${akey === "Videos" ? "tab-content active" : "tab-content"}`}/>
      </Tab>
      <Tab eventKey="Write A story" title="Write A story">
        <StoryForm className={`tab-content ${akey === "Write A story" ? "active" : ""}`}/>
      </Tab>
      <Tab eventKey="Events" title="Events">
        <Events className={`tab-content ${akey === "Events" ? "active" : ""}`}/>
      </Tab>
      <Tab eventKey="About Us" title="About Us">
        <Profile className={`tab-content ${akey === "About Us" ? "active" : ""}`} />
      </Tab>
      
      <Tab eventKey="contact" title="contact">
        <SocialMedia className={`tab-content ${akey === "contact" ? "active" : ""}`}/>
      </Tab>
      <Tab eventKey="Mile Stones" title="Mile Stones">
        <MileStones />
      </Tab>
    </Tabs>
     );
}
 
export default Items;