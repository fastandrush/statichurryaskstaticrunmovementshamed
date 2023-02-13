import React, {
        useState
       } from 'react';

import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import axios from 'axios';
import { timestamp } from '../lib/timestamps';
import axiosCreatedInstance from '../lib/axiosutil';

import '../styles/login.scss';


export default function LoginComponent() {

  const [userdetails, doSomethingWithUserDetails] = useState('');
  const [userpassword, doSomethingWithUserPassword] = useState('');


  const login = async () => {
  
    const _parseddetails = userdetails.split(" ");
    const $decodedcookie = decodeURIComponent(document.cookie);
  
    await axiosCreatedInstance.post('/authenticate/login', {
      persondetails: {
        firstname: _parseddetails[0],
        middlename: _parseddetails[1],
        lastname:_parseddetails[2],
        password: userpassword
      }
    })
    .then((response)=> {
      const responsedata = response.data
      setUserCookie(responsedata)
    })

  } 

  function setUserCookie(responsedata) {
    
     document.cookie = `thisuser=${responsedata}; expires=${timestamp.getDay()}, ${timestamp.getDate()} ${timestamp.getMonth()} ${timestamp.getFullYear()} ${timestamp.getHour + 1}:${timestamp.getMinutes()}:${timestamp.getSeconds()} UTC`
     alert('Registered')

  }

 function handleLoginDetails(evt) {

  const _field = evt.target.id;

  switch(_field) {
    case 'fullname':
      const fullname = evt.target.value;
      doSomethingWithUserDetails((details)=> details = fullname)
    break;
    case 'password':
      const password = evt.target.value;
      doSomethingWithUserPassword((details)=> details = password)
    break;
    default:
     return
  }

 }
    return(
      <Col id='loginpage'>

        <Col id='formcontainer'>

          <h5 id='loginpage-macheader'>MPC</h5>

          <Col id='form'>
             <Col id='formwithincontainer1'>
                <input type='text' 
                       id='fullname'
                       placeholder='Full name'
                       className='loginfield-fullname'
                       value={userdetails}
                        onChange={(evt)=> { handleLoginDetails(evt) } }/><br/>
                <input type='text' 
                       id='password'
                       placeholder='Password'
                       className='loginfield-fullname'
                       value={userpassword}
                        onChange={(evt)=> { handleLoginDetails(evt) } }/><br/>
                <button id='loginfield-loginbtn'
                         onClick={()=> login()}>login</button><br/>
                <Link to='/' id='loginfield-loginforgotpassword'>forgot password?</Link>
             </Col>
            
             <Col id='formwithincontainer2'>
               <img src='../images/octuposimage.jpg'
                    alt='MAC-OCTOPUS-IMAGE'
                    id='loginpage-octuposdp'/>
             </Col>
          </Col>

        </Col>
      </Col>
    )
}