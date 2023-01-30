import React, {
         useState,
         useEffect,
         useRef,
         useCallback
       } from 'react';

      
import { Col, 
         Row,
         Spinner } from 'react-bootstrap';

import { Swiper, 
         SwiperSlide } from 'swiper/react';

import StoreMacSetItems from './storemacsetitems-component';

import axios from 'axios';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import 'swiper/components/navigation/navigation.min.css';

import '../styles/macsetitems.scss';

import SwiperCore, {
  Navigation,Thumbs
} from 'swiper';

SwiperCore.use([Navigation,Thumbs]);

export default  function  MacSetItems(props) {

  const [backEndPathnameURI, changeBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/')
  const [developmentBackEndPathnameURI, changeDevelopmentBackEndPathnameURI] = useState('http://localhost:8000/');
  const [productionBackEndPathnameURI, changeProductionBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/');

  axios.defaults.baseURL = backEndPathnameURI;

  const macSetItemsBackGroudnColors = ['gray', 'green', 'yellow', 'pink', 'chocolate', 'aqua', 'lavender', 'brown', 'magenta', 'white', '#5F9EA0', '#BDB76B', '#B8860B' ];

  const randomBackgroundColor = Math.floor(Math.random() * 14);
  
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [isMobile, notMobile] = useState(false); 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [specificMacProductObj, getSpecificMacProductObj] = useState({
                                                              productname: '',
                                                              productprice: '',
                                                              productdescriptopn: '',
                                                              mainselectionimage: [],
                                                              selectionimage: [],
                                                              availablesizes: [],
                                                              availablecolors: [],
                                                              stock: '',
                                                              shippingoptions: []
                                                            });

  const swiper = useRef();
  const styles = useRef();
  const parse = useRef();

  const [specificMacProductObjClicked, doSomethingWithSpecificMacProductObjClicked] = useState(false);                                                      
  const [specificMacProductObjIdleStatus, doSomethingWithSpecificMacProductObjIdleStatus] = useState(false);

  const [specificproduct, getSpecificProduct] = useState({  
                                                    productId: null,
                                                    productStatisticsId: null,
                                                    productname: null,
                                                    productprice: null,
                                                    originator: null,
                                                    capital: null,
                                                    s_r_p: null,
                                                    productdescription: null,
                                                    productextrainformationlocation: {
                                                       province: null,
                                                       city: null,
                                                       baranggay: null
                                                    },
                                                    productextrainformationdetails: ['dummydata', 'dummydata'],
                                                    ytlink: null,
                                                    productmainselectionimages: ['dummydata', 'dummydata'],
                                                    productselectionimages: ['dummydata'],
                                                    productavailablecolors: ['dummydata'],  
                                                    productavailablesizes: ['dummydata'],
                                                    stock: null,
                                                    weight: null,
                                                    shippingoptions: ['dummydata'],
                                                    bought: false,
                                                    statistics: {
                                                      sunday: null,
                                                      monday: null,
                                                      tuesday: null,
                                                      wednesday: null,
                                                      thursday: null,
                                                      friday: null,
                                                      saturday: null,
                                                    },
                                                    macitem: {
                                                      set: null,
                                                      macitemtype: null,
                                                      ismacitem: false
                                                    },
                                                    isaset: {
                                                      isaset: true,
                                                      setcount: 0
                                                    },
                                                    producttype: null,
                                                    dateproductpublished: null,
                                                    isboughtfrom: ['dummydata'],
                                                    isnowarecord: false
                                                });

  const [availableColorsData, doSomethingWithAvailableColorData] = useState([]); 
  const [availableSizesData, doSomethingWithAvailableSizesData] = useState([]); 

  const [specificProductLoadingStatus, doSomethingWithSpecificProductLoadingStatus] = useState(false);

  const [leftIndication, topIndication] = useState('left'); 

  const [itemOriginators, doSomethingWithItemOriginators] = useState([]);
  const [shippingDetails, doSomethingWithShippingDetails] = useState([]);
  const [parsedFavoriteItems, doSomethingWithParsedFavoriteItems] = useState(undefined);
  const [shippingrate, doSomethingShippingrate] = useState(0);
  const [_itemData, doSomethingShippingrateItemData] = useState(undefined);
  const [pricesData, doSomethingShippingratePricesData] = useState([]);
  const [initialValue, doSomethingShippingrateInitialValue] = useState(0);

  const [storeAndItemModalLoadingIndicator, doSomethingWithStoreAndItemModalLoadingIndicator] = useState(false);

  const __lg = window.matchMedia('(min-width: 1200px)');
  const __md = window.matchMedia('(max-width: 992px)');
  const __xs = window.matchMedia('(max-width: 600px)');

  useEffect(()=> {

      __lg.addListener(_lgBreakpoint);
      _lgBreakpoint(__lg);
      __xs.addListener(_xsBreakpoint);
      _xsBreakpoint(__xs);
      __md.addListener(_mdBreakpoint);
      _mdBreakpoint(__md);

      const macSetItemsContainer = document.getElementsByClassName('macsetitemscontainer'); 
      const macSetItemIsolatedContainer2 = document.getElementsByClassName('macsetitem2'); 

      {/*
      const macSetItemsContainer2TopPositioning = '13%';
      for ( let i = 0; i < macSetItemsContainer.length; i++ ) {
        macSetItemsContainer[i].style.backgroundColor = macSetItemsBackGroudnColors[randomBackgroundColor]; 
      }
      */}
      
  },[])

  function varyColor() {
    const macSetItemsContainer = document.getElementsByClassName('macsetitemscontainer');  
  }

  function _lgBreakpoint(__lg) {
    if (__lg.matches) {
        lgDevices();
    }
  }

  function lgDevices() {
    //`  notMobile(false);
      topIndication('left');
  }

  function _xsBreakpoint(__xs) {
      if (__xs.matches) {
          xsDevices();
      }
  }

  function  mdDevices() {
    //  swiperThumbsHandle();
  }

  function _mdBreakpoint(__md) {
      if (__md.matches) {
          mdDevices();
      }
  }

  function xsDevices() {
     // notMobile(true);
     // swiperThumbsHandle();
     // topIndication('below');
  }

  const displayMacItemProductDetailContainer = async (e, idx) => {
    await doSomethingWithSpecificProductLoadingStatus((status)=> status = true)
    await doSomethingWithSpecificMacProductObjIdleStatus((status)=> status = false)
    await setTimeout(function(){doSomethingWithSpecificMacProductObjIdleStatus((status)=> status = true)}, 3000)
    const _container = e.target.parentElement.parentElement;
    const _targetcontainer = _container.children[2];
    document.getElementsByClassName('macitemsproductdetailscontainer')[idx].style.transform = 'scale(1,1)';
  }

  const closeMacItemProductDetailContainer = (e, idx) => {
    document.getElementsByClassName('macitemsproductdetailscontainer')[idx].style.transform = 'scale(0,0)';
  }

  
  const showSpecificProduct = async (e, idx, macSetItemidx) => {
  
    const _specificproductcontainer = document.getElementsByClassName('macsetitemspecificproductcontainer');
    const _macsetitemscontainer = document.getElementsByClassName('macitemsproductdetailscontainer-isolationcontainer');
    const _isolateddetailscontainer = document.getElementsByClassName('macitemsproductdetailscontainer-isolationcontainer');

    const _targetcontainer = e.target.parentElement;
    const _product = _targetcontainer.children[1];
   
    _specificproductcontainer[macSetItemidx].style.display = 'block';
    _macsetitemscontainer[macSetItemidx].style.display = 'none';
   
    props.toggleProductInfoClickFromMacSetModal((status)=> status = true)
    doSomethingWithSpecificProductLoadingStatus((status)=> status = true)

    doSomethingWithSpecificMacProductObjClicked((specificproductobjclicked)=> specificproductobjclicked = true)

    await axios.post('https://statichurryaskstaticrunmovementshamed-api.onrender.com/macministrator/showspecificproduct', {
                                                                                productname: _product.innerText
                                                                                 })
     .then((response)=> {

      console.log(response)
      
      getSpecificProduct((data)=> data = response.data)
      
      const availableColor = response.data.productavailablecolors[0].split(",")
      const availableSizes = response.data.productavailablesizes[0].split(",")
     
      doSomethingWithAvailableColorData((ac)=> ac = availableColor)
      doSomethingWithAvailableSizesData((as)=> as = availableSizes)
      
      doSomethingWithSpecificProductLoadingStatus((status)=> status = false)

     })
       
  }

  const closeSpecificProduct = (e, idx) => {
    const _specificproductcontainer = document.getElementsByClassName('macsetitemspecificproductcontainer');
    const _macsetitemscontainer = document.getElementsByClassName('macitemsproductdetailscontainer-isolationcontainer');
   
    props.toggleProductInfoClickFromMacSetModal((status)=> status = false)

    _specificproductcontainer[idx].style.display = 'none';
    _macsetitemscontainer[idx].style.display = 'block';
    
    doSomethingWithSpecificMacProductObjClicked((specificproductobjclicked)=> specificproductobjclicked = false)
    props.toggleProductInfoClickFromMacSetModal((clickedFromMSModal)=> clickedFromMSModal = false)

   // doSomethingWithSpecificMacProductObjClicked(()=> )
   //  doSomethingWithSpecificMacProductObjIdleStatus(()=> )
  }

  const tryMeAddingToCartMacSetItem = (e, idx, data) => {
    
      let itemSpecs = {
          idx: props.cartItems.length,
          macset: {
            macsetname: data.macsetitemproductname,
            macsetprice: data.macsetitemproductprice,
            macsetitemdisplayimage: data.macsetitemdisplayimage,
            macsetitemlocation: data.macsetitemlocation,
            macsetweight: data.macsetweight,
            originator: data.originator,
            isamacset: 'true',
            vat: data.vat,
          },
          productname: props.selectedproduct,
          productprice: props.productprice,
          productdp: data.macsetitemdisplayimage,
          shippingprice: 0,
          productimages: props.selectedSpecificItem,
          selectedsizes: {
            selectedsizes: props.selectedSizes,
            selectedsizesspecification: props.selectedSizesSpecification
          },
          selectedcolor: props.selectedColor
      }

    props.cartItems.push(itemSpecs)
  

    props.setDefaultCartContainerTransitionProp((transition)=> transition = '1s ease')
    document.getElementsByClassName('macitemsproductdetailscontainer')[idx].style.transform = 'scale(0,0)';
    props.toggleCartContainer((cont)=> cont = '1' )
    props.doSomethingWithCartContainerOffSetTop((offset)=> offset = '-600%')
    props.doSomethingWithCartItemOffSetTop((offset)=> offset = '3%')
    props.doSomethingWithCartInfoContainerOffSetTop((offset)=> offset = '0%')
 
    props.calculateOverAllMacSetWeight(itemSpecs, 'MINDANAO')

    //calculateWeight()

    calculateOverAllMacSetWeight(data, 'MINDANAO', idx)

  }


{/*
function calculateWeight() {


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
   for ( let i = 0; i < props.cartItems.length; i++) {
     
     /// missing isamacsetcondition to deter favoriteItemsOnCart[i].macset.originator or 
     // favoriteItemsOnCart[i].originator will be used

     const data = {
         originator: props.cartItems[i].macset.originator, 
         userlocation: 'MINDANAO',
         itemlocation: props.cartItems[i].macset.macsetitemlocation,
         weight: Number(props.cartItems[i].macset.macsetweight)
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
                  userlocation: 'MINDANAO',
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
            userlocation: 'MINDANAO',
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

async function getShippingRate(shippingDetails) {

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
 
  await axios.post('http://localhost:4000/shipping/jandt/calculateshippingprice', {
                                                                 idx: shippingDetails[exec].idx,
                                                                 weight: shippingDetails[exec].weight,
                                                                 to: shippingDetails[exec].userlocation,
                                                                 from: shippingDetails[exec].itemlocation
                                                                 })
 
 .then( (response)=> {
      
      console.log(response.data)
      
     /// variable storing the actual specific item finding it on favoriteItemsOnCart
     // using response.data.idx from the request
     _itemData = props.cartItems.find((data)=> data.idx === response.data.idx)
          
     /// using filter function the extract the same originator or item owner/seller in the
     // favoriteItemsOnCartArray
     parsedFavoriteItems = props.cartItems.filter((data)=> data.macset.originator === shippingDetails[exec].originator)
     
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
      
       const _filterData  = props.cartItems.find((data)=> data.idx ===  parsedFavoriteItems[item].idx)
       const _query = (data) => data.idx == parsedFavoriteItems[item].idx;
       const _findIndex = props.cartItems.findIndex(_query);
       const parsedShippingRate =  shippingrate / parsedFavoriteItems.length
            
       // filter data, shipping price is divided according to how many items the subject or
       // owner got that already equevalent shipping rate based on weight coming from database
       let _filter = {
       idx: parsedFavoriteItems[item].idx,
       macset: {
          macsetname: parsedFavoriteItems[item].macset.macsetname,
          macsetprice: parsedFavoriteItems[item].macset.macsetprice,
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

       props.cartItems.splice(_findIndex, 1)
       props.cartItems.push(_filter)
          
     }


     })

  }

  calculateCartTotalPrice()
  

}

const calculateCartTotalPrice = () => {
  //&& props.favoriteItemsOnCart.length > 0
  const pricesData = [];
  const initialValue = 0;

 if ( props.cartItems.length > 0 ) {
    
      for ( let test = 0 ; test < props.cartItems.length; test++) {
         if ( test === 0 ) {
            const removeCurrencySign = props.cartItems[test].macset.macsetprice
            const stringifyRemoveCurrencySign = removeCurrencySign.toString()
            const parseRemoveCurrencySign = stringifyRemoveCurrencySign.slice(0,1000)
            pricesData.push(parseRemoveCurrencySign) 
         }
         if ( test !== 0 ) {
            alert(JSON.stringify(props.cartItems[test]))
            const removeCurrencySign = props.cartItems[test].macset.macsetprice
            const stringifyRemoveCurrencySign = removeCurrencySign.toString()
            const parseRemoveCurrencySign = stringifyRemoveCurrencySign.slice(0,1000)
            pricesData.push(parseRemoveCurrencySign) 
         }
         
        }
     const totalPrice = pricesData.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue)
     props.getCartTotalPrice((cartTotal)=> cartTotal = totalPrice)
     addShippingToCartTotalPrice()

     return

  }

  if ( props.cartItems.length > 0 && props.favoriteItemsOnCart.length === 1 ) {
    return
  }   
  if ( props.cartItems.length > 0 && props.favoriteItemsOnCart.length > 0 ) { 
    return
  }


}

async function addShippingToCartTotalPrice() {
  const totalShippinghPrice =  props.cartItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.shippingprice), 0)
  props.getCartTotalPrice((cartTotal)=> cartTotal = Number(cartTotal) + Number(totalShippinghPrice))  
}
*/}

const calculateOverAllMacSetWeight = async (data, userlocation, idx) => {
  
  const totalPrice = await props.favoriteItemsOnCart.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.macset.macsetprice), 0)
  const totalShippingPrice = await props.favoriteItemsOnCart.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.shippingprice), 0)
  const totalFavItems = []


    for ( let i = 0; i < props.favoriteItemsOnCart.length; i++ ) {
       if ( props.favoriteItemsOnCart[i].macset.isamacset === 'true' ) {
        totalFavItems.push(props.favoriteItemsOnCart[i].macset.macsetprice)
       }
       if ( props.favoriteItemsOnCart[i].macset.isamacset === 'false' ) {
        totalFavItems.push(props.favoriteItemsOnCart[i].productprice)
       }
       
    } 

    for ( let i = 0; i < props.cartItems.length; i++) {

      const dataObj = {
        idx: props.cartItems[i].idx,
        originator: props.cartItems[i].macset.originator, 
        userlocation: userlocation,
        itemlocation: 'MINDANAO',
        weight: Number(data.macsetweight)
      }


      itemOriginators.push(dataObj)

    } 
 
    for ( let i = 0; i < itemOriginators.length; i++) {
 
    const _itemData =  props.cartItems.find((data)=> data.originator === itemOriginators[i].originator)
    const _query = (data) => data.originator === itemOriginators[i].originator;
    const _findIndex = shippingDetails.findIndex(_query)
   

    if ( _itemData === undefined ) {    
       
         const data = {
                  idx: itemOriginators[i].idx,
                  originator: itemOriginators[i].originator,
                  userlocation: userlocation,
                  itemlocation: itemOriginators[i].itemlocation,
                  weight: itemOriginators[i].weight
         }
      
         shippingDetails.push(data)
        
    }

    if ( _itemData !== undefined ) {
          // data to be filter
         
          const data = {
                    idx: itemOriginators[i].idx,
                    originator: itemOriginators[i].originator,
                    userlocation: userlocation,
                    itemlocation: itemOriginators[i].itemlocation,
                    weight: Number(_itemData.weight) + Number(itemOriginators[i].weight)
          }
       
         
          // remove data
          shippingDetails.splice(_findIndex, _findIndex)
          // push filtered data
          shippingDetails.push(data)
      
    }


    }

    let parseTotalFavCartItemPrice = totalFavItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0)
    let parsedTotalFavCartItemPrice =  Number(parseTotalFavCartItemPrice) + Number(totalShippingPrice)

    props.getParsedTotalFavCartItemPrice((totalfavsr)=> totalfavsr = parseTotalFavCartItemPrice + totalShippingPrice)
   
    await getShippingRate(shippingDetails, data, parsedTotalFavCartItemPrice, totalFavItems, idx)
  
}

const getShippingRate = async (shippingDetails, data, parsedTotalFavCartItemPrice, totalFavItems, idx) => {

let parsedFavoriteItems = undefined;
let shippingrate = 0;
let _itemData = undefined;

for ( let exec = 0 ; exec < shippingDetails.length; exec++ ) {

  await axios.post('/shipping/jandt/calculateshippingprice', {
                                                                  idx: shippingDetails[exec].idx,
                                                                  weight: shippingDetails[exec].weight,
                                                                  to: shippingDetails[exec].userlocation,
                                                                  from: shippingDetails[exec].itemlocation
                                                              })

   .then( (response)=> {

         console.log(response.data)
        
         _itemData = props.cartItems.find((data)=> data.idx === response.data.idx)
        
          parsedFavoriteItems =  props.cartItems.filter((data)=> data.macset.originator === shippingDetails[exec].originator)
      
         // shippingrate = Number(_itemData.shippingprice) + Number(response.data.shippingrate)
     
         for ( let item = 0; item < parsedFavoriteItems.length; item++ ) { 

          
            const _filterData  = props.cartItems.find((data)=> data.idx === parsedFavoriteItems[item].idx)
         
            const _query = (data) => data.idx ==  parsedFavoriteItems[item].idx;
            const _findIndex = props.cartItems.findIndex(_query);
          
            const parsedShippingRate =  response.data.shippingrate / parsedFavoriteItems.length
        
            let _filter = {
                  idx: parsedFavoriteItems[item].idx,
                  macset: {
                    macsetname: parsedFavoriteItems[item].macset.macsetname,
                    macsetprice: parsedFavoriteItems[item].macset.macsetprice,
                    macsetitemdisplayimage: parsedFavoriteItems[item].macset.macsetitemdisplayimage,
                    macsetitemlocation: parsedFavoriteItems[item].macset.macsetitemlocation,
                    macsetweight: parsedFavoriteItems[item].macset.macsetweight,
                    originator: parsedFavoriteItems[item].macset.originator,
                    vat: parsedFavoriteItems[item].macset.vat,
                    isamacset: parsedFavoriteItems[item].macset.ismacset
                 }, 
                 productname: parsedFavoriteItems[item].productname,
                 productprice:  parsedFavoriteItems[item].productprice,
                 shippingprice: parsedShippingRate,
                 originator: parsedFavoriteItems[item].originator,
                 itemlocation: parsedFavoriteItems[item].itemlocation,
                 weight: parsedFavoriteItems[item].weight,
                 vat:  parsedFavoriteItems[item].vat,
                 productdp: parsedFavoriteItems[item].productdp, 
                 productimages: parsedFavoriteItems[item].productimages,
                 selectedsizes: {
                   selectedsizes: parsedFavoriteItems[item].selectedsizes.selectedsizes,
                   selectedsizesspecification: parsedFavoriteItems[item].selectedsizes.selectedsizesspecification
                 },
                 selectedcolor: parsedFavoriteItems[item].selectedcolor
            }
            
            props.cartItems.splice(_findIndex, 1)
            props.cartItems.push(_filter)
 
         }


   })


}


calculateCartTotalPrice(data, parsedTotalFavCartItemPrice, totalFavItems, idx)

}

const calculateCartTotalPrice = (data, parsedTotalFavCartItemPrice, totalFavItems, idx) => { 
  addShippingToCartTotalPrice(parsedTotalFavCartItemPrice, totalFavItems, idx)
}

async function addShippingToCartTotalPrice(parsedTotalFavCartItemPrice, totalFavItems, idx) {
 
const totalPrice = await props.cartItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.macset.macsetprice), 0)
const totalShippinghPrice = await props.cartItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.shippingprice), 0)

const addedCartItemPriceAndShippingRateTotal = Number(totalPrice) + Number(totalShippinghPrice)

await props.getCartTotalPrice((cartTotal)=> cartTotal = Number(parsedTotalFavCartItemPrice) + Number(addedCartItemPriceAndShippingRateTotal) ) 

await doSomethingWithItemOriginators((data)=> data = [])
await doSomethingWithShippingDetails((data)=> data = [])
await doSomethingWithParsedFavoriteItems((data)=> data = undefined)
await doSomethingShippingrate((data)=> data = 0)  
await doSomethingShippingrateItemData((data)=> data = undefined)
await doSomethingShippingratePricesData((data)=> data = [])
await doSomethingShippingrateInitialValue((data)=> data = 0)

parsedTotalFavCartItemPrice = 0;
totalFavItems = [];

//document.getElementsByClassName('gooditems-storeanditemmodaldetailscontainer')[idx].style.display = 'none'
//doSomethingWithStoreAndItemModalLoadingIndicator((status)=> status = false)

props.closeCart()


}

async function compromiseShippingRatesOnOriginitors() {

  const array = []

 // alert(JSON.stringify(props.itemsGoods))
  //alert(JSON.stringify(props.favoriteItemsOnCart))
 // alert(JSON.stringify(props.cartItems))
  // alert(JSON.stringify(array))
  for ( let exec = 0; exec < props.favoriteItemsOnCart.length; exec++) {
     array.push(props.favoriteItemsOnCart[exec])
  }
  
  for ( let exec = 0; exec < props.cartItems.length; exec++) {
     array.push(props.cartItems[exec])
  }

//  const filter = array.filter((data)=> data.origi)
  //for ( let exec = 0; exec < array.length; exec++ ) {
  //   if ( array[exec].macset.ismacset === 'true' ) {
  //        
  //   }
  //   if ( array[exec].macset.ismacset === 'true' ) {
  //
  //   }
 // }

}
 
  return (

    <Col id='macsetitems'>
    {
    props.macSetItems.map((data, macSetItemidx)=> {

      return <Col className='macsetitemscontainer'>
                    
              <Col className='macsetitemsisolationcontainer'>
                
                <Col className='macsetitem1' lg={7}>
                   <Col className='macsetitem-headercontainer'>
                          <div className='macsetitem-header'>
                           {data.macmainsetitemtype}
                          </div>
                   </Col>
                   <Col className='macsetitem-contentcontainer'>
                     <h3 className='macsetitems-indicationdefinetion'>{data.macsetitemtype}</h3>
                     <h1 className='macsetitems-indicationdefinetion'>{data.macsetitemproductname}</h1>
                     <h4 className='macsetitems-indicationdefinetion'>{data.macsetitemproductdescription}</h4>
                     <div className='macsetitems-pricecontainer'>
                      <h2 className='macsetitems-indicationdefinetion macsetitems-indicationdefinetionprice'>&#8369;{data.macsetitemproductprice}</h2>
                     </div>
                   </Col>
                </Col>
                <Col className='macsetitem2'>
                      <img src={data.macsetitemdisplayimage}
                           alt='MAC-DEFAULT-DISPLAY-IMAGE'
                           className='macsetitems-displayimage'/>
                </Col>
                </Col>

                <Col className='macsetitemsbuttonscontainer'>
                   <img src='../images/eye-scanner.png'
                        alt='MAC-DEFAULT-EYE-SCANNER-DISPLAY-IMAGE'
                        className='macsetitems-eyescannerdisplayimage'
                        onClick={(e)=> displayMacItemProductDetailContainer(e, macSetItemidx)}/>
                </Col>

                <Col className='macitemsproductdetailscontainer'>

                 {
                  specificMacProductObjIdleStatus ?
                 (
                  <>
                  <Col className='macsetitemspecificproductcontainer'>
                    <StoreMacSetItems specificproduct={specificproduct}
                                      specificMacProductObjIdleStatus={specificMacProductObjIdleStatus}

                                      productInfoClickFromMacSetModal={props.productInfoClickFromMacSetModal}
                                      itemspecification={props.itemspecification}

                                      availableColorsData={availableColorsData}
                                      availableSizesData={availableSizesData}
                                           
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
                  <Col className='macitemsproductdetailscontainer-isolationcontainer'> 
                    <Col className='macitemsproductdetailscontentcontainer'>
                      <Col className='macitemsproductdetailscontent'>
                      {
                      data.items.map((data, idx)=> {
                        return <Row>
                               <Col lg={8} className='macitemsproductdetails-pricecontentcontainer'>
                                 <h1 className='macitemsproductdetails-contentproductprice'>&#8369; <span className='macitemsproductdetails-pricecontentcontainer'>{data.productprice}</span></h1>
                               </Col>
                               <Col className='test'
                                    xs={4}>
                                    <img src={data.productmainselectionimages[0]}
                                         alt='MAC-DEFAULT-DISPLAY-IMAGE'
                                         className='macsetitems-productinthesetdisplayimage'
                                         onClick={(e)=> showSpecificProduct(e, idx, macSetItemidx)}/>
                                    <h4 className='macsetitems-productdetailsinthesetproductname'>{data.productname}</h4>
                              </Col>  
                              </Row>
                      })
                      }
                      </Col>
                    </Col>
                  </Col>
                  </>
                  ) 
                  : 
                  (
                   <Row className='macitemssetandspecificloadingspinnercontainer'>
                     <Spinner className='macitemssetandspecificloadingspinnercontainer1' animation="grow" variant="primary"/>
                     <Spinner className='macitemssetandspecificloadingspinnercontainer2' animation="grow" variant="dark" />
                     <Spinner className='macitemssetandspecificloadingspinnercontainer3' animation="grow" variant="success" /> 
                   </Row>
                  )
                }
                    
                <Col className='macitemsproductdetailsclosebuttoncontainer'>
                  <Col>
                    <p className='macitemsproductdetailstrymeaddtocartbutton'
                       onClick={(e)=> tryMeAddingToCartMacSetItem(e, macSetItemidx, data)}>
                         <b>TRY ME ADDING TO CART</b>
                    </p>
                  </Col>
                  <Col>
                    {
                    specificMacProductObjClicked ? 
                    (
                      <p className='macitemsproductdetailsclosebutton'
                         onClick={(e)=> closeSpecificProduct(e, macSetItemidx)}>
                             EXIT
                      </p>
                    ) 
                    : 
                    (
                      <p className='macitemsproductdetailsclosebutton'
                         onClick={(e)=> closeMacItemProductDetailContainer(e, macSetItemidx)}>
                                 CLOSE
                      </p>
                    ) 
                    }
                  </Col>        
                </Col>

                </Col>
                 
             </Col>  
    })
    }
    </Col> 

 )

};

  

