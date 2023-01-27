import React from 'react';

import { Col } from 'react-bootstrap';

import ReactPlayer from 'react-player';

import '../styles/videos.scss';

export default function Videos(props) {
    return(
      <Col id='videos'>

         {
           props.videosOf.map((data, idx)=> {
             return (
               <Col lg={4} className='videocontainer'>
                    <ReactPlayer playing={false} 
                            controls={true} 
                            url={data.ytvideo}
                            height={'100%'}
                            width={'100%'}
                            className='video'/>
               </Col>
             )
           })
         }

      </Col>
    );
}