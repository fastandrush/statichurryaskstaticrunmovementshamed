

export default function loadprevioususer() {
    
 const _usercookie = document.cookie;
 const _previoususer = _usercookie.slice(15, 45);

 switch(_previoususer) {
  case '':
   let _visitor = {
     userstatus: 'Visitor',
     usersequence: 0,
     mobileidnumber: 'Expercience',
     isauthenticated: false,
     firstname: '',
     userlocation: '',
     itemsoncart: [],
     maccredits: {
      based: 0,
      investment: 0,
     }
   }
   return _visitor;
   break;
  case _previoususer: 
     let _mpcholder = {
       userstatus: 'Registered',
       usersequence: 0,
       mobileidnumber: _previoususer,
       isauthenticated: false,
       firstname: '',
       userlocation: '',
       itemsoncart: [],
       maccredits: {
         based: 0,
         investment: 0,
       }
     }
      return _mpcholder
      break;
  default:
   return
 }
  
}

