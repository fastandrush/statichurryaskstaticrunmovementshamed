import { React } from 'react';

import { Col } from 'react-bootstrap';

import '../styles/storewelcomeintroduction.scss';

export default function StoreWelcomeIntroduction() {
  return(
      <Col id='storewelcomeintroduction-controlcontainer'>

          <Col id='storewelcomeintroduction-messageindicationcontainer'>
             <p id='storewelcomeintroduction-messageindication'>Need a marketing solution? A merchandise or content have it with MAC </p>
          </Col>

         <Col id='storewelcomeintroduction'>
           <Col className='storewelcomeintroduction-positioningcontainer'>
             <p className='storewelcomeintroduction-paymentsolution'><b>A payment gateway solution</b></p>
             <img src='../images/paymentsolutiondp.jpg'
                  className='storewelcomeintroductiondp'/>
           </Col>
           <Col className='storewelcomeintroduction-positioningcontainer'>
            <p className='storewelcomeintroduction-shipment'><b>Shipments</b></p>
            <img src='../images/shippingsolutiondp.jpg'
                  className='storewelcomeintroductiondp'/>
           </Col>
           <Col className='storewelcomeintroduction-positioningcontainer'>
            <p className='storewelcomeintroduction'><b>Mapping</b></p>
            <img src='../images/mapsolutiondp.jpg'
                  className='storewelcomeintroductiondp'/>
           </Col>
           <Col className='storewelcomeintroduction-positioningcontainer'>
            <p className='storewelcomeintroduction'><b>Data</b></p>
            <img src='../images/graphdp.jpg'
                 className='storewelcomeintroductiondp'/>
           </Col>
         </Col>
         
      </Col>
  )
}
