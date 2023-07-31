import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {AiFillStar} from 'react-icons/ai'

const MileStones = () => {

    const [milestones,setMilestones] = useState([])

    const getEventDetails=()=>{
        fetch('https://karthikreddy567.pythonanywhere.com/videos/milestones').then(res=>
        {
return res.json()}
).then(json=>{setMilestones(json)})
    }
    useEffect(()=>{
        getEventDetails()
    },[])
    return ( 
        <VerticalTimeline>
            {milestones && milestones.map(milestone=>{
                return (<VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={milestone.mileStoneDate}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<AiFillStar />}
            >
                <h5 className="vertical-timeline-element-title">{milestone.milestoneName}</h5>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                {/* <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
            </VerticalTimelineElement>)

            })}
        
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<AiFillStar />}
        />
        </VerticalTimeline>
     );
}
 
export default MileStones;