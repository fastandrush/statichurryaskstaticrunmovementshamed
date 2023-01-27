import React from 'react';

import { Col } from 'react-bootstrap';

import '../styles/announcement.scss';

export default function Announcement() {
    return(
        <Col id='announcement'>
           <h1 id='announcementheader'>ANNOUNCEMENT &#9679; &#9679; &#9679;</h1>
           <div id='announcement-hr1'>

           </div>
           <div id='announcementcontainer'>
               <p id='theannouncement'>Hi, GOOD DAY EVERYONE... MAKE SURE TO STAY SAFE AND BE HEALTHY.</p>
           </div>
           <div id='announcement-hr1'>

           </div>
        </Col>
    )
}