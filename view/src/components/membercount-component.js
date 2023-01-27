import React from 'react';
import { Col } from 'react-bootstrap';

import '../styles/membercount.scss';

export default function MemberCount(props) {
    return(
        <Col id='membercount'>

           <h1 id='membercount-header'>MEMBER COUNT</h1>

          {
            props.addressesScope.map((scope, idx)=> {
              return <Col style={{display: "flex"}}>

                      <Col id='populationscopeapply-proportion'>
                        {
                         scope.provinces.map((province, idx)=> {
                             return <p className='membourcount-scopepopulationheader'>
                                      {province}
                                    </p>
                                  
                         })
                        }
                      </Col>

                     <Col>       
                        {
                         scope.cities.map((cities, idx)=> {
                             return  <p className='membourcount-scopepopulationheader'>
                                      {cities}
                                     </p>  
                         })
                        }
                     </Col>   

                     <Col>   
                        {
                         scope.baranggay.map((baranggay, idx)=> {
                             return <p className='membourcount-scopepopulationheader'>
                                     {baranggay}
                                    </p>
                         })
                        }             
                     </Col>  

                     <Col>
                        {
                          props.addressScopePopulationCount.map((data, idx)=> {
                            return <p><b>1</b></p>
                          })
                        }
                     </Col>   
                      
                     </Col>
            })
          }
        </Col>
    );
}