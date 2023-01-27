import React from 'react';

import { Col } from 'react-bootstrap'

import '../styles/mailchimp.scss';


export default function MailChimp() {
  return(
    <Col id='mailchimp'>
      <h1 id='mailchimp-hey'>Hey!</h1>
      <h5 id='mailchimp-needresourcesindication'>Finding desired resources?</h5>
      <h5 id='mailchimp-needresourcesindication'>What's your CONCERNS?</h5>
      <h5 id='mailchimp-letscommunicate'>LET'S COMMUNICATE..</h5>
      <input type='text' 
             placeholder='input your email'
             id='email'
             className='mailchimpfield-positioningfield'/><br/>
      <input type='text' 
             placeholder='title'
             className='mailchimpfield'/><br/>
      <input type='text' 
             placeholder='subject'
             className='mailchimpfield'/><br/>
      <textarea type='text' 
                placeholder='your message'
                id='mailchimp-textarea'/><br/>
      <button id='mailchimp-sendbutton'>send</button>
    </Col>
  )
}