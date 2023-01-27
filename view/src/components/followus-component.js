import React from 'react';

import { Col } from 'react-bootstrap';

import { Facebook,
         Twitter,
         Youtube,
         Instagram
       } from 'react-bootstrap-icons';

import '../styles/followus.scss';

export default function FollowUs() {
    return(
      <Col id='followus'>
        <h1 id='followus-header'>FOLLOW US</h1>
        <div id='followus-hr'>
        </div>
        <Col id='followussocialicon-maincontainer'>
          <Col className='followussocialicon-maincontainer'>
            <div className='followussocialicon-container followussocialicon-containerfb'>
               <Facebook className='followusfbsocialicon'/>
               <span className='followussocialplatform-indication'>Facebook</span>
            </div>
            <div className='followussocialicon-container followussocialicon-containeryoutube'>
               <Youtube className='followusyoutubesocialicon'/>
               <span className='followussocialplatform-indication'>Youtube</span>
            </div>
          </Col>
          <Col className='followussocialicon-maincontainer'>
           <div className='followussocialicon-container followussocialicon-containertwitter'>
               <Twitter className='followustwittersocialicon'/>
               <span className='followussocialplatform-indication'>Twitter</span>
            </div>
           
            <div className='followussocialicon-container followussocialicon-containerinstagram'>
               <Instagram className='followusinstagramsocialicon'/>
               <span className='followussocialplatform-indication followussocialplatform-indicationinsta'>Instagram</span>
            </div>
          </Col>
        </Col>
      </Col>
    );
}