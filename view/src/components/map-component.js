import React from 'react';

import { Col } from 'react-bootstrap';

import '../styles/map.scss';

export default function Map() {
    return(
        <Col id='map'>

            <Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer1'>  
              <img src='../images/jep.png'
                      id='jepimage'
                      alt='MAC-PHILIPPINE-JEEP-IMAGE'/>   
                <img src='../images/taxi.png'
                      id='taxiimage'
                      alt='MAC-TAXI-IMAGE'/>
              
              </Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer2'>
                 
              </Col>      
            </Col>
            <Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer3'>
                 
              </Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer4'>
                 <img src='../images/flower.jpg'
                      id='flowerimage'
                      alt='MAC-FLOWER-IMAGE'/>
              </Col>      
            </Col>

            <Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer5'>
                   <img src='../images/sky.jpg'
                      id='skyimage'
                      alt='MAC-SKY-IMAGE'/>
              </Col>
              <Col className='mapgrafetticontainer mapgrafetticontainer6'>
                  <img src='../images/building.jpg'
                      id='buildingimage'
                      alt='MAC-PHILIPPINE-INDUSTRY-IMAGE'/>
              </Col>      
            </Col>
        
        </Col>
    );
}