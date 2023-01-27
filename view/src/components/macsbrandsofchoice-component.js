import React from 'react';

import { Col } from 'react-bootstrap';

import '../styles/macsbrandsofchoice.scss';

export default function MacsBrandsOfChoice() {

   
   const  mouseOverShopWithUsContainer = () => {
     document.getElementById('macsbrandsofchoiceshopwithus-image').style.transform = 'scale(1.1, 1.1)';
   } 

   const  hoverOutShopWithUsContainer = () => {
    document.getElementById('macsbrandsofchoiceshopwithus-image').style.transform = 'scale(1, 1)';
   } 

    return(
     <Col id='macsbrandsofchoice'>

       <Col id='macsbrandsofchoiceheaders-container'>
          <h1 id='macsbrandsofchoiceheader-mpboc'>Mac's personal brand's of choice</h1>
          <Col id='macsbrandsofchoiceheaderviewall-container'>
           <p id='macsbrandsofchoiceheader-viewall'>View all</p>
          </Col>
       </Col>

       <div id='macsbrandsofchoiceheaders-hr'>
       </div>

       <Col id='macsbrandsofchoiceshopwithus-container'
             onMouseOver={()=> mouseOverShopWithUsContainer()}
             onMouseLeave={()=> hoverOutShopWithUsContainer()}>
           <div id='macsbrandsofchoiceshopwithus-imagecontainer'>
              <img src='../images/shopwithusimage.jpg'
                   id='macsbrandsofchoiceshopwithus-image'
                   alt='Mac-News-Shop-With-Us-Image'/>    
           </div>
           <div id='macsbrandsofchoiceshopwithus-headerscontainer'>
              <img src='../images/mac-creditcard-image-cropped.png'
                   id='macsbrandsofchoiceshopwithus-mcimage'
                   alt='Mac-News-Shop-With-Us-Creditcard-Image'/>
              <h5 id='macsbrandsofchoiceshopwithus-shopwithusheader'><b>SHOP WITH US. . . .</b></h5>
              <p  id='macsbrandsofchoiceshopwithus-shopwithusexplanation'><b>All of the 14.5% on every product purchace will be divided and placed on every</b> <i>LAST PERSON ON EARTH MAC CREDIT CARD USER ( Twice A Month ) ..</i></p>
              <p  id='macsbrandsofchoiceshopwithus-shopwithusdate'>by - <span>Mac</span> - December 31 2015</p>
           </div>
       </Col>
      
       <Col id='macsbrandsofchoices-nestle'>
           <Col lg={4}
                id='macsbrandsofchoices-nestlebuildingimagecontainer'>
               <img src='../images/nestle-building-image.jpg'
                   id='macsbrandsofchoices-nestlebuildingimage'
                   alt='Mac-Nestle-Bulding-Image'/>
           </Col>
           <Col>
             <h2 id='macsbrandsofchoices-nestleheader'>Nestlé</h2>
             <h6 className='macsbrandsofchoices-nestleindication'>At <i>Vevey, Switzerland</i>, <b>Nestle's</b> main headquarter's.</h6>
             <p className='macsbrandsofchoices-nestleindication'>It's the place where cocoa and condensed milk successfully combined together under Nestle, producing 
               the first and original formula of milk chocolate wayback 1875.
             </p>
             <p className='macsbrandsofchoices-nestleindication'><i>December 25, 2015</i></p>
           </Col>
       </Col>

       <Col id='macsbrandsofchoices-asiabrewery'>
           <Col lg={4}
                id='macsbrandsofchoices-asiabrewerypalepilsenimagecontainer'>
               <img src='../images/sanmiguel-pale-pilsen-image.jpg'
                   id='macsbrandsofchoices-asiabrewerypalepilsenimage'
                   alt='Mac-Nestle-Bulding-Image'/>
           </Col>
           <Col>
             <h2 id='macsbrandsofchoices-asiabreweryheader'>Asia Brewery Inc.</h2>
             <h6 className='macsbrandsofchoices-asiabreweryindication'>As it's name implies, brewery means it's a place where beer is made commercially</h6>
             <p className='macsbrandsofchoices-asiabreweryindication'>
                If you already tasted Vitamilk soy milk and Creamy Delight yogurt, It came from Asia Brewery. They're also the one who invented Beer Hausen Pale Pilsen, to Beer Pale Pilsen that is now Beer Na Beer.
             </p>
             <p className='macsbrandsofchoices-asiabreweryindication'><i>December 31, 2001</i></p>
           </Col>
       </Col>

       <Col id='macsbrandsofchoices-coca-cola'>
           <Col lg={4}
                id='macsbrandsofchoices-cocacolaimagecontainer'>
               <img src='../images/coca-cola-image.jpg'
                   id='macsbrandsofchoices-cocacolaimage'
                   alt='Mac-Coca-Cola-Image'/>
           </Col>
           <Col>
             <h2 id='macsbrandsofchoices-cocacolaheader'>Coca Cola.</h2>
             <h6 className='macsbrandsofchoices-cocacolaindication'>Coca orinated from <i>coca leaves</i> and cola to <i>kola nuts</i> ( a source of caffeine )</h6>
             <p className='macsbrandsofchoices-cocacolaindication'>
                Coca cola or Coke was marketed in the late 19th century, Coca-Cola, or Coke is carbonated soft drink manufactured by the Coca-Cola company. A temperance drink and intended to as a patent medicine.
             </p>
             <p className='macsbrandsofchoices-cocacolaindication'><i>December 09, 2015</i></p>
             </Col>
       </Col>

     </Col>
    );
}