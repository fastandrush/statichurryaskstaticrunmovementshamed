import React from 'react';

import { Col } from 'react-bootstrap';

import ProductDescriptionMacSetItems from './productdescriptionmacsetitems-component';

import '../styles/storemacsetitems.scss';


export default function StoreMacSetItems(props) {


const closeSpecificItem = (e) => {
  props.closeSpecificItem()
}

  return (
    <Col id='userprofilecontainer'>
    
      <Col id='userprofilecontainer-closebuttoncontainer'>
        <p id='userprofilecontainer-closebutton'
           onClick={(e)=> closeSpecificItem(e)}>X</p>
      </Col>

      <Col id='userprofile-usermaindisplaycontainer'>

         <Col id='userprofile-coverphotocontainer'>
             1
         </Col>

         <Col id='userprofile-userprofilecontainer'>

            <div id='userpfofile-userprofilephoto'>
            
            </div>
            <div id='userprofile-usernamecontainer'>
              <h3 className='userprofile-userindicationtext userprofile-userindicationtextusername'>User store profile name</h3>
              <h5 className='userprofile-userindicationtext'>@User store additional information field - store</h5>
            </div>
            <div id='userprofile-followcontainer'>
              <button id='userprofile-followbutton'>FOLLOW</button>
            </div>

         </Col>

         <Col id='userprofile-mainlinkcontainer'>
          {
            [

            ].map((data, idx)=> {
              return 
            })
          }
         </Col>

      
      </Col>

      <ProductDescriptionMacSetItems  specificProductLoadingStatus={props.specificProductLoadingStatus}
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