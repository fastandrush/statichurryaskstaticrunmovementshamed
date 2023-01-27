import React, { useState,
                useEffect
              } from 'react';

import { Col,
         Spinner } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

         
import { Pagination } from "swiper";

import axios from 'axios';

import '../styles/latestposts.scss';

export default function LatestPosts(props) {
  
    return(
   
        <Col id='latestposts'>

            <Col id='latestpostsheader-container'>
                <Col lg={8}>
                     <h1 id='latestpostsheader-popularposts'>
                      post's ( latest )
                     </h1>
                </Col>

               <Col id='latestpostsheadercontainer-viewall'>
                    <p id='latestpostsheader-viewall'>VIEW ALL</p>
               </Col> 
           </Col>

           <div id='latestposts-hr'>
           </div>

          <Col id='latestpostscontentcontainer'>

               <Col lg={2} className='testcirclecontainer'>
                  <div className='testcircle'>

                  </div>
               </Col>
               <Col l lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

               </div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>

               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>



               <Col lg={2} className='testcirclecontainer'>
                  <div className='testcircle'>

                  </div>
               </Col>
               <Col l lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

               </div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>

               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col  lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>
               <Col lg={2} className='testcirclecontainer'>
               <div className='testcircle'>

</div>
               </Col>



          </Col>
        
        </Col>

    )
}