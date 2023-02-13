import React, { useState,  
                useEffect } from 'react';
import { Col,
         Spinner } from 'react-bootstrap';
   
import ReactPlayer from 'react-player'

import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
         
import { EffectCube, EffectFade, Navigation, Pagination } from "swiper";

import '../styles/macnews.scss';

import axios from 'axios';

export default function MacNews(props) {

  const [macNews1SequenceNumber1, doSomethingWithMacNewsSequenceNumber1] = useState([]);
  const [randomMacNews, changeRandomMacNews] = useState(0);

  useEffect(()=> {
    document.getElementsByClassName('')
  }, [])
 
  return (
     <Col id='macnews'>
        
       <Col id='macnewsheadercontainer'>
         <Col lg={8}>
           <h1 id='macnews-macheader'>MPC</h1>
         </Col>
         <Col id='macnewsheader-viewcontainer'
              lg={4}>
            <p id='macnewsheader-view'>VIEW ALL</p>
         </Col> 
       </Col>

       <div id='macnews-hr'>
       </div>
      
       <Col id='macnews-newscontainer'>

       <div id='macnewscontentcontainer'>
          <div className='randommacnewscontainer' style={{color:'white'}}>
          {
            props.contents.length > 0 && 
            <>
            {
             props.contentcontainerloadstate ? (
              <div>
              <img src={props.contents[0].image}
                    id='macnewsrandomnewsimage'/>
              </div>
             ) : ( 
             <Spinner animation="border" variant="danger" />
             )
            }
        </>
    
          }
          
            
          </div>
          <div id='macnews-container'>
             <Swiper
                  direction={"vertical"}
                  pagination={{
                  clickable: true,
                  }}
                  modules={[Pagination]}
                  slidesPerView={2}
                  id="macnews-swiper">
         
                 {
                   props.contents.map((data, idx)=> {
                      return   <>
                               {
                                  props.contentcontainerloadstate ? (
                                     <>
                                      {
                                         data.ytlinkstatus ? (
                                          <SwiperSlide className='macnewscontent'>
                                              <ReactPlayer url={data.ytlink}
                                                           height={'100%'}
                                                           width={'50%'}
                                                           },
                                                           />
                                          </SwiperSlide>
                                         ) : (
                                          <SwiperSlide className='macnewscontent'>
                                               <img src={data.image}
                                                   className='macnewsimage'/>
                                          </SwiperSlide>
                                         )
                                      }
                                     </>
                                  ) : (
                                    <SwiperSlide key={idx}
                                                 className='macnewscontent'>
                                      <Spinner animation="border" variant="danger" />
                                    </SwiperSlide>
                                  )
                               }
                                
                               </>
                 })
                 }
               
              </Swiper>
               </div>
       </div>

       </Col>

     </Col>
   );
}