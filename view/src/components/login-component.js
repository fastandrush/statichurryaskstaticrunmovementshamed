import React, { useEffect, useState } from 'react';

import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import axios from 'axios';

import '../styles/login.scss';


export default function LoginComponent() {

  const [userDetails, doSomethingWithUserDetails] = useState('Fn1 Ln1 Mn1');
  const [userPassword, doSomethingWithUserPassword] = useState('');

  const [backEndPathnameURI, changeBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/')
  const [developmentBackEndPathnameURI, changeDevelopmentBackEndPathnameURI] = useState('http://localhost:4000/');
  const [productionBackEndPathnameURI, changeProductionBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/');
  
  axios.defaults.baseURL = backEndPathnameURI;

  const [day, doSomethingWithDay] = useState();
  const [date, doSomethingWithDate] = useState();
  const [month, doSomethingWithMonth] = useState();
  const [year, doSomethingWithYear] = useState(); 
  const [hour, doSomethingWithHour] = useState();
  const [minute, doSomethingWithMinute] = useState();
  const [seconds, doSomethingWithSeconds] = useState();
  
  useEffect(()=> {
    getDay();
    getDate();
    getMonth();
    getFullYear();
    getHour();
    getMinutes();
    getSeconds();
  }, )
  
  function getDay() {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateObj = new Date();
    let _currentday = day[dateObj.getDay()];
    doSomethingWithDay((data)=> data = _currentday )
  }
  function getDate() {
    const dateObj = new Date();
    let _currentdate = dateObj.getDate();

    if ( _currentdate < 10 ) {
      doSomethingWithDate((data)=> data = `0${_currentdate}`)
    } else {
      doSomethingWithDate((data)=> data = `${_currentdate}`)
    }

  }
  function getMonth() {
    const dateObj = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let _currentmonth = month[dateObj.getMonth()];
    doSomethingWithMonth((data)=> data = _currentmonth)
  }
  function getFullYear() {
    const dateObj = new Date();
    let _currentyear = dateObj.getFullYear();
    doSomethingWithYear((data)=> data = _currentyear)
  }
  function getHour() {
    const dateObj = new Date();
    let _currenthour = dateObj.getHours();
    let _parsedHour = _currenthour + 1;
    if ( _parsedHour > 9) {
      doSomethingWithHour((data)=> data = `${_parsedHour}`)
    }
    if (  _parsedHour < 10 ) {
      doSomethingWithHour((data)=> data = `0${_parsedHour}`)
    }

  }
  function getMinutes() {

    const dateObj = new Date();
    let _currentminute = dateObj.getMinutes();

    if ( _currentminute < 10) {
      doSomethingWithMinute((data)=> data = `0${_currentminute}`)
    }
    if (  _currentminute > 9 ) {
      doSomethingWithMinute((data)=> data = `${_currentminute}`)
    }

  }
  function getSeconds() {

    const dateObj = new Date();
    let _currentseconds = dateObj.getSeconds();

    if ( _currentseconds < 10) {
      doSomethingWithSeconds((data)=> data = `0${_currentseconds}`)
    }
    if (  _currentseconds > 9 ) {
      doSomethingWithSeconds((data)=> data = `${_currentseconds}`)
    }

  }
  
  const login = async () => {
  
    const parsedDetails = userDetails.split(" ");
    let decodedCookie = decodeURIComponent(document.cookie);
    const fn = parsedDetails[0];
    const mn = parsedDetails[1];
    const ln = parsedDetails[2];
    
    const url = '/authentication/authenticate/validate'
    
    await axios.post(url, {
      fn: fn,
      mn: mn,
      ln: ln,
      password: userPassword
    })
    .then((response)=> {
      console.log(response)
      setUserCookie(fn)
    })

  } 

  function setUserCookie(fn) {
    
     document.cookie = `username=${fn}; expires=${day}, ${date} ${month} ${year} ${hour}:${minute}:${seconds} UTC`

     alert('Registered')

  }


    return(
      <Col id='loginpage'>

        <Col id='formcontainer'>

          <h5 id='loginpage-macheader'>MPC</h5>

          <Col id='form'>
             <Col id='formwithincontainer1'>
                <input type='text' 
                       placeholder='Full name'
                       className='loginfield-fullname'
                        onChange={(e)=> {
                          doSomethingWithUserDetails((details)=> details = e.target.value)
                        }}/><br/>
                <input type='text' 
                       placeholder='Password'
                       className='loginfield-fullname'
                        onChange={(e)=> {
                          doSomethingWithUserPassword((details)=> details = e.target.value)
                        }}/><br/>
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