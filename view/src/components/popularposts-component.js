import React from 'react';

import { Col,
         Spinner } from 'react-bootstrap';
      
import ReactPlayer from 'react-player';

import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
                                   
import { EffectCube, EffectFade, Navigation, Pagination } from "swiper";

import '../styles/popularposts.scss';

export default function PopularPosts(props) {

   return(
       <Col id='popularposts'>

          <Col id='popularpostsheader-container'>

            <Col lg={8}>
              <h1 id='popularpostsheader-popularposts'>
                 post's ( popular )
              </h1>
            </Col>

            <Col id='popularpostsheadercontainer-viewall'>
              <p id='popularpostsheader-viewall'>VIEW ALL</p>
            </Col> 

          </Col>

          <div id='popularposts-hr'>

          </div>

          <Col id='popularposts-popularpostscontainer'>

            <Swiper id='popularposts-swiper'
                     slidesPerView={3}>
               {
                   props.popularPosts.map((data)=> {
                   return <>
                       {
                        props.popularPostsIsIdleStatus ? (
                          <>
                             {
                            data.ytlinkstatus ? (
                              <SwiperSlide className='popularposts-swiperslide'>
                                  <ReactPlayer url={data.ytlink}
                                                           height={'100%'}
                                                           width={'100%'}/>
                              </SwiperSlide>
                            ) : (
                              <SwiperSlide className='popularposts-swiperslide'>
                              <Col className='popularposts-companypostcontainer'>
                                  <img src={data.image}
                                       className='popularpostsimage'/>
                              </Col>
                             </SwiperSlide>
                            )
                          }
                          </>
                        ) : (
                          <SwiperSlide className='popularposts-swiperslide'>
                              <Spinner animation="border" variant="danger" />
                          </SwiperSlide>
                        )
                       }
                          
                           </>
                       
                 })
             }
          </Swiper>

           

          </Col>

       </Col>
   )
}