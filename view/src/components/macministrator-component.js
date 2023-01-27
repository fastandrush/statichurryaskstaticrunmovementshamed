import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

import { useLocation } from 'react-router-dom';

import { Col,
         Spinner,
         OverlayTrigger,
         Tooltip,
         Form } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../styles/macministrator.scss';

import axios from 'axios';

/// mac administrator full container 
export default function Macministrator() {

  const location = useLocation();

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [macDataContainerIsIdleStatus, macDataContainerIsIdle] = useState(false)
  const [macData, getMacData] = useState([]) 
  
  const [day, doSomethingWithDay] = useState();
  const [date, doSomethingWithDate] = useState();
  const [month, doSomethingWithMonth] = useState();
  const [year, doSomethingWithYear] = useState(); 
  const [hour, doSomethingWithHour] = useState();
  const [minute, doSomethingWithMinute] = useState();
  const [seconds, doSomethingWithSeconds] = useState();

  const [originatorProductSummary, doSomethingWithOriginatorProductSummary] = useState([]);
  const [originatorProductPercentageBar, doSomethingWithOriginatorProductPercentageBar] = useState(undefined);
  const [originatorProductPercentageBarModulosOperator, doSomethingWithOriginatorProductPercentageBarModulosOperator] = useState([]);

  const [productOriniginatorFirstWeekStatisticsData, getProductOriniginatorFirstWeekStatisticsData] = useState(['1' ,'2' , '3', '4', '5', '6', '7']);
  const [productOriniginatorSecondWeekStatisticsData, getProductOriniginatorSecondWeekStatisticsData] = useState(['1' ,'2' , '3', '4', '5', '6', '7']);
 
  useEffect(()=> {
    const _choxColorElement = document.getElementsByClassName('dashboardspecificcommandpositioningcontainer-color')
    const _availableSizes =  document.getElementsByClassName('pickaavailablesizes')
    for (let i = 0; i < _choxColorElement.length; i++) {
      _choxColorElement[i].style.border = '1px solid black';
    }

    timeAndDate()
    getAllMac() 

  }, [])

  async function getAllMac() {

   await axios.get('https://statichurryaskstaticrunmovementshamed/macministrator/getallmacs')
      .then( async (response)=> {
        await getMacData((macs)=> macs = response.data)
        await macDataContainerIsIdle((idle)=> idle = true)
        await getOriginatorProductSummary()
      }) 

  }

  async function getOriginatorProductSummary() {
    await axios.get('https://statichurryaskstaticrunmovementshamed/macministrator/getproductoriginatorsummary')
        .then( async (response)=> {
          console.log(response.data)
          await doSomethingWithOriginatorProductSummary((data)=> data = response.data)
        })
        originatorPercentageBarMovement()
  }

  async function originatorPercentageBarMovement() {

    var keyNode = document.getElementsByClassName('productsummary-percentagebarscope');

    for ( var i = 0; i < keyNode.length; i++) {

       let _container = keyNode[i].parentElement.parentElement;
       let _getparsepercent = _container.children[1];
       let _percentagebarcontainer =  _container.children[0];
       let _percentagebar = _percentagebarcontainer.children[0];
       const modulosOperator = _getparsepercent.innerText.indexOf('%') 
       var removeModulosOperator = _getparsepercent.innerText.slice(0, modulosOperator)
       originatorProductPercentageBarModulosOperator.push(removeModulosOperator)
       await appllyOriginatorPercentageBarMovement(_percentagebar)
    }
  }

function appllyOriginatorPercentageBarMovement(_percentagebar) {

  var zero = 0;
  const _breakpoint = Math.max(...originatorProductPercentageBarModulosOperator)

  setInterval(()=> {
    for ( let i = 0; i < originatorProductPercentageBarModulosOperator.length; i++ ) {
      if ( zero >= _breakpoint ) {
        zero = 0;
       _percentagebar.style.width = '0%'
      } else {
       zero++
      _percentagebar.style.width =  zero + '%'
      }
      }
  }, 100)
 
}

function timeAndDate() {
    
    let id = setInterval(getTimeAndDate, 1000);

    function getTimeAndDate() {
      if ( location.pathname === '/administrator' ) {
        getDay() 
        getDate()
        getMonth()
        getFullYear()
        getHour()
        getMinutes()
        getSeconds()
      } else if ( location.pathname !== '/macministrator' ) {
          clearInterval(id) 
      }
    }
    forceUpdate()
}

function getDay() {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateObj = new Date();
    let _currentday = day[dateObj.getDay()];
    doSomethingWithDay((data)=> data = _currentday )

}

function getDate() {
    const dateObj = new Date();
    let _currentdate = dateObj.getDate();
    doSomethingWithDate((data)=> data = _currentdate)
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
    doSomethingWithHour((data)=> data = _currenthour)
}

function getMinutes() {
    const dateObj = new Date();
    let _currentminute = dateObj.getMinutes();
    doSomethingWithMinute((data)=> data = _currentminute)
}

function getSeconds() {
    const dateObj = new Date();
    let _currentseconds = dateObj.getSeconds();
    doSomethingWithSeconds((data)=> data = _currentseconds)
}


  return(

   <Col id='macministrator'>

      <MacDataContainer macDataContainerIsIdleStatus={macDataContainerIsIdleStatus}
                        macData={macData}/>

      <SingleMacAndSingleMacQueryContainer />

      <Dashboard  day={day}
                  date={date}
                  month={month}
                  year={year}
                  hour={hour}
                  minute={minute}
                  seconds={seconds}
                  
                  originatorProductSummary={originatorProductSummary}
                  productOriniginatorFirstWeekStatisticsData={productOriniginatorFirstWeekStatisticsData}
                  getProductOriniginatorFirstWeekStatisticsData={getProductOriniginatorFirstWeekStatisticsData}
                  productOriniginatorSecondWeekStatisticsData={productOriniginatorSecondWeekStatisticsData}
                  getProductOriniginatorSecondWeekStatisticsData={getProductOriniginatorSecondWeekStatisticsData}/>

   </Col>

  )

}

function SingleMacAndSingleMacQueryContainer() {

  const [singleMacAndQueryContainer, toggleSingleMacAndQueryContainer] = useState('-40%'); 

   return(

     <Col id='singlemacandsinglemacquerycontainer'
          style={{left: singleMacAndQueryContainer}}>

         <Col id='singlemacandsinglemacquerycontainer-contentcontainer'>
             <div id='singlemacandsinglemacquerycontainer-contents'>
               1
             </div>
             <div id='singlemacandsinglemacquerycontainer-outerclosebuttoncontainer'>
               <p id='singlemacquery'
                  onClick={()=> {
                    toggleSingleMacAndQueryContainer((display) => display === '-40%' ? '0%' : '-40%')
                  }}>single mac query</p>
             </div>
         </Col>
         <Col id='singlemacandsinglemacquerycontainer-innerclosebuttoncontainer'>
            <p id='singlemacandsinglemacquerycontainer-innerclosebutton'
               onClick={()=> {
                toggleSingleMacAndQueryContainer((display) => display = '-40%')
               }}>close</p>
         </Col>

     </Col>

   )
}

function MacDataContainer(props) {
  return(
    <Col id='macdatacontainer'>
      {
        props.macDataContainerIsIdleStatus ? 
        (
          <>
          {
           props.macData.map((data, idx)=> {
             return <Col lg={3} key={idx} className='mac' >
                     
                        {
                          data.authenticated ? 
                          (
                            <div className='macindividualcontainer-unauthenticated'>
                               <p className='macindividual-sequenceid'>Sequence ID: {data.id}</p>
                               <p className='macmacindividual-name'>{data.firstname} <span>{data.middlename}</span> <span>{data.lastname}</span></p>
                               <p className='macmacindividual-isauthenticated'>Is authenticated: <span className='macmacindividual-isauthenticatedfalse'>{data.authenticated}</span></p>
                               <p className='macmacindividual-datefirstauthenticated'>Date of first investment: <span>XX-XX-XXXX</span></p>
                               <p className='macmacindividual-investmentcount'>Investment count: <span>0</span></p>
                               <p className='macmacindividual-service'>Service: <span>None</span></p>
                               <p className='macmacindividual-serviceauthentication'>Service authentication: <span>0</span></p>
                               <p className='macmacindividual-maccredits'>Mac credits: <span>{data.maccredits}</span></p>
                               <p className='macmacindividual-devidants'>Devidants:</p>
                               {
                                 data.children.map((data, idx)=> {
                                   return <div key={idx}
                                               className='macmacindividual-childrencontainer'>
                                               <p className='macindividual-sequenceid'>Sequence ID: {data.id}</p>
                                               <p className='macmacindividual-name'>{data.firstname} <span>{data.middlename}</span> <span>{data.lastname}</span></p>
                                               <p className='macmacindividual-isauthenticated'>Is authenticated: <span className='macmacindividual-isauthenticatedfalse'>{data.authenticated}</span></p>
                                               <p className='macmacindividual-datefirstauthenticated'>Date of first investment: <span>XX-XX-XXXX</span></p>
                                               <p className='macmacindividual-investmentcount'>Investment count: <span>0</span></p>
                                               <p className='macmacindividual-service'>Service: <span>None</span></p>
                                               <p className='macmacindividual-serviceauthentication'>Service authentication: <span>0</span></p>
                                               <p className='macmacindividual-maccredits'>Mac credits: <span>{data.maccredits}</span></p>
                                          </div>
                                 })
                               }
                             
                            </div>
                          ) : 
                          (
                           <p>true</p>
                          )
                        }
                     
                    </Col>
           })
          }
          </>
        ) : 
        (  
          <Col id='macdataspinner-container'>
           <Spinner animation="border" variant="danger"/>
          </Col>
        )
      }
    </Col>
  )
}

function Dashboard(props) {

  const [dashboard, toggleDashBoard] = useState('-100%');
  const [dashboardToggleContainerIndication, changeDashboardToggleContainerIndication] = useState('Dashboard') 

  return(
    <Col id='dashboard' style={{top: dashboard}}>
      <Col id='dashboard-contentcontainer'>

        <DashboardContentHeader  day={props.day}
                                 date={props.date}
                                 month={props.month}
                                 year={props.year}
                                 hour={props.hour}
                                 minute={props.minute}
                                 seconds={props.seconds}/>

        <DashboardContentUserDetails />

        <DashboardContentProductSummary originatorProductSummary={props.originatorProductSummary}
                                        productOriniginatorFirstWeekStatisticsData={props.productOriniginatorFirstWeekStatisticsData}
                                        productOriniginatorSecondWeekStatisticsData={props.productOriniginatorSecondWeekStatisticsData}
                                        getProductOriniginatorFirstWeekStatisticsData={props.getProductOriniginatorFirstWeekStatisticsData}
                                        getProductOriniginatorSecondWeekStatisticsData={props.getProductOriniginatorSecondWeekStatisticsData}/>
        <PresentStatistics  productOriniginatorFirstWeekStatisticsData={props.productOriniginatorFirstWeekStatisticsData}
                            productOriniginatorSecondWeekStatisticsData={props.productOriniginatorSecondWeekStatisticsData}
                            getProductOriniginatorFirstWeekStatisticsData={props.getProductOriniginatorFirstWeekStatisticsData}
                            getProductOriniginatorSecondWeekStatisticsData={props.getProductOriniginatorSecondWeekStatisticsData}/>

        <MacministratorDashboardPublishVideoAndContentConfiguration />

        <DashboardProductCrudContainer day={props.day}
                                       date={props.date}
                                       month={props.month}
                                       year={props.year}  
                                       hour={props.hour}
                                       minute={props.minute}
                                       seconds={props.seconds}/>

      </Col>
      <Col id='dashboard-innerclosebuttoncontainer'>
        <p id='dashboard-innerdashboardclosebutton'
            onClick={()=> {
              toggleDashBoard((display)=> display = '-100%')
              changeDashboardToggleContainerIndication((closebtn)=> closebtn = 'Dashboard' )
             }}>
             close
        </p>
      </Col>
      <Col id='dashboard-outerclosebuttoncontainer'>
          <p id='dashboard-outerdashboardclosebutton'
               onClick={()=> {
                toggleDashBoard((display)=> display = '0%')
                changeDashboardToggleContainerIndication((closebtn)=> closebtn = 'close' )
               }}>
                 {dashboardToggleContainerIndication}
          </p>
      </Col>
    </Col>
  )
}

/////
function MacministratorDashboardPublishVideoAndContentConfiguration() {

  const [videoAndContentsContainer, doSomethingWithVideoAndContentsContainer] = useState('none');
  const [videoAndContentCommand, getVideoAndContentCommand] = useState('add');
  const [whatPost, getWhatPostToHandleQuery] = useState()

  const videoAndContentsGetCommand = (e, idx) => {

    const _container = e.target.parentElement;
    const _whatPost = _container.children[0]

    if (idx === 0) {
      getWhatPostToHandleQuery((post)=> post = 'Mac')
    }
    if (idx === 1) {
      getWhatPostToHandleQuery((post)=> post = 'Popular posts')
    } 
    if (idx === 2) {
      getWhatPostToHandleQuery((post)=> post = 'Latest posts')
    }

    getVideoAndContentCommand((command) => command = `${e.target.innerText}`)
    doSomethingWithVideoAndContentsContainer((display) => display = 'block')
   
  }



  return(
    <Col id='macministratordashboardpublishvideoandcontentconfiguration'>

        <Swiper id='macministratordashboardpublishvideoandcontent-swiper'>
          <SwiperSlide id='macministratordashboardpublishvideoandcontent-swiperslide'>
            <Col id='macministratordashboardpublishvideoandcontent-crudcontainer'>

              <Col id='macministratordashboardpublishvideoandcontent-crudcontainercontents'>
              {
                [
                 {
                   content: "Mac content",
                   displaypicture: '../images/contentpostdisplaypicture.jpg',
                   pointers: "Published mac content's are all about mac's intention's, mac's what wanted to it's user's to know, most objective is to mac users to have a visual of mac's intention's that is desire to happen in the near future",
                   add: 'add',
                   edit: 'edit',
                   delete: 'delete',
                   sendnotif: 'send notification'
                 },
                 {
                  content: "Published popular post's",
                  displaypicture: '../images/popularpostdisplaypicture.jpg',
                  pointers: "Published popular posts are video and images published by the subject itself. Published popular post's are assumed to be objectives and accomplishments, objectives to be intereact with and accomplishments to be remebered",
                  add: 'add',
                  edit: 'edit',
                  delete: 'delete',
                  sendnotif: 'send notification'
                },
                {
                  content: "Published latest post's",
                  displaypicture: '../images/latestpostdisplaypicture.jpg',
                  pointers: "Latest post are all about originator's product wanted to be publish on Mac. Latest post are displayed in the third section of Mac landing page",
                  add: 'add',
                  edit: 'edit',
                  delete: 'delete',
                  sendnotif: 'send notification'
                }  
                ].map((data, idx)=> {
                  return <Col key={idx} className='macministratordashboardpublishvideoandcontent-crudcommandcontainer'>
                           <Col lg={7} className='dashboardspecificcommandcontainer-crudoperationpositioningcontainer'>
                              <h1 className='macministratordashboardpublishvideoandcontent-header'>{data.content}</h1>
                              <p  className='macministratordashboardpublishvideoandcontent-pointers'>{data.pointers}</p>
                              <button className='macministratordashboardpublishvideoandcontent-crudaddbutton'
                                      onClick={(e)=> videoAndContentsGetCommand(e, idx)}>
                                 {data.add}
                              </button>
                              <button className='macministratordashboardpublishvideoandcontent-crudeditbutton'
                                       onClick={(e)=> videoAndContentsGetCommand(e, idx)}>
                                {data.edit}
                              </button>
                              <button className='macministratordashboardpublishvideoandcontent-cruddeletebutton'
                                       onClick={(e)=> videoAndContentsGetCommand(e, idx)}>
                                {data.delete}
                              </button>
                              <button className='macministratordashboardpublishvideoandcontent-crudsendnotifbutton'
                                       onClick={(e)=> videoAndContentsGetCommand(e, idx)}>
                                {data.sendnotif}
                              </button>
                           </Col>
                           <Col lg={5} className='dashboardspecificcommandcontainer-imagepositioningcontainer'>
                            <div key={idx} className='dashboardspecificommandcontainer-imagecontainer'>
                                 <img src={data.displaypicture}
                                      className='dashboardspecificommandcontainer-image'
                                      alt='MAC-CRUDPOST-DISPLAYPICTURE'/>   
                            </div>
                           </Col>
                        </Col>
                })
              }
              </Col>

              <Col id='macministratordashboardpublishvideoandcontent-crudcontainerspecificcommand'
                   style={{display: videoAndContentsContainer}}>

                 <DashboardSpecificCommandContainer videoAndContentCommand={videoAndContentCommand}
                                                    whatPost={whatPost}
                                                    doSomethingWithVideoAndContentsContainer={doSomethingWithVideoAndContentsContainer}/>
              </Col>

            </Col>
          </SwiperSlide>
        </Swiper>

    </Col>
  )
}

////// publish video and contents specific command container 
function DashboardSpecificCommandContainer(props) {

  const [whenAddingMacNewsLoadingIndication, whenAddingMacNewsLoadingIndicationStatus] = useState(false);

  const [topicThatsOnMacNews, getTopicThatsOnMacNews] = useState('');
  const [goalThatsOnMacNews, getGoalThatsOnMacNews] = useState('');
  const [authorThatsOnMacNews, getAuthorThatsOnMacNews] = useState('');
  const [dateThatsOnMacNews, getDateThatsOnMacNews] = useState('');
  const [ytlinkThatsOnMacNews, getYtLinkThatIsOnMacNews] = useState('');
  const [sequenceNumberOnMacNews, getSequenceNumberOnMacNews] = useState('');

  const [fd, fdinstance] = useState(new FormData());

  const config = {      
    headers: {     
     'content-type': 'multipart/form-data'     
    }
  }

 
  const getMacNewsHeaders = (e) => {
    switch(e.target.id) {
      case "sequence":
        getSequenceNumberOnMacNews(e.target.value)
      break;
      case "topic": 
       getTopicThatsOnMacNews(e.target.value)
      break;
      case "goal":
       getGoalThatsOnMacNews(e.target.value)
      break;
      case "author":
        getAuthorThatsOnMacNews(e.target.value)
       break;
       case "date":
        getDateThatsOnMacNews(e.target.value)
       break;
       case "goal":
        getGoalThatsOnMacNews(e.target.value)
       break;
       case "ytlink":
        getYtLinkThatIsOnMacNews(e.target.value)
       break;
      default:
      return
    }
  }
   
   
  const publishMacContent = (e) => {
    
    e.preventDefault();

    fd.append('topic', topicThatsOnMacNews)
    fd.append('goal', goalThatsOnMacNews)
    fd.append('author', authorThatsOnMacNews)
    fd.append('date', dateThatsOnMacNews)
    fd.append('sequence', sequenceNumberOnMacNews)
    fd.append('ytlink', ytlinkThatsOnMacNews)


    if ( ytlinkThatsOnMacNews !== '' ) {

      if (props.whatPost === 'Mac') {

  
        axios.post('http://localhost:4000/news/add/macnewsytlink', 
            fd,
            config
        ).then((response)=> { 
            console.log(response.data)
          })
      }

      if (props.whatPost === 'Popular posts') {
 
        axios.post('http://localhost:4000/news/add/popularpostslink', 
          fd,
          config
          ).then((response)=> { 
             console.log(response.data)
          })
        }
     
     }

    if (ytlinkThatsOnMacNews == '' ) {

      if (props.whatPost === 'Mac') {
         axios.post('http://localhost:4000/news/add/macnewsimage', 
           fd,
           config
         ).then((response)=> { 
           console.log(response.data)
         })
      }

      if (props.whatPost === 'Popular posts') {

        axios.post('http://localhost:4000/news/add/popularpostsimage', 
          fd,
          config
          ).then((response)=> { 
             console.log(response.data)
          })
        }
     
     }
    

  }

  const closeDashBoardSpecificCommandContainer = () => {
    props.doSomethingWithVideoAndContentsContainer((display)=> display = 'none')
  }
  
  const displayMacNewsImage = (e) => {   

    const reader = new FileReader();
    const _container = e.target.parentElement;
    const _imageHolder = _container.children[0];

    reader.onload = () => {
      if ( reader.readyState === 2 ) {
        _imageHolder.src = reader.result
      }
    }
 
    reader.readAsDataURL(e.target.files[0])
    fd.append('content', e.target.files[0])

  }


  if (props.videoAndContentCommand === 'add') {

    return(
      <React.Fragment>

        <Col id='dashboardspecificcommandcontainer-closebtncontainer'>
           <p id='dashboardspecificcommandcontainer-closebtn'
               onClick={()=> closeDashBoardSpecificCommandContainer()}>
              x
           </p>
        </Col>

        <Col id='dashboardspecificcommandcontainer-commandcontainer'>
     
          <Col id='dashboardspecificcommandcontainer-addcontentcontainer'>
              <img src='./images/Mac-leaves-image.png'
                   alt='Mac-leaves-image.png'
                   className='dashboardspecificcommandcontainer-videoandcontetndispalyimage'/>

              <label htmlFor='macnewsdp'
                    className='dashboardspecificcommandcontainer-videoandcontentlabel'>
                     add a image
              </label>

              <input type='file'
                     id='macnewsdp' 
                     style={{display: 'none'}}
                     onChange={(e)=> displayMacNewsImage(e)}/> 

              <p className='dashboardspecificcommandcontainer-videoandcontentor'><b>or</b></p>

              <input type='text' 
                     id='ytlink'
                     className='dashboardspecificcommandcontainer-videoandcontentytlinkinputfield'
                     placeholder='Youtube link'
                     onChange={(e)=> getMacNewsHeaders(e)}/>
          </Col>

          <Col className='dashboardspecificcommandcontainer-inputfieldcontainer'>

              <Col lg={6} className='dashboardspecificcommandcontainer-addvideoorcontentfieldscontainer'>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabelsequence'>Sequence #:</p>
                <input type='number' 
                       id='sequence'
                       className='dashboardspecificcommandcontainer-addvideoorcontentfieldssequence'
                       onChange={(e)=> getMacNewsHeaders(e)}/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Topic:</p>
                <textarea type='text' 
                          id='topic'
                          className='dashboardspecificcommandcontainer-addvideoorcontentfields'
                          onChange={(e)=> getMacNewsHeaders(e)}/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Goal:</p>
                <textarea type='text'
                       id='goal' 
                       className='dashboardspecificcommandcontainer-addvideoorcontentfields'
                       onChange={(e)=> getMacNewsHeaders(e)}/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Author:</p>
                <textarea type='text'
                       id='author' 
                       className='dashboardspecificcommandcontainer-addvideoorcontentfields'
                       onChange={(e)=> getMacNewsHeaders(e)}/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Date:</p>
                <textarea type='text'
                       id='date'
                       className='dashboardspecificcommandcontainer-addvideoorcontentfieldsdate'
                       onChange={(e)=> getMacNewsHeaders(e)}/><br/>

              </Col>

             <Col lg={6} className='dashboardspecificcommandcontainer-addvideoorcontentbtncontainer'>
                 <button type='submit'
                         className='dashboardspecificcommandcontainer-addvideoorcontentbtn'
                         onClick={(e)=> publishMacContent(e)}>
                    add
                 </button>
             </Col>

             <Col lg={12}>
                <p className='dashboardspecificcommandcontainer-note'><b>Note: </b>As of now we dont support uploading raw video's due time constraint's. Time constraints that lead to misleading information. We only support as of now embedding links, e.i 'Youtube and other video platforms' because how embedding a link work's doesnt affect any proggraming languages used inside Mac. Were still on the road determining how really safe videos are not compared to file images that our system can already detect if the image was generated or created using a proggraming languages not to a normal or typical image that is created or determined by pixels.</p>
             </Col>

          </Col>


        </Col>
      </React.Fragment>
    )
  }

  if (props.videoAndContentCommand === 'edit') {

    return(

      <React.Fragment>

      <Col id='dashboardspecificcommandcontainer-closebtncontainer'>
         <p id='dashboardspecificcommandcontainer-closebtn'
             onClick={()=> closeDashBoardSpecificCommandContainer()}>
            x
         </p>
      </Col>

      <Col id='dashboardspecificcommandcontainer-commandcontainer'>
   
         <Col lg={6} id='dashboardspecificcommandcontainer-addcontentcontainer'>
            <img src='./images/Mac-leaves-image.png'
                 alt='Mac-leaves-image.png'
                 className='dashboardspecificcommandcontainer-videoandcontetndispalyimage'/>

            <label htmlFor='macnewsdp'
                  className='dashboardspecificcommandcontainer-videoandcontentlabel'>
                   add a video/image
            </label>

            <input type='file'
                   id='macnewsdp' 
                   style={{display: 'none'}}
                   onChange={(e)=> displayMacNewsImage(e)}/> 

            <p className='dashboardspecificcommandcontainer-videoandcontentor'><b>or</b></p>

            <input type='text' 
                   className='dashboardspecificcommandcontainer-videoandcontentytlinkinputfield'
                   placeholder='Youtube link'/>
         </Col>

        <Col lg={6} className='dashboardspecificcommandcontainer-inputfieldcontainer'>

            <Col className='dashboardspecificcommandcontainer-addvideoorcontentfieldscontainer'>

              <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Sequence #:</p>
              <input type='number' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

              <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Topic:</p>
              <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

              <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Goal:</p>
              <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

              <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Author:</p>
              <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

              <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Date:</p>
              <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/><br/>
         
            </Col>
           <Col className='dashboardspecificcommandcontainer-addvideoorcontentbtncontainer'>
               <button className='dashboardspecificcommandcontainer-editvideoorcontentbtn'>edit</button>
           </Col>
   


        </Col>

        
      </Col>
    </React.Fragment>
    )
  }

  if (props.videoAndContentCommand === 'delete') {
    return(
      <React.Fragment>
        <Col id='dashboardspecificcommandcontainer-closebtncontainer'>
           <p id='dashboardspecificcommandcontainer-closebtn'
               onClick={()=> closeDashBoardSpecificCommandContainer()}>
              x
           </p>
        </Col>

        <Col id='dashboardspecificcommandcontainer-commandcontainer'>
     
           <Col id='dashboardspecificcommandcontainer-addcontentcontainer'>
              <img src='./images/Mac-leaves-image.png'
                   alt='Mac-leaves-image.png'
                   className='dashboardspecificcommandcontainer-videoandcontetndispalyimage'/>

              <label htmlFor='macnewsdp'
                    className='dashboardspecificcommandcontainer-videoandcontentlabel'>
                     add a video/image
              </label>

              <input type='file'
                     id='macnewsdp' 
                     style={{display: 'none'}}
                     onChange={(e)=> displayMacNewsImage(e)}/> 

              <p className='dashboardspecificcommandcontainer-videoandcontentor'><b>or</b></p>

              <input type='text' 
                     className='dashboardspecificcommandcontainer-videoandcontentytlinkinputfield'
                     placeholder='Youtube link'/>
           </Col>

          <Col className='dashboardspecificcommandcontainer-inputfieldcontainer'>

              <Col className='dashboardspecificcommandcontainer-addvideoorcontentfieldscontainer'>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Sequence #:</p>
                <input type='number' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Topic:</p>
                <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Goal:</p>
                <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Author:</p>
                <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/>

                <p className='dashboardspecificcommandcontainer-addvideoorcontentfieldslabel'>Date:</p>
                <input type='text' className='dashboardspecificcommandcontainer-addvideoorcontentfields'/><br/>
           
              </Col>
             <Col className='dashboardspecificcommandcontainer-addvideoorcontentbtncontainer'>
                 <button className='dashboardspecificcommandcontainer-deletevideoorcontentbtn'>delete</button>
             </Col>

          </Col>
        </Col>
      </React.Fragment>
    )
  }
 
}
///////
function DashboardContentHeader(props) {

  return(
    <Col id='dashboardcontentheader'>
       <p className='dashboardcontent-timeanddate'>{props.day}, {props.month} {props.date} {props.year}, {props.hour}:{props.minute}:{props.seconds}</p>
       <p id='dashboardcontent-gooddaywelcomegreeting'><b>Welcome, Good day Mac</b></p>
       <p className='dashboardcontent-poiters'>You got Count that is less than 10 stocks</p>
       <p className='dashboardcontent-poiters'>You got Count that is 0 stocks</p>
       <p className='dashboardcontent-poiters'>You got Count, <span>Count last month</span></p>
    </Col>
  )
}

function DashboardContentUserDetails() {
  return (
    <Col id='dashboardcontentuserdetails'>
      <Col lg={4}>
         <div className='dashboardcontentuserdetails-container dashboardcontentuserdetails-activecontainer'>
            <p>100</p>
            <p>user's active</p>
         </div>
      </Col>
      <Col lg={4}>
         <div className='dashboardcontentuserdetails-container dashboardcontentuserdetails-offlinecontainer'>
           <p>50</p>
           <p> of them are active</p>
         </div>
      </Col>
      <Col lg={4}>
         <div className='dashboardcontentuserdetails-container dashboardcontentuserdetails-unathenticatedcontainer'>
           <p>100</p>
           <p>are unthenticated</p>
         </div>
      </Col>
      <Col lg={4}>
         <div className='dashboardcontentuserdetails-container dashboardcontentuserdetails-authenticatedcontainer'>
           <p>0</p>
           <p>are authenticated</p>
         </div>
      </Col>
    </Col>
  )
}

function DashboardContentProductSummary(props) {

  const [productSummaryPointersContainer, doSomethingProductSummaryPointersContainer] = useState('none');
  const [productSummaryLastTwoWeekPercentCalculationPoint, changeProductSummaryLastTwoWeekPercentCalculationPoint] = useState(20000)
  let [barScopeCurrentStyledLength, doSomethingBarScopeCurrentStyledLength] = useState(0) 

  const hoverProductSummaryProductList = (e, idx) => {
   const _container = document.getElementsByClassName('productsummary-prodcutlistcontainer')
    _container[idx].style.display = 'flex'
  }

  const unHoverProductSummaryProductList = (e, idx) => {
    const _container = document.getElementsByClassName('productsummary-prodcutlistcontainer')
    _container[idx].style.display = 'none'
  }

  const getOriginatorProductStatisticsGraph = async (e) => {
    await axios.post('https://statichurryaskstaticrunmovementshamed/macministrator/getorignatorproductstatisticsgraphsecondweek', {
                                                       originator: e.target.innerText
                                                    })
    .then( async (response)=> {
      await props.getProductOriniginatorFirstWeekStatisticsData((data)=> data = response.data)
      await calculateSecondWeekProductSummaryPercentageTarget(e)
     })
  }

  async function calculateSecondWeekProductSummaryPercentageTarget(e) {
    let percentageBar = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksbarscope')
    for (let i = 0; i < props.productOriniginatorFirstWeekStatisticsData.length; i++) {
      const parsePercent = ( props.productOriniginatorFirstWeekStatisticsData[i].day / productSummaryLastTwoWeekPercentCalculationPoint ) * 100
      percentageBar[i].style.height = parsePercent + '%'
      doSomethingBarScopeCurrentStyledLength((barstylescope)=> barstylescope = i)
    } 
    getOriginatorFirstWeekProductStatisticsGraph(e)
  }

  async function getOriginatorFirstWeekProductStatisticsGraph(e) {
    

    await axios.post('https://statichurryaskstaticrunmovementshamed/macministrator/getorignatorproductstatisticsgraphfirstweek', {
      originator: e.target.innerText
   })
   .then( async (response)=> {
      await props.getProductOriniginatorSecondWeekStatisticsData((data)=> data = response.data)
      await calculateFirstWeekProductSummaryPercentageTarget()
    })
  }

  async function calculateFirstWeekProductSummaryPercentageTarget() {
    let percentageBar = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksbarscope')
    for (let i = 0; i < props.productOriniginatorSecondWeekStatisticsData.length; i++) {
      const parsePercent = ( props.productOriniginatorSecondWeekStatisticsData[i].day / productSummaryLastTwoWeekPercentCalculationPoint ) * 100
      percentageBar[barScopeCurrentStyledLength++].style.height = parsePercent + '%'
    } 
  }


  return(
    <Col id='dashboardcontentproductsummary'>

       <Col lg={5}>
         <div id='dashboard-productsummarycontainer'>
            <p id='dashboardproductsummary-header'>Product summary</p>
            <div id='productsummary-detailscontainer'>
                <Col lg={5}> 
                 {
                    props.originatorProductSummary.map((data, idx)=> {
                      return  <p lg={5} className='productsummary-productoriginator'
                                 onClick={(e)=> getOriginatorProductStatisticsGraph(e)}>
                                 <b>{data.productSummaryOriginator}</b>
                               </p>
                    })
                  }
                </Col>
                <Col className='productsummary-percentagebarcontainer'>
                  {
                    props.originatorProductSummary.map((data, idx)=> {
                      return  <React.Fragment key={idx}> 
                               <Col className='productsummary-percentagebarcontainergetscope'>
                                 <div className='productsummary-percentagebarlength'
                                      onMouseOver={(e)=> hoverProductSummaryProductList(e, idx)}
                                      onMouseLeave={(e)=> unHoverProductSummaryProductList(e, idx)}>
                                   <div className='productsummary-percentagebarscope'
                                        onMouseOver={(e)=> hoverProductSummaryProductList(e, idx)}
                                        onMouseLeave={(e)=> unHoverProductSummaryProductList(e, idx)}>
                                   </div>
                                 </div> 
                                 <p className='productsummary-numeralpercentage'>{data.productSummary}%</p>
                               </Col>
                               <Col className='productsummary-prodcutlistcontainer'
                                    onMouseOver={(e)=> hoverProductSummaryProductList(e, idx)}
                                    onMouseLeave={(e)=> unHoverProductSummaryProductList(e, idx)}>
                               <Col>
                                 {
                                 data.productSummaryPointers.productname.map((product, idx)=> {
                                   return <p key={idx} className='productsummary-pointers'>
                                           {product}
                                          </p>
                                 })
                                 }
                                 </Col>
                                 <Col>
                                 <>
                                  {
                                    data.productSummaryPointers.productisboughtstatus.map((productIsBoughtStatus, idx)=> {
                                       return <p key={idx} className='productsummary-pointers'>
                                                {productIsBoughtStatus.toString()}
                                              </p>
                                    })
                                  }
                                 </>
                                 </Col>
                               </Col>
                              </React.Fragment>         
                    })
                  }
                
                </Col>
            </div>
         </div>
       </Col>

       <Col lg={7}>
          <LastTwoWeeksStatistics productOriniginatorFirstWeekStatisticsData={props.productOriniginatorFirstWeekStatisticsData}
                                  productOriniginatorSecondWeekStatisticsData={props.productOriniginatorSecondWeekStatisticsData}/>
       </Col>

    </Col>
  )
}

/// mac dashboard statistics functional components 
function PresentStatistics(props) {
  return(
    <Col id='dashboardproductsummary-presentstatistics'>
       <LastTwoWeeksStatistics  productOriniginatorFirstWeekStatisticsData={props.productOriniginatorFirstWeekStatisticsData}
                                productOriniginatorSecondWeekStatisticsData={props.productOriniginatorSecondWeekStatisticsData}
                                getProductOriniginatorFirstWeekStatisticsData={props.getProductOriniginatorFirstWeekStatisticsData}
                                getProductOriniginatorSecondWeekStatisticsData={props.getProductOriniginatorSecondWeekStatisticsData} />
    </Col>
  )
}

function LastTwoWeeksStatistics(props) {
  return(
    <Col id='dashboardproductsummary-lasttwoweeks'>
        <Swiper id='dashboardproductsummary-swiper'>
           <SwiperSlide>
             <LastTwoWeeksStatisticsHeader />
             <LastTwoWeeksStatisticsTable productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorFirstWeekStatisticsData}/>
           </SwiperSlide>
           <SwiperSlide>
             <LastTwoWeeksStatisticsHeader />
             <LastTwoWeeksStatisticsTable productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorFirstWeekStatisticsData}/>
           </SwiperSlide>
        </Swiper>
    </Col>
  )
}

function LastTwoWeeksStatisticsHeader() {

  const [adminSettingsButton, toggleAdminSettingsButton] = useState('rotate(90deg)');

  return(
    <Col id='dashboardproductsummary-lasttwoweeksheader'>
       <Col lg={1}>
          <img src='../images/adminsettingsbutton.png'
               id='dashboardproductsummary-settingsbutton'
               style={{transform: adminSettingsButton}}
               onClick={(e)=>{
                toggleAdminSettingsButton((position)=> position === 'rotate(90deg)' ? 'rotate(180deg)' : 'rotate(90deg)')
               }}/>
       </Col>
       <Col>
       
       </Col>
    </Col>
  )
}

function LastTwoWeeksStatisticsTable(props) {
  
  return(
    <Col  id='dashboardproductsummary-lasttwoweekstable'>
       <LastTwoWeeksStatisticsTableOfContents productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorLastTwoWeeksStatisticsData}/>
    </Col>
  )
}  

function LastTwoWeeksStatisticsTableOfContents(props) {
  return(
    <Col id='dashboardproductsummary-lasttwoweekstableofcontents'>
       <Col id='dashboardproductsummary-contentscontainer'>
          <LastTwoWeeksStatisticsSummitPointContainer />
          <LastTwoWeeksStatisticsBarContainer productOriniginatorLastTwoWeeksStatisticsData={props.productOriniginatorLastTwoWeeksStatisticsData}/>
       </Col>
       <Col id='dashboardproductsummary-dayscontainer'>
         <Col lg={1} style={{border: '1px solid black'}}>
         </Col>
         <Col lg={11} id='dashboardproductsummary-dayspositioningcontainer'>
           {
             [
               {
                day: 'Sun',
                isSunday: 'issunday'
               },
               {
                day: 'Mon'
              },
              {
                day: 'Tue'
              },
              {
                day: 'Wed'
              },
              {
                day: 'Thu'
              },
              {
                day: 'Fri'
              },
              {
                day: 'Sat'
              },     
            ].map((data, idx)=> {
              return <Col key={idx} id={data.isSunday} className='dashboardproductsummarylasttwoweeks-days'>{data.day}</Col>
            })
           }
         </Col>
       </Col>
    </Col>
  )
}

function LastTwoWeeksStatisticsSummitPointContainer() {
  return(
    <Col lg={1} id='dashboardproductsummary-lasttwoweekspointercontainer'>
        {
          [
            '100%',
            '90%',
            '80%',
            '70%',
            '60%',
            '50%',
            '40%',
            '30%',
            '20%',
            '10%',
          ].map((data, idx)=> {
            return <Col key={idx}><b>{data}</b></Col>
          })
        }
    </Col>
  )
}

function LastTwoWeeksStatisticsBarContainer(props) {

  const hoverLastTwoWeeksInsideProductStatistics = (e, idx) => {
    const _targetStatisticsScope = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainer')
    _targetStatisticsScope[idx].style.display = 'block';
  }

  const unHoveredLastTwoWeeksInsideProductStatistics = (e, idx) => {
    const _targetStatisticsScope = document.getElementsByClassName('dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainer')
    _targetStatisticsScope[idx].style.display = 'none';
  }


  return(
    <Col lg={11} id='dashboardproductsummary-lasttwoweeksbarcontainer'>
        {
          props.productOriniginatorLastTwoWeeksStatisticsData.map((data, idx)=> {
            return <Col key={idx} className='dashboardproductsummary-lasttwoweeksbarpositionningcontainer'>
                      <div className='dashboardproductsummary-lasttwoweeksbarfullscope'
                           onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                           onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>
                         <div className='dashboardproductsummary-lasttwoweeksbarscope'
                           onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                           onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>  
                         </div>
                      </div>
                      <div className='dashboardproductsummary-lasttwoweeksinsidestatisticspositioningcontainer'
                            onMouseOver={(e)=> hoverLastTwoWeeksInsideProductStatistics(e, idx)}
                            onMouseLeave={(e)=> unHoveredLastTwoWeeksInsideProductStatistics(e, idx)}>
                          <div className='lasttwoweeks-insidestatisticscontainer'>
                          </div>
                      </div>
                   </Col>
          })
        }
    </Col>
  )
}

////// product crud container e.g add, post and delete 
function DashboardProductCrudContainer(props) {

  const [dashboardProductCommand, determineDashboardProductCommand] = useState('POST');
  const [dashboardProductCommandContainer, showDashboardProductCommandContainer] = useState('none');

  const dashboardProductCrudGetCommand = (e) => {
    const _targetNode = e.target.innerText
    determineDashboardProductCommand((command)=> command = _targetNode)
    showDashboardProductCommandContainer((display)=> display = 'block')
  }
 
  return (
    <>
    <Col id='dashboardproductcontainer'>

    <h3 id='dashboardproductcontainer-header'>Product dashboard</h3>

        <Col id='dashboardproductpositioningcontainer'>
          {
            [
            {
             nodeText: 'Add Mac SET ITEM',
             class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontainergetspecific',
            },
            {
              nodeText: 'POST',
              class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontaineredit',
             },
             {
              nodeText: 'EDIT',
              class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontaineredit',
             },
             {
              nodeText: 'UPDATE',
              class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontainerdelete',
             },
             {
              nodeText: 'GET',
              class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontainergetspecific',
             },
             {
              nodeText: 'GET ALL',
              class: 'dashboardproduct-crudcontainer dashboardproduct-crudcontainergetall',
             },
            ].map((data, idx)=> {
              return <Col key={idx} lg={4} className={data.class}>
                       <button className='dashboardproductcrudcontainerbutton'>
                         <h1 onClick={(e)=> dashboardProductCrudGetCommand(e)}>{data.nodeText}</h1>
                       </button>
                     </Col>
            })
          }
        </Col>

        <Col id='dashboardproductcommandcontainer'
             style={{display: dashboardProductCommandContainer}}>
          <DashboardproductGetCommandContainer showDashboardProductCommandContainer={showDashboardProductCommandContainer}
                                               dashboardProductCommand={dashboardProductCommand}
                                               day={props.day}
                                               date={props.date}
                                               month={props.month}
                                               year={props.year}  
                                               hour={props.hour}
                                               minute={props.minute}
                                               seconds={props.seconds}/>
        </Col>

    </Col>
    </>
  )
} 

function DashboardproductGetCommandContainer(props) {

   const [productName, getProductName] = useState('');
   const [productPrice, getProductPrice] = useState('');
   const [productOriginator, getProductOriginator] = useState('');
   const [productCapital, getProductCapital] = useState('');
   const [productSRP, getProductSRP] = useState('');
   const [productDescription, getProductDescription] = useState('')
   const [productExtraInformationIsland, getProductExtraInformationIsland] = useState('');
   const [productExtraInformationProvince, getProductExtraInformationProvince] = useState('');
   const [productExtraInformationBaranggay, getProductExtraInformationBaranggay] = useState('');
   const [productExtraInformationCity, getProductExtraInformationCity] = useState('');
   const [macSetItem, isMacSetItem] = useState('');
   const [macSetItemNumber, doSomethingMacSetItemNumber] = useState('');
   const [productExtraInformationStock, getProductExtraInformationStock] = useState(0);
   const [productExtraInformationWeight, getProductExtraInformationWeight] = useState('') 

   const [productYTLink, getProductYTLink] = useState('');
   const [macSetItemYTLink, getMacSetItemYTLink] = useState('');

   const [productMainSelectionFileImages, doSomethingWithMainSelectionFileImages] = useState([]);
   const [productSelectionFileImages, doSomethingWithSelectionFileImages] = useState([])

   const [productMainSelectionImage, getProductMainSelectionImage] = useState([]);
   const [productMacSetDisplayImage, getProductMacSetDisplayImage] = useState([]);
   
   const [productSelectionImage, getProductSelectionImage] = useState([]);

   const [selectedColor, doSomethingSelectedColor] = useState([]);
   const [selectedSizes, doSomethingSelectedSizes] = useState([]);

   const [isAMacSetProduct, doSomethingWithIsAMacSetProduct] = useState('');
   const [macProductType, doSomethingWithMacProductType] = useState('');
   const [productType, doSomethingWithProductType] = useState('');

   const [macMainSetItemNumber, doSomethingWithMacMainSetItemNumber] = useState('');
   const [macMainSetItemName, doSomethingWithNacMainSetItemName] = useState('');
   const [macMainSetItemPrice, doSomethingWithNacMainSetItemPrice] = useState('');
   const [macMainSetItemDescription, doSomethingWithNacMainSetItemDescription] = useState('');
   const [macMainItemType, doSomethingWithMacMainItemType] = useState('');
   const [macItemType, doSomethingWithMacItemType] = useState('');
   const [macMainSetItemLoadingIndicator, macMainSetItemLoadingIndicationStatus] = useState(false); 
   const [macSetWeight, doSomethingWithMacSetWeight] = useState();
   const [macSetLocation, doSomethingWithMacSetLocation] = useState();
   const [macSetOriginator, doSomethingWithMacSetOriginator] = useState();
   const [macSetVat, doSomethingWithMacSetVat] = useState();

   const [productExtraInformationData, getProductExtraInformationData] = useState([]); 
   const [productMainSelectionImagePrototypeArray, doSomethingProductMainSelectionImagePrototypeArray] = useState([]);
   const [productSelectionImagePrototypeArray, doSomethingProductSelectionImagePrototypeArray] = useState([]);

   const [productAddIsIdle, productAddIsIdleStatus] = useState(true);

   const [shippingOptions, doSomethingWithShippingOptions] = useState([]);
   const [macShippingOptionContainer, toggleColorMacShippingOptionContainer] = useState('white');
   const [jandtexpressShippingOptionContainer, toggleColorJandtexpressShippingOptionContainer] = useState('white');
   const [lbcShippingOptionContainer, toggleColorLbcShippingOptionContainer] = useState('white');

   const [updateMacSetItemProductId, doSomethingWithUpdateMacSetItemProductId] = useState('N/A');
   const [updateMacSetItemProductName, doSomethingWithUpdateMacSetItemProductName] = useState('N/A');
   const [updateMacSetItemProductDP, doSomethingWithUpdateMacSetItemProductDP] = useState('../images/Mac-leaves-image.png');
   const [updateMacSetItemLoadingStatus, doSomethingWithUpdateMacSetItemLoadingStatus] = useState(false);
   const [macSetItemUpdateItemSearchNumber, getMacSetUpdateItemSearchNumber] = useState();
   
   const [updateMacSetItemUpdateProduct, grabUpdateMacSetItemUpdateProduct] = useState();
   const [updateMacSetItemKeyNumber, doSomethingWithUpdateMacSetItemKeyNumber] = useState();

   //// is a set // is a set will on adding products in the mac set
   const [isASet, doSomethingWithIsASet] = useState();
   const [setCount, getSetCount] = useState(); 
                                                                               
   const [fd, fdInstance] = useState(new FormData());

   const [, updateState] = useState();
   const forceUpdate = useCallback(() => updateState({}), []);

   const config = {                              
    headers: {                                                  
       'content-type': 'multipart/form-data'       
    }
   }

  const addProduct = async (e) => {
  
      const vat = Number(productCapital) - Number(productSRP);

  //  productMainSelectionFileImages.push(productMainSelectionImage);
      productAddIsIdleStatus((status)=> status = false)
      await parseMainSelectionImages();
      await parseSelectionImages();

      const _publishedproducttimestamp = `${props.day}, ${props.date} ${props.month} ${props.year}, ${props.hour}:${props.minute}:${props.seconds}`

      fd.append('productname', productName)
      fd.append('productprice', productPrice)
      fd.append('productoriginator',productOriginator)
      fd.append('productcapital',productCapital)
      fd.append('s_r_p', productSRP)
      fd.append('vat', Number(productPrice) - Number(productCapital))
      fd.append('productdescription', productDescription)
      fd.append('productExtraInformationIsland', productExtraInformationIsland)
      fd.append('productExtraInformationProvince', productExtraInformationProvince)
      fd.append('productExtraInformationCity', productExtraInformationCity)
      fd.append('productExtraInformationBaranggay', productExtraInformationBaranggay)
      fd.append('productExInformationDetails', productExtraInformationData)
      fd.append('productSelectedColors', selectedColor)
      fd.append('productSelectedSizes', selectedSizes)
      fd.append('productInformationStock', productExtraInformationStock)
      fd.append('productYTLink', productYTLink)
      fd.append('ismacitem', macSetItem)
      fd.append('ismacsetitem',  isAMacSetProduct)
      fd.append('macsetitemnumber', macSetItemNumber)
      fd.append('macsetproducttype', macProductType)
      fd.append('producttype', productType)
      fd.append('productpublishedtimestamp', _publishedproducttimestamp)
      fd.append('weight', productExtraInformationWeight)
      fd.append('shippingoptions', shippingOptions)
      fd.append('isaset', isASet)
      fd.append('setcount', setCount)
     
      await axios.post('http://localhost:4000/macministrator/addproduct', fd, config)
        .then((response)=> {
            console.log(response)
            productAddIsIdleStatus((status)=> status = true) 
            doSomethingWithShippingOptions((data)=> data = []) 
            getProductExtraInformationData((data)=> data = []) 
            doSomethingSelectedColor((data)=> data = []) 
            doSomethingSelectedSizes((data)=> data = []) 
            getProductExtraInformationStock((data)=> data = 0) 
            getProductMainSelectionImage((data)=> data = []) 
            getProductMacSetDisplayImage((data)=> data = []) 
      })


  } 

  const addMacSetItem = async () => {

    macMainSetItemLoadingIndicationStatus((status)=> status = true )

    fd.append('macsetitemcontentdisplay', productMacSetDisplayImage)
    fd.append('macsetitemnumber', macMainSetItemNumber)
    fd.append('macsetname', macMainSetItemName)
    fd.append('macsetprice', macMainSetItemPrice)
    fd.append('macsetdescription', macMainSetItemDescription)
    fd.append('macitemmainsettype', macMainItemType)
    fd.append('macitemsettype', macItemType)
    fd.append('macsetoriginator', macSetOriginator)
    fd.append('macsetitemlocation', macSetLocation.toUpperCase())
    fd.append('macsetweight', macSetWeight)
    fd.append('macsetvat', Math.round(macSetVat))
    
    axios.post('http://localhost:4000/macsetitem/addamacsetitem', fd, config)
     .then((response)=> {
        console.log(response)
        macMainSetItemLoadingIndicationStatus((status)=> status = false)
     })

  }

  async function parseMainSelectionImages() {
    for (let i = 0; i < productMainSelectionFileImages.length; i++) {
      fd.append('mainproductimages', productMainSelectionFileImages[i])
    }
  }

  async function parseSelectionImages() {
    for (let i = 0; i < productSelectionFileImages.length; i++) {
      fd.append('selectionproductimages', productSelectionFileImages[i])
    }
  }

   useEffect(()=> {

    const _availableSizes =  document.getElementsByClassName('pickaavailablesizes')

    const _macShippingOptionContainer =  document.querySelector('.pickshippingoptions-mac');
    const _jandtexpressShippingOptionContainer =  document.querySelector('.pickshippingoptions-jandtexpress');
    const _lbcShippingOptionContainer =  document.querySelector('.pickshippingoptions-lbc');

    for (let i = 0; i < _availableSizes.length; i++) {
      _availableSizes[i].style.backgroundColor = 'aqua';
    }
  
    _macShippingOptionContainer.style.border = '1px solid black';
    _jandtexpressShippingOptionContainer.style.border = '1px solid black';
    _lbcShippingOptionContainer.style.border = '1px solid black';


   }, [])

   const getProductDetails = (e) => {
     switch(e.target.id) {
       case 'productname':
        getProductName((productdetails)=> productdetails = e.target.value)
       break;
       case 'productprice':
        getProductPrice((productdetails)=> productdetails = e.target.value)
       break;
       case 'originator':
        getProductOriginator((productdetails)=> productdetails = e.target.value)
       break;
       case 'capital':
        getProductCapital((productdetails)=> productdetails = e.target.value)
       break;
       case 'srp':
        getProductSRP((productdetails)=> productdetails = e.target.value)
       break;
       case 'productdescription':
        getProductDescription((productdetails)=> productdetails = e.target.value)
       break;
       case 'island':
        getProductExtraInformationIsland((location)=> location = e.target.value)
       break; 
       case 'province':
        getProductExtraInformationProvince((productdetails)=> productdetails = e.target.value)
       break;
       case 'city':
        getProductExtraInformationCity((productdetails)=> productdetails = e.target.value)
       break;
       case 'baranggay':
        getProductExtraInformationBaranggay((productdetails)=> productdetails = e.target.value)
       break;
       case 'stock':
        getProductExtraInformationStock((productdetails)=> productdetails = e.target.value)
       break;
       case 'weight':
        getProductExtraInformationWeight((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'ytlink':
        getProductExtraInformationStock((productdetails)=> productdetails = e.target.value)
       break;
       case 'ismacsetitem':
        isMacSetItem((isMacSetItem)=> isMacSetItem = e.target.value)
       break;
       case 'macsetnumber':
        doSomethingMacSetItemNumber((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'macmainsetitemnumber':
        alert(e.target.value)
        doSomethingWithMacMainSetItemNumber((isMacSetItem)=> isMacSetItem = e.target.value)
       break;
       case 'macmainsetitemname':
        doSomethingWithNacMainSetItemName((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'macmainsetproductdescription':
        doSomethingWithNacMainSetItemName((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'macmainsetitemdescription':
        doSomethingWithNacMainSetItemDescription((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'macmainsetproductprice':
        doSomethingWithNacMainSetItemPrice((macItemSetNumber)=> macItemSetNumber = e.target.value)
       break;
       case 'setcount':
        getSetCount((count)=> count = e.target.value)
       break; 
       case 'macsetoriginator':
        doSomethingWithMacSetOriginator((originator)=> originator = e.target.value)
       break; 
       case 'macmainsetweight':
        doSomethingWithMacSetWeight((weight)=> weight = e.target.value)
       break; 
       case 'macmainsetitemlocation':
        doSomethingWithMacSetLocation((location)=> location = e.target.value)
       break; 
       case 'macmainsetvat':
        doSomethingWithMacSetVat((vat)=> vat = e.target.value)
       break; 
     }
   }
   
   const displayProductMainImage = (e) => {

    const reader = new FileReader();
    const _container = e.target.parentElement;
    const _imageHolder = _container.children[0];

    switch(e.target.id) {
       case 'productmaindp':
        getProductMainSelectionImage((file)=> e.target.files[0])
       break;
    }

    reader.onload = () => {
      if ( reader.readyState === 2 ) {
        _imageHolder.src = reader.result
      }
    }
    reader.readAsDataURL(e.target.files[0])
    ///fd.append('content', e.target.files[0])
   }

   const displayMacSetDisplayImage = (e) => {

    const reader = new FileReader();
    const _container = e.target.parentElement;
    const _imageHolder = _container.children[0];

    switch(e.target.id) {
       case 'macsetitemssetdp':
        getProductMacSetDisplayImage((file)=> e.target.files[0])
       break;
    }

    reader.onload = () => {
      if ( reader.readyState === 2 ) {
        _imageHolder.src = reader.result
      }
    }
    reader.readAsDataURL(e.target.files[0])
   }

   const getProductMainEmbeddedVideo = (e) => {
      getProductYTLink((value)=> e.target.value)
   }

   const getMacSetItemEmbeddedVideo = (e) => {
      getMacSetItemYTLink((value)=> e.target.value)
   }

   const handleMainSelectionImageFileOnChange = (e, idx) => {

    const reader = new FileReader();
    const _targetImage = document.getElementsByClassName('dashboardspecificcommandcontainer-videoandcontetndisplayimage')

    switch(e.target.id) {
      case `${e.target.id}`:
        productMainSelectionFileImages.push(e.target.files[0])
      break;
   }

    reader.onload = () => {
      if ( reader.readyState === 2 ) {
        _targetImage[idx].src = reader.result
      }
    }
    reader.readAsDataURL(e.target.files[0])
   }
   
   const deleteMainselectionImagePickContainer = (e, idx) => {
      productMainSelectionImagePrototypeArray.splice(idx, 1)
      productMainSelectionFileImages.splice(productMainSelectionFileImages.indexOf(idx), 1)
      forceUpdate()
   }

   const handleSelectionImageFileOnChange = (e, idx) => {

    const reader = new FileReader();
    const _targetImage = document.getElementsByClassName('dashboardspecificcommandcontainer-videoandcontetndisplayimageselection')
   
    switch(e.target.id) {
      case `${e.target.id}`:
        productSelectionFileImages.push(e.target.files[0])
      break;

   }

    reader.onload = () => {
      if ( reader.readyState === 2 ) {
        _targetImage[idx].src = reader.result
      }
    }
    reader.readAsDataURL(e.target.files[0])
   }

   const deleteSelectionImagePickContainer = (e, idx) => {
    productSelectionImagePrototypeArray.splice(idx, 1)
    productSelectionFileImages.splice(productSelectionFileImages.indexOf(idx), 1)
    forceUpdate()
   }

   const getAvailableColors = (e, idx) => {
     
     const _getColor = document.getElementsByClassName('dashboardspecificcommandpositioningcontainer-color')[idx];

     if (  _getColor.style.border  === '2px solid dodgerblue') {
      _getColor.style.border = '1px solid black'
      selectedColor.splice(selectedColor.indexOf(_getColor.style.backgroundColor), 1)
      return
    }  

     if (  _getColor.style.border  === '1px solid black') {
      _getColor.style.border = '2px solid dodgerblue'
      selectedColor.push(_getColor.style.backgroundColor)
      return
    }  


     
   }

   const  getAvailablesSizes = (e, idx) => {

     const _availableSizes = document.getElementsByClassName('pickaavailablesizes')[idx]
   
     if (_availableSizes.style.backgroundColor === 'aqua') {
        _availableSizes.style.backgroundColor = 'dodgerblue'
        selectedSizes.push(_availableSizes.innerText)
        return
     } 

     if (_availableSizes.style.backgroundColor === 'dodgerblue') {
        _availableSizes.style.backgroundColor = 'aqua'
        selectedSizes.splice(selectedSizes.indexOf(_availableSizes.innerText), 1)
        return        
     }

   }

   const getSelectedShippingOptions = (e, idx) => {

    const _macShippingOptionContainer = document.querySelector('.pickshippingoptions-mac');
    const _jandtexpressShippingOptionContainer = document.querySelector('.pickshippingoptions-jandtexpress');
    const _lbcShippingOptionContainer = document.querySelector('.pickshippingoptions-lbc');

   //// unselected
   if ( idx === 0 ) {

     if ( macShippingOptionContainer === 'white' ) {

      toggleColorMacShippingOptionContainer((selected)=> selected = 'dodgerblue')

      shippingOptions.push({
                            shippingcompany: 'MAC',
                            dp: '../images/macshippinglogo.png'
                           })
     } 
  
   }

   if ( idx === 1 ) {
    if ( jandtexpressShippingOptionContainer === 'white' ) {

      toggleColorJandtexpressShippingOptionContainer((selected)=> selected = 'dodgerblue')

      shippingOptions.push({
        shippingcompany: 'J&T Express',
        dp: '../images/jandtexpresslogo.png'
       })
       
     } 
   }

   if ( idx === 2 ) {
    if ( lbcShippingOptionContainer === 'white' ) {

      toggleColorLbcShippingOptionContainer((selected)=> selected = 'dodgerblue')

      shippingOptions.push({
        shippingcompany: 'LBC',
        dp: '../images/lbc-logo.png'
       })
    
     } 
   }

   //// selected
   if ( idx === 0 ) {
    if ( macShippingOptionContainer === 'dodgerblue' ) {
      toggleColorMacShippingOptionContainer((selected)=> selected = 'white')
      let shippingCompany = (data) => data.shippingcompany === 'MAC'
      let removeThisIndex = shippingOptions.findIndex(shippingCompany)
      shippingOptions.splice(removeThisIndex)
     } 
   }

   if ( idx === 1) {
    if ( jandtexpressShippingOptionContainer === 'dodgerblue' ) {
      toggleColorJandtexpressShippingOptionContainer((selected)=> selected = 'white')
        let shippingCompany = (data) => data.shippingcompany === 'J&T Express'
        let removeThisIndex = shippingOptions.findIndex(shippingCompany)
        shippingOptions.splice(removeThisIndex)
     } 
   }

   if ( idx === 2 ) {
    if ( lbcShippingOptionContainer === 'dodgerblue' ) {
      toggleColorLbcShippingOptionContainer((selected)=> selected = 'white')
      let shippingCompany = (data) => data.shippingcompany === 'LBC'
      let removeThisIndex = shippingOptions.findIndex(shippingCompany)
      shippingOptions.splice(removeThisIndex)
     } 
   }

   }

   const showUpdateMacSetItemContainer = () => {
      const commandButtonsContainer = document.querySelector('#dashboardproductcommand-updatecontainerofcontainers');
      const updateMacContainer = document.querySelector('#dashboardproductcommand-updatemacitemcontainer');

      commandButtonsContainer.style.display = 'none';
      updateMacContainer.style.display = 'block';
   }

   const showUpdateItemContainer = () => {
     alert('Update item')
   }
  
   const searchItemForUpdateMacSetItem = async () => {

    doSomethingWithUpdateMacSetItemLoadingStatus((data)=> data = true)

    await axios.post('https://statichurryaskstaticrunmovementshamed/macministrator/getproduct/macsetitemupdate', {
                                                                    itemid: macSetItemUpdateItemSearchNumber
                                                                    })
      .then((response)=> {
         console.log(response)
         doSomethingWithUpdateMacSetItemProductId((val) => val = response.data.productId)  
         doSomethingWithUpdateMacSetItemProductName((val) => val = response.data.productName) 
         doSomethingWithUpdateMacSetItemProductDP((val) => val = response.data.productDP) 
         grabUpdateMacSetItemUpdateProduct((data)=> response.data.product)
        
         doSomethingWithUpdateMacSetItemLoadingStatus((data)=> data = false)
      })

   } 

  const addThisProductToMacSet = async () => {

     await axios.post('https://statichurryaskstaticrunmovementshamed/macsetitem/updatemacsetitem', {
                                                                    macsetitemnumberkey: updateMacSetItemKeyNumber,
                                                                    product: updateMacSetItemUpdateProduct
                                                                           })
      .then((response)=> {
         console.log(response)
      })

   }

   if (props.dashboardProductCommand === 'POST') {

   return(
     <Col id='dashboardproductcommandpositioningcontainer'>

       {
         productAddIsIdle ? (

          <>

          <Col id='dashboardproductcommandclosecontainer'>
             <button id='dashboardproductcommandclosebtn'
                     onClick={()=> {
                        props.showDashboardProductCommandContainer((display)=> display = 'none')
                     }}>
                    x
             </button>
          </Col>
  
          <Col id='dashboardproductcommandquerycontainer'>
  
             <Col className='dashboardproductcommandquerycontainer-contentcontainer1'>  
  
               <Col lg={6} className='dashboardproductcommandquery-fieldscontainer'>
  
                      <label className='dashboardproductcommandlabel'><b>Product name</b></label><br/>
                      <input type='text' 
                             id='productname'
                             className='dashboardproductcommandfield' 
                             onChange={(e)=> getProductDetails(e)}/><br/>
                      <label className='dashboardproductcommandlabel'><b>Product price</b></label><br/>
                      <input type='number' 
                             id='productprice'
                             className='dashboardproductcommandfield'
                             onChange={(e)=> getProductDetails(e)}/><br/>
                      <label className='dashboardproductcommandlabel'><b>Originator</b></label><br/>
                      <input type='text'
                             id='originator' 
                             className='dashboardproductcommandfield'
                             onChange={(e)=> getProductDetails(e)}/><br/>
                      <label className='dashboardproductcommandlabel'><b>Capital</b><span> <b>( This is optional. Extra information's on product will be used on data statistics in you're database)</b></span></label><br/>
                      <input type='number' 
                             id='capital'
                             className='dashboardproductcommandfield'
                             onChange={(e)=> getProductDetails(e)}/><br/>
                     <label className='dashboardproductcommandlabel'><b>SRP</b> <span><b>( This is optional. Extra information's on product will be used on data statistics in you're database )</b></span></label><br/>
                     <input type='number' 
                            id='srp'
                            className='dashboardproductcommandfield'
                            onChange={(e)=> getProductDetails(e)}/>
                     <label className='dashboardproductcommandlabel-productdescription'><b>Product description</b></label><br/>
                     <textarea className='dashboardproductcommanddescriptiontextarea'
                               id='productdescription'
                               onChange={(e)=> getProductDetails(e)}/>
  
                     <h5 className='dashboardproductcommandlabel-productdescription'><b>Provide product extra information:</b></h5>
                     <input type='text' 
                            id='island'
                            className='dashboardproductcommandlocationfield'
                            onChange={(e)=> getProductDetails(e)}
                            placeholder='Island ( Your location / Product location )'/><br/>
                     <input type='text' 
                            id='province'
                            className='dashboardproductcommandlocationfield'
                            onChange={(e)=> getProductDetails(e)}
                            placeholder='Province ( Your location / Product location )'/><br/>
                     <input type='text' 
                            id='city'
                            className='dashboardproductcommandlocationfield'
                            placeholder='City ( Your location / Product location )'
                            onChange={(e)=> getProductDetails(e)}/><br/>
                     <input type='text' 
                            id='baranggay'
                            placeholder='Baranggay ( Your location / Product location )'
                            className='dashboardproductcommandlocationfield'
                            onChange={(e)=> getProductDetails(e)}/><br/>
                   
                     <DashboardAddProductExtraInformation  productExtraInformationData={productExtraInformationData}
                                                           getProductExtraInformationData={getProductExtraInformationData}/>
                  
               </Col>
  
               <Col lg={6} className='dashboardproductcommandquery-videofieldscontainer'>    
  
               <Col id='dashboardspecificcommandcontainer-addcontentcontainerproducts'>
  
                     <img src='./images/Mac-leaves-image.png'
                          alt='Mac-leaves-image.png'
                          className='dashboardspecificcommandcontainer-videoandcontetndispalyimage'/>
  
                     <label htmlFor='productmaindp'
                            className='dashboardspecificcommandcontainer-videoandcontentlabel'>
                            add a image
                    </label>
  
                    <input type='file'
                          id='productmaindp' 
                          style={{display: 'none'}}
                          onChange={(e)=> displayProductMainImage(e)}/> 
  
                    <p className='dashboardspecificcommandcontainer-videoandcontentor'><b>or</b></p>
  
                    <input type='text' 
                           id='ytlink'
                           className='dashboardspecificcommandcontainer-videoandcontentytlinkinputfieldsnippet'
                           placeholder='Youtube link'
                           onChange={(e)=> getProductMainEmbeddedVideo(e)}/>
  
               </Col> 
  
               <Col id='dashboardspecificcommandcontainer-mainselectionimagescontainer'>
                 <h5 id='dashboardspecificcommandcontainer-mainselectionimageheader'>
                     <b>Add Main selection image's</b> <span><b>( Display image's/After main display image)</b></span></h5> 
                <Col>
                <Col>
                   <button className='dashboardproductcommandqueryvideofieldscontainer-addmainselectionimagebtn'
                           onClick={(e)=> {
                             productMainSelectionImagePrototypeArray.push('data')
                             forceUpdate()
                           }}>
                       +
                   </button>
                </Col>
               <Col className='dashboardproductcommandquery-mainselectionimage'>
                 {
                   productMainSelectionImagePrototypeArray.map((data, idx)=> {
                    return <Col lg={4} key={idx} className='dashboardproductcommandquery-mainselectionimagecontainer'>
                              <Col className='dashboardproductcommandquery-mainselectioimageimagecontainer'>
                                 <img src='./images/Mac-leaves-image.png'
                                      alt='Mac-leaves-image.png'
                                     className='dashboardspecificcommandcontainer-videoandcontetndisplayimage'/>
                              </Col>
  
                             <Col className='dashboardproductcommandquery-mainselectionimagebtncontainer'> 
  
                             <button className='dashboardproductcommandquery-mainselectionimagechangebtn'>
                                 <label htmlFor={`mainselectionimage${idx}`}>
                                     change
                                 </label>
                             </button> 
  
                             <input  type='file'
                                     id={`mainselectionimage${idx}`}
                                     className='mainselectionindex'
                                     style={{display: 'none'}}
                                     onChange={(e)=> handleMainSelectionImageFileOnChange(e, idx)}/>
  
                            <button className='dashboardproductcommandquery-mainselectionimagedeletebtn'
                                    onClick={(e)=> deleteMainselectionImagePickContainer(e, idx)}>
                                    delete
                            </button>
  
                             </Col>
                          </Col>
                   })
                 }
               </Col>
               </Col>
               </Col>
  
               <Col id='dashboardspecificcommandcontainer-selectionimagesfullcontainer'>
                   <h5 id='dashboardspecificcommandcontainer-selectionimageheader'><b>Add selection image's</b><span><b>( selection image's / specify selection image's )</b></span></h5> 
                <Col>
                <Col>
                  <button className='dashboardproductcommandqueryvideofieldscontainer-addmainselectionimagebtn'
                          onClick={(e)=> {
                             productSelectionImagePrototypeArray.push('data')
                             forceUpdate()
                  }}>
                        +
                  </button>
                </Col>
  
                <Col className='dashboardproductcommandquery-mainselectionimage'>
                {
                   productSelectionImagePrototypeArray.map((data, idx)=> {
                      return <Col lg={4} key={idx} className='dashboardproductcommandquery-mainselectionimagecontainer'>
                                  <Col className='dashboardproductcommandquery-mainselectioimageimagecontainer'>
                                      <img src='./images/Mac-leaves-image.png'
                                           alt='Mac-leaves-image.png'
                                          className='dashboardspecificcommandcontainer-videoandcontetndisplayimageselection'/>
                                  </Col>
                             <Col className='dashboardproductcommandquery-mainselectionimagebtncontainer'> 
  
                               <button className='dashboardproductcommandquery-mainselectionimagechangebtn'>
                                     <label htmlFor={`selectionimage${idx}`}>
                                           change
                                     </label>
                               </button>
  
                               <input  type='file'
                                       id={`selectionimage${idx}`}
                                       style={{display: 'none'}}
                                       onChange={(e)=>  handleSelectionImageFileOnChange(e, idx)}/>
  
                               <button className='dashboardproductcommandquery-mainselectionimagedeletebtn'
                                       onClick={(e)=> deleteSelectionImagePickContainer(e, idx)}>
                                       delete
                               </button>
  
                            </Col>
  
                          </Col>
                   })
                }
                </Col>
                </Col>
               </Col>
  
               <Col id='dashboardspecificcommandcontainer-choosecoloravalability'>
                    <h1 id='dashboardspecificcommandcontainer-choosecoloravalabilityheader'>Choose color</h1>
                 <Col id='dashboardspecificcommandcontainer-colorcontainer'>
                  {
                   [ 'red',
                     'tomato', 
                     'green',
                     'lightgreen',
                     'blue',
                     'dodgerblue',
                     'aqua',
                     'orange',
                     'yellow',
                     'violet',
                     'magenta',
                     'chocolate',
                     'brown',
                     'white',
                     'black',
                     'pink'
                   ].map((data, idx)=> {
                      return <Col lg={1} style={{backgroundColor: data}} className='dashboardspecificcommandpositioningcontainer-color'
                                  onClick={(e)=> getAvailableColors(e, idx)}>
                                <div className='dashboardspecificcommandcontainer-color'>
  
                                </div>
                             </Col>
                   })
                  }
                 </Col>
               </Col>
  
             
              <Col id='dashboardspecificcommandcontainer-pickavailablesizes'>
                 <h5 id='dashboardspecificcommandcontainer-pickavailablesizesheader'><b>Available sizes</b></h5>
                 <Col id='dashboardspecificcommandcontainer-pickavailablesizespositioningcontainer'>
                  {
                   [ 'xs', 
                     'sm', 
                     'md', 
                     'l', 
                     'lg', 
                     'xl'].map((data, idx)=> {
                           return <div key={idx} className='pickaavailablesizes'
                                       onClick={(e)=> getAvailablesSizes(e, idx)}>
                                         {data}
                                  </div>
                  })
                  }
                 </Col>
              </Col>
  
                  <label className='dashboardproductcommandlabelstock'><b>Stock</b></label><br/>
                  <input type='number' 
                         id='stock'
                         className='dashboardproductcommandfieldstock'
                         onChange={(e)=> getProductDetails(e)}/><br/>
                         
                  <label className='dashboardproductcommandlabelstock'><b>Weight ( grams )</b></label><br/>
                  <input type='text' 
                         id='weight'
                         className='dashboardproductcommandfieldstock'
                         onChange={(e)=> getProductDetails(e)}/><br/>

                  <Col id='dashboardspecificcommandcontainer-pickshippingoptions'>
                    <h5 id='dashboardspecificcommandcontainer-pickshippingoptionsheader'><b>Available sizes</b></h5>
                    <Col id='dashboardspecificcommandcontainer-pickshippingoptionspositioningcontainer'>
                     {
                      [ 
                        {
                         name: 'MAC', 
                         class: 'pickshippingoptions-mac',
                         selected: macShippingOptionContainer,
                         dp: '../images/macshippinglogo.png'
                        },
                        {
                         name: '', 
                         class: 'pickshippingoptions-jandtexpress',
                         selected: jandtexpressShippingOptionContainer,
                         dp: '../images/jandtexpresslogo.png' 
                        },
                        {
                         name: '', 
                         class:  'pickshippingoptions-lbc',
                         selected: lbcShippingOptionContainer,
                         dp: '../images/lbc-logo.png' 
                       } 
                      ].map((data, idx)=> {
                               return <div key={idx} className={data.class}
                                           style={{backgroundColor: data.selected}}
                                           onClick={(e)=> getSelectedShippingOptions(e, idx)}>
                                        <img src={data.dp} alt='MAC-DISPLAY-IMAGE-SHIPPINGADDRESSLOGO'
                                             className='pickshippingoptions-dp' />
                                        <p className='pickshippingoptions-shippingcompany'>{data.name}</p>  
                                      </div>
                     })
                      } 
                    </Col>
                  </Col>

                 
   
                  <label className='dashboardproductcommandlabelstock'><b>Is a mac set product</b></label><br/>
                  <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithIsAMacSetProduct((type)=> type = e.target.value)}>
                      <option>
                       
                      </option>
                      <option>
                        true
                      </option>
                      <option>
                        false
                      </option>
                  </Form.Select>
  
                  <label className='dashboardproductcommandlabelstock'><b>Mac set number</b></label><br/>
                  <input type='number' 
                         id='macsetnumber'
                         className='dashboardproductcommandfieldstock'
                         onChange={(e)=> getProductDetails(e)}/><br/>

                  <label className='dashboardproductcommandlabelstock'><b>Mac set type of product</b></label><br/>
                  <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithMacProductType((type)=> type = e.target.value)}>
                      <option>
                      
                      </option>
                      <option>
                        Goods
                      </option>
                      <option>
                        Item
                      </option>
                  </Form.Select>
              
                  <label className='dashboardproductcommandlabelstock'><b>Item, type of product</b></label><br/>
                  <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithProductType((type)=> type = e.target.value)}>
                      <option>
                      
                      </option>
                      <option>
                        Goods
                      </option>
                      <option>
                        Beverages
                      </option>
                      <option>
                         Basic/Daily needs
                      </option>
                      <option>
                        Condiments
                      </option>
                      <option>
                         Snacks
                      </option>
                      <option>
                          Equipment/Item
                      </option>
                      <option>
                          Apparel
                      </option>
                      <option>
                        Medicine
                      </option>
                      <option>
                        Medicine
                      </option>
                      <option>
                        Unique
                      </option>
                  </Form.Select>

                  <label className='dashboardproductcommandlabelstock'><b>Is a set</b></label><br/>
                  <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithIsASet((type)=> type = e.target.value)}>
                      <option>
                      
                      </option>
                      <option>
                        true
                      </option>
                      <option>
                        false
                      </option>
                  </Form.Select>

                  <label className='dashboardproductcommandlabelstock'><b>Set count ( this item on MAC set )</b></label><br/>
                  <input type='number' 
                         id='setcount'
                         className='dashboardproductcommandfieldstock'
                         onChange={(e)=> getProductDetails(e)}/><br/>

               </Col>
  
             </Col>
  
          </Col>
  
          <Col lg={6}  className='dashboardproductcommandquerycontainer-contentcontainer2'>
                 <button id='dashboardproductcommandquerycontainer-commandbutton'
                         onClick={(e)=> addProduct(e)}>
                   {props.dashboardProductCommand}
                 </button>
          </Col>

         </>

         ) : (

          <Spinner animation="border" variant="info" id='productadd-loadingspinner'/>

         )

       }
       
     </Col>
   )
   }

   if ( props.dashboardProductCommand === 'Add Mac SET ITEM' ) {

    return (

      <Col id='dashboardproductcommandpositioningcontainer'>
         {
           macMainSetItemLoadingIndicator ? (
            <Spinner animation="border" variant="danger" />
           ) :
           (
            <> 
            <Col id='dashboardproductcommandclosecontainer'>
               <button id='dashboardproductcommandclosebtn'
                       onClick={()=> {
                          props.showDashboardProductCommandContainer((display)=> display = 'none')
                       }}>
                     x
               </button>
            </Col>
 
            <Col id='dashboardproductcommandquerycontainer'>
 
            <Col className='dashboardproductcommandquerycontainer-contentcontainer1'>
 
              <Col lg={6} className='dashboardproductcommandquery-fieldscontainer'>
 
               <label className='dashboardproductcommandlabel'><b>Mac set number</b></label><br/>
               <input type='number' 
                      id='macmainsetitemnumber'
                      className='dashboardproductcommandfield' 
                      onChange={(e)=> getProductDetails(e)}/><br/>

               <label className='dashboardproductcommandlabel'><b>Mac set ORIGINATOR</b></label><br/>
               <input type='text' 
                      id='macsetoriginator'
                      className='dashboardproductcommandfield' 
                      onChange={(e)=> getProductDetails(e)}/><br/>

               <label className='dashboardproductcommandlabel'><b>Mac set name</b></label><br/>
               <input type='text' 
                      id='macmainsetitemname'
                      className='dashboardproductcommandfield' 
                      onChange={(e)=> getProductDetails(e)}/><br/>
 
               <label className='dashboardproductcommandlabel-productdescription'><b>Mac set item description</b></label><br/>
               <textarea className='dashboardproductcommanddescriptiontextarea'
                              id='macmainsetitemdescription'
                              onChange={(e)=> getProductDetails(e)}/>
 
               <label className='dashboardproductcommandlabel'><b>MAC set price</b></label><br/>
               <input type='number'   
                      id='macmainsetproductprice'
                      className='dashboardproductcommandfield'
                      onChange={(e)=> getProductDetails(e)}/><br/>

               <label className='dashboardproductcommandlabel'><b>VALUE ADDED TAX ( VAT )</b></label><br/>
               <input type='number'   
                      id='macmainsetvat'
                      className='dashboardproductcommandfield'
                      onChange={(e)=> getProductDetails(e)}/><br/>

                  <h5 className='dashboardproductcommandlabel-productdescription'><b>MAC item location:</b></h5>
                     <input type='text' 
                            id='macmainsetitemlocation'
                            className='dashboardproductcommandlocationfield'
                            onChange={(e)=> getProductDetails(e)}
                            placeholder='Island ( Your location / Product location )'/><br/>
                   

               <label className='dashboardproductcommandlabel'><b>Weight ( grams )</b></label><br/>
               <input type='number'   
                      id='macmainsetweight'
                      className='dashboardproductcommandfield'
                      onChange={(e)=> getProductDetails(e)}/><br/>
 
               <label className='dashboardproductcommandlabel'><b>Mac main set type of item</b></label><br/>
               <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithMacMainItemType((type)=> type = e.target.value)}>
                  <option>
                   
                  </option>
                  <option>
                    Goods
                  </option>
                  <option>
                    Item
                  </option>        
               </Form.Select>

               <label className='dashboardproductcommandlabel'><b>Mac set type of item</b></label><br/>
               <Form.Select size="lg" id='dashboardproduct-selecttypeofitem' onChange={(e) => doSomethingWithMacItemType((type)=> type = e.target.value)}>
                  <option>
                   
                  </option>
                  <option>
                    Food
                  </option>
                  <option>
                    Item
                  </option>  
               </Form.Select>
 
           
               <Col id='dashboardspecificcommandcontainer-addcontentcontainerproductsmacsetitems'> 
 
                  <img src='./images/Mac-leaves-image.png'
                       alt='Mac-leaves-image.png'
                       className='dashboardspecificcommandcontainer-videoandcontetndispalyimagemacsetitems'/>
 
                  <label htmlFor='macsetitemssetdp'
                         className='dashboardspecificcommandcontainer-videoandcontentlabelmacsetitems'>
                      add a image
                  </label>
 
                  <input type='file'
                         id='macsetitemssetdp' 
                         style={{display: 'none'}}
                         onChange={(e)=> displayMacSetDisplayImage(e)}/> 
 
                  <p className='dashboardspecificcommandcontainer-videoandcontentormacsetitems'><b>or</b></p>
 
                  <input type='text' 
                         id='ytlink'
                         className='dashboardspecificcommandcontainer-videoandcontentytlinkinputfieldsnippetmacsetitems'
                         placeholder='Youtube link'
                         onChange={(e)=> getMacSetItemEmbeddedVideo(e)}/>
 
              </Col>
 
              </Col>
 
            </Col>
 
            </Col>
      
            <Col lg={6}  className='dashboardproductcommandquerycontainer-contentcontainer2'>
                <button id='dashboardproductcommandquerycontainer-commandbutton'
                        onClick={()=> addMacSetItem()}>
                  {props.dashboardProductCommand}
                </button>
            </Col>
           </>
           )
         }
        
      </Col>
    )
   }

   if ( props.dashboardProductCommand === 'UPDATE' ) {
      return (
        <Col id='dashboardproductcommandupdatecontainer'>
          
          <Col id='dashboardproductcommand-updatemacsetitemclosebuttoncontainer'>
             <button id='dashboardproductcommand-updatemacsetitemclosebutton'
                     onClick={()=> {
                        props.showDashboardProductCommandContainer((display)=> display = 'none')
                     }}>
                    x
             </button>
          </Col>

          <Col id='dashboardproductcommand-updatemacsetitemcontentcontainer'>

            <Col id='dashboardproductcommand-updatecontainerofcontainers'>
            <Col id='dashboardproductcommand-updatemacsetitembuttoncontainer'>
               <button id='dashboardproductcommand-updatemacsetitembutton'
                       onClick={()=> showUpdateMacSetItemContainer()}>
                   Update MAC set item
               </button>
            </Col>
            <Col id='dashboardproductcommand-updateitembuttoncontainer'>
               <button id='dashboardproductcommand-updateitembutton'
                       onClick={()=> showUpdateItemContainer()}>
                  Update an item
               </button>
            </Col>
            </Col>

            <Col id='dashboardproductcommand-updatemacitemcontainer'>
              <p id='dashboardproductcommandupdatemacitem-updatemacsetsearchitemheader'>Seach item</p>
              <input type='number'
                     placeholder='Item number'
                     id='dashboardproductcommandupdatemacitem-updatemacsetitemnumberfield'
                     onChange={(e)=> getMacSetUpdateItemSearchNumber((itemid) => itemid = e.target.value)}/>
              <button id='dashboardproductcommandupdatemacitem-searchbutton'
                      onClick={()=> searchItemForUpdateMacSetItem()}>
                  search
              </button>
             
              <Col id='dashboardproductcommandupdatemacitem-specificproductcontainer'>

                {
                  updateMacSetItemLoadingStatus ? (
                    <Spinner animation="border" variant="dark" />
                  ) : (
                    <>
                     <Col id='dashboardproductcommandupdatemacitem-specificproductcont1'>
                       <h4 className='dashboardproductcommandupdatemacitem-indication'>Product id: {updateMacSetItemProductId}</h4>
                       <h4 className='dashboardproductcommandupdatemacitem-indication'>Product name: {updateMacSetItemProductName}</h4>
                     </Col>
                     <Col id='dashboardproductcommandupdatemacitem-specificproductcont2'>
                       <img src={updateMacSetItemProductDP}
                            alt='MAC-PRODUCTDISPLAYIMAGE'
                            id='dashboardproductcommandupdatemacitem-productdp'/>
                     </Col>
                   </>
                  )
                }
                
              </Col>

              <p id='dashboardproductcommandupdatemacitem-updatemacsetitemheader'>Update MAC set item</p>
              <input type='number'
                    placeholder='MAC set item number'
                    id='dashboardproductcommandupdatemacitem-updatemacsetitemnumberfield'
                    onChange={(e)=> doSomethingWithUpdateMacSetItemKeyNumber((val)=> val = e.target.value)}/>
              <Col id='dashboardproductcommandupdatemacitem-commandbuttoncontainer'>
                <button id='dashboardproductcommandupdatemacitem-commandbuttonadd'
                        onClick={()=> addThisProductToMacSet()}>
                    Add
                </button>
                <button id='dashboardproductcommandupdatemacitem-commandbuttonremove'>Remove</button>
              </Col>

            </Col>

            <Col id='dashboardproductcommand-updateitemcontainer'>
              2
            </Col>

          </Col>

        </Col>
      )
   }

}

function DashboardAddProductExtraInformation(props) {

  const [productextrainformation, doSomethingWithProductExtraInformation] = useState([]);
  const [displayProductExtraInformationData, displayDoSomethingWithProductExtraInformation] = useState([]);
  
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  ///  productExtraInformationData={props.productExtraInformationData}
  /// getProductExtraInformationData={props.getProductExtraInformationData}

  const addFields = (e) => {
    productextrainformation.push('data')
    forceUpdate()
  }

  const addProductExtraInformation = (e, idx) => {
     const _targetData = document.getElementsByClassName('dashboardextrainformation-field')
     props.productExtraInformationData.push(_targetData[idx].value)
     forceUpdate()
  }

  return(
     <Col className='dashboardproductextrainformation'>
         <Col className='dashboardproductextrainformation-addextrainformationbtncontainer'>
           <button className='dashboardproductextrainformation-addextrainformationbtn'
                   onClick={(e)=> addFields(e)}>
               +
           </button>
         </Col>
         <Col id='dashboardextrainformationcontainer'>
            {
            props.productExtraInformationData.map((data, idx)=> {
               return <Col key={idx} className='dashboardextrainformation'> 
                         <Col lg={1} className='dashboardextrainformation-data'>
                            {data}
                         </Col>
                         <Col>
                            <button className='dashboardextrainformation-deletebutton'
                                    onClick={(e)=> {
                                      props.productExtraInformationData.splice(idx, 1)
                                      forceUpdate()
                                    }}>
                                 delete
                            </button>
                         </Col>
                     </Col>
            })
            }
            {
             productextrainformation.map((data, idx)=> {
               return  <Col key={idx} className='dashboardextrainformation'>
                          <Col lg={9}>
                             <input type='text'
                                    className='dashboardextrainformation-field'/>
                          </Col>
                          <Col className='dashboardextrainformation-buttonscontainer'>
                             <button className='dashboardextrainformation-addbutton'
                                onClick={(e)=> addProductExtraInformation(e, idx)}>add</button>
                              <button className='dashboardextrainformation-deletebutton'
                                onClick={(e)=> { 
                                            productextrainformation.splice(idx, 1)
                                        }}>
                                        x
                              </button>
                         </Col>
                      </Col>
             })
           }
         </Col>
     </Col>
  )
}




