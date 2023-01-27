import React, {
               useEffect,
               useState 
             } from 'react';

import { Col } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import '../styles/verifyphonenumber.scss';

export default function VerifyPhoneNumber(props) {

  const navigate = useNavigate();

  const [firstdigitcode, dosomethingfirstdigitcode] = useState('');
  const [seconddigitcode, dosomethingseconddigitcode] = useState('');
  const [thirddigitcode, dosomethingthirddigitcode] = useState('');
  const [fourthdigitcode, dosomethingfourthdigitcode] = useState('');
  const [fifthigitcode, dosomethingfifthdigitcode] = useState('');
  const [sixthdigitcode, dosomethingsixthdigitcode] = useState('');

  useEffect(()=> {
     
    if ( props.verifyphonenumbercode === null ) {

    } 
    
    if ( props.verifyphonenumbercode !== null) {
      
      const digitCodeFields = document.getElementsByClassName('digitcodefields')
      let code = props.verifyphonenumbercode.toString();
      
      
      let firstcode =  code.charAt(0)
      let secondcode = code.charAt(1)
      let thirdcode =  code.charAt(2)
      let fourthcode = code.charAt(3)
      let fifthcode =  code.charAt(4)
      let sixthcode =  code.charAt(5)

      digitCodeFields[0].value = firstcode
      digitCodeFields[1].value = secondcode
      digitCodeFields[2].value = thirdcode 
      digitCodeFields[3].value = fourthcode
      digitCodeFields[4].value = fifthcode
      digitCodeFields[5].value = sixthcode

    }

  }, [])

 

    return(
        <Col id='verifyphonenumber'>

        


         <button id='verifyphonedigitscodebutton'
                 onClick={()=> navigate('/futuremacholder')}>verify</button>
        </Col>
    )
}