import React, { useEffect,
                useState,
                useCallback } from 'react';

import { Col,
         Spinner } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import '../styles/futuremacholder.scss';

import axios from 'axios';

export default function FutureMacHolder(props) {

  const navigate = useNavigate();

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [backEndPathnameURI, changeBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/')
  const [developmentBackEndPathnameURI, changeDevelopmentBackEndPathnameURI] = useState('http://localhost:8000/');
  const [productionBackEndPathnameURI, changeProductionBackEndPathnameURI] = useState('https://statichurryaskstaticrunmovementshamed-api.onrender.com/');

  axios.defaults.baseURL = backEndPathnameURI;
   
  const [personalInformationFormContainer, doSomethingPersonalInformationFormContainer] = useState('-100%');
  const [contactInformationFormContainer, doSomethingContactInformationFormContainer] = useState('-100%');
  const [addressInformationFormContainer, doSomethingAddressInformationFormContainer] = useState('-100%');

  const [investButton, doSomethinhWithInvestButton] = useState(false);

  const [personalInformationMessage, doSomethingWithPersonalInformationMessage] = useState('Personal information');
  const [contactInformationMessage, doSomethingWithContactInformationMessage] = useState('Contact information');
  const [addressInformationMessage, doSomethingWithAddressInformationMessage] = useState('Address information');

  const [personalInfoLoadingStatus, personalInfoIsIdleStatus] = useState(false);
  const [contactInfoLoadingStatus,  contactInfoIsIdleStatus] = useState(false);
  const [addressInfoLoadingStatus, addressInfoIsIdleStatus] = useState(false);

  const [personalInfoSendingRequestLoadingStatus, personalInfoSendingRequestLoadingStatusIsIdle] = useState(false);
  const [personalInfoShowRequestLoadingStatus, personalInfoShowRequestLoadingStatusIsIdle] = useState('none');
  const [contactInfoSendingRequestLoadingStatus, contactInfoSendingRequestLoadingStatusIsIdle] = useState(false);
  const [contactInfoShowRequestLoadingStatus, contactInfoShowRequestLoadingStatusIsIdle] = useState('none');
  const [addressInfoSendingRequestLoadingStatus, addressInfoSendingRequestLoadingStatusIsIdle] = useState(false);
  const [addressInfoShowRequestLoadingStatus, addressInfoShowRequestLoadingStatusIsIdle] = useState('none');

  const [firstname, getFn] = useState('');
  const [middlename, getMn] = useState('');
  const [lastname, getLn] = useState('');

  const [contactnumber, getCn] = useState('');
  const [contactemail, getEmail] = useState('');
  const [verifyphonenumbercode, doSomethingWithVerifyphonenumbercode] = useState(null); 
  const [contactnumberverifyingloadingstatus, doSometingWithcontactnumberverifyingloadingstatus] = useState(false);
  const [contactnumberverifydigitcodesloadingstatus, doSometingWithcontactnumberverifydigitcodesloadingstatus] = useState('none');
  const [verifyDigitCodeLoadingStatus, doSomethingVerifyDigitCodeLoadingStatus] = useState(false);
  const [contactNumberVerified, doSomethingContactNumberVerified] = useState(false); 

  const [firstdigitcode, dosomethingfirstdigitcode] = useState('');
  const [seconddigitcode, dosomethingseconddigitcode] = useState('');
  const [thirddigitcode, dosomethingthirddigitcode] = useState('');
  const [fourthdigitcode, dosomethingfourthdigitcode] = useState('');
  const [fifthdigitcode, dosomethingfifthdigitcode] = useState('');
  const [sixthdigitcode, dosomethingsixthdigitcode] = useState('');

  const [resendcountdowntimer, dosomethingresendcountdowntimer] = useState(30);
  const [staticZero, displayStaticZero] = useState(false);

  const [verifyCnContainer, doSomethingWithVerifyCnContainer] = useState('block');
  const [verifyCnBtn, doSomethingWithVerifyCnBtn] = useState('none');
  const [contactnumberverifydigitcodescontainer, doSomethingcontactnumberverifydigitcodescontainer] = useState('none');
  const [verifiedCnContainer, doSomethingVerifiedCnContainer] = useState('none');
  const [digitcodefieldsBorderErr, doSomethinhWigitcodefieldsBorderErr] = useState('1px solid black');
  const [contactInformationField, doSomethingContactInformationField] = useState('block')

  const [phoneNumberVerificationMsg, doSomethingPhoneNumberVerificationMsg] = useState('GOOD');
  const [phoneNumberVerificationMessageIndicator, doSomethingPhoneNumberVerificationMessageIndicator] = useState('black');

  const [country, getCountry] = useState('Philippines');
  const [island, getIsland] = useState('');
  const [province, getProvince] = useState('');
  const [city, getCity] = useState('');
  const [baranggay, getBaranggay] = useState('');
  const [street, getStreet] = useState('');
  const [houseblcknumber, getHouseBlcknumber] = useState('');
  const [houselotnumber, getHouseLotnumber] = useState('');
  const [trademark, getTrademark] = useState('');

  const [firstnameErr, doSomethingWithFirstnameError] = useState('')
  const [middlenameErr, doSomethingWithMiddlenameError] = useState('')
  const [lastnameErr, doSomethingWithLastnameError] = useState('')
  const [contactErr, doSomethingWithContactnumberError] = useState('')
  const [contactemailErr, doSomethingWithContactNumberError] = useState('')
  const [countryErr, doSomethingWithCountryError] = useState('')
  const [islandErr, doSomethingWithIslandError] = useState('')
  const [provinceErr, doSomethingWithProvinceError] = useState('')
  const [cityErr, doSomethingWithCityError] = useState('')
  const [baranggayErr, doSomethingWithBaranggayError] = useState('')
  const [streetErr, doSomethingWithStreetError] = useState('')
  const [trademarkErr, doSomethingWithTrademarkError] = useState('')

  const [firstnameBorderErr, doSomethingFirstnameBorderErr] = useState('none');
  const [middlenameBorderErr, doSomethingMiddlenameBorderErr] = useState('none');
  const [lastnameBorderErr, doSomethingLastnameBorderErr] = useState('none');
  const [contactnumberBorderErr, doSomethingContactnumberBorderErr] = useState('none');
  const [contactEmailBorderErr, doSomethingContactemailBorderErr] = useState('none');
  const [countryBorderErr, doSomethingCountryBorderErr] = useState('0.5px solid black');
  const [islandBorderErr, doSomethingIslandBorderErr] = useState('0.5px solid black');
  const [provinceBorderErr, doSomethingProvinceBorderErr] = useState('0.5px solid black');
  const [cityBorderErr, doSomethingCityBorderErr] = useState('0.5px solid black');  
  const [baranggayBorderErr, doSomethingBaranggayBorderErr] = useState('0.5px solid black');
  const [streetBorderErr, doSomethingStreetBorderErr] = useState('0.5px solid black');
  const [trademarkBorderErr, doSomethingTrademarkBorderErr] = useState('0.5px solid black');


  const [personalInfoVerified, doSomethingPersonalInfoVerified] = useState(false);
  const [contactInfoVerified, doSomethingContactInfoVerified] = useState(false);
  const [addressInfoVerified, doSomethingAddressInfoVerified] = useState(false);

  const [investLoadingStatus, doSomethingInvestLoadingStatus] = useState(false);

  const bannedPlaces = ['Maa', 'Talomo'];

  const bannedFirstName = [''];
  const bannedMiddleName = [''];
  const bannedLastName = [''];

////////
useEffect(()=> {

  if (resendcountdowntimer === 0) {
   displayStaticZero((display)=> display = true)
  }

},[resendcountdowntimer])
/////////

const getPersonalInformation = (e) => {
     
    switch(e.target.id) {
      case 'firstname':
        getFn((info) => info = e.target.value)
      break;
      case 'middlename':
        getMn((info) => info = e.target.value)
      break;
      case 'lastname':
        getLn((info) => info = e.target.value)
      break;
    }
} 

const valdiatePersonalInformation = () => {
    
    personalInfoIsIdleStatus((isIdle) => isIdle = true)
  
    if ( firstname === '' ) {
      setTimeout(firstnameInfoValidatationError, 2000);
    }

    if ( firstname !== '' ) {
      setTimeout(firstnameInfoValidatationSuccess, 2000);
      doSomethingFirstnameBorderErr((border)=> border = 'none')
    }

    if ( middlename === '' ) {
      setTimeout(middlenameInfoValidatationError, 2000);
    }

    if ( middlename !== '' ) {
      setTimeout(middlenameInfoValidatationSuccess, 2000);
      doSomethingFirstnameBorderErr((border)=> border = 'none')
    }

    if ( lastname === '' ) {
      setTimeout(lastnameInfoValidatationError, 2000);
    }

    if ( lastname !== '' ) {
      setTimeout(lastnameInfoValidatationSuccess, 2000);
      doSomethingLastnameBorderErr((border)=> border = 'none')
    }

    if ( firstname !== '' && middlename !== '' && lastname !== '') {
       setTimeout(personalInformationUIValidationSuccess, 2000);
    }

}

async function personalInformationUIValidationSuccess() {

     await doSomethingPersonalInformationFormContainer((prop) => prop = '-100%')
  //   await doSomethingWithPersonalInformationMessage((msg)=> msg = '')
  //   await personalInfoShowRequestLoadingStatusIsIdle((isIdle) => isIdle = true)

     await  axios.post('/futuremacholder/validatingpersonalinformation', {
                 firstname: firstname,
                 middlename: middlename,
                 lastname: lastname    
            })
            .then((response)=> {
                 console.log(response.data)
                if (response.data === 200) {
                  personalInfoSendingRequestLoadingStatusIsIdle((Idle)=> Idle = true)
                  doSomethingPersonalInfoVerified((status)=> status = true)
                  investButtonHelperFunction()
                } 
            })
}

const closePersonalInformationRegisterModal = async (evt) => {
  await doSomethingPersonalInformationFormContainer((prop) => prop = '-100%')
}

async function firstnameInfoValidatationSuccess() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithFirstnameError((err) => '')
    doSomethingFirstnameBorderErr((border)=> border = '1px solid aqua')
}

async function firstnameInfoValidatationError() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithFirstnameError((err) => 'You dont have a firstname')
    doSomethingFirstnameBorderErr((border)=> border = '0.5px solid tomato')
}

async function middlenameInfoValidatationSuccess() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithMiddlenameError((err) => '')
    doSomethingMiddlenameBorderErr((border)=> border = '1px solid aqua')
}

async function middlenameInfoValidatationError() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithMiddlenameError((err) => 'Provide your middle initial, we use if for future validation')
    doSomethingMiddlenameBorderErr((border)=> border = '0.5px solid tomato')
}

async function lastnameInfoValidatationSuccess() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithLastnameError((err) => '')
    doSomethingLastnameBorderErr((border)=> border = '1px solid aqua')
    contactInfoShowRequestLoadingStatusIsIdle((isIdle)=> isIdle = 'block')
}

async function lastnameInfoValidatationError() {
    await personalInfoIsIdleStatus((isIdle) => isIdle = false)
    doSomethingWithLastnameError((err) => 'You dont have a lastname')
    doSomethingLastnameBorderErr((border)=> border = '0.5px solid tomato')
}
////////
const getContactInformation = (e) => {
     switch(e.target.id) {
      case 'contactnumber':
        getCn((info)=> info = e.target.value)
        validateCnLength();
      break;
      case 'contactemail':
        getEmail((info) => info = e.target.value)
      break;
     }
} 

function validateCnLength() {

  if ( contactnumber.length > 9) {
    doSomethingWithVerifyCnBtn((display)=> display = 'block')
  }
  if ( contactnumber.length === 12 ) {
    doSomethingWithVerifyCnBtn((display)=> display = 'block')
  }

  if ( contactnumber.length < 11) {
    doSomethingWithVerifyCnBtn((display)=> display = 'none')
  }

  if ( contactnumber.length > 13) {
    doSomethingWithVerifyCnBtn((display)=> display = 'none')
  }
  
}

const validateContactInformation = async () => {

    if (contactnumber === '') {
      contactInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(contactNumberValidationError, 2000)
    }

    if ( contactnumber !== '' ) {
      await doSomethingPhoneNumberVerificationMsg('YOUR PHONE NUMBER, VERIFY IT. CLICK ME AGAIN, AND GO AHEAD VERIFY YOUR CONTACT NUMBER.')
      await doSomethingPhoneNumberVerificationMessageIndicator((indicateErr) => indicateErr = '#ff5656')
      await contactInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(contactNumberValidationSuccess, 2000)
      await investButtonHelperFunction()
    }

    
}

async function contactNumberValidationSuccess() {
   await doSomethingWithContactnumberError((err)=> err = '')
   await doSomethingContactnumberBorderErr((border)=> border = '1px solid aqua')
   await contactInfoIsIdleStatus((isIdle) => isIdle = false)
   await doSomethingContactInformationFormContainer((prop) => prop = '-100%')
   await doSomethingWithContactInformationMessage((msg)=> msg = '')
   await contactInfoShowRequestLoadingStatusIsIdle((isIdle)=> isIdle = 'block')
   contactInfoSendingRequestLoadingStatusIsIdle((isIdle)=> isIdle = true)
}

const closeContactInformationRegistrationModal = async (evt) => {
  await doSomethingContactInformationFormContainer((prop) => prop = '-100%')
}

async function contactNumberValidationError() {
   await doSomethingWithContactnumberError((err)=> err = "Provide you're exact phone number")
   await doSomethingContactnumberBorderErr((border)=> border = '1px solid tomato')
   contactInfoIsIdleStatus((isIdle) => isIdle = false)
}
const getDigitCode = (e) => {
  switch(e.target.id) {
     case 'firstdigitcode':
      dosomethingfirstdigitcode((code)=> e.target.value)
     break;
     case 'seconddigitcode':
      dosomethingseconddigitcode((code)=> e.target.value)   
     break;
     case 'thirddigitcode':
      dosomethingthirddigitcode((code)=> e.target.value) 
     break;
     case 'fourthdigitcode':
      dosomethingfourthdigitcode((code)=> e.target.value) 
     break;
     case 'fifthdigitcode':
      dosomethingfifthdigitcode((code)=> e.target.value)  
     break;
     case 'sixthdigitcode':
      dosomethingsixthdigitcode((code)=> e.target.value)
     break;
  }
}
const verifyContactNumber = async () => { 

  doSometingWithcontactnumberverifyingloadingstatus((isIdle)=> isIdle = true)

  await axios.get('/futuremacholder/validatingcontactnumberinformation')
    .then( async (response)=> {
        console.log(response)
        await doSomethingWithVerifyphonenumbercode((code) => code = response.data)
        await doSometingWithcontactnumberverifyingloadingstatus((isIdle)=> isIdle = false)
        await doSomethingWithVerifyCnContainer((display)=> display = 'none')
        await doSomethingWithVerifyCnBtn((display)=> display = 'none')
        await doSomethingcontactnumberverifydigitcodescontainer((display)=> display = 'block')
        displayStaticZero((display)=> display = false)
        countdowntimerObj()
        forceUpdate()
    })

}
const verifyPhoneDigitCode = () => {
   
  doSomethingVerifyDigitCodeLoadingStatus((isIdle)=> isIdle = true)

  const userDigitCode = firstdigitcode + seconddigitcode + thirddigitcode + fourthdigitcode + fifthdigitcode + sixthdigitcode

  if ( userDigitCode.toString() == verifyphonenumbercode.toString() ) {
  

    axios.post('/futuremacholder/validatephonenumber', {
        contactnumber: contactnumber
    })
    .then( async (response)=> {
         if (response.data === 'No duplicate contact number') {
          await doSomethingContactInfoVerified((status)=> status = true)
          await doSomethingPhoneNumberVerificationMessageIndicator((indicateErr) => indicateErr = 'rgb(30, 255, 30)')
          await doSomethingcontactnumberverifydigitcodescontainer((dp)=> dp = 'none')
          await doSomethinhWigitcodefieldsBorderErr((borderErr)=> borderErr = '1px solid black')
          await doSomethingVerifiedCnContainer((dp)=> dp = 'block')
          await doSomethingContactInformationField((inptFields)=> inptFields = 'none')
          await doSomethingVerifyDigitCodeLoadingStatus((isIdle)=> isIdle = false)
          await doSomethingContactNumberVerified((isIdle)=> isIdle = true) 
         }
    })
  }
  if ( userDigitCode.toString() != verifyphonenumbercode.toString() ) {
    doSomethinhWigitcodefieldsBorderErr((borderErr)=> borderErr = '1px solid red')
  }
}
function countdowntimerObj() {
  setInterval(startResendCountDownTimer, 1000)
}
function startResendCountDownTimer() {
  dosomethingresendcountdowntimer((time) => time - 1)
}
const resendOTP = async () => {

  await axios.get('/futuremacholder/validatingcontactnumberinformation')

  .then( async (response)=> {
    console.log(response)
    await doSomethingWithVerifyphonenumbercode((code) => code = response.data)
    dosomethingresendcountdowntimer((time)=> time = 30)
  }) 

}
//////
const getAddressInformation = (e) => {
    switch(e.target.id) {
      case 'country':
        getCountry((info) => info = 'Philippines')
      break;
      case 'island':
        getIsland((info) => info = e.target.value)
      break;
      case 'province':
        getProvince((info) => info = e.target.value)
      break;
      case 'city':
        getCity((info) => info = e.target.value)
      break;
      case 'baranggay':
        getBaranggay((info) => info = e.target.value)
      break;
      case 'houseblcknumber':
        getHouseBlcknumber((info) => info = e.target.value)
      break;
      case 'houselotnumber':
        getHouseLotnumber((info) => info = e.target.value)
      break;
      case 'street':
        getStreet((info) => info = e.target.value)
      break;
      case 'trademark':
        getTrademark((info) => info = e.target.value)
      break;
    }
}
const validateAddressInformation = async () => {
      
     if ( country === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(countryInfoValidationError, 2000)
     }
     if ( country !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(countryInfoValidationSuccess, 2000)
     }
     if ( island === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(islandInfoValidationError, 2000)
     }
     if ( island !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(islandInfoValidationSuccess, 2000)
     }
     if ( province === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(provinceInfoValidationError, 2000)
     }
     if ( province !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(provinceInfoValidationSuccess, 2000)
     }

     if ( city === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(cityInfoValidationError, 2000)
     }
     if ( city !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(cityInfoValidationSuccess, 2000)
     }

     if ( baranggay === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(baranggayInfoValidationError, 2000)
     }
     if ( baranggay !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(baranggayInfoValidationSuccess, 2000)
     }

     if ( street === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(streetInfoValidationError, 2000)
     }
     if ( street !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(streetInfoValidationSuccess, 2000)
     }

     if ( trademark === '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(trademarkInfoValidationError, 2000)
     }
     if ( trademark !== '') {
      addressInfoIsIdleStatus((isIdle) => isIdle = true)
      await setTimeout(trademarkInfoValidationSuccess, 2000)
     }

     if ( province !== '' && city !== '' && baranggay !== '' && street !== '' && trademark !== '' ) {
       setTimeout(addressInformationUIValidationSuccess, 2000)
     }

}
async function addressInformationUIValidationSuccess() {
    await addressInfoIsIdleStatus((isIdle) => isIdle = false)
    await  addressInfoSendingRequestLoadingStatusIsIdle((isIdle)=> true)
    await doSomethingAddressInformationFormContainer((prop) => prop = '-100%')
    investButtonHelperFunction();
}
const closeAddressInformationRegistrationModal = async (evt) => {
  await doSomethingAddressInformationFormContainer((prop) => prop = '-100%')
}
async function countryInfoValidationError() {

}
async function countryInfoValidationSuccess() {
    
}

async function islandInfoValidationSuccess() {
  await doSomethingWithIslandError((errmessage)=> errmessage = 'You dont have an island')
  await doSomethingIslandBorderErr((border)=> border = '0.5px solid red')
  await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
  addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function islandInfoValidationError() {
  await doSomethingWithIslandError((errmessage)=> errmessage = 'You dont have an island')
  await doSomethingIslandBorderErr((border)=> border = '0.5px solid red')
  await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
  addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function provinceInfoValidationSuccess() {
  await doSomethingWithProvinceError((errmessage)=> errmessage = '')
  await doSomethingProvinceBorderErr((border)=> border = '0.5px solid aqua')
  await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
  await doSomethingAddressInfoVerified((status)=> status = true)
  addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function provinceInfoValidationError() {
    await doSomethingWithProvinceError((errmessage)=> errmessage = 'You dont have a province')
    await doSomethingProvinceBorderErr((border)=> border = '0.5px solid red')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function provinceInfoValidationSuccess() {
    await doSomethingWithProvinceError((errmessage)=> errmessage = '')
    await doSomethingProvinceBorderErr((border)=> border = '0.5px solid aqua')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    await doSomethingAddressInfoVerified((status)=> status = true)
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}

async function cityInfoValidationError() {
    await doSomethingWithCityError((errmessage)=> errmessage = 'You dont have a city')
    await doSomethingCityBorderErr((border)=> border = '0.5px solid red')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function cityInfoValidationSuccess() {
    await doSomethingWithCityError((errmessage)=> errmessage = '')
    await doSomethingCityBorderErr((border)=> border = '0.5px solid aqua')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}

async function baranggayInfoValidationError() {
    await doSomethingWithBaranggayError((errmessage)=> errmessage = 'You dont have a baranggay')
    await doSomethingBaranggayBorderErr((border)=> border = '0.5px solid red')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function baranggayInfoValidationSuccess() {
    await doSomethingWithBaranggayError((errmessage)=> errmessage = '')
    await doSomethingBaranggayBorderErr((border)=> border = '0.5px solid aqua')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}

async function streetInfoValidationError() {
    await doSomethingWithStreetError((errmessage)=> errmessage = 'You dont have a city')
    await doSomethingStreetBorderErr((border)=> border = '0.5px solid red')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function streetInfoValidationSuccess() {
    await doSomethingWithStreetError((errmessage)=> errmessage = '')
    await doSomethingStreetBorderErr((border)=> border = '0.5px solid aqua')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}

async function trademarkInfoValidationError() {
    await doSomethingWithTrademarkError((errmessage)=> errmessage = "Provide a trademark near to you're place for delivery to be fast")
    await doSomethingTrademarkBorderErr((border)=> border = '0.5px solid red')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}
async function trademarkInfoValidationSuccess() {
    await doSomethingWithTrademarkError((errmessage)=> errmessage = '')
    await doSomethingTrademarkBorderErr((border)=> border = '0.5px solid aqua')
    await doSomethingCountryBorderErr((border) => border = '1px solid aqua')
    addressInfoIsIdleStatus((isIdle) => isIdle = false)
}

const invest = async () => {
  
  doSomethingInvestLoadingStatus((isIdle)=> isIdle = true)

  axios.post('/futuremacholder/invest', {
    firstname: firstname,
    middlename: middlename,
    lastname: lastname,
    province: province,
    island: island,
    city: city,
    baranggay, baranggay,
    street: street,
    trademark: trademark,
    houseblocknumber: houseblcknumber,
    houselotnumber:  houselotnumber
  })

  .then( async (response)=> {
    console.log(response)
    await doSomethingInvestLoadingStatus((isIdle)=> isIdle = false)
  })

}

function investButtonHelperFunction() {

  if ( personalInfoVerified === true && contactInfoVerified === true && addressInfoVerified === true ) {
           forceUpdate()
           doSomethinhWithInvestButton((investbtn) => investbtn = true)       
  }
  
  
}

    return(
      <Col id='futuremacholder'>
        
        <div id='personalinformation-formcontainer'
             style={{top: personalInformationFormContainer}}>
             
          <div id='personalinformation-contentcontainer'>
             <div id='personalinformationform'>
                <p id='firstnameerror'>{firstnameErr}</p>
                <input type='text'
                       id='firstname'
                       placeholder='firstname'
                       style={{border: firstnameBorderErr}}
                       onChange={(e)=> getPersonalInformation(e)}/><br/>
                <p id='middlenameerror'>{middlenameErr}</p>
                <input type='text'
                       id='middlename'
                       placeholder='middlename'
                       style={{border: middlenameBorderErr}}
                       onChange={(e)=> getPersonalInformation(e)}/><br/>
                <p id='lastnameerror'>{lastnameErr}</p>
                <input type='text'
                       id='lastname'
                       placeholder='lastname'
                       style={{border: lastnameBorderErr}}
                       onChange={(e)=> getPersonalInformation(e)}/>
             </div>

             <div id='personalinformationform-guidescontainer'>
                <h1>Personal information</h1>
                <p>USE YOUR FULLNAME</p>
                <p>Complete first name</p>
                <p>Complete middle name</p>
                <p>Complete last name</p>
                <p>We use this information to uniquely identify Mac user's</p>
                <p>After successful registration, you will be given an Mac ID #, dont share this to anyone.</p>
                <p>Mac ID # number is used as authentication along with you're password's to securely add some extra information's
                   in your account ( e.g adding a business for marketing, editing allowed informations that could be changed,
                   withdrawing mac credit's, transferring and also including buying within Mac's reach. )
                </p>
                <p>Please be aware that you can only register one time, please provide on first time you're exact details. 
                   Some information that you want to add for evaluation is possible in your dashboard.
                </p>
                <p>We make it user-friendly for easy navigation and only ask Firstname, Middle Name, Last name pattern
                  at first for convenience.
                </p>
             </div>
          </div>

          <div id='personalinformation-exitbuttoncontainer'>
            {
              personalInfoLoadingStatus ? (
                <button id='personalinformation-exitbutton'>
                <Spinner animation="border" variant="danger" />
                </button>
              ) : (
                <>
                <button id='personalinformation-exitbutton'
                   onClick={()=> valdiatePersonalInformation()}>
                   ADD CHANGES
                </button>
                <button id='personalinformation-skipbutton'
                         onClick={(evt)=> closePersonalInformationRegisterModal(evt)}>
                   SKIP
                </button>
                </>
              )
            }
               
          </div>

        </div>

        <div id='addressinformation-formcontainer'
             style={{top: addressInformationFormContainer}}>

            <div id='addressinformation-contentcontainer'>
              <div id='addressinformationform'>
                 {
                   [
                   {
                    type: 'text',
                    placeholder: 'country',
                    id: 'country',
                    value: country,
                    borderError: countryBorderErr
                   },
                   {
                    type: 'text',
                    placeholder: 'province',
                    id:'province',
                    message: provinceErr,
                    borderError: provinceBorderErr
                   },
                   {
                    type: 'text',
                    placeholder: 'island',
                    id:'island',
                    message: islandErr,
                    borderError: islandBorderErr
                   },
                   {
                   type: 'text',
                   placeholder: 'city',
                   id:'city',
                   message: cityErr,
                   borderError: cityBorderErr
                   },
                   {
                   type: 'text',
                   placeholder: 'baranggay',
                   id:'baranggay',
                   message: baranggayErr,
                   borderError: baranggayBorderErr
                   }, 
                   {
                    type: 'text',
                    placeholder: 'street',
                    id:'street',
                    message: streetErr,
                    borderError: streetBorderErr
                   },
                   {
                    type: 'text',
                    placeholder: 'house blk number',
                    id: 'houseblcknumber',
                   },
                   {
                    type: 'text',
                    placeholder: 'house lot number',
                    id: 'houselotnumber'
                   },
                   {
                    type: 'text',
                    placeholder: 'trade mark',
                    id: 'trademark',
                    message: trademarkErr,
                    borderError: trademarkBorderErr
                   }
                  ].map((data)=> {
                    return   <>
                             <p className='addressfielderror'>{data.message}</p>
                             <input type={data.type}
                                  id={data.id}
                                  placeholder={data.placeholder}
                                  className='addressfields'
                                  style={{border: data.borderError}}
                                  onChange={(e)=> getAddressInformation(e)}
                            value={data.value}
                                  />
                           </>
                  })
                 }
              </div>
              <div id='addresstinformationform-guidescontainer'>
                 <h1>Personal address</h1>
                 <p>Other physical address can be added in you're dashboard ( e.g business flat address)</p>
                 <p>Be cautious sending you're address to us because this address is what we will use for other 
                   transaction's here on Mac ( i.e widthrawal, buying, sending Mac credit's, shipping and more. )
                 </p>
                 <p>We also use the address the identify population on each place's</p>
                 <p>Only city, province and baranggay were going to display, display means chart of population will 
                   be transparent on Mac's landing page. Other information's such as house # will be kept confidential.
                 </p>
                 <p>Your province, city and baranggay information will be placed on a chart that is visible on the landing
                   page ( not including confidential information )
                 </p>
                 <p>The information is so important for future information BASIS so please, bare with us and 
                    provide you're exact information
                 </p>
                 <p>We can collect locations automatically but we still choose to do it manually for future validations.</p>
              </div>
            </div>

            <div id='addressinformation-exitbuttoncontainer'>
              {
                addressInfoLoadingStatus ? (
                  <button id='addressinformation-exitbutton'>
                    <Spinner id='addressinformation-exitloadingspinner' animation="border" variant="danger" />
                  </button>
                ) : (
                  <>
                  <button id='addressinformation-exitbutton'
                          onClick={()=> validateAddressInformation()}>
                          ADD CHANGES
                  </button>
                   <button id='addressinformation-skipbutton'
                           onClick={(evt)=> closeAddressInformationRegistrationModal(evt)}>
                      SKIP
                  </button>
                  </>
                )
              }  
            </div>

        </div>

        <div id='contactinformation-formcontainer'
             style={{top: contactInformationFormContainer}}>

           <div id='contactinformation-contentcontainer'>
              <div id='contactinformationform'> 
                  <p id='contacterror'>{contactErr}</p>
                  <input type='number'
                         id='contactnumber'
                         style={{border: contactnumberBorderErr,
                                display: contactInformationField}}
                         placeholder='Ph contact/phone number'
                         onChange={(e)=> getContactInformation(e)}/><br/>
                  <input type='text'
                         id='contactemail'
                         placeholder='contact email'
                         style={{display: contactInformationField}}
                         onChange={(e)=> getContactInformation(e)}/>
   
                <div style={{display: verifiedCnContainer }}>
                  <p id='phonumberverified'>PHONE NUMBER VERIFIED</p>
                </div>

                <div id='verify-digitcodecontainer'
                     style={{display: contactnumberverifydigitcodescontainer}}>
                   {
                     verifyDigitCodeLoadingStatus ? (
                      <Spinner animation="border" variant="secondary" />
                     ) : (
                       <>
                          <div id='verifyphonenumber-digitscontainer'>

                           {
                            [
                             {
                             type: 'number',
                             id: 'firstdigitcode'
                             },
                             {  
                             type: 'number',
                             id: 'seconddigitcode'
                             },
                             {
                             type: 'number',
                             id: 'thirddigitcode'
                             },
                             {
                             type: 'number',
                             id: 'fourthdigitcode'
                             },
                             {
                             type: 'number',
                             id: 'fifthdigitcode'
                             },
                             {
                             type: 'number',
                             id: 'sixthdigitcode'
                             },    
                            ].map((data)=> {
                                  return <input type={data.type}
                                                id={data.id}
                                                className='digitcodefields'
                                                style={{border: digitcodefieldsBorderErr}}
                                                onChange={(e)=> getDigitCode(e)}/>
                             })
                             } 
                          </div>

                        <button id='contactinfo-verifydigitcodesbutton'
                             onClick={()=> verifyPhoneDigitCode()}>
                               verify
                        </button>
                        <div id='resend-container'>
                          <p id='resend'
                             onClick={()=> resendOTP()}>
                                RESEND OTP
                          </p>
                         <p id='resend-countdown'>
                            {
                              staticZero ? (
                               <span>(0)</span>
                               ) : (
                              <span>({resendcountdowntimer})</span>
                              )
                           }
                         </p>
                        </div>
                       </>
                     )
                   }
                  
                </div>

                <div id='verify-contactnumbercontainer'
                     style={{display: verifyCnContainer}}>
                  {
                    contactnumberverifyingloadingstatus ? (
                      <Spinner animation="border" 
                               variant="secondary" 
                               id='contactinfo-verifycontactnumberspinner'/>
                    ) : (
                      <button id='contactinfo-verifycontactnumberbutton'
                              style={{display: verifyCnBtn}}
                              onClick={()=> verifyContactNumber()}>
                                  Verify
                      </button> 
                    )
                  }      
                </div>   
         
              </div>

              <div id='contactinformationform-guidescontainer'>
                  <h1>Contact information</h1>
                  <p>Specify your contact informations</p>
                  <p>Here we ask a phone number and an email but it's only the phone number 
                    that is required on this moment process.
                  </p>
                  <p>You can add extra information after you're dashboard is provided.</p>
                  <p>Specifying your email on this at the moment process you will recieve an email regarding about this transaction.</p>
                  <p>Use the phone number that you provided because that's what Mac will use on future transactions.</p>
                  <p>You can change your information that is allowed to be change ( e.g phone number ) after your dashboard is provided</p>
                  <p>Please be aware of the information's that you will provide, it's for you're own convenience</p>
                  <p>Several failure's attemp's on using other's phone number with wrong verification's will result you to be probihitted
                     here on Mac.
                  </p>
              </div>
           </div>

           <div id='contactinformation-exitbuttoncontainer'>
             {
               contactInfoLoadingStatus ? (
                <button id='contanctinformation-exitbutton'>
                  <Spinner animation="border" variant="danger" />
                </button>
               ) : (
                <>
                <button id='contanctinformation-exitbutton'
                   onClick={()=> validateContactInformation()}>
                        ADD CHANGES
                </button>
                 <button id='contanctinformation-skipbutton'
                       onClick={(evt)=> closeContactInformationRegistrationModal(evt)}>
                   SKIP
                </button>
               </>
               )
              }          
           </div>

        </div>

         <PersonalInformation doSomethingPersonalInformationFormContainer={doSomethingPersonalInformationFormContainer}
                              personalInformationMessage={personalInformationMessage}
                              personalInfoSendingRequestLoadingStatus={personalInfoSendingRequestLoadingStatus}
                              personalInfoShowRequestLoadingStatus={personalInfoShowRequestLoadingStatus}/>
         <AddressInformation  doSomethingAddressInformationFormContainer={doSomethingAddressInformationFormContainer}
                              addressInformationMessage={addressInformationMessage}
                              addressInfoSendingRequestLoadingStatus={addressInfoSendingRequestLoadingStatus}
                              addressInfoShowRequestLoadingStatus={addressInfoShowRequestLoadingStatus}/>
         <ContactInformation  doSomethingContactInformationFormContainer={doSomethingContactInformationFormContainer}
                              contactInformationMessage={contactInformationMessage}
                              contactInfoSendingRequestLoadingStatus={contactInfoSendingRequestLoadingStatus}
                              contactInfoShowRequestLoadingStatus={contactInfoShowRequestLoadingStatus}
                              phoneNumberVerificationMsg={phoneNumberVerificationMsg}
                              phoneNumberVerificationMessageIndicator={phoneNumberVerificationMessageIndicator}
                              contactNumberVerified={contactNumberVerified}/>


         <Col>
             {
                investButton ? ( 
                  <>
                    {
                      investLoadingStatus ? (
                        <Spinner animation="border" 
                                 variant="danger"
                                 id='investloadingspinner' />
                      ) : (
                        <button id='investbutton'
                          onClick={()=> invest()}>
                            INVEST
                       </button>
                      )
                    }
                  </>
                 ) : 
                 (
                  <button id='investbutton-finishsteps'>FINISH THE STEPS TO SEE INVEST BUTTON</button>
                 )
             }
         </Col>

      </Col>
    );

}
//////////
function PersonalInformation(props) {

  const onPersonalInfoFormContainer = () => {
    props.doSomethingPersonalInformationFormContainer((prop) => prop = '0%')
  }

  return(
    <Col id='personalinformation'>
    
      <div id='personalinformation-definetioncontainer'
           onClick={()=> onPersonalInfoFormContainer()}>
            {
              props.personalInfoSendingRequestLoadingStatus ? (
                <h1 id='personalinfogoodstatusmessage'>GOOD</h1>
              ) : (
                <>
                <p id='personalinformationgreeting'>{props.personalInformationMessage}</p><span id='personalinforequestloadingstatus'
                                                               style={{display: props.personalInfoShowRequestLoadingStatus}}>
                                                             <Spinner animation="border" 
                                                                      variant="primary"/>
                                                         </span>
                </>
              )
            }
          
      </div>

    </Col>
  )
}
/////////
function ContactInformation(props) {

  const onContactInfoFormContainer = () => {
    props.doSomethingContactInformationFormContainer((prop) => prop = '0%')
  }

  return(
    <Col id='contactinformation'>
   
      <div id='contactinformation-definetioncontainer'
           onClick={()=> onContactInfoFormContainer()}>
             {
               props.contactInfoSendingRequestLoadingStatus ? (
                 <>
                 {
                    props.contactNumberVerified ? (
                      <h1 id='contactinformationvalidationsuccessmessage'>SUCCESS</h1>
                    ) : (
                      <p style={{color: props.phoneNumberVerificationMessageIndicator}}
                         id='contactnumberverificationmessage'>
                         {props.phoneNumberVerificationMsg}
                      </p>
                    )
                 }
               
                 </>
               ) : (
                 <>
                <p id='contactinformationgreeting'>{props.contactInformationMessage}</p> <span  id='contactinforequestloadingstatus'>  
                                                   
                                                  </span>
                </>
               )
             }
           
      </div>

    </Col>
  )
}
/////////
function AddressInformation(props) {

  const onAddressInfoFormContainer = () => {
    props.doSomethingAddressInformationFormContainer((prop) => prop = '0%')
  }

  return(
    <Col id='addressinformation'>
    
      <div id='addressinformation-definetioncontainer'
            onClick={()=> onAddressInfoFormContainer()}>
       {
          props.addressInfoSendingRequestLoadingStatus ? (
            <h1 id='addressinformationsuccessmessage'>DOUBLE CHECK</h1>
          ) : (
            <>
            <p id='addressinformationgreeting'>{props.addressInformationMessage}</p> <span style={{display: props.addressInfoShowRequestLoadingStatus}}
                                                    id='addressinforequestloadingstatus'>  
                                                <Spinner animation="border" 
                                                         variant="primary"/>
                                              </span>
            </>
          )
        }
          
      </div>

    </Col>
  )
}
////////
