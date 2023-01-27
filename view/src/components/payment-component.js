import React, {
           useEffect,
           useState
       } from 'react';

import { Col } from 'react-bootstrap';

import axios from 'axios';

import '../styles/payment.scss';

export default function Payment() {

  const [amount, getAmount] = useState('');
  const [cardNumber, getCardNumber] = useState('');
  const [cardExpirationMonth, getCardExpirationMonth] = useState('');
  const [cardExpirationYear, getCardExpirationYear] = useState('');
  const [cardCVN, getCardCVN] = useState('');

  const [err, getErr] = useState('');

  useEffect(()=> {

  }, [])


   const getCardValues = (e) => {
  
     switch(e.target.id) {

      case 'amount':
        getAmount((val) => val = e.target.value)
      break;
      case 'cardnumber':
        getCardNumber((val) => val = e.target.value)
        break;
      case 'card-expirationmonth':
        getCardExpirationMonth((val) => val = e.target.value)
      break;
      case 'card-expirationyear':
        getCardExpirationYear((val) => val = e.target.value)
      break;
      case 'card-cvn':
        getCardCVN((val) => val = e.target.value)
      break;
      
     }
   }

   const send = (e) => {
    e.preventDefault();

    window.Xendit.card.createToken({
            amount: amount,
            card_number: cardNumber,
            card_exp_month: cardExpirationMonth,
            card_exp_year: cardExpirationYear,
            card_cvn: cardCVN,
            is_multiple_use: false,
            should_authenticate: true
        }, xenditResponseHandler);

     
   }

   function xenditResponseHandler(err, creditCardToken) {

    if (err) {
      document.querySelector('#err').innerText = err.message
      return;
     } 
     if (creditCardToken.status === 'VERIFIED') {
       
        var token = creditCardToken.id;
        document.querySelector('#token').value = token;
        
        axios.post('http://localhost:4000/mac', {
                                                 token: token,
                                                 amount: amount,

                                                 })
                  .then((response)=> {
                    console.log(response)
                  })

                  alert(token)
     } 
     else if (creditCardToken.status === 'IN_REVIEW') {
      window.open(creditCardToken.payer_authentication_url)
     } 
     else if (creditCardToken.status === 'FAILED') {
      document.querySelector('#err').innerText = creditCardToken.failure_reason
     }
    
   }


    return (
      <Col id='payments'>
          <form id='form'>
              <p id='err'>{err}</p>
          <div>
            <p>Amount</p>
            <input type="number"
                   id='amount'
                   onChange={(e)=> getCardValues(e)}/>
          </div>
          <div>
            <p>Card Number</p>
            <input type="number"
                    id='cardnumber'
                    onChange={(e)=> getCardValues(e)}/>
           </div>
          <div>
             <p>Card expiration month</p>
             <input type="number"
                    id='card-expirationmonth'
                    onChange={(e)=> getCardValues(e)}/>
          </div>
           <div>
             <p>Card expiration year</p>
             <input type="number"
                    id='card-expirationyear'
                    onChange={(e)=> getCardValues(e)}/>
          </div>
          <div>
            <p>Card CVN</p>
            <input type="password" 
                    id='card-cvn'
                    onChange={(e)=> getCardValues(e)}/>
          </div>

          <div style={{visibility: 'hidden'}}>
            <input type='text'
                   id='token'/>
          </div>
        
              <button onClick={(e)=> send(e)}>Send</button>
          </form>
        
      </Col>  
    );
}