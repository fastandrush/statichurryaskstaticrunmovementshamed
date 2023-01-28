import React, { useState,
                useEffect, 
                useCallback   
               } from 'react';

import { Routes, 
         Route, 
         useLocation
       } from 'react-router-dom';

import LandingView from './components/landingview-component';
import MainAdminView from './components/mainadminview-component';
import FutureMacHolder from './components/futuremacholder-component';
import Payment from './components/payment-component';
import VerifyPhoneNumber from './components/verifyphonenumber-component';
import Macministrator from './components/macministrator-component';
import Login from './components/login-component';
import CheckOutPage from './components/checkout-component';
import CheckoutReturnPage from './components/checkoutreturnpage-component.js';

import axios from 'axios';

import './styles/mac.scss';

function MAC() {

axios.defaults.baseURL = 'https://statichurryaskstaticrunmovementshamed-api.onrender.com/';

const location = useLocation();
const [, updateState] = useState();
const forceUpdate = useCallback(() => updateState({}), []);

// mac id 
const [userId, doSomethindWithUserId] = useState(''); 
const [currentlyLoginUser, getIfCurrentlyLoginUser] = useState('');

// credits 
const [macCredits, getMacCredits] = useState(0.00);

// main news state / is idle status 
const [mainNews, doSomethingWithTheMainNews] = useState([]); 
const [restOfTheMainNewseStatusLoadingUpdate, doSomethingWithTheRestOfTheMainNewsStatusLoadingUpdate] = useState(false);

// mac news state / is idle status 
const [macNews, doSomethingWithTheMacNews] = useState([
                                                {
                                                topic: 'Topic', 
                                                image: '../images-leaves-image.png',
                                                goal: 'Goal',
                                                author: 'Author',
                                                date: 'Date',
                                                ytlinkstatus: 'false',
                                                ytlink: 'false',
                                                sequence: 1
                                                }]); 

const [macNewsIsIdleStatus, doSomethingMacNewsIsIdleStatus] = useState(false);
   
// ph news state / is idle status 
const [popularPosts, doSomethingPopularPosts] = useState(['1', '2', '3']);
const [popularPostsIsIdleStatus, doSomethingPopularPostsIsIdleStatus] = useState(false);

const [latestPosts, doSomethingLatestPosts] = useState(['Content']) 
const [latestPostsIsIdleStatus, doSomethingLatestPostsIsIdleStatus] = useState(false);

const [macSetItems, doSomethingWithMacSetItems] = useState(['forcolors']);

const [itemsGoods, getItemsGoods] = useState([]);
const [itemsItemsEquips, getItemsItemsEquips] = useState([]);
 
// addresses scope 
const [addressesScope, doSomethingAddressesScope] = useState([]);
const [addressScopePopulationCount, doSomethingAddressScopePopulationCount] = useState([])

// videos state / is idle staus 
const [videosOf, doSomethingWithVideos] = useState([]);
const [videosLoadingStatusUpdate, doSomeThingWithVideosLoadingStatusUpdate] = useState(false);

// click from MAC set modal 
const [productInfoClickFromMacSetModal, toggleProductInfoClickFromMacSetModal] = useState(false); 

/// product order item specification / checkout | mac set modal
const [itemspecification, getItemSpecification] = useState([]);


/// selected item specification 
const [selectedproduct, getselectedproduct] = useState('');
const [productprice, getprodutprice] = useState(''); 

const [selectedSpecificItem, getSelectedSpecificItem] = useState([]);
const [selectedColor, getSelectedColor] = useState([]);
const [selectedSizes, getSelectedSizes] = useState([]);
const [selectedSizesSpecification, getSelectedSizesSpecification] = useState([]);
const [selectedProductOriginator, getSelectedProductOriginator] = useState(); 

const [capturePaymentIDLEstatus, getCapturePaymentIDLEstatus] = useState(true);

// cart items 
const [cartItems, addCartItems] = useState([{
   idx: 0,
   macset: {
      macsetname: 'forpositioningdata/controllingdisplayblockprop',
      macsetprice: '0',
      macsetitemdisplayimage: '',
      macsetitemlocation: 'MINDANAO',
      macsetweight: 0,
      originator: 'Invoker',
      vat: 0,
      isaset: 'false',
      ismacset: "false"
    },
    productname: null,
    productprice: null,
    shippingprice: 0,
    originator: null,
    itemlocation: null,
    weight: 0,
    vat:null,
    productdp: null, 
    productimages: null,
    selectedsizes: {
      selectedsizes: null,
      selectedsizesspecification: null
    },
    selectedcolor: null
   }]);

// items saved on cart / favorite 
const [favoriteItemsOnCart, getFavoriteItemsOnCart] = useState([{
                                                          idx: 0,
                                                          macset: {
                                                            macsetname: 'forpositioningdata/controllingdisplayblockprop',
                                                            macsetprice: '0',
                                                            macsetitemdisplayimage: '',
                                                            macsetitemlocation: 'MINDANAO',
                                                            macsetweight: 0,
                                                            originator: 'Invoker',
                                                            vat: 0,
                                                            isaset: 'false',
                                                            isamacset: 'false'
                                                          }, 
                                                         productname: selectedproduct,
                                                         productdp: '',
                                                         productprice: 0,
                                                         shippingprice: 0,
                                                         productimages: selectedSpecificItem,
                                                         selectedsizes: {
                                                             selectedsizes: selectedSizes,
                                                             selectedsizesspecification: selectedSizesSpecification
                                                         },
                                                        selectedcolor: selectedColor
                                                      }])

const [cartTotalPrice, getCartTotalPrice] = useState(0);   

const [totalFavCartItemPrice, getTotalFavCartItemPrice] = useState([]);
const [parsedTotalFavCartItemPrice, getParsedTotalFavCartItemPrice]  = useState(0);

const __xs = window.matchMedia('(max-width: 600px)');
const __lg = window.matchMedia('(min-width: 1200px)');
const __md = window.matchMedia('(max-width: 992px)');

useEffect(() => {

   const userCookie = document.cookie;
   const parsedUser = userCookie.slice(9, 1000);

    if ( location.pathname === '/' ) {
      
     getUser(parsedUser);

     // setInterval(updateMacUI, 3000);

     __lg.addListener(_lgBreakpoint);
     _lgBreakpoint(__lg);
     __xs.addListener(_xsBreakpoint);
     _xsBreakpoint(__xs);
     __md.addListener(_mdBreakpoint);
     _mdBreakpoint(__md);

    } else {

      __lg.addListener(_lgBreakpoint);
      _lgBreakpoint(__lg);
      __xs.addListener(_xsBreakpoint);
      _xsBreakpoint(__xs);
      __md.addListener(_mdBreakpoint);
      _mdBreakpoint(__md);

    }

}, [])
  
function _lgBreakpoint(__lg) {
    if (__lg.matches) {
      
    }
}

function _xsBreakpoint(__xs) {
      if (__xs.matches) {
       
      }
}

function _mdBreakpoint(__md) {
      if (__md.matches) {
       
      }
}

function getLocationOnScroll() {
   //store cookie deny from entering page redirect somewhere
   //banned account / show propmt message
   //apply on scroll if var is undefine/show warning to delete or ban account
}

async function getUser(parsedUser) {

  let userlocation = undefined;
  let userdata = undefined;
 
  // qeurying user collection to get a favorite items on cart
    
  const url = '/futuremacholder/getcurrentlyloginmacuser/';
  axios.post(url, { 
    user: parsedUser
  })

   .then( async (response)=> {
   
     const favitem = response.data.itemsoncart;
  
     for ( let exec = 0; exec < favitem.length; exec++ ) {
     
      let favItem = {
         idx: exec + 1,
         macset: {
           macsetname: favitem[exec].macset.macsetname,
           macsetprice: favitem[exec].macset.macsetprice,
           macsetitemdisplayimage:  favitem[exec].macset.macsetitemdisplayimage,
           macsetitemlocation: favitem[exec].macset.macsetitemlocation,
           macsetweight: favitem[exec].macset.macsetweight,
           originator: favitem[exec].originator,
           isamacset: favitem[exec].macset.isamacset,
           vat: favitem[exec].vat,
         },
         productname: favitem[exec].productname,
         productprice: favitem[exec].productprice,
         shippingprice: 0,
         productimages: favitem[exec].productimages,
         selectedsizes: {
           selectedsizes: favitem[exec].selectedSizes,
           selectedsizesspecification: favitem[exec].selectedSizes
         },
         selectedcolor: favitem[exec].selectedColor
      }

      favoriteItemsOnCart.push(favItem)
     
     }

    getIfCurrentlyLoginUser((user)=> user = response.data)
    getMacCredits((credits)=> credits = Number(response.data.maccredits.based) + Number(response.data.maccredits.investment))
    await getMacSetItems(response.data.userlocation)

   })

}

/// getting MAC set items, fetchind datas are async, first getting the user and their favorite items before
// loading the fetch news or post's assuming user's will click directly on cart on page load
async function getMacSetItems(userlocation) {
  
   await axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/macsetitem/get')

       .then( async (response)=> {

          // function setter getting MAC set items to be display in the UI using map JS built in function
          doSomethingWithMacSetItems((macsetitem)=> macsetitem = response.data)

          // getting each of the user's province, city and baranggay
          // await getAddressesScope()
          // calculating total MAC set weight depending on originator's or weight on one class or seller
          calculateOverAllMacSetWeight(response.data, userlocation)    
 
  })

}

const calculateOverAllMacSetWeight = (data, userlocation) => { 

   // item originators array, used to store data that is, originator, item location, weight and user location
   // for getting shipping rate
   const itemOriginators = [];
   // shipping details array, this is used for storing data that is undefined that is originator, item
   // location, weight and user location and defined data will be removed in the array replacing 
   // appended data that adding weight according to who own or who sells the specific item getting the 
   // equevalent shipping rate
   const shippingDetails = [];

   /// used favoritate items on cart, a condition will be used if the item is MAC set use macset.originator
   // data as its originator and if false use only originator to be push in itemsOriginator
   for ( let i = 0; i < favoriteItemsOnCart.length; i++) {
     
     /// missing isamacsetcondition to deter favoriteItemsOnCart[i].macset.originator or 
     // favoriteItemsOnCart[i].originator will be used
     const data = {
         originator: favoriteItemsOnCart[i].macset.originator, 
         userlocation: userlocation,
         itemlocation: favoriteItemsOnCart[i].macset.macsetitemlocation,
         weight: Number(favoriteItemsOnCart[i].macset.macsetweight)
     }
   
     itemOriginators.push(data)

   }
  
  //// shippingDetails array, used to calculator weight, find is used on itemsOriginator 
  // if data is undefined otherwise use index to replace data with new calculated weight based on 
  // originator or who owns or sell's the item
  for ( let i = 0; i < itemOriginators.length; i++) {
  
     const _itemData =  shippingDetails.find((data)=> data.originator === itemOriginators[i].originator)
     const _query = (data) => data.originator === itemOriginators[i].originator;
     const _findIndex = shippingDetails.findIndex(_query)
  
     // the item owned by the subject is undefined, push data to shippingDetails array to
     // calculate weight if the subject got more than one product in favorite item's on cart
     // this method was used for concise shipping rate not to conflict separate shipping rate for each 
     // item but to stack same owner of item, calculate the weight and get shipping rate 
     if ( _itemData === undefined ) {    

          const data = {
                   idx: i,
                   originator: itemOriginators[i].originator,
                   userlocation: userlocation,
                   itemlocation: itemOriginators[i].itemlocation,
                   weight: itemOriginators[i].weight
          }

          shippingDetails.push(data)

    }

    // data is defined, two favorite items on cart owned by single seller, add weight to get shipping rate
    if ( _itemData !== undefined ) {
     
           // data to be filter
           const data = {
                     idx: 1,
                     originator: itemOriginators[i].originator,
                     userlocation: userlocation,
                     itemlocation: itemOriginators[i].itemlocation,
                     weight: Number(_itemData.weight) + Number(itemOriginators[i].weight)
           }
        
           // remove data
           shippingDetails.splice(_findIndex, 1)
           // push filtered data
           shippingDetails.push(data)

     }
 
  }

  // get shipping rate function, shippingDetails is passed
  getShippingRate(shippingDetails)
 
}

const getShippingRate = async (shippingDetails) => {
   
 let parsedFavoriteItems = undefined;
 let shippingrate = 0;
 let _itemData = undefined;

 // using shippingDetails array length to run query depending on how many item in the cart 
 // save as favorite items, ## note this function flow will be used on calculating shipping rate again
 // adding items on cart 
 // assumming that there will be more than one favorite item save on cart, UI
 // is used instead of backend expecting that calculating favorites item will happen on page load including
 // fecthing it from the database, decided to change the fecth data stored on favoriteItemsCartItems
 // replacing its default weight and filling the shipping price data divided by the originator or owner
 // length using the shippingDetails algorithym diffirence is that id was used to filter data and finding the
 // index in the favoriteCartItems will be used on splice apprending the new data on each page refresh
 // or load on /  
 for ( let exec = 0 ; exec <  shippingDetails.length; exec++ ) {
 
   await axios.post('https://statichurryaskstaticrunmovementshamed-api.onrender.com/shipping/jandt/calculateshippingprice', {
                                                                   idx: shippingDetails[exec].idx,
                                                                   weight: shippingDetails[exec].weight,
                                                                   to: shippingDetails[exec].userlocation,
                                                                   from: shippingDetails[exec].itemlocation
                                                                 })

       .then( (response)=> {
     
          console.log(response.data)


          /// variable storing the actual specific item finding it on favoriteItemsOnCart
          // using response.data.idx from the request
          _itemData = favoriteItemsOnCart.find((data)=> data.idx === response.data.idx)
         
          /// using filter function the extract the same originator or item owner/seller in the
          // favoriteItemsOnCartArray
          parsedFavoriteItems =  favoriteItemsOnCart.filter((data)=> data.macset.originator === shippingDetails[exec].originator)
         
          /// filling shippingrate variable with the default shipping price adding it to the 
          /// equevalent shipping rate fetch from database @ shipping.data.shippingrate + _itemData.shipp-
          // ing price
          shippingrate = Number(_itemData.shippingprice) + Number(response.data.shippingrate)
         
          /// filtering item single subject or item owders, used parsedFavoriteItems array since
          // this is already the array containing one originator yet many item's in the cart
          for ( let item = 0; item < parsedFavoriteItems.length; item++ ) { 
     
             // finding the specific data using idx that is present in the filtered parsedFavoriteItems 
             // array coming from the fectched data, using again findIndex and splice then push 
             // to change data's that is shippingprice and total shipping rate in the save favorite
             // items on cart
             const _filterData  = favoriteItemsOnCart.find((data)=> data.idx ===  parsedFavoriteItems[item].idx)
             const _query = (data) => data.idx == parsedFavoriteItems[item].idx;
             const _findIndex = favoriteItemsOnCart.findIndex(_query);
             const parsedShippingRate =  shippingrate / parsedFavoriteItems.length
           
             // filter data, shipping price is divided according to how many items the subject or
             // owner got that already equevalent shipping rate based on weight coming from database
             let _filter = {
                  idx: parsedFavoriteItems[item].idx,
                  macset: {
                    macsetname: parsedFavoriteItems[item].macset.macsetname,
                    macsetprice: parsedFavoriteItems[item].macset.macsetprice,
                    macsetitemdisplayimage: parsedFavoriteItems[item].macset.macsetitemdisplayimage,
                    macsetitemlocation: parsedFavoriteItems[item].macset.macsetitemlocation,
                    macsetweight: parsedFavoriteItems[item].macset.macsetweight,
                    vat: parsedFavoriteItems[item].macset.vat,
                    originator: parsedFavoriteItems[item].macset.originator,
                    isamacset: parsedFavoriteItems[item].macset.isamacset
                 }, 
                 productname: parsedFavoriteItems[item].productname,
                 productprice:  parsedFavoriteItems[item].productprice,
                 shippingprice: parsedShippingRate,
                 productimages: parsedFavoriteItems[item].productimages,
                 selectedsizes: {
                   selectedsizes: parsedFavoriteItems[item].selectedsizes.selectedsizes,
                   selectedsizesspecification: parsedFavoriteItems[item].selectedsizes.selectedsizesspecification
                 },
                 selectedcolor: parsedFavoriteItems[item].selectedcolor
             }
             favoriteItemsOnCart.splice(_findIndex, 1)
             favoriteItemsOnCart.push(_filter)
               
            }

        })
   }

  calculateCartTotalPrice()
 
}

const calculateCartTotalPrice = () => {
  const pricesData = [];
  const initialValue = 0;
  
  if ( cartItems.length === 1 && favoriteItemsOnCart.length > 0 ) {

      for ( let test = 0 ; test < favoriteItemsOnCart.length; test++) {
         if ( test === 0 ) {
          const removeCurrencySign = favoriteItemsOnCart[test].macset.macsetprice
          const stringifyRemoveCurrencySign = removeCurrencySign.toString()
          const parseRemoveCurrencySign = stringifyRemoveCurrencySign.slice(0,1000)
          pricesData.push( parseRemoveCurrencySign) 
         }
         if ( test !== 0 ) {
            const removeCurrencySign = favoriteItemsOnCart[test].macset.macsetprice
            const stringifyRemoveCurrencySign = removeCurrencySign.toString()
            const parseRemoveCurrencySign = stringifyRemoveCurrencySign.slice(0,1000)
            pricesData.push( parseRemoveCurrencySign) 
         }
         
      }
     
     const totalPrice = pricesData.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue)
     getCartTotalPrice((cartTotal)=> cartTotal = totalPrice)
     addShippingToCartTotalPrice()

     return

  }

  if ( cartItems.length > 0 && favoriteItemsOnCart.length === 1 ) {
   return
  }
  if ( cartItems.length > 0 && favoriteItemsOnCart.length > 0 ) {
   return
  }

}

async function addShippingToCartTotalPrice() {
    const totalShippinghPrice = favoriteItemsOnCart.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.shippingprice), 0)
    getCartTotalPrice((cartTotal)=> cartTotal = Number(cartTotal) + Number(totalShippinghPrice)) 
    await getMacContent()   
}

function getMacContent(route) {
   axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/maccontent/maccontent/maccontent')
 
        .then( async (response)=> {
             console.log(response.data)
             doSomethingWithTheMacNews((data)=> data = response.data)
             doSomethingMacNewsIsIdleStatus((status)=> status = true)
           await getPopularPosts()
         })
} 

function getPopularPosts() {
   axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/maccontent/popularposts/popularposts')
       .then( async (response)=> {
          console.log(response.data)
          doSomethingPopularPosts((data)=> data = response.data)
          doSomethingPopularPostsIsIdleStatus((isIdle)=> isIdle = true)
          await getItemsAllSort()
       })
}

function getLatestPosts() {
    axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/maccontent/maccontent/maccontent')
      .then( async (response)=> {
          console.log(response.data)
          doSomethingLatestPosts((data)=> data = response.data)
          doSomethingLatestPostsIsIdleStatus((status)=> status = true)
          await getItemsAllSort()
       })

}

function getItemsAllSort() {
  axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/getitems/sortall')
    .then((response)=> {
       console.log(response.data)
       const data = response.data
       const goods = data.filter((data)=> {return data.producttype === 'Goods'})
       getItemsGoods((data)=> data = goods)
    })
}

async function getAddressesScope() {
  await axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/population/spot')
     .then((response)=> {
       console.log(response.data)
       addressesScope.push(response.data)
       console.log(addressesScope)
     })
}

function getMacNewsSequence1() {
   axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/news/whatupmacnews/getmacnews1')
      .then((response)=> {
          console.log(response.data);
          getRestOfTheMacNews()
       })
}

function getRestOfTheMacNews() {
   axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/news/whatupmainnews/whatsupallrestofthemacnews')
      .then((response)=> {
         console.log(response.data);
         getPhNews();
       })
}

function getPhNews() {
     axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/news/whatsupphnews/allofthephnews')
     .then((response)=> {
       console.log(response.data)
     })
}

 function getVideos() {
    axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/news/whatsupphnews/allvideos')
     .then((response)=> {
        console.log(response.data)
        doSomethingWithVideos((videos)=> videos = response.data)
        doSomeThingWithVideosLoadingStatusUpdate((isIdle)=> isIdle = true)
        getAddressesScope();
     })
}

async function getId() {
   await axios.get('https://statichurryaskstaticrunmovementshamed-api.onrender.com/futuremacholder/checkcount')
  .then((response)=> {
     console.log(response.data)
     doSomethindWithUserId((id)=> id = response.data.length)
  })
}

 // force update 
 function updateMacUI() {
   forceUpdate();
 }
 
  return (
     <>
       <Routes>
         
         <Route path='/'
                element={<LandingView mainNews={mainNews}

                                      popularPosts={popularPosts}
                                      popularPostsIsIdleStatus={popularPostsIsIdleStatus}

                                      macSetItems={macSetItems}
                                      
                                      latestPosts={latestPosts}
                                      latestPostsIsIdleStatus={latestPostsIsIdleStatus}

                                      macNews={macNews}
                                      macNewsIsIdleStatus={macNewsIsIdleStatus}
  
                                      videosOf={videosOf}
                                      videosLoadingStatusUpdate={videosLoadingStatusUpdate}

                                      addressesScope={addressesScope}
                                      addressScopePopulationCount={addressScopePopulationCount}

                                      productInfoClickFromMacSetModal={productInfoClickFromMacSetModal}
                                      toggleProductInfoClickFromMacSetModal={toggleProductInfoClickFromMacSetModal}

                                      itemspecification={itemspecification}

                                      cartItems={cartItems}
                                      addCartItems={addCartItems}
                                      cartTotalPrice={cartTotalPrice}
                                      getCartTotalPrice={getCartTotalPrice}

                                      favoriteItemsOnCart={favoriteItemsOnCart}

                                      selectedSpecificItem={selectedSpecificItem}
                                      getSelectedSpecificItem={getSelectedSpecificItem}

                                      selectedColor={selectedColor}
                                      getSelectedColor={getSelectedColor}
           
                                      selectedSizes={selectedSizes}
                                      getSelectedSizes={getSelectedSizes}

                                      selectedSizesSpecification={selectedSizesSpecification}
                                      getSelectedSizesSpecification={getSelectedSizesSpecification}

                                      selectedproduct={selectedproduct}
                                      getselectedproduct={getselectedproduct}
                                      
                                      productprice={productprice} 
                                      getprodutprice={getprodutprice}
                                      
                                      currentlyLoginUser={currentlyLoginUser}

                                      cartTotalPrice={cartTotalPrice}
 
                                      itemsGoods={itemsGoods}

                                      totalFavCartItemPrice={totalFavCartItemPrice}
                                      getParsedTotalFavCartItemPrice={getParsedTotalFavCartItemPrice}
                                      parsedTotalFavCartItemPrice={parsedTotalFavCartItemPrice}
                                      
                                      calculateOverAllMacSetWeight={calculateOverAllMacSetWeight}
                                      getCartTotalPrice={getCartTotalPrice}

                                      macCredits={macCredits}
                                      />}
                                      exact>

         </Route>

         <Route path='/mainadmin'
                element={<MainAdminView />}
                exact>

         </Route>

         <Route path='/softwareasaservice/welcome'
                element={<FutureMacHolder userId={userId}/>}
                exact>
            
         </Route>

         <Route path='/payment'
                 element={<Payment />}
                 exact>
         </Route>

         <Route path='/administrator'
                element={<Macministrator />}
                exact>
         </Route>
           
         <Route path='/login'
                element={<Login />}
                exact>
         </Route>

         <Route path='/checkoutpage'
                element={<CheckOutPage currentlyLoginUser={currentlyLoginUser}
                                       capturePaymentIDLEstatus={capturePaymentIDLEstatus}
                                       getCapturePaymentIDLEstatus={getCapturePaymentIDLEstatus}/>}
                exact>
         </Route>

         <Route path='/checkoutreturnpage'
                element={<CheckoutReturnPage currentlyLoginUser={currentlyLoginUser}
                                             capturePaymentIDLEstatus={capturePaymentIDLEstatus}
                                             getCapturePaymentIDLEstatus={getCapturePaymentIDLEstatus}/>}
                exact>

         </Route>


       </Routes>
     </>

  );
  
}

export default MAC;
