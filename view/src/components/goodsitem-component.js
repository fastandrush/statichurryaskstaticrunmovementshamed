import React, {
               useState
              } from 'react';

import { Col,
         Row,
         Spinner } from 'react-bootstrap';
      
import StoreLandingViewReview from './storelandingviewitemreview-component';

import '../styles/goodsitemcomponent.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Swiper, SwiperSlide } from "swiper/react"; 

import { EffectCube, EffectFade, Navigation, Pagination } from "swiper";

import axios from 'axios';

export default function GoodsItemComponent(props) {

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

const [goodsSpecificProduct, getGoodsSpecificProduct] = useState([{
    productId: null,
    productStatisticsId: null,
    productname: null,
    productprice: null,
    originator: null,
    capital: null,
    s_r_p: null,
    productdescription: null,
    productextrainformationlocation: {
       island: 'Dummy',
       province: null,
       city: null,
       baranggay: null
    },
    productextrainformationdetails: ['dummydata'],
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
}]);

const [specificMacProductObjIdleStatus, doSomethingWithSpecificMacProductObjIdleStatus] = useState(false);

const [availableColorsData, doSomethingWithAvailableColorData] = useState([]); 
const [availableSizesData, doSomethingWithAvailableSizesData] = useState([]); 

const [itemSpecificLoadingStatus, doSomethingItemSpecificLoadingStatus] = useState(false);

const [itemOriginators, doSomethingWithItemOriginators] = useState([]);
const [shippingDetails, doSomethingWithShippingDetails] = useState([]);
const [parsedFavoriteItems, doSomethingWithParsedFavoriteItems] = useState(undefined);
const [shippingrate, doSomethingShippingrate] = useState(0);
const [_itemData, doSomethingShippingrateItemData] = useState(undefined);
const [pricesData, doSomethingShippingratePricesData] = useState([]);
const [initialValue, doSomethingShippingrateInitialValue] = useState(0);

const [storeAndItemModalLoadingIndicator, doSomethingWithStoreAndItemModalLoadingIndicator] = useState(false);
  

const showItemModal = async (e, modalIdx, data) => {
 
  //const nodeContainer = e.target.parentElement.parentElement
  //const goodItemsContainer = nodeContainer.children[0]
  //const itemDetailsModal = goodItemsContainer.children[1]
 
    const itemDetailsModal = document.getElementsByClassName('gooditems-storeanditemmodaldetailscontainer');
    //const itemdetailsmodaloffsetLeft = itemDetailsModal.offSetLeft;
    
    await axios.post('http://localhost:4000/getitems/specificitem', {
      itemname: data.productname,
      itemsortspecification: data.productsorttype,
      itemoriginator: data.originator
     })
     .then( async (response)=> {
  
         console.log(response.data)

         await getGoodsSpecificProduct((item)=> item = response.data)
         await getSpecificProduct((item)=> item = response.data[0])
        
         if (  response.data[0].productavailablecolors.length > 0 ) {
          const availableColor = response.data[0].productavailablecolors[0].split(",")
          doSomethingWithAvailableColorData((ac)=> ac = availableColor)
         }
         if (  response.data[0].productavailablesizes.length > 0 ) {
          const availableSizes = response.data[0].productavailablesizes[0].split(",")
          doSomethingWithAvailableSizesData((as)=> as = availableSizes)
         }
        
         itemDetailsModal[modalIdx].style.display = 'block';

     })

   
    

}

const closeStoreAndItemsDetailsModal = (evt) => {
  const nodecontainer = evt.target.parentElement.parentElement.parentElement.parentElement
  nodecontainer.style.display = 'none';
} 

const showSpecificItem = (e, modalIdx, data) => {
  
    const specificitemmodal =  document.getElementsByClassName('goodsitemstorecontainer');
    const itemDetailsModal = document.getElementsByClassName('gooditems-storeanditemmodaldetailscontainer');
  
    const specificitemmodaloffsetLeft  = specificitemmodal[0].offsetLeft;

    const _itemname = document.getElementsByClassName('gooditems-productname')[modalIdx].innerText
   
    if ( specificitemmodaloffsetLeft === 0 ) {
          specificitemmodal[0].style.display = 'flex'
          itemDetailsModal[0].classList.remove('goodsitemstorecontainer')
          itemDetailsModal[0].classList.add('goodsitemstorecontainer-firsttranslate')     
    }


}

const closeSpecificItem = (e) => {
  document.getElementsByClassName('goodsitemstorecontainer')[0].style.display = 'none'
}

const landingViewAddMeToCart = (e, idx, data) => {
  
  const itemdetailsmodal = document.getElementsByClassName('gooditems-storeanditemmodaldetailscontainer');

  for ( let exec = 0; exec < itemdetailsmodal.length; exec++) {
    itemdetailsmodal[exec].style.display = 'none'
  }

  itemdetailsmodal[idx].style.display = 'block';


  let vat =  data.s_r_p - data.capital
  
  let itemSpecs = {
        idx: props.cartItems.length,
        macset: {
          macsetname: null,
          macsetprice: null,
          macsetitemdisplayimage: data.macset.macsetitemdisplayimage,
          macsetitemlocation: null,
          macsetweight: null,
          originator: null,
          vat: null,
          ismacset: "false"
        },
        productname: data.productname,
        productprice: data.productprice,
        shippingprice: 0,
        originator: data.originator,
        itemlocation: 'MINDANAO',
        weight: data.weight,
        vat: vat,
        productdp: data.productmainselectionimages[0], 
        productimages: props.selectedSpecificItem,
        selectedsizes: {
          selectedsizes: props.selectedSizes,
          selectedsizesspecification: props.selectedSizesSpecification
        },
        selectedcolor: props.selectedColor
  }

  props.cartItems.push(itemSpecs)

  calculateOverAllMacSetWeight(data, props.currentlyLoginUser.userlocation, idx)

  doSomethingWithStoreAndItemModalLoadingIndicator((status)=> status = true)

}

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
      
        const data = {
          idx: i,
          originator: props.cartItems[i].originator, 
          userlocation: userlocation,
          itemlocation: props.cartItems[i].itemlocation,
          weight: Number(props.cartItems[i].weight)
        }

        itemOriginators.push(data)
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
                      idx: _itemData.idx,
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

      let parseTotalFavCartItemPrice = totalFavItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0)
      let parsedTotalFavCartItemPrice =  Number(parseTotalFavCartItemPrice) + Number(totalShippingPrice)
      
      props.getParsedTotalFavCartItemPrice((totalfavsr)=> totalfavsr = parseTotalFavCartItemPrice + totalShippingPrice)
     
      getShippingRate(shippingDetails, data, parsedTotalFavCartItemPrice, totalFavItems, idx)

}

const getShippingRate = async (shippingDetails, data, parsedTotalFavCartItemPrice, totalFavItems, idx) => {

  let parsedFavoriteItems = undefined;
  let shippingrate = 0;
  let _itemData = undefined;

  for ( let exec = 0 ; exec < shippingDetails.length; exec++ ) {
    
    await axios.post('https://statichurryaskstaticrunmovementshamed/shipping/jandt/calculateshippingprice', {
                                                                    idx: shippingDetails[exec].idx,
                                                                    weight: shippingDetails[exec].weight,
                                                                    to: shippingDetails[exec].userlocation,
                                                                    from: shippingDetails[exec].itemlocation
                                                                  })
 
     .then( (response)=> {
        
           console.log(response.data)
           
           _itemData = props.cartItems.find((data)=> data.idx === response.data.idx)
            
           parsedFavoriteItems =  props.cartItems.filter((data)=> data.originator === shippingDetails[exec].originator)
          
          // shippingrate = Number(_itemData.shippingprice) + Number(response.data.shippingrate)
       
           for ( let item = 0; item < parsedFavoriteItems.length; item++ ) { 
      
              const _filterData  = props.cartItems.find((data)=> data.idx === parsedFavoriteItems[item].idx)
       
              const _query = (data) => data.idx ==  parsedFavoriteItems[item].idx;
              const _findIndex = props.cartItems.findIndex(_query);
              const parsedShippingRate =  response.data.shippingrate / parsedFavoriteItems.length
         
               let _filter = {
                   idx:  parsedFavoriteItems[exec].idx,
                   macset: {
                     macsetname: parsedFavoriteItems[item].macset.macsetname,
                     macsetprice:parsedFavoriteItems[item].productprice,
                     macsetitemlocation: parsedFavoriteItems[item].macset.macsetitemlocation,
                     macsetweight: parsedFavoriteItems[item].macset.macsetweight,
                     originator: parsedFavoriteItems[item].macset.originator,
                     vat: parsedFavoriteItems[item].macset.vat,
                     isamacset: parsedFavoriteItems[item].macset.isamacset
                  }, 
                  productname: parsedFavoriteItems[item].productname,
                  productprice:  parsedFavoriteItems[item].productprice,
                  shippingprice: parsedShippingRate.toFixed(2),
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
  
  calculateCartTotalPrice(data,parsedTotalFavCartItemPrice, totalFavItems, idx)
  
}

const calculateCartTotalPrice = (data, parsedTotalFavCartItemPrice, totalFavItems, idx) => {
     addShippingToCartTotalPrice(parsedTotalFavCartItemPrice, totalFavItems, idx)
}

async function addShippingToCartTotalPrice(parsedTotalFavCartItemPrice, totalFavItems, idx) {

  const totalPrice = await props.cartItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.macset.macsetprice), 0)
  const totalShippingPrice = await props.cartItems.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.shippingprice), 0)
  const addedCartItemPriceAndShippingRateTotal = Number(totalPrice) + Number(totalShippingPrice)

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

  document.getElementsByClassName('gooditems-storeanditemmodaldetailscontainer')[idx].style.display = 'none'
  doSomethingWithStoreAndItemModalLoadingIndicator((status)=> status = false)
  
  
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

      <Col id='goodsitemcomponent'>
      
        <h1 id='goodsitemcomponent-marketingheader'>Marketing</h1>

        <Col id='goodsitemcomponent-positioningcontainer'>
     
           <>
            {
              props.itemsGoods.map((data, modalIdx)=> {
               return <div className='goodsitemcontainer'
                            key={modalIdx}>
   
                        <Col className='goodsitem' >

                             <img src={data.productmainselectionimages[0]}
                                   className='goodsitemproductdisplayimage'
                                   onClick={(e)=> showItemModal(e, modalIdx, data)}
                                   alt='PRODUCT-DISPLAYIMAGE'  />
                        
                        </Col>

                        <div className='gooditems-storeanditemmodaldetailscontainer'>
                          { 
                          storeAndItemModalLoadingIndicator ? 
                          (
                            <Spinner animation="border" variant="secondary" className="storeanditemmodalspinner"/>
                          ) 
                          :
                          (
                          <>

                           <div className='gooditems-storemodaldetailscontainer'>

                             <div className='gooditemsstoremodaldetails-storedpcontainer'>
                               <div className='gooditems-storeanditemmodaldetailsclosecontainer' >
                                  <p className='gooditems-storeanditemmodaldetailsclose' 
                                    onClick={(evt)=> closeStoreAndItemsDetailsModal(evt)}>
                                      x
                                  </p>
                               </div>
                               <div className='gooditems-storeanditemmodaldetaildsdp'>
                            1 
                               </div>
                             </div>
              
                             <div className='gooditemsstoremodaldetails-reactindicationcontainer'>
                          <div className='gooditemsstoremodaldetails-heartandfollowcontainer'>
                            <p>0 Heart</p>
                            <p>0 Followers</p>
                          </div>
                          <div className='gooditemsstoremodaldetails-likeanddislikecontainer'>
                            <p>0 Likes</p>
                            <p>0 Disikes</p>
                          </div>
                             </div> 
                           </div>
  
                           <div className='gooditems-itemmodaldetailscontainer'> 
  
                           <Swiper className='gooditems-itemmodalswiper'
                                    slidesPerView={2}>
                              <SwiperSlide className='gooditems-itemmodalswiperslide'>
                                <p className='gooditems-productname'>{data.productname}</p>
                              </SwiperSlide>
                              {
                                goodsSpecificProduct.map((data, idx) => {
                                  return <>
                                         {
                                          data.productmainselectionimages.map((data, idx)=> {
                                            return <SwiperSlide className='gooditems-itemmodalswiperslide'>
                                                       <img src={data}
                                                            className='gooditems-itemmodalmaindisplayimages'/>
                                                   </SwiperSlide>
                                          })
                                         }
                                         </>
                                })
                              }
                           </Swiper>
  
                           <div className='gooditems-itemmodaldetailspositioningcontainer'>
                              
                           <div className='gooditems-itemmodalindicationscontainer'>
                            { 
                            goodsSpecificProduct.map((data, idx)=> {
                              return <>
                                      <p className='gooditems-itemmodallocationsindication' key={idx}>{data.productextrainformationlocation.island}, {data.productextrainformationlocation.province}, {data.productextrainformationlocation.city}, {data.productextrainformationlocation.baranggay}</p>
                                      <p className='gooditems-itemmodalpriceindication'>
                                         <span>&#8369;{data.productprice}</span>
                                      </p>
                                      <button onClick={(e)=> showSpecificItem(e, modalIdx, data)}
                                        className='gooditems-itemmodalviewitembutton'>
                                          select
                                      </button><br/>
                                      <button className='gooditems-itemmodaltrymeaddingtocartbutton'
                                          onClick={(e)=> landingViewAddMeToCart(e, idx, data)}>
                                          add me to cart
                                      </button>
                                     </>
                            })
                            }
                            
                           
                           </div>
      
                           </div>
                        
                           </div>

                          </>
                          )    
                          }
                        </div>
    
                     
                     
                      </div>
              })
            }
           </>

           <div className='goodsitemstorecontainer'>
                            {
                                itemSpecificLoadingStatus ? (
                                  <Spinner animation="border" variant="danger" />
                                ) : (
                                  <>
                                  <StoreLandingViewReview specificproduct={specificproduct}
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
                                         getSelectedSizesSpecification={props.getSelectedSizesSpecification}
                                 
                                          closeSpecificItem={closeSpecificItem}/>
                                  </>
                                )
                            } 
                         </div>

        </Col>

      </Col>
    )
}