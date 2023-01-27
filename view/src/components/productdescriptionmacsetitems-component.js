import React, { useState,
                useEffect,
                useCallback
                 } from 'react';

import { Col,
         Spinner } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../styles/productdescriptionmacsetitems.scss';


export default function ProductDescription(props) {

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
    const selectionImagesCont = document.getElementsByClassName('specificproductcontainerselectionimagemacsetitems');
    
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

    const _node =  document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldmacsetitems');
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
 
   const _node =  document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldmacsetitems');
   const _orderItemSpecification = document.getElementsByClassName('specificproductcontainerselectionimagemacsetitems')[idx].src;
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
 
    props.getselectedproduct((details)=> details = document.getElementById('specificproductcontainer-pnmacsetitems').innerText)
    props.getprodutprice((details)=> details = document.getElementById('specificproductcontainer-ppmacsetitems').innerText)
            
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

  const inputFieldCount = document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldmacsetitems')
  const _orderitemspecification = document.getElementsByClassName('specificproductcontainerselectionimagemacsetitems')
 
  props.getselectedproduct((details)=> details = props.specificproduct.productname)
  props.getprodutprice((details)=> details = props.specificproduct.productprice)

  if ( inputFieldCount[idx].value === 0 ) {
    return 
  }
  
  inputFieldCount[idx].value = inputFieldCount[idx].value - 1;
  
}

//// select selection image / incre / regular function
const incrementSelectionImage = (e, idx) => {

  const inputFieldCount = document.getElementsByClassName('specificproductcontainerselectionimage-inputfieldmacsetitems')
  const _orderitemspecification = document.getElementsByClassName('specificproductcontainerselectionimagemacsetitems')
 
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

  const _color = document.getElementsByClassName('specificproductcontaineravailablecolor-selectedcountmacsetitems');
  const _colorContainer = document.getElementsByClassName('specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems');
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
        e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')

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
        e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')

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

        e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')

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

 if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems' ) {
    e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')
    return
 }
 if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainer specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems' ) {
    e.target.classList.remove('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')
    e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems')
    return
 }

 
}

// select color / regular function
const getSelectedColor = (e, idx) => {
 
  const _colorItemSpecification = document.getElementsByClassName('specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems')
  const _countPcs = document.getElementsByClassName('specificproductcontaineravailablecolor-selectedcountmacsetitems')
  
  props.getselectedproduct((details)=> details = props.specificproduct.productname)
  props.getprodutprice((details)=> details = props.specificproduct.productprice)

  for ( let containers = 0; containers < _colorItemSpecification.length; containers++) {
    _colorItemSpecification[containers].className = "specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems"
  }
 
  if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems' ) {
    
    e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')
    props.getSelectedColor((specs)=> specs = _colorItemSpecification[idx].style.backgroundColor)
    return
 }
 if ( e.target.className === 'specificproductcontaineravailablecolor-colorpositioningcontainerspecificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems' ) {
    e.target.classList.remove('specificproductcontaineravailablecolor-colorpositioningcontaineranimatedmacsetitems')
    e.target.classList.add('specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems')
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

  const _selectedsizes = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldmacsetitems');
  const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizemacsetitems');
   
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

  const _selectedsizes = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldmacsetitems');
  const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizemacsetitems');
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

  const selectedSizePcsSpecification = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldmacsetitems')

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
 
  const selectedSizePcsSpecification = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldmacsetitems')
  const _size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizemacsetitems')

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
  const pcs = document.getElementsByClassName('specificproductcontaineravailablesizes-pcsfieldmacsetitems')
  const size = document.getElementsByClassName('specificproductcontaineravailablesizes-sizemacsetitems')

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
            <Col id='specificproductloadingspinnercontainermacsetitems'>
                <Spinner className='specificproductloadingspinner1macsetitems' animation="grow" variant="primary"/>
                <Spinner className='specificproductloadingspinner2macsetitems' animation="grow" variant="dark" />
                <Spinner className='specificproductloadingspinner3macsetitems' animation="grow" variant="success" /> 
            </Col> 
         ) 
         :
         (
           <Col id='specificproductcontainermacsetitems'>

             <p id='specificproduct-pnmacsetitems' 
                 onClick={()=> alert(props.productInfoClickFromMacSetModal)}>
                  {props.specificproduct.productname}
             </p>
             <p id='specificproduct-ppmacsetitems'>&#8369;{props.specificproduct.productprice}</p>

             {/*
               always false, changing shipping address will be on checkout page if decided to allow ship different address  
             */}
             {
               props.productInfoClickFromMacSetModal ? 
                (
                  <Col>
                    <p></p>
                  </Col>  
                ) :
                (
                  <Col id='specificproductcontainer-shippingoptionscontainer'>
                  <p>{props.productInfoClickFromMacSetModal}</p>
                    <p id='specificproductcontainer-shippingoptions'>Shipping options: </p>
                    <p id='specificproductcontainer-shippingfee'>Shipping fee: This a MAC SET ITEM and all of the item that belong to this set only got a shipping of ₱100.00</p>
                  </Col>
                )
             }

             <Col id='specificproductcontainer-mainimagescontainermacsetitems'>

                <p id='specificproductcontainer-itemdisplayimageindicationmacsetitems'>item display images</p>

                <Swiper id='specificproductcontainermainimagescontainer-swipermacsetitems'
                        slidesPerView={2}
                        spaceBetween={80}>
                     {
                      props.specificproduct.productmainselectionimages.map((data, idx)=> {
                        return (
                          <SwiperSlide key={idx}
                                       id='specificproductcontainermainimagescontainer-swiperslidemacsetitems'>
                            <img src={data}
                                 alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                                 className='specificproductcontainermainimagescontainerswiper-imagemacsetitems'/>
                          </SwiperSlide>

                        )
                      })
                    } 
                 </Swiper>

             </Col>

             <Col id='specificproductcontainer-productdescriptioncontainermacsetitems'>
                <p id='specificproductcontainer-productdescriptionheadermacsetitems'>ITEM DESCRIPTION</p>
                <p id='specificproductcontainer-productdescriptionmacsetitems'>{props.specificproduct.productdescription}</p>
             </Col>

             <Col id='specificproductcontainer-productextainformationcontainermacsetitems'>
                <p id='specificproductcontainer-productextainformationheadermacsetitems'>ITEM ADDITIONAL INFORMATION/SPECS :</p>
                <Col id='specificproductcontainer-productextainformationindicationcontainermacsetitems'>
                {
                  itemAddiotionalInformation.map((data, idx)=> {
                     return <p className='specificproductcontainer-productextainformationindicationmacsetitems'>{data}</p>
                  })
                }
                </Col>
             </Col>

             <Col id='specificproductcontainer-productextainformationlocationcontainermacsetitems'>
                <p id='specificproductcontainer-productextainformationlocationheadermacsetitems'>ITEM LOCATION</p>
                <Col id='specificproductcontainer-productextainformationindicationlocationcontainermacsetitems'>
                <p className='specificproductcontainer-productextainformationlocationindicationmacsetitems'>{props.specificproduct.productextrainformationlocation.island}</p>
                  <p className='specificproductcontainer-productextainformationlocationindicationmacsetitems'>{props.specificproduct.productextrainformationlocation.province}</p>
                  <p className='specificproductcontainer-productextainformationlocationindicationmacsetitems'>{props.specificproduct.productextrainformationlocation.city}</p>
                  <p className='specificproductcontainer-productextainformationlocationindicationmacsetitems'>{props.specificproduct.productextrainformationlocation.baranggay}</p>
                </Col>
             </Col>
  
             <Col id='specificproductcontainer-selectionimagescontainermacsetitems'>
                {
                  props.specificproduct.macitem.ismacitem === 'true' ? 
                  ( 
                    <>
                    {
                      props.specificproduct.macitem.isaset  === 'true' ? 
                      (
                        <>   
                        <Col>
                           <p id='specificproductcontainerselectionimages-choosespecificitemindicationmacsetitems'>Choose specification</p>
                           <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountmacsetitems'>({props.specificproduct.macitem.setcount}) PCS</p> 
                        </Col>
                        <Col id='specificproductcontainerselectionimage-imagepositioncontainermacsetitems'>           
                         {
                            props.specificproduct.productselectionimages.map((data, idx)=> {
                              return  <div className='specificproductcontainerselectionimage-imagecontainermacsetitems'>
                                       <div className='specificproductcontainerselectionimage-incredecrebuttoncontainermacsetitems'>
                                         <button className='specificproductcontainerselectionimage-decrementbuttonmacsetitems'
                                                 onClick={(e)=> decrementSelectionImagePromoPcs(e, idx)}>
                                            -
                                         </button>
                                         <input  className='specificproductcontainerselectionimage-inputfieldmacsetitems' 
                                                 type='number'/>
                                         <button className='specificproductcontainerselectionimage-incrementbuttonmacsetitems'
                                                  onClick={(e)=> incrementSelectionImagePromoPcs(e, idx)}>
                                           +
                                         </button>
                                       </div> 
                                             
                                       <img key={idx}
                                          src={data}
                                          alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                                          className='specificproductcontainerselectionimagemacsetitems'
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
                         <p id='specificproductcontainerselectionimages-choosespecificitemindicationmacsetitems'>Casdasdhoose specification</p>
                         <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountmacsetitems'>({props.specificproduct.macitem.setcount}) PCS</p> 
                       </Col>
                       <Col id='specificproductcontainerselectionimage-imagepositioncontainermacsetitems'>           
                       {
                         props.specificproduct.productselectionimages.map((data, idx)=> {
                             return  <div className='specificproductcontainerselectionimage-imagecontainermacsetitems'>
                                       <div className='specificproductcontainerselectionimage-incredecrebuttoncontainermacsetitems'>
                                         <button className='specificproductcontainerselectionimage-decrementbuttonmacsetitems'
                                                 onClick={(e)=> decrementSelectionImage(e, idx)}>
                                             -
                                         </button>
                                         <input  className='specificproductcontainerselectionimage-inputfieldmacsetitems' 
                                                 type='number'/>
                                         <button className='specificproductcontainerselectionimage-incrementbuttonmacsetitems'
                                                 onClick={(e)=> incrementSelectionImage(e, idx)}>
                                             +
                                         </button>
                                     </div> 
                                         
                                     <img key={idx}
                                          src={data}
                                          alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                                          className='specificproductcontainerselectionimagemacsetitems'
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
                        <p id='specificproductcontainerselectionimages-choosespecificitemindicationmacsetitems'>Choose specification</p>
                        <p id='specificproductcontainerselectionimages-choosespecificitemindicationcountmacsetitems'>({props.specificproduct.macitem.setcount}) PCS</p> 
                       </Col>
                       <Col id='specificproductcontainerselectionimage-imagepositioncontainermacsetitems'>           
                       {
                        props.specificproduct.productselectionimages.map((data, idx)=> {
                            return  <div className='specificproductcontainerselectionimage-imagecontainermacsetitems'>
                                     <div className='specificproductcontainerselectionimage-incredecrebuttoncontainermacsetitems'>
                                       <button className='specificproductcontainerselectionimage-decrementbuttonmacsetitems'
                                               onClick={(e)=> decrementSelectionImagePromoPcs(e, idx)}>
                                          -
                                       </button>
                                       <input  className='specificproductcontainerselectionimage-inputfieldmacsetitems' 
                                               type='number'/>
                                       <button className='specificproductcontainerselectionimage-incrementbuttonmacsetitems'
                                                onClick={(e)=> incrementSelectionImagePromoPcs(e, idx)}>
                                         +
                                       </button>
                                     </div> 
                                           
                                     <img key={idx}
                                        src={data}
                                        alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                                        className='specificproductcontainerselectionimagemacsetitems'
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
                        <p id='specificproductcontainerselectionimages-choosespecificitemindicationmacsetitems'>PICK THE ITEMS YOU WANT</p>
                       </Col>
                       <Col id='specificproductcontainerselectionimage-imagepositioncontainermacsetitems'>           
                       {
                          props.specificproduct.productselectionimages.map((data, idx)=> {
                            return  <div className='specificproductcontainerselectionimage-imagecontainermacsetitems'>
                                     <div className='specificproductcontainerselectionimage-incredecrebuttoncontainermacsetitems'>
                                       <button className='specificproductcontainerselectionimage-decrementbuttonmacsetitems'
                                               onClick={(e)=> decrementSelectionImage(e, idx)}>
                                          -
                                       </button>
                                       <input  className='specificproductcontainerselectionimage-inputfieldmacsetitems' 
                                               type='number'/>
                                       <button className='specificproductcontainerselectionimage-incrementbuttonmacsetitems'
                                                onClick={(e)=> incrementSelectionImage(e, idx)}>
                                         +
                                       </button>
                                     </div> 
                                           
                                     <img key={idx}
                                        src={data}
                                        alt='MAC-SPECIFIC-PRODUCT-DISPLAYIMAGE'
                                        className='specificproductcontainerselectionimagemacsetitems'
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
          props.availableColorsData[0] !== '' ? (
             <Col id='specificproductcontainer-availablecolorscontainermacsetitems'>
                {
                  props.specificproduct.macitem.ismacitem === 'true' ? (
                    <>
                    {
                      props.specificproduct.macitem.isaset === 'true' ? 
                      (
                      <>
                      <h1 id='specificproductcontainer-availablecolorsheadermacsetitems'>Color</h1>    
                      <Col id='specificproductcontaineravailablecolor-colorcontainermacsetitems'> 
                        {
                         props.availableColorsData.map((data, idx)=> {
                           return <div className='specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems'
                                       style={{backgroundColor: `${data}`}}
                                       onClick={(e)=> getSelectedColorPromoPcs(e, idx)}>
                                    <p className='specificproductcontaineravailablecolor-selectedcountmacsetitems'></p>
                                  </div>
                          })
                        }
                      </Col>
                      </>
                      ) : 
                      (
                      <>
                       <h1 id='specificproductcontainer-availablecolorsheadermacsetitems'>Color</h1>    
                       <Col id='specificproductcontaineravailablecolor-colorcontainermacsetitems'> 
                          {
                           props.availableColorsData.map((data, idx)=> {
                             return <div className='specificproductcontaineravailablecolor-colorpositioningcontainermacsetitems'
                                         style={{backgroundColor: `${data}`}}
                                         onClick={(e)=> getSelectedColor(e, idx)}>
                                      <p className='specificproductcontaineravailablecolor-selectedcountmacsetitems'></p>
                                    </div>
                            })
                          }
                       </Col>
                      </>
                      )
                    }
                    </>
                  ) : (          
                 <>
                 {
                   props.specificproduct.isaset.isaset === 'true' ? 
                   (
                   <>
                      <h1 id='specificproductcontainer-availablecolorsheader'>PICK COLOR</h1>  
                      <Col id='specificproductcontaineravailablecolor-colorcontainer'> 
                        <>
                         {
                           props.availableColorsData.map((data, idx)=> {
                              return <div className='specificproductcontaineravailablecolor-colorpositioningcontainer'
                                          style={{backgroundColor: `${data}`}}
                                          onClick={(e)=> getSelectedColorPromoPcs(e, idx)}>
                                        <p className='specificproductcontaineravailablecolor-selectedcount'></p>
                                     </div>
                           })
                         }
                     </>
                      </Col>
                   </>
                   ) :
                   (
                     <>
                     <h1 id='specificproductcontainer-availablecolorsheader'>PICK COLOR</h1>  
                      <Col id='specificproductcontaineravailablecolor-colorcontainer'> 
                        <>
                         {
                           props.availableColorsData.map((data, idx)=> {
                              return <div className='specificproductcontaineravailablecolor-colorpositioningcontainer'
                                          style={{backgroundColor: `${data}`}}
                                          onClick={(e)=> getSelectedColor(e, idx)}>
                                        <p className='specificproductcontaineravailablecolor-selectedcount'></p>
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
             <Col id='specificproductcontainer-availablesizescontainermacsetitems'>
                {
                 props.specificproduct.macitem.ismacitem === 'true' ?
                 (
                  <>
                  {
                    props.specificproduct.macitem.isaset === 'true' ? 
                    (
                     <>
                    <h1 id='specificproductcontainer-availablesizesheadermacsetitems'>Size</h1>    
                     {
                       props.availableSizesData.map((data, idx)=> {
                          return <div className='specificproductcontaineravailablesizes-sizespositioningcontainermacsetitems'>
                                   <div className='specificproductcontaineravailablesizes-incredecrebtncontainermacsetitems'>
                                      <button className='specificproductcontaineravailablesizes-incrementbtnmacsetitems'
                                              onClick={(e)=> getSelectedSizeDecrementBtnPromoPcs(e, idx)}>
                                             -
                                      </button>
                                      <input type='text'
                                         className='specificproductcontaineravailablesizes-pcsfieldmacsetitems'/>
                                      <button className='specificproductcontaineravailablesizes-decrementbtnmacsetitems'
                                              onClick={(e)=> getSelectedSizeIncrementBtnPromoPcs(e, idx)}>
                                             +
                                      </button>
                                   </div>
                                    <input type='text' 
                                           placeholder='SPECIFY ITEM'
                                           className='specificproductcontaineravailablesizes-specificationfieldmacsetitems'
                                           onChange={(e)=> getSelectedSizeSpecificationPromoPcs(e, idx)}/>
                                    <p className='specificproductcontaineravailablesizes-sizemacsetitems'
                                       onClick={(e)=> getSelectedSizePromoPcs(e,idx)}>{data.toUpperCase()}</p>
                                  </div>
                      })
                     }
                     </>
                    ) 
                    : 
                    (
                    <>
                      <h1 id='specificproductcontainer-availablesizesheadermacsetitems'>Size</h1>    
                      {
                           props.availableSizesData.map((data, idx)=> {
                              return <div className='specificproductcontaineravailablesizes-sizespositioningcontainermacsetitems'>
                                       <div className='specificproductcontaineravailablesizes-incredecrebtncontainermacsetitems'>
                                          <button className='specificproductcontaineravailablesizes-incrementbtnmacsetitems'
                                                  onClick={(e)=> getSelectedSizeDecrementBtn(e, idx)}>
                                                 -
                                          </button>
                                          <input type='text'
                                             className='specificproductcontaineravailablesizes-pcsfieldmacsetitems'/>
                                          <button className='specificproductcontaineravailablesizes-decrementbtnmacsetitems'
                                                  onClick={(e)=> getSelectedSizeIncrementBtn(e, idx)}>
                                                 +
                                          </button>
                                       </div>
                                        <input type='text' 
                                               placeholder='SPECIFY ITEM'
                                               className='specificproductcontaineravailablesizes-specificationfieldmacsetitems'
                                               onChange={(e)=> getSelectedSizeSpecification(e, idx)}/>
                                        <p className='specificproductcontaineravailablesizes-sizemacsetitems'
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
                     <h1 id='specificproductcontainer-availablesizesheadermacsetitems'>PICK A SIZE</h1>
                     {
                       props.availableSizesData.map((data, idx)=> {
                          return <div className='specificproductcontaineravailablesizes-sizespositioningcontainermacsetitems'>
                                   <div className='specificproductcontaineravailablesizes-incredecrebtncontainermacsetitems'>
                                      <button className='specificproductcontaineravailablesizes-decrementbtnmacsetitems'
                                              onClick={(e)=> getSelectedSizeDecrementBtnPromoPcs(e, idx)}>
                                             -
                                      </button>
                                      <input type='text'
                                             className='specificproductcontaineravailablesizes-pcsfieldmacsetitems'/>
                                      <button className='specificproductcontaineravailablesizes-incrementtbtnmacsetitems'
                                              onClick={(e)=> getSelectedSizeIncrementBtnPromoPcs(e, idx)}>
                                              +
                                      </button>
                                  </div>
                                  <input type='text' 
                                         placeholder='SPECIFY ITEM'
                                         className='specificproductcontaineravailablesizes-specificationfieldmacsetitems'
                                         onBlur={(e)=> getSelectedSizeSpecificationPromoPcs(e, idx)}/>
                                  <p className='specificproductcontaineravailablesizes-sizemacsetitems'
                                     onClick={(e)=> getSelectedSizePromoPcs(e,idx)}>{data.toUpperCase()}</p>
                                </div>
                    })
                   }
                    </>
                    ) : 
                    (
                    <>
                    <h1 id='specificproductcontainer-availablesizesheadermacsetitems'>YOUR SIZE'S</h1>
                    {
                     props.availableSizesData.map((data, idx)=> {
                         return <div className='specificproductcontaineravailablesizes-sizespositioningcontainermacsetitems'>
                                   <div className='specificproductcontaineravailablesizes-incredecrebtncontainermacsetitems'>
                                     <button className='specificproductcontaineravailablesizes-decrementbtnmacsetitems'
                                             onClick={(e)=> getSelectedSizeDecrementBtn(e, idx)}>
                                         -
                                     </button>
                                         <input type='text'
                                                className='specificproductcontaineravailablesizes-pcsfieldmacsetitems'/>
                                      <button className='specificproductcontaineravailablesizes-incrementbtnmacsetitems'
                                               onClick={(e)=> getSelectedSizeIncrementBtn(e, idx)}>
                                         +
                                      </button>
                                   </div>
                                   <input type='text' 
                                          placeholder='SPECIFY ITEM'
                                          className='specificproductcontaineravailablesizes-specificationfieldmacsetitems'
                                          onBlur={(e)=> getSelectedSizeSpecification(e, idx)}/>
                                   <p className='specificproductcontaineravailablesizes-sizemacsetitems'
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
        ) : 
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