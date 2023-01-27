import React from 'react';

import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../styles/landscapenav.scss';

export default function LandscapeNav() {
    return(
        <Col id='landscapenav' className='p-0'>
             <Col id='landscapenav-linknav'>
                
             </Col>
             <Col id='landscapenav-headernav'>
                <Col id='landscapenavheadernav-container1'>
                  <Link to='/login' className='landscapenavheadernav-userauthbutton'><span><b>Log in</b></span></Link>
                  <Link to='/softwareasaservice/welcome' className='landscapenavheadernav-userauthbutton landscapenavheadernav-userauthbuttonsignup'><span><b>Sign up</b></span></Link>
                </Col>
             </Col>
           
        </Col>
    )
}