import React, { useState,
    useEffect,
    useCallback
     } from 'react';

import { Col,
Spinner } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../styles/productdescriptionlandingviewitemreview.scss';


export default function ProductDescriptionLandingViewItemReview(props) {

const [, updateState] = useState();
const forceUpdate = useCallback(() => updateState({}), []);

const [parsedSetCount, doSomethingWithParseSetCount] = useState(props.loadSetCount)
const [reversedParsedCount, doSomethingWithParseSetCountReversed] = useState(1);
const [selectedItemSpecification, ] = useState([]);

const [singleSelecteditemSpecificationInitalPcs, doSomethingWithSingleSelecteditemSpecificationInitalPcs] = useState(0); 
const [singleSelectedSizeSpecificationInitialPcs, doSomethingWithSingleSingleSelectedSizeSpecificationInitialPcs] = useState(0); 

const [itemAddiotionalInformation, getItemAdditionalInformation] = useState([]);

useEffect(()=> {

const _selecteditem = document.getElementsByClassName('specificproductcontainerselectionimage-inputfield');
const _selectedsizes = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfield');

for (let x = 0; x < _selecteditem.length; x++) {
_selecteditem[x].value = 0;  
}

for (let ss = 0; ss < _selectedsizes.length; ss++) {
_selectedsizes[ss].value = 0;
}


const itemAdditionalData = props.specificproduct.productextrainformationdetails.toString()
const parseItemAdditionalData =  itemAdditionalData.split(",")

getItemAdditionalInformation((data)=> data = parseItemAdditionalData )

}, [])


/// selec selection image / order count / promo pcs // previous function definetion getting item specs
const macSetItemsGetSpecificProductOrderCountPromoPcs = (e, idx) => {

//props.itemspecification
// use obj to store in item specification having image names to find index then delete
const selectionImagesCont = document.getElementsByClassName('specificproductcontainerselectionimagelvir');

if ( idx === 0 ) {
if ( selectionImagesCont[0].style.border === '2.5px solid skyblue' ) {
selectionImagesCont[0].style.border = '1.5px solid white'
return
}
selectionImagesCont[0].style.border = '2.5px solid skyblue'
}

if ( idx === 1 ) {
if ( selectionImagesCont[1].style.border === '2.5px solid skyblue' ) {
selectionImagesCont[1].style.border = '1.5px solid white'
return
}
selectionImagesCont[1].style.border = '2.5px solid skyblue'
}


if ( idx === 2 ) {
if ( selectionImagesCont[2].style.border === '2.5px solid skyblue' ) {
selectionImagesCont[2].style.border = '1.5px solid white'
return
}
selectionImagesCont[2].style.border = '2.5px solid skyblue'
}

}

//// select selection image's / decre / promo pcs
const decrementSelectionImagePromoPcs = (e, idx) => {

const _node =  document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldlvir');
const _modifySelectedItemSpecification =  props.selectedSpecificItem.find((data)=> data.id === idx)
const _query = (data) => data.id === idx;
const _findIndex = props.selectedSpecificItem.findIndex(_query)

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)



if ( _node[idx].value < 1 ) {
console.log('Input value down to zero || === -1')
return
}

let _modefiedselectedspecification = {
id: _modifySelectedItemSpecification.id,
orderItemSpecification: _modifySelectedItemSpecification.orderItemSpecification,
pcs: Number(_node[idx].value--) - 1,
} 

props.selectedSpecificItem.splice(_findIndex, 1);
props.selectedSpecificItem.push(_modefiedselectedspecification)
}

/// select selection image's / incre / promo pcs
const incrementSelectionImagePromoPcs = (e, idx) => {

const _node =  document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldlvir');
const _orderItemSpecification = document.getElementsByClassName('specificproductcontainerselectionimagelvir')[idx].src;
const _parseOrderItemSpecification = _orderItemSpecification.slice(21, 1000)

const inputFieldPcsCount = []
const initialValue = 0;

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

// grab current input value's on click
for ( let pcs = 0; pcs < _node.length; pcs++) {
inputFieldPcsCount.push(_node[pcs].value)
}

// reduce all input value into total count to compromise promo pcs count
const maXPcs = inputFieldPcsCount.reduce(
(previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue
);

// set condition when declared item specification meet the promo pcs count
if ( maXPcs < props.specificproduct.macitem.setcount ) {

const selectedspecification = {
                   id: idx,
                   orderItemSpecification: `..${_parseOrderItemSpecification}`,
                   pcs: Number(_node[idx].value) + 1
}

//// display notif when desired item specification already meet the promo pcs 
if ( _node[idx].value > props.specificproduct.macitem.setcount - 1 ) {
alert('Max promo pcs') 
return
}

// create initiator 
if ( props.selectedSpecificItem.length === 0 ) {

props.selectedSpecificItem.push(selectedspecification)
_node[idx].value++
return

} 

// use initiator
if ( props.selectedSpecificItem.length > 0 ) {

const _modifySelectedItemSpecification = props.selectedSpecificItem.find((data)=> data.id === idx)
const _query = (data) => data.id === idx;
const _findIndex = props.selectedSpecificItem.findIndex(_query)

// initiated exist's, update
if ( _modifySelectedItemSpecification ) {

let _modefiedselectedspecification = {
                      id: _modifySelectedItemSpecification.id,
                      orderItemSpecification: _modifySelectedItemSpecification.orderItemSpecification,
                      pcs: Number(  _node[idx].value++) + 1,
                      } 

props.selectedSpecificItem.splice(_findIndex, 1);
props.selectedSpecificItem.push(_modefiedselectedspecification)

}
// initiated not equal to clicked, append
if (  _modifySelectedItemSpecification === undefined) {

props.selectedSpecificItem.push(selectedspecification)
_node[idx].value++
return

}

return
}

props.getselectedproduct((details)=> details = document.getElementById('specificproductcontainer-pnlvir').innerText)
props.getprodutprice((details)=> details = document.getElementById('specificproductcontainer-pplvir').innerText)

} else {
alert('Max promo pcs')
}

}

/// selec selection image / order count / regular function /  previous function definetion getting item specs
const macSetItemsGetSpecificProductOrderCount = (e, idx) => {
alert('Select selection image / count / regular function')
}

//// select selection image / decre / regular function
const decrementSelectionImage = (e, idx) => {

const inputFieldCount = document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldlvir')
const _orderitemspecification = document.getElementsByClassName('specificproductcontainerselectionimagelvir')

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

if ( inputFieldCount[idx].value === 0 ) {
return 
}

inputFieldCount[idx].value = inputFieldCount[idx].value - 1;

}

//// select selection image / incre / regular function
const incrementSelectionImage = (e, idx) => {
  const inputFieldCount = document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldlvir')
  const _orderitemspecification = document.getElementsByClassName('specificproductcontainerselectionimagelvir')
 

  //props.getselectedproduct((details)=> details = props.specificproduct.productname)
  //props.getprodutprice((details)=> details = props.specificproduct.productprice)
  for ( let pcs = 0; pcs < inputFieldCount.length; pcs++) {
    inputFieldCount[pcs].value = 0;
  }
  
 
  doSomethingWithSingleSelecteditemSpecificationInitalPcs((count)=> count = count + 1)
  inputFieldCount[idx].value = singleSelecteditemSpecificationInitalPcs;
 
  props.getSelectedSpecificItem((specs)=> specs = '..' + _orderitemspecification[idx].src.slice(21, Number(_orderitemspecification[idx].src.length)))
  
  if (inputFieldCount[idx].value == 2) {
    alert("Max pcs, search other STORE for PROMO PCS")
    doSomethingWithSingleSelecteditemSpecificationInitalPcs((count)=> count = 0)
    inputFieldCount[idx].value = 1;  
    return
  }


}

// select color's / promo pcs function  
const getSelectedColorPromoPcs = (e, idx) => {

const _color = document.getElementsByClassName('specificproductcontaineravailablecolor-selectedcountlvir');
const _colorContainer = document.getElementsByClassName('specificproductcontaineravailablecolor-colorpositioningcontainerlvir');
const intiatorCalculateTotalOrderColorCount = [];
const initialValue = 0;

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)


for ( let pcs = 0; pcs < _color.length; pcs++) {  
intiatorCalculateTotalOrderColorCount.push(_color[pcs].innerText)
}

const maxColorPcs =intiatorCalculateTotalOrderColorCount.reduce(
(previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue
);

if ( maxColorPcs < props.specificproduct.macitem.setcount ) {

if ( _color[idx].innerText === "" ) {

const _modifySelectedColorSpecification = props.selectedColor.find((data)=> data.id === idx)
const _query = (data) => data.id === idx;
const _findIndex = props.selectedColor.findIndex(_query)

if ( _modifySelectedColorSpecification === undefined ) {

_color[idx].innerText = '1';
e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')

let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _color[idx].innerText
}

props.selectedColor.push(selectedColor)
return
}

if ( _modifySelectedColorSpecification != undefined) {

_color[idx].innerText = '1';
e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')

let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _modifySelectedColorSpecification.pcs + 1
}
props.selectedColor.splice(_findIndex, 1);
props.selectedColor.push(selectedColor);
return
}

}

if ( _color[idx].innerText > '0' ) {

e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')

const _modifySelectedColorSpecification = props.selectedColor.find((data)=> data.id === idx)
const _query = (data) => data.id === idx;
const _findIndex =  props.selectedColor.findIndex(_query)

if ( _modifySelectedColorSpecification.pcs == '0' ) {

_color[idx].innerText = '';

let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _color[idx].innerText
}

props.selectedColor.splice(_findIndex, 1)
props.selectedColor.push(selectedColor)
return

}

if ( _modifySelectedColorSpecification.pcs !== '0') {

_color[idx].innerText =  `${Number(_color[idx].innerText) + 1}`;

let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _color[idx].innerText
}

props.selectedColor.splice(_findIndex, 1)
props.selectedColor.push(selectedColor)
return

}

return
}

} else {

let _modifySelectedColorSpecification = props.selectedColor.find((data)=> data.id === idx)
let _query = (data) => data.id === idx;
let _findIndex = props.selectedColor.findIndex(_query)

if ( _color[idx].innerText === "" ) {
alert('Max color pcs')
return
}

if ( _modifySelectedColorSpecification.pcs - 1 == '0') {

let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _modifySelectedColorSpecification.pcs - 1
}

props.selectedColor.splice(_findIndex, 1)
props.selectedColor.push(selectedColor)

_color[idx].innerText = '' 
return

}

if ( _modifySelectedColorSpecification.pcs - 1 != '0') {

alert('Max color pcs')
let selectedColor = {
id: idx,
color: _colorContainer[idx].style.backgroundColor,
pcs: _modifySelectedColorSpecification.pcs - 1
}

props.selectedColor.splice(_findIndex, 1)
props.selectedColor.push(selectedColor)

_color[idx].innerText = _modifySelectedColorSpecification.pcs - 1


return
}

}

if ( Number(_color[idx].innerText) > props.specificproduct.macitem.setcount ) {
return
}

if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainerlvir' ) {
e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')
return
}
if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainer specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir' ) {
e.target.classList.remove('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')
e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontainerlvir')
return
}


}

// select color / regular function
const getSelectedColor = (e, idx) => {

const _colorItemSpecification = document.getElementsByClassName('specificproductcontaineravailablecolor-colorpositioningcontainerlvir')
const _countPcs = document.getElementsByClassName('specificproductcontaineravailablecolor-selectedcountlvir')

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

for ( let containers = 0; containers < _colorItemSpecification.length; containers++) {
_colorItemSpecification[containers].className = "specificproductcontaineravailablecolor-colorpositioningcontainerlvir"
}

if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainerlvir' ) {

e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')
props.getSelectedColor((specs)=> specs = _colorItemSpecification[idx].style.backgroundColor)
return
}
if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainerspecificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir' ) {
e.target.classList.remove('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedlvir')
e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontainerlvir')
props.getSelectedColor((specs)=> specs = _colorItemSpecification[idx].style.backgroundColor)
return
}

}

// select size's / promo pcs
const getSelectedSizePromoPcs = (e, idx) => {
alert('Promo pcs')
}

/// select size / regular function 
const getSelectedSize = (e, idx) => {

switch(e.target.style.fontSize) {
case '60px':
e.target.style.fontSize = '30px';
e.target.style.color = 'blacl';
break;
case '30px': 
e.target.style.fontSize = '60px';
e.target.style.color = 'skyblue';
break;
default:
return
}

}

// select size's / decre / promo pcs 
const getSelectedSizeDecrementBtnPromoPcs = (e,idx) => {

const _selectedsizes = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldlvir');
const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizelvir');

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

if ( _selectedsizes[idx].value === ""  || _selectedsizes[idx].value == "0" ) {
return 
}

if ( _selectedsizes[idx].value > '0' ) {

_selectedsizes[idx].value = _selectedsizes[idx].value - 1;

let _modifySelectedColorSpecification = props.selectedSizes.find((data)=> data.id === idx)
let _query = (data) => data.id === idx;
let _findIndex = props.selectedSizes.findIndex(_query)

const selectedSizes = {
               id: idx,
               selectedSize: _size[idx].innerText,
               pcs: _modifySelectedColorSpecification.pcs - 1
              }

props.selectedSizes.splice(_findIndex, 1)
props.selectedSizes.push(selectedSizes)


}

}

// select size's / incre / promo pcs
const getSelectedSizeIncrementBtnPromoPcs = (e,idx) => {

const _selectedsizes = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldlvir');
const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizelvir');
const intiatorCalculateTotalOrderSizesCount = [];
const initialValue = 0;

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)


for ( let pcs = 0; pcs < _selectedsizes.length; pcs++) {  
intiatorCalculateTotalOrderSizesCount.push(_selectedsizes[pcs].value)
}

const maxSizesPcs = intiatorCalculateTotalOrderSizesCount.reduce(
(previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue
);


if ( maxSizesPcs < props.specificproduct.macitem.setcount ) {

if ( _selectedsizes[idx].value === "" || _selectedsizes[idx].value == '0') {

_selectedsizes[idx].value = 1;

let _modifySelectedColorSpecification = props.selectedSizes.find((data)=> data.id === idx)
let _query = (data) => data.id === idx;
let _findIndex = props.selectedSizes.findIndex(_query)

if ( _modifySelectedColorSpecification === undefined ) {
const selectedSizes = {
id: idx,
selectedSize: _size[idx].innerText,
pcs: Number(_selectedsizes[idx].value) 
}

props.selectedSizes.push(selectedSizes)  
return 
}
if ( _modifySelectedColorSpecification !== undefined ) {

const selectedSizes = {
id: idx,
selectedSize: _size[idx].innerText,
pcs: _modifySelectedColorSpecification.pcs + 1 
}

props.selectedSizes.splice(_findIndex, 1);
props.selectedSizes.push(selectedSizes);
return 

}
return
}

if ( _selectedsizes[idx].value > '0' ) {

_selectedsizes[idx].value = Number(_selectedsizes[idx].value) + 1;
let _modifySelectedColorSpecification = props.selectedSizes.find((data)=> data.id === idx)
let _query = (data) => data.id === idx;
let _findIndex = props.selectedSizes.findIndex(_query)

const selectedSizes = {
                  id: idx,
                  selectedSize: _size[idx].innerText,
                  pcs: _modifySelectedColorSpecification.pcs + 1 
                }

props.selectedSizes.splice(_findIndex, 1);
props.selectedSizes.push(selectedSizes);          
return 

}

} else {
alert('Max sizes count')
}

}
// select size / decre / regular function
const getSelectedSizeDecrementBtn = (e,idx) => {

const selectedSizePcsSpecification = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldlvir')

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

if ( selectedSizePcsSpecification[idx].value == 0 ) {
return 
}
doSomethingWithSingleSingleSelectedSizeSpecificationInitialPcs((count)=> count = 0);
selectedSizePcsSpecification[idx].value = selectedSizePcsSpecification[idx].value - 1;

}
// select size / incre / regular function
const getSelectedSizeIncrementBtn = (e,idx) => {

const selectedSizePcsSpecification = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldlvir')
const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizelvir')

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

for ( let pcs = 0; pcs < selectedSizePcsSpecification.length; pcs++ ) {
selectedSizePcsSpecification[pcs].value = 0;
}

doSomethingWithSingleSingleSelectedSizeSpecificationInitialPcs((count)=> count = count + 1)
selectedSizePcsSpecification[idx].value = singleSelectedSizeSpecificationInitialPcs;
props.getSelectedSizes((specs)=> specs = _size[idx].innerText)

if (selectedSizePcsSpecification[idx].value == 2) {
alert("Max pcs, search other STORE for PROMO PCS");
doSomethingWithSingleSingleSelectedSizeSpecificationInitialPcs((count)=> count = 0);
selectedSizePcsSpecification[idx].value = 1;
return
}



}
// select size item specification's / promo pcs
const getSelectedSizeSpecificationPromoPcs = (e, idx) => {

const itemSizeSpecification = e.target.value
const pcs = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldlvir')
const size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizelvir')

let _modifySelectedSizeSpecification = props.selectedSizesSpecification.find((data)=> data.id === idx)
let _query = (data) => data.id === idx;
let _findIndex = props.selectedSizesSpecification.findIndex(_query)

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

if ( _modifySelectedSizeSpecification === undefined ) {

const itemsizepecification = {
                         id: idx,
                         value: itemSizeSpecification,
                         size: size[idx].innerText
                        }
props.selectedSizesSpecification.push(itemsizepecification)   
}

if ( _modifySelectedSizeSpecification !== undefined ) {

const itemsizepecification = {
                       id: idx,
                       value: itemSizeSpecification,
                       size: size[idx].innerText,
                       }

props.selectedSizesSpecification.splice( _findIndex, 1);                        
props.selectedSizesSpecification.push(itemsizepecification);

}

}

// select size item specification / promo pcs
const getSelectedSizeSpecification = (e, idx) => {

props.getselectedproduct((details)=> details = props.specificproduct.productname)
props.getprodutprice((details)=> details = props.specificproduct.productprice)

props.getSelectedSizesSpecification((specs)=> specs = e.target.value)
}

return (

<Col style={{position: 'absolute', height: '100%', width: '100%'}}>
{
props.specificProductLoadingStatus ?
(  
<Col id='specificproductloadingspinnercontainerlvir'>
    <Spinner className='specificproductloadingspinner1lvir' animation="grow" variant="primary"/>
    <Spinner className='specificproductloadingspinner2lvir' animation="grow" variant="dark" />
    <Spinner className='specificproductloadingspinner3lvir' animation="grow" variant="success" /> 
</Col> 
) 
:
(
<Col id='specificproductcontainerlvir'>

 <p id='specificproduct-pnlvir' 
     onClick={()=> alert(props.productInfoClickFromMacSetModal)}>
      {props.specificproduct.productname}
 </p>
 <p id='specificproduct-pplvir'>&#8369;{props.specificproduct.productprice}</p>


 <Col id='specificproductcontainer-mainimagescontainerlvir'>

    <p id='specificproductcontainer-itemdisplayimageindicationlvir'>item display images</p>

    <Swiper id='specificproductcontainermainimagescontainer-swiperlvir'
            slidesPerView={2}
            spaceBetween={80}>
              
         {
          props.specificproduct.productmainselectionimages.map((data, idx)=> {
            return (
              <SwiperSlide key={idx}
                           id='specificproductcontainermainimagescontainer-swiperslidelvir'>
                <img src={data}
                     alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                     className='specificproductcontainermainimagescontainerswiper-imagelvir'/>
              </SwiperSlide>

            )
          })
        } 

     </Swiper>

 </Col>

 <Col id='specificproductcontainer-productdescriptioncontainerlvir'>
    <p id='specificproductcontainer-productdescriptionheaderlvir'><b>ITEM DESCRIPTION</b></p>
    <p id='specificproductcontainer-productdescriptionlvir'>{props.specificproduct.productdescription}</p>
 </Col>

 <Col id='specificproductcontainer-productextainformationcontainerlvir'>
    <p id='specificproductcontainer-productextainformationheaderlvir'><b>ITEM ADDITIONAL INFORMATION/SPECS :</b></p>
    <Col id='specificproductcontainer-productextainformationindicationcontainerlvir'>
    {
      itemAddiotionalInformation.map((data, idx)=> {
         return <p className='specificproductcontainer-productextainformationindicationlvir'>{data}</p>
      })
    }
    </Col>
 </Col>

 <Col id='specificproductcontainer-productextainformationlocationcontainerlvir'>
    <p id='specificproductcontainer-productextainformationlocationheaderlvir'>ITEM LOCATION</p>
    <Col id='specificproductcontainer-productextainformationindicationlocationcontainerlvir'>
    <p className='specificproductcontainer-productextainformationlocationindicationlvir'>{props.specificproduct.productextrainformationlocation.island}</p>
      <p className='specificproductcontainer-productextainformationlocationindicationlvir'>{props.specificproduct.productextrainformationlocation.province}</p>
      <p className='specificproductcontainer-productextainformationlocationindicationlvir'>{props.specificproduct.productextrainformationlocation.city}</p>
      <p className='specificproductcontainer-productextainformationlocationindicationlvir'>{props.specificproduct.productextrainformationlocation.baranggay}</p>
    </Col>
 </Col>

 <Col id='specificproductcontainer-selectionimagescontainerlvir'>
    {
      props.specificproduct.macitem.ismacitem === 'true' ? 
      ( 
        <>
        {
          props.specificproduct.macitem.isaset  === 'true' ? 
          (
            <>   
            <Col>
               <p id='specificproductcontainerselectionimages-choosespecificitemindicationlvir'><b>Choose specification</b></p>
               <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountlvir'>({props.specificproduct.macitem.setcount}) PCS</p> 
            </Col>
            <Col id='specificproductcontainerselectionimage-imagepositioncontainerlvir'>           
             {
                props.specificproduct.productselectionimages.map((data, idx)=> {
                  return  <div className='specificproductcontainerselectionimage-imagecontainerlvir'>
                           <div className='specificproductcontainerselectionimage-incredecrebuttoncontainerlvir'>
                             <button className='specificproductcontainerselectionimage-decrementbuttonlvir'
                                     onClick={(e)=> decrementSelectionImagePromoPcs(e, idx)}>
                                -
                             </button>
                             <input  className='specificproductcontainerselectionimage-inputfieldlvir' 
                                     type='number'/>
                             <button className='specificproductcontainerselectionimage-incrementbuttonlvir'
                                      onClick={(e)=> incrementSelectionImagePromoPcs(e, idx)}>
                               +
                             </button>
                           </div> 
                                 
                           <img key={idx}
                              src={data}
                              alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                              className='specificproductcontainerselectionimagelvir'
                              onClick={(e)=> macSetItemsGetSpecificProductOrderCountPromoPcs(e, idx)}/>
                                 
                          </div>
             })
             } 
            </Col>
            </>
          ) : 
          (
            <>   
           <Col>
             <p id='specificproductcontainerselectionimages-choosespecificitemindicationlvir'>Choose specification</p>
             <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountlvir'>({props.specificproduct.macitem.setcount}) PCS</p> 
           </Col>
           <Col id='specificproductcontainerselectionimage-imagepositioncontainerlvir'>           
           {
             props.specificproduct.productselectionimages.map((data, idx)=> {
                 return  <div className='specificproductcontainerselectionimage-imagecontainerlvir'>
                           <div className='specificproductcontainerselectionimage-incredecrebuttoncontainerlvir'>
                             <button className='specificproductcontainerselectionimage-decrementbuttonlvir'
                                     onClick={(e)=> decrementSelectionImage(e, idx)}>
                                 -
                             </button>
                             <input  className='specificproductcontainerselectionimage-inputfieldlvir' 
                                     type='number'/>
                             <button className='specificproductcontainerselectionimage-incrementbuttonlvir'
                                     onClick={(e)=> incrementSelectionImage(e, idx)}>
                                 +
                             </button>
                           </div> 
                             
                         <img key={idx}
                              src={data}
                              alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                              className='specificproductcontainerselectionimagelvir'
                              onClick={(e)=> macSetItemsGetSpecificProductOrderCount(e, idx)}/>
                             
                         </div>
          })
         } 
         </Col>
            </>
          )
        }
        </>  
      ) 
      : 
      (
        <>
        {
          props.specificproduct.isaset.isaset === 'true'? 
          (
          <>
           <Col>
            <p id='specificproductcontainerselectionimages-choosespecificitemindicationlvir'>Choose specification</p>
            <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountlvir'>({props.specificproduct.macitem.setcount}) PCS</p> 
           </Col>
           <Col id='specificproductcontainerselectionimage-imagepositioncontainerlvir'>           
           {
            props.specificproduct.productselectionimages.map((data, idx)=> {
                return  <div className='specificproductcontainerselectionimage-imagecontainerlvir'>
                         <div className='specificproductcontainerselectionimage-incredecrebuttoncontainerlvir'>
                           <button className='specificproductcontainerselectionimage-decrementbuttonlvir'
                                   onClick={(e)=> decrementSelectionImagePromoPcs(e, idx)}>
                              -
                           </button>
                           <input  className='specificproductcontainerselectionimage-inputfieldlvir' 
                                   type='number'/>
                           <button className='specificproductcontainerselectionimage-incrementbuttonlvir'
                                    onClick={(e)=> incrementSelectionImagePromoPcs(e, idx)}>
                             +
                           </button>
                         </div> 
                               
                         <img key={idx}
                            src={data}
                            alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                            className='specificproductcontainerselectionimagelvir'
                            onClick={(e)=> macSetItemsGetSpecificProductOrderCountPromoPcs(e, idx)}/>
                               
                        </div>
           })
           } 
           </Col>
          </>
          ) : 
          (
          <>    
           <Col>
            <p id='specificproductcontainerselectionimages-choosespecificitemindicationlvir'>Choose specification</p>
           </Col>
           <Col id='specificproductcontainerselectionimage-imagepositioncontainerlvir'>           
           {
              props.specificproduct.productselectionimages.map((data, idx)=> {
                return  <div className='specificproductcontainerselectionimage-imagecontainerlvir'>
                         <div className='specificproductcontainerselectionimage-incredecrebuttoncontainerlvir'>
                           <button className='specificproductcontainerselectionimage-decrementbuttonlvir'
                                   onClick={(e)=> decrementSelectionImage(e, idx)}>
                              -
                           </button>
                           <input  className='specificproductcontainerselectionimage-inputfieldlvir' 
                                   type='number'/>
                           <button className='specificproductcontainerselectionimage-incrementbuttonlvir'
                                    onClick={(e)=> incrementSelectionImage(e, idx)}>
                             +
                           </button>
                         </div> 
                               
                         <img key={idx}
                            src={data}
                            alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                            className='specificproductcontainerselectionimagelvir'
                            onClick={(e)=> macSetItemsGetSpecificProductOrderCount(e, idx)}/>
                               
                        </div>
           })
           } 
           </Col>
          </>
          )
        }
        </>
      )
    }           
 </Col>

{
props.availableColorsData[0] !== '' ? 
(
  <Col id='specificproductcontainer-availablecolorscontainerlvir'>
  <h1 id='specificproductcontainer-availablecolorsheaderlvir'>Color</h1> 
   {
     props.specificproduct.macitem.ismacitem === 'true' ? 
     (
       <>
       {
         props.specificproduct.macitem.isaset === 'true' ? 
         (
         <>
         <Col id='specificproductcontaineravailablecolor-colorcontainerlvir'> 
           {
            props.availableColorsData.map((data, idx)=> {
              return <div className='specificproductcontaineravailablecolor-colorpositioningcontainerlvir'
                          style={{backgroundColor: `${data}`}}
                          onClick={(e)=> getSelectedColorPromoPcs(e, idx)}>
                       <p className='specificproductcontaineravailablecolor-selectedcountlvir'></p>
                     </div>
             })
           }
         </Col>
         </>
         ) : 
         (
         <>
          <h1 id='specificproductcontainer-availablecolorsheaderlvir'>Color</h1>    
          <Col id='specificproductcontaineravailablecolor-colorcontainerlvir'> 
             {
              props.availableColorsData.map((data, idx)=> {
                return <div className='specificproductcontaineravailablecolor-colorpositioningcontainerlvir'
                            style={{backgroundColor: `${data}`}}
                            onClick={(e)=> getSelectedColor(e, idx)}>
                         <p className='specificproductcontaineravailablecolor-selectedcountlvir'></p>
                       </div>
               })
             }
          </Col>
         </>
         )
       }
       </>
     ) : 
     (          
    <>
    {
      props.specificproduct.isaset.isaset === 'true' ? 
      (
      <>
         <h1 id='specificproductcontainer-availablecolorsheaderlvir'>PICK COLOR</h1>  
         <Col id='specificproductcontaineravailablecolor-colorcontainerlvir'> 
           <>
            {
              props.availableColorsData.map((data, idx)=> {
                 return <div className='specificproductcontaineravailablecolor-colorpositioningcontainerlvir'
                             style={{backgroundColor: `${data}`}}
                             onClick={(e)=> getSelectedColorPromoPcs(e, idx)}>
                           <p className='specificproductcontaineravailablecolor-selectedcountlvir'></p>
                        </div>
              })
            }
        </>
         </Col>
      </>
      ) :
      (
        <>
        <h1 id='specificproductcontainer-availablecolorsheaderlvir'>PICK COLOR</h1>  
         <Col id='specificproductcontaineravailablecolor-colorcontainerlvir'> 
           <>
            {
              props.availableColorsData.map((data, idx)=> {
                 return <div className='specificproductcontaineravailablecolor-colorpositioningcontainerlvir'
                             style={{backgroundColor: `${data}`}}
                             onClick={(e)=> getSelectedColor(e, idx)}>
                           <p className='specificproductcontaineravailablecolor-selectedcountlvir'></p>
                        </div>
              })
            }
        </>
         </Col>
        </>
      ) 
    }
    </>
     )
   }
  </Col>
) : 
(
  <Col>
  </Col>
)
}

{
props.availableSizesData[0] !== '' ? 
(
  <Col id='specificproductcontainer-availablesizescontainerlvir'>
  {
   props.specificproduct.macitem.ismacitem === 'true' ?
   (
    <>
    {
      props.specificproduct.macitem.isaset === 'true' ? 
      (
       <>
      <h1 id='specificproductcontainer-availablesizesheaderlvir'>Size</h1>    
       {
         props.availableSizesData.map((data, idx)=> {
            return <div className='specificproductcontaineravailablesizes-sizespositioningcontainerlvir'>
                     <div className='specificproductcontaineravailablesizes-incredecrebtncontainerlvir'>
                        <button className='specificproductcontaineravailablesizes-incrementbtnlvir'
                                onClick={(e)=> getSelectedSizeDecrementBtnPromoPcs(e, idx)}>
                               -
                        </button>
                        <input type='text'
                           className='specificproductcontaineravailablesizes-pcsfieldlvir'/>
                        <button className='specificproductcontaineravailablesizes-decrementbtnlvir'
                                onClick={(e)=> getSelectedSizeIncrementBtnPromoPcs(e, idx)}>
                               +
                        </button>
                     </div>
                      <input type='text' 
                             placeholder='SPECIFY ITEM'
                             className='specificproductcontaineravailablesizes-specificationfieldlvir'
                             onChange={(e)=> getSelectedSizeSpecificationPromoPcs(e, idx)}/>
                      <p className='specificproductcontaineravailablesizes-sizelvir'
                         onClick={(e)=> getSelectedSizePromoPcs(e,idx)}>{data.toUpperCase()}</p>
                    </div>
        })
       }
       </>
      ) 
      : 
      (
      <>
        <h1 id='specificproductcontainer-availablesizesheaderlvir'>Size</h1>    
        {
             props.availableSizesData.map((data, idx)=> {
                return <div className='specificproductcontaineravailablesizes-sizespositioningcontainerlvir'>
                         <div className='specificproductcontaineravailablesizes-incredecrebtncontainerlvir'>
                            <button className='specificproductcontaineravailablesizes-incrementbtnlvir'
                                    onClick={(e)=> getSelectedSizeDecrementBtn(e, idx)}>
                                   -
                            </button>
                            <input type='text'
                               className='specificproductcontaineravailablesizes-pcsfieldlvir'/>
                            <button className='specificproductcontaineravailablesizes-decrementbtnlvir'
                                    onClick={(e)=> getSelectedSizeIncrementBtn(e, idx)}>
                                   +
                            </button>
                         </div>
                          <input type='text' 
                                 placeholder='SPECIFY ITEM'
                                 className='specificproductcontaineravailablesizes-specificationfieldlvir'
                                 onChange={(e)=> getSelectedSizeSpecification(e, idx)}/>
                          <p className='specificproductcontaineravailablesizes-sizelvir'
                             onClick={(e)=> getSelectedSizePromoPcs(e,idx)}>{data.toUpperCase()}</p>
                        </div>
            })
           }
      </>
      )
     }
    </>  
   ) : 
   (
    <>
    {
      props.specificproduct.isaset.isaset === 'true' ?
      (
      <>
       <h1 id='specificproductcontainer-availablesizesheaderlvir'>PICK A SIZE</h1>
       {
         props.availableSizesData.map((data, idx)=> {
            return <div className='specificproductcontaineravailablesizes-sizespositioningcontainerlvir'>
                     <div className='specificproductcontaineravailablesizes-incredecrebtncontainerlvir'>
                        <button className='specificproductcontaineravailablesizes-decrementbtnlvir'
                                onClick={(e)=> getSelectedSizeDecrementBtnPromoPcs(e, idx)}>
                               -
                        </button>
                        <input type='text'
                               className='specificproductcontaineravailablesizes-pcsfieldlvir'/>
                        <button className='specificproductcontaineravailablesizes-incrementtbtnlvir'
                                onClick={(e)=> getSelectedSizeIncrementBtnPromoPcs(e, idx)}>
                                +
                        </button>
                    </div>
                    <input type='text' 
                           placeholder='SPECIFY ITEM'
                           className='specificproductcontaineravailablesizes-specificationfieldlvir'
                           onBlur={(e)=> getSelectedSizeSpecificationPromoPcs(e, idx)}/>
                    <p className='specificproductcontaineravailablesizes-sizelvir'
                       onClick={(e)=> getSelectedSizePromoPcs(e,idx)}>{data.toUpperCase()}</p>
                  </div>
      })
     }
      </>
      ) : 
      (
      <>
      <h1 id='specificproductcontainer-availablesizesheaderlvir'>YOUR SIZE'S</h1>
      {
       props.availableSizesData.map((data, idx)=> {
           return <div className='specificproductcontaineravailablesizes-sizespositioningcontainerlvir'>
                     <div className='specificproductcontaineravailablesizes-incredecrebtncontainerlvir'>
                       <button className='specificproductcontaineravailablesizes-decrementbtnlvir'
                               onClick={(e)=> getSelectedSizeDecrementBtn(e, idx)}>
                           -
                       </button>
                           <input type='text'
                                  className='specificproductcontaineravailablesizes-pcsfieldlvir'/>
                        <button className='specificproductcontaineravailablesizes-incrementbtnlvir'
                                 onClick={(e)=> getSelectedSizeIncrementBtn(e, idx)}>
                           +
                        </button>
                     </div>
                     <input type='text' 
                            placeholder='SPECIFY ITEM'
                            className='specificproductcontaineravailablesizes-specificationfieldlvir'
                            onBlur={(e)=> getSelectedSizeSpecification(e, idx)}/>
                     <p className='specificproductcontaineravailablesizes-sizelvir'
                        onClick={(e)=> getSelectedSize(e,idx)}>{data.toUpperCase()}</p>
                  </div>
       })
      }
      </>
      )
   }
    </>
   )
  }
</Col>
)
: 
(
 <Col>
 </Col>
)
}


</Col>
)
}
</Col>
)
} 