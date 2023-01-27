import React, { 
               useState
              } from 'react';

import { Col } from 'react-bootstrap';


import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../styles/macusergraph.scss';

export default function MacUserGraph() {

    
  const [originatorProductSummary, doSomethingWithOriginatorProductSummary] = useState([]);
  const [originatorProductPercentageBar, doSomethingWithOriginatorProductPercentageBar] = useState(undefined);
  const [originatorProductPercentageBarModulosOperator, doSomethingWithOriginatorProductPercentageBarModulosOperator] = useState([]);

  const [productOriniginatorFirstWeekStatisticsData, getProductOriniginatorFirstWeekStatisticsData] = useState(['1' ,'2' , '3', '4', '5', '6', '7']);
  const [productOriniginatorSecondWeekStatisticsData, getProductOriniginatorSecondWeekStatisticsData] = useState(['1' ,'2' , '3', '4', '5', '6', '7']);

   return(
  
       <PresentStatistics productOriniginatorFirstWeekStatisticsData={productOriniginatorFirstWeekStatisticsData}
                          productOriniginatorSecondWeekStatisticsData={productOriniginatorSecondWeekStatisticsData}
                          getProductOriniginatorFirstWeekStatisticsData={getProductOriniginatorFirstWeekStatisticsData}
                          getProductOriniginatorSecondWeekStatisticsData={getProductOriniginatorSecondWeekStatisticsData}/>

   )
}

function PresentStatistics(props) {
    return(
      <Col id='dashboardproductsummary-presentstatisticsmacusergraph'>
       
         <LastTwoWeeksStatistics  productOriniginatorFirstWeekStatisticsData={props.productOriniginatorFirstWeekStatisticsData}
                                  productOriniginatorSecondWeekStatisticsData={props.productOriniginatorSecondWeekStatisticsData}
                                  getProductOriniginatorFirstWeekStatisticsData={props.getProductOriniginatorFirstWeekStatisticsData}
                                  getProductOriniginatorSecondWeekStatisticsData={props.getProductOriniginatorSecondWeekStatisticsData}/>
      </Col>
    )
}

function LastTwoWeeksStatistics(props) {
    return(
      <Col id='dashboardproductsummary-lasttwoweeksmacusergraph'>
         <LastTwoWeeksStatisticsHeader />
         <LastTwoWeeksStatisticsTable productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorFirstWeekStatisticsData}/>
      </Col>
    )
}

function LastTwoWeeksStatisticsHeader() {

    const [adminSettingsButton, toggleAdminSettingsButton] = useState('rotate(90deg)');
  
    return(
      <Col id='dashboardproductsummary-lasttwoweeksheadermacusergraph'>
        
         <Col>
         
         </Col>

      </Col>
    )
}

function LastTwoWeeksStatisticsTable(props) {
  
    return(
      <Col  id='dashboardproductsummary-lasttwoweekstablemacusergraph'>
         <LastTwoWeeksStatisticsTableOfContents productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorLastTwoWeeksStatisticsData}/>
      </Col>
    )
}  
  
function LastTwoWeeksStatisticsTableOfContents(props) {
    return(
      <Col id='dashboardproductsummary-lasttwoweekstableofcontentsmacusergraph'>
         <Col id='dashboardproductsummary-contentscontainermacusergraph'>
            <LastTwoWeeksStatisticsSummitPointContainer />
            <LastTwoWeeksStatisticsBarContainer productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorLastTwoWeeksStatisticsData}/>
         </Col>
         <Col id='dashboardproductsummary-dayscontainermacusergraph'>
           <Col lg={1} style={{backgroundColor:'white'}}>
           </Col>
           <Col lg={11} id='dashboardproductsummary-dayspositioningcontainermacusergraph'>
             {
               [
                 {
                   day: 'Sun',
                   isSunday: 'issunday'
                 },
                 {
                  day: 'Mon'
                },
                {
                  day: 'Tue'
                },
                {
                  day: 'Wed'
                },
                {
                  day: 'Thu'
                },
                {
                  day: 'Fri'
                },
                {
                  day: 'Sat'
                },     
              ].map((data, idx)=> {
                return <Col key={idx} id={data.isSunday} className='dashboardproductsummarylasttwoweeks-daysmacusergraph'>{data.day}</Col>
              })
             }
           </Col>
         </Col>
      </Col>
    )
}
  
function LastTwoWeeksStatisticsSummitPointContainer() {
    return(
      <Col lg={1} id='dashboardproductsummary-lasttwoweekspointercontainermacusergraph'>
          {
            [
              '100%',
              '90%',
              '80%',
              '70%',
              '60%',
              '50%',
              '40%',
              '30%',
              '20%',
              '10%',
            ].map((data, idx)=> {
              return <Col key={idx}>
                       <p className='dashboardproductsummary-lasttwoweekspointersmacusergraph'>{data}</p>  
                     </Col>
            })
          }
      </Col>
    )
}
  
function LastTwoWeeksStatisticsBarContainer(props) {
  
    const hoverLastTwoWeeksInsideProductStatistics = (e, idx) => {
    //  const _targetStatisticsScope = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainermacusergraph')
    //  _targetStatisticsScope[idx].style.display = 'block';
    }
  
    const unHoveredLastTwoWeeksInsideProductStatistics = (e, idx) => {
  //    const _targetStatisticsScope = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainermacusergraph')
   //   _targetStatisticsScope[idx].style.display = 'none';
    }
  
  
    return(
      <Col lg={11} id='dashboardproductsummary-lasttwoweeksbarcontainermacusergraph'>
          {
            props.productOriniginatorLastTwoWeeksStatisticsData.map((data, idx)=> {
  
              return <Col key={idx} className='dashboardproductsummary-lasttwoweeksbarpositionningcontainermacusergraph'>
  
                        <div className='dashboardproductsummary-lasttwoweeksbarfullscopemacusergraph'
                             onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                             onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>
                           <div className='dashboardproductsummary-lasttwoweeksbarscopemacusergraph'
                                onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                                onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>   
   
                           </div>
                        </div>
                        <div className='dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainermacusergraph'
                              onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                              onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>
                              
                            <div className='lasttwoweeks-insidestatisticscontainermacusergraph'>
  
                            </div>
                        </div>
                     </Col>
            })
          }
      </Col>
    )
}