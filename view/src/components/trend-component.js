import React, { useState } from 'react';

import { Col } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


import { EffectCube, EffectFade, Navigation, Pagination } from "swiper";

import '../styles/trend.scss';




export default function Trend() {

  const [perfectGoodsContOpacity, doSomethingWithPerfectGoodsContOpacity] = useState('0');
  const [perfectSnacksContOpacity, doSomethingWithPerfectSnacksContOpacity] = useState('0');
  const [perfectEquipsContOpacity, doSomethingWithPerfectEquipsContOpacity] = useState('0');

  const togglePerfectGoodsModal = (e) => {
    doSomethingWithPerfectGoodsContOpacity((modal)=> modal === '0' ? '1' : '0')
  }

  const togglePerfectSnacksModal = (e) => {
    doSomethingWithPerfectSnacksContOpacity((modal)=> modal === '0' ? '1' : '0')
  }

  const togglePerfectEquipsModal = (e) => {
    doSomethingWithPerfectEquipsContOpacity((modal)=> modal === '0' ? '1' : '0')
  }

    return(
        <Col id='trend'>

           <Swiper id='swiper'
                   slidesPerView={4}>

              <SwiperSlide className='trendswiperslide'>

                <Col id='trendheaderscontainer'>
                  <h1 className='trendheaders'><i>FIND YOUR</i></h1>
                  <h1 className='trendheaders'><b>PERFECT</b></h1>
                  <p className='trendheaders trendheaders3'>Uncompromising in style, quality and performance</p>
                  <p className='trendheaders trendheaders4'><b>TOP 31 ITEMS AND SUPPLIER'S OF THE MONTH....</b></p>
                    <img src="../images/findyourperfect.jpg" 
                      className='trenddisplaypicture'
                      alt='Mac-Trends-Display-Picture'/>

                 </Col>

              </SwiperSlide>

              <SwiperSlide className='trendswiperslide'
                           onClick={(e)=> togglePerfectGoodsModal(e)}>
                 <div className='trendsitemcontainer'
                      style={{ opacity: perfectGoodsContOpacity}}>
                    <p>Test cpmntetm</p>
                 </div>
                 <img src="../images/perfectgoods.jpg"
                      className='trenddisplaypicture'/>
                 
              </SwiperSlide>

              <SwiperSlide className='trendswiperslide'
                            onClick={(e)=> togglePerfectSnacksModal(e)}>
                 <div className='trendsitemcontainer'
                      style={{ opacity: perfectSnacksContOpacity}}>
                    <p>Test cpmntetm</p>
                 </div>
                 <img src="../images/perfectbreads.jpg"
                      className='trenddisplaypicture'/>
              </SwiperSlide>

              <SwiperSlide className='trendswiperslide'
                            onClick={(e)=>togglePerfectEquipsModal(e)}>
                 <div className='trendsitemcontainer'
                      style={{ opacity: perfectEquipsContOpacity}}>
                    <p>Test cpmntetm</p>
                 </div>
                 <img src="../images/perfectequips.jpg" 
                      className='trenddisplaypicture'/>
              </SwiperSlide>

          </Swiper>

        </Col>
    )
}