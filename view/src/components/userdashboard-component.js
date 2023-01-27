import React, { useState,
                useEffect
              } from 'react';

import { Col } from 'react-bootstrap';

import '../styles/userdashboard.scss';

export default function UserDashboard(props) {

 const __lg = window.matchMedia('(min-width: 1200px)');
 const __md = window.matchMedia('(max-width: 992px)');
 const __xs = window.matchMedia('(max-width: 600px)');

 const [mobileNavHamburger, toggleMobileNavHamburger] = useState('none');

 useEffect(()=> {

    __lg.addListener(_lgBreakpoint);
    _lgBreakpoint(__lg);
    __xs.addListener(_xsBreakpoint);
    _xsBreakpoint(__xs);
    __md.addListener(_mdBreakpoint);
    _mdBreakpoint(__md);

 },[])

 function _lgBreakpoint(__lg) {
    if (__lg.matches) {
        lgDevices();
    }
  }

 function _mdBreakpoint(__md) {
    if (__md.matches) {
        mdDevices();
    }
 }

 function _xsBreakpoint(__xs) {
    if (__xs.matches) {
        xsDevices();
    }
}

function lgDevices() {
   
}

function mdDevices() {
  alert('Medium viewports')
}

function xsDevices() {
 toggleMobileNavHamburger((display)=> display = 'block')
}
    return (
      <Col id='userdashboard'>
         <div id='userdashboardnav'>
             Navigation and the privacy & policy. Sharing Terms & conditions is an experience with a must.
         </div>
         <div id='userdashboardcontent'>
            <Col id='userdashboard-mobilenav' style={{display: mobileNavHamburger}}>
               hamburger
            </Col>
            <Col id='userdashboard-greetingscontainer'>
              <h1>Greetings</h1>
              <p>This is an introductory page for a first time user. What will be here is a determination for all what practice must needed to be done. Some may forgot yet the idea can always be replace. It's you that is always an attention and blurs will be a cover up.</p>
              <h2>
                Introduction
              </h2>
              <p>This software is a ask for trust. Gaining outstanding Leaderships infront of a talk will be tommorows determination that will be sure. Selling is easy that make not only most of it but you can include time on marketing. Some informations are kept as of this moment and only shared on a undesired meetings.
              </p>
              <h2>
                 CENTER OF TRADES, <span style={{fontSize: '20px'}}>for the people</span>.
              </h2>
              <p>
                 When we talk about Center of trades, it's will be an environment of current cycle that is present on a ride. Talking about now is an effort and tommorow will always a consideration but hidden with an effort. How we pack is a meeting that is to suppose happen so what are things that is left by other businesses all over marketing industry must learn. Expect on a meet, umderstamding is will be  given DETAIL, BY DETAIL. 
              </p>
            </Col>
         </div>
      </Col>
    )
}