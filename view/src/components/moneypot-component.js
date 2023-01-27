import React from 'react';

import { Col } from 'react-bootstrap';

import '../styles/moneypot.scss';

export default function MoneyPot() {
    return( 
      <Col id='moneypot'>
        <div id='moneypotdisplay-container'>
           <img src='../images/baby-image.jpg'
                id='moneypotbabyimage'
                alt='baby-image.jpg'/>
           <div id='moneypotbabyimageindication-container'>
              <p className='moneypotbabyimageindication'><i>MAC DONT MAKE PROMISE'S</i></p>
              <p className='moneypotbabyimageindication'><i>IT HAPPENS</i></p>
              <p className='moneypotbabyimageindication'><i>GIVE YOU'RE INFANT'S MAC CREDIT CARDS. INCLUDE THEM TO RECIEVE &#8369;8000.00( pesos ) TWICE A MONTH.</i></p>
           </div>
        </div>
      </Col>

    )
}