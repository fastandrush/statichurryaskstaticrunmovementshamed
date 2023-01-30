import React, { useState, 
                useEffect
              } from 'react';

import { Container, 
         Col,
         Spinner } from 'react-bootstrap';
        
import { Link } from 'react-router-dom';

import axios from 'axios';

import '../styles/landingview.scss';

// to secure asyncronous executions of functions, data fetching are hoisted to root component since this is 
// the landingpage, asyncronous execution is controlled by a single listener, by doing so,
// it also maintain stability and maintainability for the structuring and adding snippets
 
// first grid views
import LandscapeNav from './landscapenav-component';
import MacNews from './macnews-component';
import PopularPosts from './popularposts-component';
import MacSetItems from './macsetitems-component';
import LatestPosts from './latestposts-component';
import MacUserGraph from './macusergraph-component';
import StoreWelcomeIntroduction from './storewelcomeintroduction-component';
import MailChimp from './mailchimp-component';
import GoodsItemComponent from './goodsitem-component';
import ItemsEquipsComponent from './itemequips-component';

// second grid views
import MemberCount from './membercount-component';
import FollowUs from './followus-component';
import MacsBrandsOfChoice from './macsbrandsofchoice-component';
import MoneyPot from './moneypot-component';
import Map from './map-component';
import Forum from './forum-component'; 
import Trend from './trend-component';
import Announcement from './announcement-component';
import Videos from './videos-component.js';
import Footer from './footer-component';
import Draggable from 'react-draggable';

// user dashboard 
import UserDashboard from './userdashboard-component';

export default function LandingView(props) {

const [backEndPathnameURI, changeBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/')
const [developmentBackEndPathnameURI, changeDevelopmentBackEndPathnameURI] = useState('http://localhost:8000/');
const [productionBackEndPathnameURI, changeProductionBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/');

axios.defaults.baseURL = backEndPathnameURI;

const [userStatusContainerDP, doSomethingUserStatusContainerDp] = useState('-30%');
const [userDashboardSettingsContainer, doSomethingUserDashboardSettingsContainer] = useState('-100%');

const [cartContainer, toggleCartContainer] = useState('0');
const [cartContainerOffSetTop, doSomethingWithCartContainerOffSetTop] = useState('-500%');
const [cartInfoContainerOffSetTop, doSomethingWithCartInfoContainerOffSetTop] = useState('-20%');
const [cartItemOffSetTop, doSomethingWithCartItemOffSetTop] = useState('-70%')
const [cartItemCheckOutBtn, doSomethingWithCartItemCheckOutBtn] = useState('none'); 
const [cartItemCheckOutBtnZindex, doSomethingWithCartItemCheckOutBtnZindex] = useState(0); 

const [cartContainerTransitionProp, setDefaultCartContainerTransitionProp] = useState('1s');

const [checkOutItemsData, doSomethingCheckOutItemsData] = useState([]);

const [paypayModal, togglePayPalModal] = useState('none');
const [macUserGraph, toggleMacUserGraph] = useState('block');

const [transferFundsLoadingIndicator, transferFundsLoadingIndicatorStatus] = useState(false);
const [submitPayPalUserDetailsLoadingIndication, submitPayPalUserDetailsLoadingIndicationStatus] = useState(false);

const [transferFundsConfirmPasswordCont, toggleTransferFundsConfirmPasswordCont] = useState('0%');
const [transferFundsConfirmPasswordContZindex, toggleTransferFundsConfirmPasswordZindex] = useState('100%');
const [transferFundsConfirmPasswordOpacity, toggleTransferFundsConfirmPasswordOpacity] = useState('0');

const [authenticatiponExpiryTime, authenticatiponExpiryCountTime] = useState(60);

const [tokenExpiryIntervalId, setTokenExpiryIntervalId] = useState();

const [payPalPhoneNumber, getPayPalPhoneNumber] = useState('');
const [payPalEmailId, getPayPalEmailId] = useState('');
const [payPalAccountId, getPayPalAccountId] = useState('');
const [desiredAmountPayPalTransfer, getDesiredAmountPayPalTransfer] = useState(0);

const [transferFundsToken, getTransferFundsToken] = useState('');
const [payOutId, getPayOutId] = useState();

const [succesfulTransferOfFundsCont, doSomethingSuccessfulTransferOfFundsCont] = useState(true);

useEffect(()=> {
  
   //document.getElementsByClassName('landingview-cartcontentmacset')[0].style.visibility = 'hidden';
   document.getElementsByClassName('landingview-cartcontent')[0].style.visibility = 'hidden';
   document.getElementsByClassName('landingview-cartcontentfavorites')[0].style.visibility = 'hidden';
 
},[])

const toggleUserStatusContainer = () => {
   doSomethingUserStatusContainerDp((dp)=> dp === '-30%' ? '0%' : '-30%');
}

const handleUserDashboardSettingsContainer = () => {
      doSomethingUserDashboardSettingsContainer((position)=>  '-100%')
}

const toggleCart = (e) => {

  const cartContent = document.getElementById('landingview-cartcontentcontainer')

    if ( cartContainer === '0' ) {
       //cartContent.style.transition = '1s ease'
       setDefaultCartContainerTransitionProp((transition)=> transition = '1s ease')
       toggleCartContainer((toggle)=> toggle = '1')
       doSomethingWithCartContainerOffSetTop((offset)=> offset = '-600%')
       doSomethingWithCartInfoContainerOffSetTop((offset)=> offset = '0%')
       doSomethingWithCartItemOffSetTop((offset)=> offset = '3%')
       doSomethingWithCartItemCheckOutBtn((dp)=> dp = 'block' )
       doSomethingWithCartItemCheckOutBtnZindex((zIndex)=> zIndex = 100)
       return
    } 

    if ( cartContainer === '1' ) {
       setDefaultCartContainerTransitionProp((transition)=> transition = '1s ease 2s')
       //cartContent.style.transition = '1s ease 2s'
       toggleCartContainer((toggle)=> toggle = '0')
       doSomethingWithCartContainerOffSetTop((offset)=> offset = '-500%')
       doSomethingWithCartInfoContainerOffSetTop((offset)=> offset = '-20%')
       doSomethingWithCartItemOffSetTop((offset)=> offset = '-70%')
       setTimeout(timeOut, 3000)
       return
    }

}

const closeCart = () => {
  setDefaultCartContainerTransitionProp((transition)=> transition = '1s ease')
  toggleCartContainer((cont)=> cont = '1' )
  doSomethingWithCartContainerOffSetTop((offset)=> offset = '-600%')
  doSomethingWithCartItemOffSetTop((offset)=> offset = '3%')
  doSomethingWithCartInfoContainerOffSetTop((offset)=> offset = '0%')
  doSomethingWithCartItemCheckOutBtn((dp)=> dp = 'block' )
  doSomethingWithCartItemCheckOutBtnZindex((zIndex)=> zIndex = 100)
}

function timeOut() {
  doSomethingWithCartItemCheckOutBtn((dp)=> dp = 'none')
  doSomethingWithCartItemCheckOutBtnZindex((zIndex)=> zIndex = 0)
}

const deleteItemOnCartMacSet = (e, idx, data) => {
        
    //props.cartItems.splice(idx, 1)
    const cartitem = props.cartItems.find((cartitem)=> cartitem.macset.macsetname === data.macset.macsetname)
    const _query = (data) => data.id === idx;
    const _findIndex = props.cartItems.findIndex(_query)

    props.cartItems.splice(_findIndex,1)
   
}

const myFavoriteMacSet = (e, idx, data) => {

    //const cartitem = props.cartItems.find((cartitem)=> cartitem.macset.macsetname === data.macset.macsetname)
    //document.cookie = `Itemname=${cartitem}, item=${cartitem}`
    //alert(JSON.stringify(props.currentlyLoginUser))
    //// phone numner or a combination of username middlename and lastname being hashed using base encoding with salt and hash again with the same information
    axios.post('/item/cartitems/myfavorite', {
                                            user: props.currentlyLoginUser,
                                            item: data
                                             })
        .then((response)=> {
         console.log(response.data)
       })
}

const checkOut = () => {
  
 

  for ( let exec = 0; exec < props.favoriteItemsOnCart.length; exec++) {
      if ( props.favoriteItemsOnCart[exec].idx === 0 ) {
       
      }
      if ( props.favoriteItemsOnCart[exec].idx !== 0 ) {
        
           checkOutItemsData.push({
                             data: props.favoriteItemsOnCart[exec]
                             })
      }
  }

  for ( let exec = 0; exec < props.cartItems.length; exec++) {
    if ( props.cartItems[exec].idx === 0 ) {
        
    }
    if (  props.cartItems[exec].idx !== 0 ) {
         checkOutItemsData.push({
                           data: props.cartItems[exec]
                           })
    }
}

}

const handlePayPalUserDetails = (e) => {
    
  switch(e.target.id) {
     case 'paypalpn':
      getPayPalPhoneNumber((getuserdetail)=> getuserdetail = e.target.value)
     break;
     case 'paypalemailid':
      getPayPalEmailId((getuserdetail)=> getuserdetail = e.target.value)
     break;
     case 'paypalaccountid':
      getPayPalAccountId((getuserdetail)=> getuserdetail = e.target.value)
     break;
     case 'paypaldesiredamount':
      getDesiredAmountPayPalTransfer((getuserdetail)=> getuserdetail = Number(e.target.value))
     break;
  }

}

const transfer = () => {
  transferFundsLoadingIndicatorStatus((status)=> status = true)
  setTimeout(handleTranferFundsContainer, 3000)
}

function handleTranferFundsContainer() {
  
  togglePayPalModal((display)=> display = 'block')
  toggleMacUserGraph((display)=> display = 'none')
  transferFundsLoadingIndicatorStatus((status)=> status = false)
}

const submitPayPalUserDetails = async () => {
  
  //submitPayPalUserDetailsLoadingIndicationStatus
 //  submitPayPalUserDetailsLoadingIndicationStatus((status)=> status = true)
 // alert(payPalPhoneNumber)
  //alert(payPalEmailId)
 // alert(payPalAccountId)
 // alert()
 // alert()

   axios.get('/funds/asktoken/singletransfer')

      .then( async (response)=> {
        const _payPalToken = response.data
        getTransferFundsToken((token)=> token = _payPalToken);
        

        var clearExpiryTokenTimer = 0;

        let expiryTokenTimerInterval = setInterval(()=> {

           authenticatiponExpiryCountTime((tokenwillexpire)=> tokenwillexpire = tokenwillexpire - 1)
           clearExpiryTokenTimer += 1;

          if ( clearExpiryTokenTimer === 61 ) {
             authenticatiponExpiryCountTime((tokenwillexpire)=> tokenwillexpire = 0 ) 
             clearInterval(expiryTokenTimerInterval)
             getTransferFundsToken((token)=> token = '')
          } 

       }, 1000)

       doSomethingUserStatusContainerDp((display)=> display = '0%')
       toggleTransferFundsConfirmPasswordCont((display)=> display = '0%')
       toggleTransferFundsConfirmPasswordZindex((zindex)=> zindex = '100')
       toggleTransferFundsConfirmPasswordOpacity((opacity)=> opacity = '100')
       await submitPayPalPassword(response.data)

   })

  
      
}
  
const submitPayPalPassword = async (token) => {
    
  const timeStamp = new Date().toISOString();


  await axios.post('/funds/singletransfer', {
         token: token,
         senderBatchID: `Payout_${timeStamp}`,
         desiredAmount: Number(desiredAmountPayPalTransfer).toFixed(2)
         })
     .then((response)=> {

     console.log(response)

     getPayOutId((payoutId)=> payoutId = response.data)
     

    })
     
}

const closeConfirmMACPassword = () => {
  togglePayPalModal((display)=> display = 'none')
  toggleMacUserGraph((display)=> display = 'block')
  doSomethingUserStatusContainerDp((display)=> display = '0%')
  toggleTransferFundsConfirmPasswordCont((display)=> display = '100%')
  toggleTransferFundsConfirmPasswordZindex((zindex)=> zindex = '0')
  toggleTransferFundsConfirmPasswordOpacity((opacity)=> opacity = '0')
}

const onScrollFunction = (evt) => {
  alert('Synced')
}

  return(

    <Container id='landingview' fluid>
        
      {/* Confirm password on paypout modal */}
      <Col id='landingview-confirmpasswordtransferfundscontainer'
           style={{zIndex: transferFundsConfirmPasswordContZindex, opacity: transferFundsConfirmPasswordOpacity, top: transferFundsConfirmPasswordCont}}>
      {
       succesfulTransferOfFundsCont ? 
      (
      <div id='landingviewconfirmpasswordtransferfunds-succesfulcontainer'>
         <Col id='landingviewconfirmpasswordtransferfunds-succesfulmessagecontainer'>
           <h4 id='landingviewconfirmpasswordtransferfunds-succesfultransferindication'>Funds transfered succesfully</h4>
         </Col>
         <Col id='landingviewconfirmpasswordtransferfunds-succesfulclosebuttoncontainer'>
           <p id='landingviewconfirmpasswordtransferfunds-succesfulclosebutton'
              onClick={()=> closeConfirmMACPassword()}>
              close
           </p>
         </Col>
      </div>
      ) 
      :
      (
      <div id='landingviewconfirmpasswordtransferfunds-modal'>
        <input type='password' placeholder='MAC password'
               id='landingviewconfirmpasswordtransferfunds-passwordfield'/>
        <button id='landingviewconfirmpasswordtransferfunds-confirmpassword'
                onClick={()=> submitPayPalPassword()}>
            confirm my password
        </button>
           <p id='landingviewconfirmpasswordtransferfunds-authexpirycountdownindication'>Your authentication token will expire in, ({authenticatiponExpiryTime})</p>
      </div>
      )
      }     
      </Col>

       {/* Landing view #Contents */}
      <Col id='landingview-contentcontainer'>

        <Col id='langingview-compressorcontainer'>

          <Col id='langingview-contentscontainer'>

            <Header doSomethingUserDashboardSettingsContainer={doSomethingUserDashboardSettingsContainer}/>

            <Draggable>
               <img src='./images/maclogo.png'
                    id='macusercontrollogo'
                    onClick={()=> toggleUserStatusContainer()}/>
            </Draggable>

            <LandscapeNav />
  
            <MacNews macNews={props.macNews}
                     macNewsIsIdleStatus={props.macNewsIsIdleStatus}/>

            <MacSetItems macSetItems={props.macSetItems}

                         productInfoClickFromMacSetModal={props.productInfoClickFromMacSetModal}
                         toggleProductInfoClickFromMacSetModal={props.toggleProductInfoClickFromMacSetModal}

                         itemspecification={props.itemspecification}
                         toggleCartContainer={toggleCartContainer}
                         doSomethingWithCartContainerOffSetTop={doSomethingWithCartContainerOffSetTop}
                         doSomethingWithCartInfoContainerOffSetTop={doSomethingWithCartInfoContainerOffSetTop}
                         doSomethingWithCartItemOffSetTop={doSomethingWithCartItemOffSetTop}
                         cartItems={props.cartItems}
                         addCartItems={props.addCartItems}
                         setDefaultCartContainerTransitionProp={setDefaultCartContainerTransitionProp}

                         selectedproduct={props.selectedproduct}
                         getselectedproduct={props.getselectedproduct}
                                      
                         productprice={props.productprice} 
                         getprodutprice={props.getprodutprice}
                       
                         selectedSpecificItem={props.selectedSpecificItem}
                         getSelectedSpecificItem={props.getSelectedSpecificItem}

                         selectedColor={props.selectedColor}
                         getSelectedColor={props.getSelectedColor}

                         selectedSizes={props.selectedSizes}
                         getSelectedSizes={props.getSelectedSizes}

                         selectedSizesSpecification={props.selectedSizesSpecification}
                         getSelectedSizesSpecification={props.getSelectedSizesSpecification}

                         cartItems={props.cartItems}
                         favoriteItemsOnCart={props.favoriteItemsOnCart}

                         getParsedTotalFavCartItemPrice={props.getParsedTotalFavCartItemPrice}
                         
                         calculateOverAllMacSetWeight={props.calculateOverAllMacSetWeight}
                         getCartTotalPrice={props.getCartTotalPrice}
                         
                         closeCart={closeCart}/>

            <MailChimp />

            <StoreWelcomeIntroduction />

            <Col style={{backgroundColor: 'red', height: '60%', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{color:'white', fontSize: '10vh', letterSpacing: '1.5vh'}}>SPECIAL ITEMS HERE</h1>
            </Col>

            <Trend />
            
            <Col id='landingview-content'>
              <Col lg={8} id='landingviewcontent-container1'>

                <Announcement />
                <Forum addressesScope={props.addressesScope}
                       macNews={props.macNews}/>

                {/* <div id='mapmaincontainer'>
                      <div  id='mapheader'>
                        #Header
                      </div>
                      <Map />
                   </div> */}
   
    
               {/* <div id='videosmaincontainer'>
                    <h1 id='videosheader'><b1>VIDEO'S</b1></h1>
                     <Videos videosOf={props.videosOf}
                     videosLoadingStatusUpdate={props.videosLoadingStatusUpdate}/> 
                  </div> */}

              </Col>

              <Col lg={4} id='landingviewcontent-container2'>
                <Col id='landingviewcontent-memberandfollowuscontainer'>
                  <FollowUs /> 
                </Col>
   
                <MemberCount addressesScope={props.addressesScope}
                             addressScopePopulationCount={props.addressScopePopulationCount}/>

                {/* <MacsBrandsOfChoice />*/}
                {/*<MoneyPot />*/}
             </Col>
            </Col>

            <Col id='itemscontainer'>
               <GoodsItemComponent  itemsGoods={props.itemsGoods}
                                    cartItems={props.cartItems}
                                    favoriteItemsOnCart={props.favoriteItemsOnCart}
                                    currentlyLoginUser={props.currentlyLoginUser}

                                    cartTotalPrice={props.cartTotalPrice}
                                    getCartTotalPrice={props.getCartTotalPrice}
                                    totalFavCartItemPrice={props.totalFavCartItemPrice}
                                    getParsedTotalFavCartItemPrice={props.getParsedTotalFavCartItemPrice}
         
                                    selectedproduct={props.selectedproduct}
                                    getselectedproduct={props.getselectedproduct}
                      
                                    productprice={props.productprice} 
                                    getprodutprice={props.getprodutprice}
       
                                    selectedSpecificItem={props.selectedSpecificItem}
                                    getSelectedSpecificItem={props.getSelectedSpecificItem}

                                    selectedColor={props.selectedColor}
                                    getSelectedColor={props.getSelectedColor}

                                    selectedSizes={props.selectedSizes}
                                    getSelectedSizes={props.getSelectedSizes}

                                    selectedSizesSpecification={props.selectedSizesSpecification}
                                    getSelectedSizesSpecification={props.getSelectedSizesSpecification}
                                    parsedTotalFavCartItemPrice={props.parsedTotalFavCartItemPrice}
                                    
                                    setDefaultCartContainerTransitionProp={setDefaultCartContainerTransitionProp}
                                    toggleCartContainer={setDefaultCartContainerTransitionProp}
                                    doSomethingWithCartContainerOffSetTop={setDefaultCartContainerTransitionProp}
                                    doSomethingWithCartItemOffSetTop={setDefaultCartContainerTransitionProp} 
                                    doSomethingWithCartInfoContainerOffSetTop={setDefaultCartContainerTransitionProp}
                                    
                                    cartContainer={cartContainer}
                                    
                                    closeCart={closeCart}/>

             <ItemsEquipsComponent />
             
            </Col>

          <Footer popularPosts={props.popularPosts}
                  latestPosts={props.latestPosts}/>

          </Col>
      
        </Col>  

        <Col id='langingview-userstatuscontainer'
             style={{left: userStatusContainerDP}}>
        {
        transferFundsLoadingIndicator ? 
        (
        <Spinner animation="border" variant="dark"/>
        ) 
        :
        (
        <>
        <Col id='landingviewuserstatus-paypalmodalcontainer'
             style={{display: paypayModal}}>

          <img src='./images/paypalbg.jpg'
               id='landingview-paypalmodalbg'
               alt='MAC-LANDINGVIEW'/>

          <div id='landingviewuserstatus-paypalform'>

          {
           submitPayPalUserDetailsLoadingIndication ? 
           (
           <Spinner animation="border" variant="dark" />
           ) 
           :
           (
          <>
           <input type='text' 
                  placeholder='Your palpal Phone Number'
                  id='paypalpn'
                  className='landingviewuserstatuspaypalform-field'
                  onChange={(e)=> handlePayPalUserDetails(e)}/><br/>
           <p className='landingviewuserstatuspaypalform-or'>or</p>
           <input type='text' 
           placeholder='Your palpal Email ID' 
           id='paypalemailid'
           className='landingviewuserstatuspaypalform-field'
           onChange={(e)=> handlePayPalUserDetails(e)}/><br/>
           <p className='landingviewuserstatuspaypalform-or'>or</p>
           <input type='text'
                  placeholder='Your palpal Acount ID'
                  id='paypalaccountid'
                  className='landingviewuserstatuspaypalform-field'
                  onChange={(e)=> handlePayPalUserDetails(e)}/><br/>
           <input type='number' 
                  placeholder='AMOUNT'
                  id='paypaldesiredamount'
                  className='landingviewuserstatuspaypalform-field'
                  onChange={(e)=> handlePayPalUserDetails(e)}/><br/>
         </>
           )
          }
                 
            <button id='landingviewuserstatuspaypalform-submitbutton'
                    onClick={()=> submitPayPalUserDetails()}>
                submit
            </button>
          </div>

        </Col>

        <Col id='langingviewuserstatus-graphpositioningpersonaldetailscontainer'
             style={{display: macUserGraph}}>

           <Col id='langingviewuserstatus-graphpersonaldetailscontainer'>
              <h3 id='landingviewuserstatus-gphheader'>Communicate to make them speak freely, {props.currentlyLoginUser.firstname}</h3>
              <h4 id='landingviewuserstatus-gphusername'></h4>
              <h4 id='landingviewuserstatus-gphaccountidnumber'>account id: 4598723165798</h4>
              <h4 id='landingviewuserstatus-gphisauthenticated'>authentication: IS AUTHENTICATED</h4>
           </Col>

           <MacUserGraph/>

           <h3 id='langingviewuserstatus-maccredits'>&#8369; {props.macCredits.toFixed(2)}</h3>

           <Col id='langingviewuserstatus-buttonscontainer'> 
              <button id='langingviewuserstatus-transferbutton'
                        onClick={()=> transfer()}>
                transfer
              </button>
              <button id='langingviewuserstatus-requesttotransferbutton'>request to transfer</button>
              <button id='langingviewuserstatus-undertakerbutton'>under taker</button>
           </Col>

        </Col>
        </>
        )
        }
        </Col>
         
        <div id='langingview-scrollbuttonscontainer'>

          <div id='landingview-cartcontainer' style={{zIndex: cartItemCheckOutBtnZindex}}>

             <div id='landingview-cartcontentcontainer'
                  style={{opacity: cartContainer, top: cartContainerOffSetTop, transition: cartContainerTransitionProp}}>
                
              <div id='landingview-cartcontentpositioningcontainer'>
 
                <div className='landingview-cartinfocontainer'
                     style={{top: cartInfoContainerOffSetTop}}>
                  <Col id='landingviewcartinfopriceindicationcontainer'>
                    <p id='landingviewcartinfopriceindication'>Total:</p>
                  </Col>
                  <Col id='landingviewcartinfototalpricecontainer'>
                    <p id='landingviewcartinfototalpricesign'><b>₱<span id='landingviewcartinfototalprice'>{props.cartTotalPrice.toFixed(2)}</span></b></p>
                  </Col>
                </div>

                <div id='test'>

                  <div id='landingview-favoriteitemscontainer'>
                    {
                      props.favoriteItemsOnCart.map((data, idx)=> {
                        return <>
                                {
                                 data.macset.isamacset === 'true' ? (
                                  <div className='landingview-cartcontentmacsetfavorites'
                                  key={idx} 
                                  style={{marginTop: cartItemOffSetTop}}>
                                   
                                  <Col lg={5} className='landingviewcartcontentmacset-namecontainer'>
                                    <p className='landingviewcartcontentmacset-name'>{data.macset.macsetname}</p>
                                    <p className='landingviewcartcontentmacset-weightindication'>weight: 0 grams</p>
                                  </Col>
                                  <Col lg={6} className='landingviewcartcontentmacset-pricescontainer'>
                                  <Col>
                                   <p className='landingviewcartcontentmacset-priceindication'>Product price </p>
                                   <p className='landingviewcartcontentmacset-priceindication'>Shipping price</p>
                                   <p className='landingviewcartcontentmacset-priceindication'>Total price </p>
                                  </Col>
                                  <Col>
                                   <p className='landingviewcartcontentmacset-price'>&#8369;{data.macset.macsetprice}</p>
                                   <p className='landingviewcartcontentmacset-price'>&#8369;{data.shippingprice}</p>
                                    <p className='landingviewcartcontentmacset-price'>&#8369;{Number(data.macset.macsetprice) + Number(data.shippingprice)}</p>
                                  </Col>
                                  </Col>
                                  <Col>      
                                  <Col className='landingviewcartcontentmacsetdislikebuttoncontainer'>
                                    <button className='landingviewcartcontentmacsetdislikebutton'
                                             onClick={(e)=> myFavoriteMacSet(e, idx, data)}>
                                       dislike  
                                    </button>
                                  </Col>
                                  </Col>
                                  </div> 
                                 )
                                 :
                                 (
                                <div className='landingview-cartcontentfavorites'
                                     key={idx}
                                     style={{marginTop: cartItemOffSetTop}}>
                                  <p>{data.macset.isamacset}</p>
                                  <button style={{zIndex: 10}}
                                             onClick={(evt)=> {alert(JSON.stringify(data))} }>click me</button>
                                </div>
                                 )
                               }
                              </>
                      })
                    }
                  </div>

                  <div id='landingviewcartcontentpositioningcontainer-downfirstzeroindex'> 
                      {
                      props.cartItems.map((data, idx)=> {
                        return <>
                                {
                                 data.macset.isamacset === 'true' ?
                                 (
                                   <div className='landingview-cartcontentmacset'
                                        key={idx} 
                                        style={{marginTop: cartItemOffSetTop}}>
                                     <Col lg={5} className='landingviewcartcontentmacset-namecontainer'>
                                        <p className='landingviewcartcontentmacset-name'>{data.macset.macsetname}</p>
                                     </Col>
                                     <Col lg={6} className='landingviewcartcontentmacset-pricescontainer'>
                                       <Col>
                                       <p className='landingviewcartcontentmacset-priceindication'>Product price </p>
                                       <p className='landingviewcartcontentmacset-priceindication'>Shipping price </p>
                                       <p className='landingviewcartcontentmacset-priceindication'>Total price </p>
                                       </Col>
                                       <Col>
                                       <p className='landingviewcartcontentmacset-price'>&#8369;{data.macset.macsetprice}</p>
                                       <p className='landingviewcartcontentmacset-price'>&#8369;{data.shippingprice}</p>
                                       <p className='landingviewcartcontentmacset-price'>&#8369;{Number(data.macset.macsetprice) + Number(data.shippingprice)}</p>
                                       </Col>
                                     </Col>
                                     <Col>
                                        <Col className='landingviewcartcontentmacsetclosebuttoncontainer'>
                                          <button className='landingviewcartcontentmacsetclosebutton'
                                                  onClick={(e)=> deleteItemOnCartMacSet(e, idx, data)}>
                                               x
                                          </button>
                                        </Col>
                                        <Col className='landingviewcartcontentmacsetsavebuttoncontainer'>
                                          <button className='landingviewcartcontentmacsetsavebutton'
                                                  onClick={(e)=> myFavoriteMacSet(e, idx, data)}>
                                             favorite
                                          </button>
                                        </Col>
                                     </Col>
                                  </div> 
                                 ) 
                                 : 
                                 (
                                  <div className='landingview-cartcontent'
                                       key={idx}
                                       style={{marginTop: cartItemOffSetTop}}>
                                     <Col lg={5} className='landingviewcartcontentmacset-namecontainer'>
                                        <p className='landingviewcartcontent-name'>{data.productname}</p>
                                        <p className='landingviewcartcontentmacset-weightindication'
                                            onClick={(evt)=> alert(JSON.stringify(data))}>weight: {data.weight} grams</p>
                                        <img src={data.productdp}
                                             className='landingviewcartcontent-image'/>
                                     </Col>
                                     <Col lg={6} className='landingviewcartcontentmacset-pricescontainer'>
                                       <Col>
                                       <p className='landingviewcartcontent-priceindication'>Product price </p>
                                       <p className='landingviewcartcontent-priceindication'>Shipping price</p>
                                       <p className='landingviewcartcontent-priceindication'>Total price </p>
                                       </Col>
                                       <Col className='landingviewcartcontent-pricescontrolcontainer'>
                                       <p className='landingviewcartcontent-price'>&#8369;{data.macset.macsetprice}</p>
                                       <p className='landingviewcartcontent-price'>&#8369;{data.shippingprice}</p>
                                       <p className='landingviewcartcontent-price'>&#8369;{Number(data.macset.macsetprice) + Number(data.shippingprice)}</p>
                                       </Col>
                                     </Col>
                                     <Col>      
                                        <Col className='landingviewcartcontentmacsetdislikebuttoncontainer'>
                                          <button className='landingviewcartcontentmacsetsavebutton'
                                                   onClick={(e)=> myFavoriteMacSet(e, idx, data)}>
                                             favorites
                                          </button>
                                        </Col>
                                     </Col>
                                  </div>
                                 )
                               }
                              </>
                      })
                      }
                  </div>

                </div>

              </div>

              <div id='landingview-checkoutbuttoncontainer'
                        style={{display: cartItemCheckOutBtn}}>
                     <Link id='landingview-checkoutbutton'
                        onClick={()=> checkOut()}
                        to='/checkoutpage'
                        state={checkOutItemsData}>
                       Checkout
                     </Link>
              </div>

             </div>

            <img src='../images/statistic.png'
                 alt='MAC-SHOPPINGCART-IMAGE'
                 id='landingpage-shoppingcartimage'  
                 onClick={(e)=> toggleCart(e)}/>

          </div>

          <div id='langingview-scrollbuttonspositioningcontainer'>
           <div id='landingview-upbutton'>
             1
           </div>
           <div id='landingview-downbutton'>
             2
           </div>
          </div>

        </div>

        <div id='langingview-userdashboarddisplaycontainer'
             style={{top: userDashboardSettingsContainer}}>
             <Col id='langingview-userdashboarddisplaycontentcontainer'>
                <UserDashboard />
             </Col>
             <Col id='langingview-userdashboarddisplayclosebuttoncontainer'>
                <p id='langingview-userdashboarddisplayclosebutton'
                   onClick={()=> handleUserDashboardSettingsContainer()}>
                      close
                </p>
             </Col>
        </div>

      </Col>

    </Container>
  )

}

function Header(props) {

  const handleUserDashboardSettingsContainer = () => {
    props.doSomethingUserDashboardSettingsContainer((position)=>  '0%')
  }

    return(
        <Col id='headercontainer'>

          <Col lg={11}>
           <h1 id='header'>mac</h1>
          </Col>

          <Col id='headersettingscontainer'>
             <div id='headersettingslogocontainer'>
                  <img src='./images/settingslogo.png'
                       id='settingslogo'
                       onClick={()=> handleUserDashboardSettingsContainer()}/>
                       
             </div>
          </Col>

        </Col>
    )
}