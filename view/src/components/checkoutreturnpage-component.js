import React, {
         useState,
         useEffect
       } from 'react';

import { Col, 
         Row, 
         Spinner } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';

import axios from 'axios'; 

import '../styles/checkoutreturnpage.scss';

function useQuery() {

 const { search } = useLocation();
 return React.useMemo(() => new URLSearchParams(search), [search]);

}
  
 
export default function CheckoutReturnPage(props) {

 const [checkoutPageLoadingStatus, toggleCheckoutPageLoadingStatus] = useState(true);
 const [payPalToken, getPayPalToken] = useState('');

  const query = useQuery()

  const PayerToken = query.get("token")
  const PayerID = query.get("PayerID")

  const getPayPALToken = async () => {

   let paypalToken = undefined 

   await axios.get('http://localhost:4000/item/asktoken/singletransfer')
  
    .then( async (response)=> {
       await capturePayment(response.data)
    })

   

  }

  const capturePayment = async (payPalToken) => {
    axios.post('http://localhost:4000/item/checkout/capturepayment', {
        token: payPalToken,
        payerToken: PayerToken,
        payerID: PayerID
     })
     .then( async (response)=> {
         await capturePayment()
     })
  }


 useEffect( async ()=> {
 
     if ( props.capturePaymentIDLEstatus === true ) {
      await getPayPALToken()
     }

     props.getCapturePaymentIDLEstatus((idlestatus)=> idlestatus = false)
     

 },[payPalToken, capturePayment])

 
  



return (
<Col id='checkoutpagereturnpage'>
{

checkoutPageLoadingStatus ? (
  <Row id='checkoutpagereturnpage-capturecontainer'>
    <Col id='checkoutpagereturnpagecapturecontainer-paymentdetailscontainer'
         xs={4}>
       <Col id='checkoutpagereturnpagecapturecontainer-paymentdetails'>
          <h1 id='checkoutpagereturnpagecapturecontainer-pdgooddayheader'>Good day,</h1>
          <h4 id='checkoutpagereturnpagecapturecontainer-pdgreetingsheader'>Pruchase was made by, Customer name</h4>
          <h4 id='checkoutpagereturnpagecapturecontainer-pdstatusheader'><b>Status:</b> Completed</h4>
          <h4 id='checkoutpagereturnpagecapturecontainer-pdtransactionrecieptheader'>Transaction reciept: <b>2HD6654438663892K</b></h4>
          <h4 id='checkoutpagereturnpagecapturecontainer-pdcompletenameheader'>Name: Winston Lee</h4>
          <h4 id='checkoutpagereturnpagecapturecontainer-pdemailheader'>Email address: <b>sb-vyesz18508437@personal.example.com</b></h4>
       </Col>
    </Col>
    <Col id='checkoutpagereturnpagecapturecontainer-itemdetails'
         xs={4}>

    </Col>
  </Row>
) : (
   <Col id='checkoutpagereturnpage-loadingindicationcontainer'>
     <Spinner animation="border" variant="info" />
   </Col>
) 

}
</Col>
)
}