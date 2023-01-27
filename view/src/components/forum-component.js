import React, {
         useState
       } from 'react';

import { Col, 
         Form,
         Select,
         Dropdown,
         ButtonGroup,
         Button } from 'react-bootstrap';
    
import { Swiper, SwiperSlide } from "swiper/react"; 

import axios from 'axios';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../styles/forum.scss';

export default function Forum(props) {

  const [chatboxWhosOnlineContainer, doSomethingChatboxWhosOnlineContainer] = useState('100%');
  
  const [normalFontSize, doSomethingNormalFontSize] = useState('normal-font-size');
  const [fontSizeMustChangeDetector, doSomethingWithFontSizeMustChangeDetector] = useState(0);
  const [fontSizeButton, togleFontSizeButton] = useState('gray');
  const [forumFontSize, doSomethingForumFontSize] = useState('normal-font-size')

  const [forumFontStyle, doSomethingForumFontStyle] = useState('normal-font-style');
  const [fontStyleMustChangeDetector, doSomethingWithFontStyleMustChangeDetector] = useState(0);
  const [fontStyleButton, togleStyleFontStyleButton] = useState('gray');

  const [forumFontColor, doSomethingForumFontColor] = useState('black');
  const [fontColorMustChangeDetector, doSomethingWithFontColorMustChangeDetector] = useState(0);
  const [fontColorButton, togleStyleFontColorButton] = useState('gray');
  
  const toggleFontSize = async (e) => {

    switch(e.target.innerText) {
      case 'normal-font-size':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 0)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'gray')
      break;
      case 'xx-small':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'x-small':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'small':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'smaller':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'large':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'x-large':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'xx-large':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
      case 'larger':
        doSomethingNormalFontSize((indicator)=> indicator = e.target.innerText)
        doSomethingWithFontSizeMustChangeDetector((isOn)=> isOn = 1)
        doSomethingForumFontSize((fontSize)=> fontSize = e.target.innerText)
        togleFontSizeButton((conducted)=> conducted = 'black')
      break;
    }

  }

  const toggleFontStyle = async (e) => {
     switch(e.target.innerText) {
       case 'normal-font-size':
        doSomethingWithFontStyleMustChangeDetector((conductor)=> conductor = 0)
        doSomethingForumFontStyle((fontStyle)=> fontStyle = e.target.innerText)
        togleStyleFontStyleButton((display)=> display = 'gray')
       break;
       case 'italic':
        doSomethingWithFontStyleMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontStyle((fontStyle)=> fontStyle = e.target.innerText)
        togleStyleFontStyleButton((display)=> display = 'black')
       break;
       case 'bold':
        doSomethingWithFontStyleMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontStyle((fontStyle)=> fontStyle = e.target.innerText)
        togleStyleFontStyleButton((display)=> display = 'black')
       break;    
     }
  }

  const toggleFontColor = async (e) => {
    switch(e.target.innerText) {
      case 'black':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 0)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'gray')
      break;
      case 'red':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'tomato':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'green':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case '#77C66E':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'blue':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'dodgerblue':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'skyblue':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'aqua':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'yellow':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'magenta':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'violet':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'brown':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
      case 'chocolate':
        doSomethingWithFontColorMustChangeDetector((conductor)=> conductor = 1)
        doSomethingForumFontColor((fontColor)=> fontColor = e.target.innerText)
        togleStyleFontColorButton((display)=> display = 'black')
      break;
    }
  }

  const changeFontSize = (char) => {

    if (fontSizeMustChangeDetector === 1) {
  
       let fontSize = document.createElement('SPAN')
       fontSize.innerHTML = `<span id='${forumFontSize}'>${char}</span>`
       document.querySelector('#chatboxfield').appendChild(fontSize)

       const chatBoxField = document.querySelector('#chatboxfield')
       const selection = window.getSelection();  
       const range = document.createRange();  
       selection.removeAllRanges();  
       range.selectNodeContents(chatBoxField);  
       range.collapse(false);  
       selection.addRange(range);  
       chatBoxField.focus();

    } else {
      return
    }
   
      
  }

  const changeFontStyle = (char) => {

    if (fontStyleMustChangeDetector === 1) {
   
       let fontStyle = document.createElement('SPAN')
       fontStyle.innerHTML = `<span id=${forumFontStyle}>${char}</span>`
       document.querySelector('#chatboxfield').appendChild(fontStyle)

       const chatBoxField = document.querySelector('#chatboxfield')
       const selection = window.getSelection();  
       const range = document.createRange();  
       selection.removeAllRanges();  
       range.selectNodeContents(chatBoxField);  
       range.collapse(false);  
       selection.addRange(range);  
       chatBoxField.focus();

    } else {
      return
    }
   
      
  }

  const changeFontColor = (char) => {
 
    if (fontColorMustChangeDetector === 1) {
   
      let fontColor = document.createElement('SPAN')
      fontColor.innerHTML = `<span id=${forumFontColor}>${char}</span>`
      document.querySelector('#chatboxfield').appendChild(fontColor)

      const chatBoxField = document.querySelector('#chatboxfield')
      const selection = window.getSelection();  
      const range = document.createRange();  
      selection.removeAllRanges();  
      range.selectNodeContents(chatBoxField);  
      range.collapse(false);  
      selection.addRange(range);  
      chatBoxField.focus();

   } else {
     return
   }
  
}

    return (
        <Col id='forum'>
        
           <Col id='forumheadercontainer'>
            <ForumHeaderSelectContainers addressesScope={props.addressesScope}/>       
           </Col>

           <Col id='forumbodycontainer'>
             <div id='chatboxcontent'>
                <ChatBoxContent fontSizeMustChangeDetector={fontSizeMustChangeDetector}
                                changeFontSize={changeFontSize}
                                
                                fontStyleMustChangeDetector={fontStyleMustChangeDetector}
                                changeFontStyle={changeFontStyle}
                                
                                fontColorMustChangeDetector={fontColorMustChangeDetector}
                                changeFontColor={changeFontColor}/>
             </div>
             <div id='chatboxwhosonline'
                  style={{left: chatboxWhosOnlineContainer}}>
                <ChatBoxWhosOnline doSomethingChatboxWhosOnlineContainer={doSomethingChatboxWhosOnlineContainer}
                                  />
             </div>
           </Col>

           <Col id='forumfootercontainer'>

            <Dropdown as={ButtonGroup}>        
               <Button id='changefontsizebutton' style={{backgroundColor: fontSizeButton}}>{normalFontSize}</Button>
               <Dropdown.Toggle split style={{backgroundColor: fontSizeButton}} id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 {
                     [
                    'normal-font-size',
                     'xx-small',
                     'x-small',
                     'small',
                     'large',
                     'x-large',
                     'xx-large',
                     'smaller',
                     'larger'
                     ].map((btntext, idx)=> {
                        return <Dropdown.Item key={idx}
                                     onClick={(e)=> toggleFontSize(e)}>
                                   {btntext}
                               </Dropdown.Item>
                     })
                   }
                 </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>        
               <Button id='changefontstylebutton' style={{backgroundColor: fontStyleButton}}>{forumFontStyle}</Button>
               <Dropdown.Toggle split style={{backgroundColor: fontStyleButton}} id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 {
                     [
                    'normal-font-size',
                     'italic',
                     'bold'
                     ].map((btntext, idx)=> {
                        return <Dropdown.Item key={idx}
                                     onClick={(e)=> toggleFontStyle(e)}>
                                   {btntext}
                               </Dropdown.Item>
                     })
                   }
                 </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>        
               <Button id='changefontcolorbutton' style={{backgroundColor: fontColorButton}}>{forumFontColor}</Button>
               <Dropdown.Toggle split style={{backgroundColor: fontColorButton}} id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 {
                   [
                    'black',
                    'red',
                    'tomato',
                    'green',
                    'blue',
                    'dodgerblue',
                    'skyblue',
                    'aqua',
                    'yellow',
                    'magenta',
                    'violet',
                    'brown',
                    'chocolate'
                     ].map((btntext, idx)=> {
                        return <Dropdown.Item key={idx}
                                              style={{backgroundColor: btntext}}
                                     onClick={(e)=> toggleFontColor(e)}>
                                   {btntext}
                               </Dropdown.Item>
                     })
                   }
                 </Dropdown.Menu>
            </Dropdown>

           <p></p>

           </Col>

        </Col>
    )
}

function ForumHeaderSelectContainers(props) {
  return(
      <Col id='forumheadernavcontainer'>

          <Col lg={2}>
            <Form.Select className='selectalladdressscope'>
               <option value="1">
                   Select ALL
               </option>
            </Form.Select>
          </Col>

          <Col lg={1}
               id='forumorcontainer'>
             or
          </Col>

          <Col lg={2}>
            <Form.Select className='selectalladdressscope'>
               {
                 props.addressesScope.map((scope, idx)=> {
                   return <>
                           {
                            scope.provinces.map((province)=> {
                             return <option key={idx}>{province}</option>
                            })
                           }
                          </>      
                 })
               }
            </Form.Select>
          </Col>

          <Col lg={2}>
            <Form.Select className='selectalladdressscope'>
               {
                 props.addressesScope.map((scope, idx)=> {
                   return <>
                           {
                            scope.cities.map((cities)=> {
                             return <option key={idx}>{cities}</option>
                            })
                           }
                          </>      
                 })
               }
            </Form.Select>
          </Col>

          <Col lg={2}>
            <Form.Select className='selectalladdressscope'>
               {
                 props.addressesScope.map((scope, idx)=> {
                   return <>
                           {
                            scope.baranggay.map((baranggay)=> {
                             return <option key={idx}>{baranggay}</option>
                            })
                           }
                          </>      
                 })
               }
            </Form.Select>
          </Col>

          <Col id='enterchatroomoutcontainer'>
             <button id='enterchatroom'>enter chat room</button>
             <p id='enterchatroombtnseparator'>/</p>
             <button id='leavechatroom'>leave</button>
          </Col>


      </Col>
  )
}

function ChatBoxContent(props) {

  const [chatboxFieldHeight, doSomethingChatboxFieldHeight] = useState('100%');
  const [chatboxFieldTop, doSomethingChatboxFieldTop] = useState('0%');

  const appendEmoji = (e) => {
    const span = document.createElement('SPAN')
    span.innerText = e.target.innerText
    document.querySelector('#chatboxfield').appendChild(span)
  }

  const chatBoxField = (e) => {

    let chatBoxField = document.querySelector('#chatboxfield')
    
    let charCode = e.charCode || e.keyCode;  
    let char = String.fromCharCode(charCode)

    if ( chatBoxField.innerText.length === 1) {
    
    } else {
      
     if (e.charCode === 13) {
        e.preventDefault()
        let chatBoxField = document.querySelector('#chatboxfield')
        let linebreak =  document.createElement("BR");
        chatBoxField.insertBefore(linebreak, chatBoxField.nextSibling);
     }

    
    if (props.fontSizeMustChangeDetector === 1) {
       e.preventDefault()
       props.changeFontSize(char, e)
       return
    }

    if (props.fontStyleMustChangeDetector === 1) {
      e.preventDefault()
      props.changeFontStyle(char, e)
      return
    }

    if (props.fontColorMustChangeDetector === 1) {
      e.preventDefault()
      props.changeFontColor(char)
      return
    }

    e.preventDefault()
    const chatBoxField = document.querySelector('#chatboxfield')
    let inputFieldChar = document.createElement('SPAN')
    inputFieldChar.innerHTML = char
    chatBoxField.appendChild(inputFieldChar)
    const selection = window.getSelection();  
    const range = document.createRange();  
    selection.removeAllRanges();  
    range.selectNodeContents(chatBoxField);  
    range.collapse(false);  
    selection.addRange(range);  

  }

}

  const sendForumMessage = async () => {
     const normalText = document.querySelector('#chatboxfield').innerText;
     const chatbox = document.querySelector('#chatbox');
     const container = document.createElement('DIV')
     const paragraph = document.createElement('SPAN')
     paragraph.innerHTML = document.querySelector('#chatboxfield').innerHTML
     container.appendChild(paragraph)
     chatbox.appendChild(container) 
     alert(document.querySelector('#chatboxfield').innerHTML)
     
  }

  const resizeForumTextField = () => {
    doSomethingChatboxFieldHeight((height)=> height === '100%' ? '900%' : '100%')
    doSomethingChatboxFieldTop((top)=> top === '0%' ? '-800%' : '0%')
  }

  return (

    <div id='chatboxcontentcontainer'>

       <div id='chatbox'>
          
  
       </div>

       <div id='chatboxfieldcontainer'> 

            <div id='chatsendbuttoncontainer'>
 
            <button onClick={()=> resizeForumTextField()}
                    id='forumresizerbutton'>
                 <img src='../images/direct.png'
                      id='forumresizerbuttonimage'
                      alt='MAC-RESIZER-BUTTON-IMAGE'/>
            </button>

             <button id='forumsendbutton'>
                 <img src='../images/direct.png'
                      id='forumsendbuttonimage'
                      alt='MAC-SEND-BUTTON-IMAGE'
                      onClick={(e)=> sendForumMessage(e)}/>
             </button>

            </div>
            
            <div id='chatboxfield'
                 contentEditable='true'
                 style={{height: chatboxFieldHeight, 
                         top: chatboxFieldTop }}
                 onKeyPress={(e)=> chatBoxField(e)}
            >         
            </div>
       </div>

       <div id='chatboxemojicontainer'>
         <Col lg={6}
              id='chatboxemoji-container'>
          <Swiper 
              slidesPerView={10}>
         {
         [
          `🙂`,
          '😃',
          '😄',
          '😅',
          '😆',
          '😉',
          '😋',
          '😊',
          '🤔',
          '🤨',
          '😶',
          '🙄',
          '😏',
          '😌',
          '🤑',
          '🤐',
          '🤢',
          '😱',
          '🤯',
          '🤠',
          '😴',
          '😇',
          '😎',
          '😍',
          '😘',
          '😗',
          '😙',
          '😚',
          '🤗',
          '🤩',
          '😣',
          '😮',
          '😪',
          '😛',
          '😜',
          '😝',
          '🤤',
          '😕',
          '🙃',
          '😤',
          '😢',
          '😭',
          '😦',
          '😦',
          '😧',
          '😨',
          '😩',
          '😳',
          '🤪',
          '😡',
          '😠',
          '🤬',
          '😷',
          '🤒',
          '🤕',
          '🤧',
          '😇',
          '🤡',
          '🤥',
          '🤫',
          '🤭',
          '🧐',
          '🤓',
          '😈',
          '👿',
          '👹',
          '👺',
          '💀',
          '👻',
          '👽',
          '🤖',
          '💩',
          '₱',
          '👍',
          '👎',
          '💪',
          '🤳',
          '👈',
          '👉',
          '☝',
          '👆',
          '🖕',
          '👇',
          '✌',
          '🤞',
          '🖖',
          '🤘',
          '🖐',
          '✋',
          '👌',
          '✊',
          '👊',
          '🤛',
          '🤜',
          '🤚',
          '👋',
          '🤟',
          '✍',
          '👏',
          '👐',
          '🙌',
          '🤲',
          '🙏',
          '🤝',
          '💅',
          '👂',
          '👃',
          '⚕️',
          '👣',
          '👀',
          '👁',
          '🧠',
          '👅',
          '👄',
          '💋',
          '👁️‍🗨️',
          '💤',
          '💢',
          '💬',
          '🗯',
          '💭',
          '♨',
          '🛑',
          '🕛',
          '🕧',
          '🕐',
          '🕜',
          '🕑',
          '🕝',
          '🕒',
          '🕞',
          '🕓',
          '🕟',
          '🕔',
          '🕠',
          '🕕',
          '🕡',
          '🕖',
          '🕢',
          '🕗',
          '🕣',
          '🕘',
          '🕤',
          '🕙',
          '🕥',
          '🕚',
          '🕦',
          '🌀',
          '🃏',
          '🀄',
          '🎴',
          '🔇',
          '🔈',
          '🔉',
          '🔊',
          '📢',
          '📣',
          '📯',
          '🔔',
          '🔕',
          '🎵',
          '🎶',
          '🏧',
          '🚮',
          '🚰',
          '♿',
          '🚹',
          '🚺',
          '🚻',
          '🚼',
          '🚼',
          '🚾',
          '⚠',
          '🚸',
          '⛔'
         ].map((data, idx)=> {
            return  <SwiperSlide className='forumemojicontainer'>
                      <p onClick={(e)=> appendEmoji(e)}
                         className='emoji'>
                         {data}
                      </p>
                    </SwiperSlide>
         })
         }
         </Swiper>
         </Col>
       </div>
    </div>
  )
}

function ChatBoxWhosOnline(props) {

  const handleForumOnlineStatus = () => {
     props.doSomethingChatboxWhosOnlineContainer((display)=> display === '100%' ? '65%' : '100%')
  }

  return (
    <div id='chatboxwhosonlinecontainer'>
       <div id='chatboxwhosonlinecontainer-togglebtncontainer'>
          <img src='../images/arrow-left.png'
               id='chatboxwhosonlinecontainertogglebtncontainer'
               onClick={()=> handleForumOnlineStatus()}/>
       </div>
       <div>
          2
       </div>
    </div>
  )
}
