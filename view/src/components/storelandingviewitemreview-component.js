import React from 'react';

import { Col } from 'react-bootstrap';

import ProductDescriptionLandingViewItemReview from './productdescriptionlandingviewitemreview-component';

import '../styles/storelandingviewitemreview.scss';


export default function StoreLandingViewItemReview(props) {


const closeSpecificItem = (e) => {
  props.closeSpecificItem()
}

  return (
    <Col id='userprofilecontaineritemreview'>
    
      <Col id='userprofilecontainer-closebuttoncontaineritemreview'>
        <p id='userprofilecontainer-closebuttonitemreview'
           onClick={(e)=> closeSpecificItem(e)}>X</p>
      </Col>

      <Col id='userprofile-usermaindisplaycontaineritemreview'>

         <Col id='userprofile-coverphotocontaineritemreview'>
             1
         </Col>

         <Col id='userprofile-userprofilecontaineritemreview'>

            <div id='userpfofile-userprofilephotoitemreview'>
            
            </div>
            <div id='userprofile-usernamecontaineritemreview'>
              <h3 className='userprofile-userindicationtext userprofile-userindicationtextusernameitemreview'>User store profile name</h3>
              <h5 className='userprofile-userindicationtextitemreview'>@User store additional information field - store</h5>
            </div>
            <div id='userprofile-followcontaineritemreview'>
              <button id='userprofile-followbuttonitemreview'>FOLLOW</button>
            </div>

         </Col>

         <Col id='userprofile-mainlinkcontaineritemreview'>
          {
            [

            ].map((data, idx)=> {
              return 
            })
          }
         </Col>

      
      </Col>

      <ProductDescriptionLandingViewItemReview  specificProductLoadingStatus={props.specificProductLoadingStatus}
                           specificproduct={props.specificproduct}

                           productInfoClickFromMacSetModal={props.productInfoClickFromMacSetModal}
                           toggleProductInfoClickFromMacSetModal={props.toggleProductInfoClickFromMacSetModal}
                           itemspecification={props.itemspecification}

                           availableColorsData={props.availableColorsData}
                           availableSizesData={props.availableSizesData} 

                           getprodutprice={props.getprodutprice}
                           getselectedproduct={props.getselectedproduct}
                           
                           selectedSpecificItem={props.selectedSpecificItem}
                           getSelectedSpecificItem={props.getSelectedSpecificItem}
                           
                           selectedColor={props.selectedColor}
                           getSelectedColor={props.getSelectedColor}
          
                           selectedSizes={props.selectedSizes}
                           getSelectedSizes={props.getSelectedSizes}
                            
                           selectedSizesSpecification={props.selectedSizesSpecification}
                           getSelectedSizesSpecification={props.getSelectedSizesSpecification}/>

    </Col>
  )
}