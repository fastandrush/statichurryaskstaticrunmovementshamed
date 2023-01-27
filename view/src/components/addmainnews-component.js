import React, { useState } from 'react';

import { Col,
         Spinner } from 'react-bootstrap';

import axios from 'axios';

import '../styles/addmainnews.scss';

import { FileCheck } from 'react-bootstrap-icons';


export default function AddMainNews() {

    

    return(
        <Col id='addmainnews'>
          <AddMainNewsForm />
          <AddMacNewsForm />
          <AddPhNewsForm />
          <AddVideosForm />
        </Col>
    )
}


function AddMainNewsForm() {

    const [whenAddingMainNewsLoadingIndication, whenAddingMainNewsLoadingIndicationStatus] = useState(false);

    const [topicThatsOnMainNews, getTopicThatsOnMainNews] = useState('');
    const [displayImageThatsOnMainNews, getDisplayImageThatsOnMainNews] = useState('');
    const [goalThatsOnMainNews, getGoalThatsOnMainNews] = useState('');
    const [authorThatsOnMainNews, getAuthorThatsOnMainNews] = useState('');
    const [dateThatsOnMainNews, getDateThatsOnMainNews] = useState('');
    const [sequenceNumberOnMainNews, getSequenceNumberOnMainNews] = useState('');

    const [mainNewsReleased, mainNewsIsRealeased] = useState(false); 

    const [fd, fdinstance] = useState(new FormData());

    const config = {      
      headers: {     
       'content-type': 'multipart/form-data'     
      }
    }

    const displayMainNewsImage = (e) => {
     
        const reader = new FileReader();

        const _container = e.target.parentElement;
        const _imageHolder = _container.children[4];

        reader.onload = () => {
         if ( reader.readyState === 2 ) {
           _imageHolder.src = reader.result
         }
        }

        reader.readAsDataURL(e.target.files[0])
        fd.append('image', e.target.files[0])
    }

    const getHeadersCurrentMainNews = (e) => {
       
       switch(e.target.id) {
         case "topic": 
          getTopicThatsOnMainNews(e.target.value)
         break;
         case "goal":
          getGoalThatsOnMainNews(e.target.value)
         break;
         case "author":
          getAuthorThatsOnMainNews(e.target.value)
         break;
         case "date":
          getDateThatsOnMainNews(e.target.value)
         break;
         default:
         return
       }

    } 

    const handleSequenceNumberOnMainNews = (e) => {
      getSequenceNumberOnMainNews((sequence)=> sequence = e.target.value)
    }

    const releaseNews = () => {

      whenAddingMainNewsLoadingIndicationStatus((isIdle)=> isIdle = true)
      fd.append('topic', topicThatsOnMainNews)
      fd.append('goal', goalThatsOnMainNews)
      fd.append('author', authorThatsOnMainNews)
      fd.append('date', dateThatsOnMainNews)
      fd.append('sequence', sequenceNumberOnMainNews)

      axios.post('http://localhost:4000/news/add/mainnews', 
                                     fd,
                                     config
                                     ).then((response)=> { 
                                       console.log(response.data)
                                       if (response.data === 'Main news added...') {
                                         mainNewsIsRealeased((isIdle) => isIdle = true)
                                       }
                                     })
    }

  return (
    <Col id='addmainnewsform'> 
       <h1>Add Main News</h1>
    {
       whenAddingMainNewsLoadingIndication ? (
    <>
       {
          mainNewsReleased ? (
           <>
             <p>Main News Added</p>
           </>
         ) : (
           <Spinner animation="border" variant="danger" />
         )
       }  
    </> ) :
        (
           <>
             <input type='text'
                id='topic'
                onChange={(e)=> getHeadersCurrentMainNews(e)}/>

             <label htmlFor='mainnewsdp1'>
               display image
             </label>

             <input type='file'
                id='mainnewsdp1'
                style={{display: 'none'}}
                onChange={(e)=> displayMainNewsImage(e)}/> 

             <img src='./images/Mac-leaves-image.png'
                  alt='Mac-leaves-image.png'
                  id='mainewsdisplayimage'/>

             <input type='text'
                id='goal'
                onChange={(e)=> getHeadersCurrentMainNews(e)}/>  

             <input type='number'
               id='number'
               onChange={(e)=> handleSequenceNumberOnMainNews(e)}/>

             <input type='text'
                    id='author'
                    onChange={(e)=> getHeadersCurrentMainNews(e)}/>

             <input type='text'
                    id='date'
                    onChange={(e)=> getHeadersCurrentMainNews(e)}/>   

             <button type='submit'
                onClick={()=> releaseNews()}>
                   Release news
             </button>
           </>
        )
     }
    </Col>
  );

}

function AddMacNewsForm() {

    const [whenAddingMacNewsLoadingIndication, whenAddingMacNewsLoadingIndicationStatus] = useState(false);

    const [topicThatsOnMacNews, getTopicThatsOnMacNews] = useState('');
    const [displayImageThatsOnMacNews, getDisplayImageThatsOnMacNews] = useState('');
    const [goalThatsOnMacNews, getGoalThatsOnMacNews] = useState('');
    const [authorThatsOnMacNews, getAuthorThatsOnMacNews] = useState('');
    const [dateThatsOnMacNews, getDateThatsOnMacNews] = useState('');
    const [sequenceNumberOnMacNews, getSequenceNumberOnMacNews] = useState('');

    const [macNewsReleased, macNewsIsRealeased] = useState(false); 

    const [fd, fdinstance] = useState(new FormData());

    const config = {      
      headers: {     
       'content-type': 'multipart/form-data'     
      }
    }

    const displayMacNewsImage = (e) => {
        
        const reader = new FileReader();

        const _container = e.target.parentElement;
        const _imageHolder = _container.children[4];

        reader.onload = () => {
         if ( reader.readyState === 2 ) {
           _imageHolder.src = reader.result
         }
        }

        reader.readAsDataURL(e.target.files[0])
        fd.append('image', e.target.files[0])
    }

    const getHeadersCurrentMacNews = (e) => {
       
       switch(e.target.id) {
         case "topic": 
          getTopicThatsOnMacNews(e.target.value)
         break;
         case "goal":
          getGoalThatsOnMacNews(e.target.value)
         break;
         default:
         return
       }

    } 

    const handleSequenceNumberOnMacNews = (e) => {
      getSequenceNumberOnMacNews((sequence)=> sequence = e.target.value)
    }

    const releaseNews = () => {

      whenAddingMacNewsLoadingIndicationStatus((isIdle)=> isIdle = true)
      fd.append('topic', topicThatsOnMacNews)
      fd.append('goal', goalThatsOnMacNews)
      fd.append('author', authorThatsOnMacNews)
      fd.append('date', dateThatsOnMacNews)
      fd.append('sequence', sequenceNumberOnMacNews)

      axios.post('http://localhost:4000/news/add/macnews', 
                                     fd,
                                     config
                                     ).then((response)=> { 
                                       console.log(response.data)
                                       if (response.data === 'Mac news added...') {
                                         macNewsIsRealeased((isIdle) => isIdle = true)
                                       }
                                     })
    }

  return (
    <Col id='addmacnewsform'> 
      <h1>Add Mac News</h1>
    {
       whenAddingMacNewsLoadingIndication ? (
    <>
       {
          macNewsReleased ? (
           <>
             <p>Main News Added</p>
           </>
         ) : (
           <Spinner animation="border" variant="danger" />
         )
       }  
    </> ) :
        (
           <>
             <input type='text'
                id='topic'
                onChange={(e)=> getHeadersCurrentMacNews(e)}/>

             <label htmlFor='mainnewsdp'>
               display image
             </label>

             <input type='file'
                id='mainnewsdp'
                style={{display: 'none'}}
                onChange={(e)=> displayMacNewsImage(e)}/> 

             <img src='./images/Mac-leaves-image.png'
                  alt='Mac-leaves-image.png'
                  id='mainewsdisplayimage'/>

             <input type='text'
                id='goal'
                onChange={(e)=> getHeadersCurrentMacNews(e)}/>  

             <input type='number'
               id='number'
               onChange={(e)=> handleSequenceNumberOnMacNews(e)}/>

              
             <input type='text'
                    id='author'
                    onChange={(e)=> getHeadersCurrentMacNews(e)}/>

             <input type='text'
                    id='date'
                    onChange={(e)=> getHeadersCurrentMacNews(e)}/>   


             <button type='submit'
                onClick={()=> releaseNews()}>
                   Release news
             </button>
           </>
        )
     }
    </Col>
  );

}

function AddPhNewsForm() {

  const [whenAddingPhNewsLoadingIndication, whenAddingPhNewsLoadingIndicationStatus] = useState(false);

  const [topicThatsOnPhNews, getTopicThatsOnPhNews] = useState('');
  const [displayImageThatsOnPhNews, getDisplayImageThatsOnPhNews] = useState('');
  const [goalThatsOnPhNews, getGoalThatsOnPhNews] = useState('');
  const [authorThatsOnPhNews, getAuthorThatsOnPhNews] = useState('');
  const [dateThatsOnPhNews, getDateThatsOnPhNews] = useState('');
  const [sequenceNumberOnPhNews, getSequenceNumberOnPhNews] = useState('');

  const [PhNewsReleased, phNewsIsRealeased] = useState(false); 

  const [fd, fdinstance] = useState(new FormData());

  const config = {      
    headers: {     
     'content-type': 'multipart/form-data'     
    }
  }

  const displayPhNewsImage = (e) => {
     
      const reader = new FileReader();

      const _container = e.target.parentElement;
      const _imageHolder = _container.children[4];

      reader.onload = () => {
       if ( reader.readyState === 2 ) {
         _imageHolder.src = reader.result
       }
      }

      reader.readAsDataURL(e.target.files[0])
      fd.append('image', e.target.files[0])
  }

  const getHeadersCurrentPhNews = (e) => {
     
     switch(e.target.id) {
       case "topic": 
        getTopicThatsOnPhNews(e.target.value)
       break;
       case "goal":
        getGoalThatsOnPhNews(e.target.value)
       break;
       default:
       return
     }

  } 

  const handleSequenceNumberOnPhNews = (e) => {
    getSequenceNumberOnPhNews((sequence)=> sequence = e.target.value)
  }

  const releaseNews = () => {

    whenAddingPhNewsLoadingIndicationStatus((isIdle)=> isIdle = true)
    fd.append('topic', topicThatsOnPhNews)
    fd.append('goal', goalThatsOnPhNews)
    fd.append('author', authorThatsOnPhNews)
    fd.append('date', dateThatsOnPhNews)
    fd.append('sequence', sequenceNumberOnPhNews)

    axios.post('http://localhost:4000/news/add/phnews', 
                                   fd,
                                   config
                                   ).then((response)=> { 
                                     console.log(response.data)
                                     if (response.data === 'Mac news added...') {
                                      phNewsIsRealeased((isIdle) => isIdle = true)
                                     }
                                   })
  }

return (
  <Col id='addphnewsform'> 
    <h1>Add Ph News</h1>
  {
     whenAddingPhNewsLoadingIndication ? (
  <>
     {
        PhNewsReleased ? (
         <>
           <p>Ph News Added</p>
         </>
       ) : (
         <Spinner animation="border" variant="danger" />
       )
     }  
  </> ) :
      (
         <>
           <input type='text'
              id='topic'
              onChange={(e)=> getHeadersCurrentPhNews(e)}/>

           <label htmlFor='phnewsdp'>
             display image
           </label>

           <input type='file'
              id='phnewsdp'
              style={{display: 'none'}}
              onChange={(e)=> displayPhNewsImage(e)}/> 

           <img src='./images/Mac-leaves-image.png'
                alt='Mac-leaves-image.png'
                id='phnewsdisplayimage'/>

           <input type='text'
              id='goal'
              onChange={(e)=> getHeadersCurrentPhNews(e)}/>  

           <input type='number'
             id='number'
             onChange={(e)=> handleSequenceNumberOnPhNews(e)}/>

            
           <input type='text'
                  id='author'
                  onChange={(e)=> getHeadersCurrentPhNews(e)}/>

           <input type='text'
                  id='date'
                  onChange={(e)=> getHeadersCurrentPhNews(e)}/>   


           <button type='submit'
              onClick={()=> releaseNews()}>
                 Release news
           </button>
         </>
      )
   }
  </Col>
);

}

function AddVideosForm() {

  const [whenAddingVideosLoadingIndication, whenAddingVideosLoadingIndicationStatus] = useState(false);

  const [topicThatsOnVideos, getTopicThatsOnVideos] = useState('');
  const [displayImageThatsOnVideoss, getDisplayImageThatsOnVideos] = useState('');
  const [goalThatsOnVideos, getGoalThatsOnVideos] = useState('');
  const [authorThatsOnVideos, getAuthorThatsOnVideos] = useState('');
  const [dateThatsOnVideos, getDateThatsOnVideos] = useState('');
  const [sequenceThatsOnVideos, getSequenceThatsOnVideos] = useState('');
  const [videoThatsOnVideos, getVideoThatsOnVideos] = useState('');
  const [sequenceNumberThatsOnVideos, getSequenceNumberOnVideos] = useState('');

  const [videosReleased, videosIsRealeased] = useState(false); 

  const getHeadersCurrentVideos = (e) => {
     
     switch(e.target.id) {
       case "topic": 
        getTopicThatsOnVideos(e.target.value)
       break;
       case "goal":
        getGoalThatsOnVideos(e.target.value)
       break;
       case "author":
        getAuthorThatsOnVideos(e.target.value)
       break;
       case "date":
        getDateThatsOnVideos(e.target.value)
       break;
       case "sequence":
        getSequenceThatsOnVideos(e.target.value)
       break;
       case "video":
        getVideoThatsOnVideos(e.target.value)
       break;
       default:
       return
     }

  } 

  const handleSequenceNumberOnVideos = (e) => {
    getSequenceNumberOnVideos((sequence)=> sequence = e.target.value)
  }

  const releaseNews = () => {

    whenAddingVideosLoadingIndicationStatus((isIdle)=> isIdle = true)

  
    axios.post('http://localhost:4000/news/add/videos', {
                                           topic: topicThatsOnVideos,
                                           goal: goalThatsOnVideos,
                                           author: authorThatsOnVideos,
                                           date: dateThatsOnVideos,
                                           sequence: sequenceNumberThatsOnVideos,
                                           video: videoThatsOnVideos
                                   }
                                   ).then((response)=> { 
                                     console.log(response.data)
                                     if (response.data === 'Video added...') {
                                      videosIsRealeased((isIdle) => isIdle = true)
                                     }
                                   })
  }

return (
  <Col id='addvideosform'> 
    <h1>Add Videos News</h1>
  {
     whenAddingVideosLoadingIndication ? (
  <>
     {
        videosReleased ? (
         <>
           <p>Videos  Added</p>
         </>
       ) : (
         <Spinner animation="border" variant="danger" />
       )
     }  
  </> ) :
      (
         <>
           <input type='text'
              id='topic'
              onChange={(e)=> getHeadersCurrentVideos(e)}/>

           <input type='text'
              id='goal'
              onChange={(e)=> getHeadersCurrentVideos(e)}/>  

           <input type='number'
             id='sequence'
             onChange={(e)=> handleSequenceNumberOnVideos(e)}/>

           <input type='text'
                  id='author'
                  onChange={(e)=> getHeadersCurrentVideos(e)}/>  

           <input type='text'
                  id='date'
                  onChange={(e)=> getHeadersCurrentVideos(e)}/>  

           <input type='text'
                  id='video'
                  onChange={(e)=> getHeadersCurrentVideos(e)}/>

           <button type='submit'
              onClick={()=> releaseNews()}>
                 Release news
           </button>

         </>
      )
   }
  </Col>
);

}

