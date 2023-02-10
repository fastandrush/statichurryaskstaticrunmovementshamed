import React, { useState,
                useEffect,
                useCallback
              } from 'react';

import { Col } from 'react-bootstrap';

import { useLocation,
         useNavigate } from 'react-router-dom';

import '../styles/checkout.scss';

import { Swiper, SwiperSlide } from "swiper/react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import axios from 'axios';

export default function CheckOutPage(props) {

 const location = useLocation();
 const navigate = useNavigate();

 const [, updateState] = useState();
 const forceUpdate = useCallback(() => updateState({}), []);

 const [itemData, updateItemData] = useState(
  [
  
 ]
 );

 const [parsedMechandiseTotalPrice, stackMerchandiseTotalPrice] = useState(0) 
 const [parsedShippingTotalPrice, stackShippingTotalPrice] = useState(0);
 const [item, getItem] = useState([]);
 const [parsedItems, lintItems] = useState(); 
 const [totalPrice, getTotalPrice] = useState(0);
 const [totalVat, getTotalVat] = useState();

 const [paymentFormModal, togglePaymentForModal] = useState(false);
  
 useEffect( async ()=> {

  updateItemData((itemdata)=> itemdata = location.state)

  if ( paymentFormModal === true ) {
    return
  }

  if ( paymentFormModal === false ) {
 
    let itemPrice = null;
    let stackedMerhcandiseTotalPrice = [];  
    let stackedShippingPrices = [];
    
     for ( let exec = 0; exec < itemData.length; exec++) {

      const isamacset = JSON.stringify(itemData[exec].data.macset.isamacset)

    
  
      if ( itemData[exec].data.macset.isamacset === 'true' ) {
        itemPrice  = itemData[exec].data.macset.macsetprice.slice(0, 100000) 
        stackedMerhcandiseTotalPrice.push(itemPrice)
      }
         
      if ( itemData[exec].data.macset.isamacset === 'false' ) {
          alert('Calculate item price price') 
      }
   

     }

  const merchandiseTotalPrice = stackedMerhcandiseTotalPrice.reduce((previousValue, currentValue)=> Number(previousValue) + Number(currentValue), 0)
 
  stackMerchandiseTotalPrice((totalprice)=> totalprice = merchandiseTotalPrice)


  const qwerty = document.getElementsByClassName('checkoutpagecontentcontainer2shippingcontainer-originatorindication');

 

  for ( let exec = 0; exec < qwerty.length; exec++) {
    qwerty[exec].style.display = 'none'
  }

 // qwerty[0].style.display = 'none'

  const shippingPrices = document.getElementsByClassName('checkoutpagecontentcontainer2shippingindication-shippingrate');

  for ( let exec = 0; exec < shippingPrices.length; exec++ ) {
   
    const rate = shippingPrices[exec].innerText.slice(16, 1000)
    stackedShippingPrices.push(Number(rate))

  } 

  const rate = stackedShippingPrices.reduce((previousValue, currentValue)=> previousValue + currentValue, 0)
 
  stackShippingTotalPrice((shippingtotal)=> shippingtotal = rate)

  calculateTotalPrice(merchandiseTotalPrice, rate)

  }
  
 
  return
      
 },[itemData])


const initialOptions = {
      "client-id": "ASN0N4s32Km1pWFPwgPLK7M9wq3Kn_KkqJuZHa9lnuWVJFusJ115aq2Ac5YGSHa6a4WH5z_qy_JuxNdo",
      currency: "PHP",
      intent: "capture",
};

function calculateTotalPrice(merchandiseTotalPrice, rate) {
 
   getTotalPrice((totalprice) => totalprice = merchandiseTotalPrice +  rate)
 //  alert(parsedMechandiseTotalPrice)
 //  alert(parsedShippingTotalPrice)
 //  alert(totalPrice)
   calculateTotalVat()
}

function calculateTotalVat() {

    let totalProductVat = [];

    for ( let exec = 0; exec < itemData.length; exec++ ) {  
      
      const parsedItemPrice = JSON.stringify(itemData[exec].data.macset.macsetprice).slice(1, 10000)

       if ( JSON.stringify(itemData[exec].data.macset.isamacset) === 'true' ) {

           item.push({
             idx: itemData[exec].data.idx,
             itemname: itemData[exec].data.macset.macsetname,
             ismacset: itemData[exec].data.macset.isamacset,
             itemprice: parsedItemPrice,
             vat: itemData[exec].data.macset.vat
           })

           totalProductVat.push(Number(itemData[exec].data.macset.vat))
            
       }

       if ( itemData[exec].data.macset.isamacset === 'false' ) {
           alert('Get item VAT')
       }


    }   

    const totalVat = totalProductVat.reduce((previousValue, currentValue)=> previousValue + currentValue, 0)
    getTotalVat((totalvat)=> totalvat = totalVat)

}

async function spreadShare() {
  
  for (let exec = 0 ; exec < itemData.length; exec++) {

    setTimeout(async function timer() {
      
      await  axios.post('https://statichurryaskstaticrunmovementshamed-api.onrender.com/share/gross/items', {
                                                         idx: item[exec].idx,
                                                         macuser: props.currentlyLoginUser.firstname,
                                                         itemname: item[exec].itemname,
                                                         ismacset: item[exec].ismacset,
                                                         data: props.currentlyLoginUser,
                                                         itemsales: item[exec].itemprice,
                                                         itemrevenue: item[exec].vat
                                                        })
      .then((response)=> {
           alert('Route')
           console.log(response)
      })
    }, exec * 5000);

  }
   
}

function run(exec) {
  setTimeout( async ()=> {

  }, 5000)
}

const buy = () => {
  spreadShare()
}

const checkoutPurchaseButton = async (evt) => {

  axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/funds/asktoken/singletransfer')

  .then( async (response)=> {

    const _payPalToken = response.data
    await submitCheckoutPurchaseDetails(_payPalToken)
   
})

  
}


const submitCheckoutPurchaseDetails = async (token) => {
  
  const timeStamp = new Date().toISOString();

  await axios.post('https://statichurryaskstaticrunmovementshamed-api.onrender.com/item/checkout/collectpayment', {
       token: token,
       senderBatchID: `Payout_${timeStamp}`,
       desiredAmount: "10.00"
       })

   .then((response)=> {
    console.log(response)
    //getPayOutId((payoutId)=> payoutId = response.data)
     window.location.href = response.data
  })

}


   return(
      <>
      {
        paymentFormModal ? 
        (
          <Col id='checkoutpage-formmodal'>
             <GcashPaymentModal/>
          </Col>
        ) : 
        (
           <>
           <Col id='checkoutpage'>

             <Col id='checkoutpagepositioningbuttonscontainer'>
                <Col id='checkoutpagebuttonscontainer'
                     onClick={()=> { alert(JSON.stringify(itemData))}}>
                      
                </Col>
             </Col>

            <Col id='checkoutpagepositioningcontentcontainer'>
                <Col id='checkoutpage-contentcontainer1'>
                 <Swiper id='checkoutpage-swiper'
                         slidesPerView={1}>
                    {
                      itemData.map((data, idx)=> {
                        return <>
                                {
                                  data.data.macset.isamacset  === 'true' ?
                                  (
                                   <SwiperSlide className='checkoutpage-swiperslide'>
                                     <Col className='checkoutpagemacset-itemdisplay'>
                                      <img className='checkoutpagemacset-itemdisplayimage' 
                                           src={data.data.macset.macsetitemdisplayimage}
                                           alt='MAC-CHECKOUT-ITEMDISPLAYIMAGE'/>
                                             <h1 className='checkoutpagemacsetitemdisplay-macsetname'>
                                          {data.data.macset.macsetname.toUpperCase()}
                                         </h1>
                                     </Col>  
                                   </SwiperSlide>
                                  )
                                  :
                                  (
                                    <SwiperSlide className='checkoutpage-swiperslide'>
                                     <Col className='checkoutpagemacset-itemdisplay'>
                                      <img className='checkoutpagemacset-itemdisplayimage' 
                                           src={data.data.macset.macsetitemdisplayimage}
                                           alt='MAC-CHECKOUT-ITEMDISPLAYIMAGE'/>
                                             <h1 className='checkoutpagemacsetitemdisplay-macsetname'>
                                          {data.data.macset.macsetname.toUpperCase()}
                                         </h1>
                                     </Col>  
                                   </SwiperSlide>
                                  )
                                }
                               </>
                      })
                    }
                 </Swiper>
                </Col>
                <Col id='checkoutpage-contentcontainer2'>
                 <div id='checkoutpage-positioningcontentcontainer2'>
                    <Col id='checkoutpagecontentcontainer2-merchandisecontainer'>
                      <Col>
                         <p className='checkoutpagecontentcontainer2merchandisecontainer-merchandisesubtotalindication'>Mechandise subtotal: &#8369;<span id='mechandisesubtotal'>{parsedMechandiseTotalPrice.toFixed(2)}</span></p>
                      </Col>
                      <Col>
                         <p className='checkoutpagecontentcontainer2merchandisecontainer-merchandiseshippingtotalindication'>Shipping total: <span>&#8369;{parsedShippingTotalPrice.toFixed(2)}</span></p>
                      </Col>
                    </Col>
                    <Col id='checkoutpagecontentcontainer2-shippingcontainer'>
                      {
                        itemData.map((data, idx)=> {
                          return <>
                                  {
                                    data.data.macset.isamacset === 'true' ? 
                                    (
                                     <Col>
                                      <p className='checkoutpagecontentcontainer2shippingcontainer-originatorindication'>Distributor, {data.data.macset.originator}</p>
                                      <p className='checkoutpagecontentcontainer2shippingindication-productname'>Productname, {data.data.macset.macsetname}</p>
                                      <p className='checkoutpagecontentcontainer2shippingindication'>Weight, {data.data.macset.macsetweight} grams</p>
                                      <p className='checkoutpagecontentcontainer2shippingindication-shippingrate'>Shipping rate, &#8369;{data.data.shippingprice.toFixed(2)}</p>
                                     </Col>
                                    
                                    ) 
                                    :
                                    (
                                      <p>{data.data.productname}</p>
                                    )
                                  }
                                 </>
                        })
                      }
                    </Col>
                    <Col id='checkoutpagecontentcontainer2-totalcontainer'>
                      <p id='checkoutpagecontentcontainer2-totalindication'>Total Payment: <span>&#8369;{totalPrice.toFixed(2)}</span></p>
                    </Col>
                 </div>
                </Col>
            </Col>

            <Col id='checkoutpagepositioningcheckoutbuttoncontainer'>
              <button id='checkoutpagepositioningcheckoutbutton'
                       onClick={(evt)=> checkoutPurchaseButton(evt)}>
                 Purchase
              </button>
            </Col>
 
           </Col>
           </>
      )
     }
      </>
   )

  }


function GcashPaymentModal() {
  return (
     <Col id='gcashpaymentmodal'>
        GcashPaymentModal
     </Col>
  )
}
