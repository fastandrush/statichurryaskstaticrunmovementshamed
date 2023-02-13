import axiosCreatedInstance from '../lib/axiosutil';

export default async function syncdata(previoususer) {
    
   const _mpcholder = previoususer;

   const _content = await getContent();  
   //const _userdata = await getUserData(_mpcholder);
   const _merchandises = await getAllMarketingProducts();  

   const data = {
     _content: _content,
     //_currentloginuser: _userdata,
     _marketing: _merchandises,
   }

   return data;

}

//// content 
async function getContent() {
  const _contents = {
     _mpc: await getMPCContent(),
     _popularposts: await getPopularPostsContent(),
     _latestcontents: await getLatestContents()
  }
  return _contents
}

async function getMPCContent() {
 let _mpccontent = undefined;
 await axiosCreatedInstance.get('/content/masterprotectionconsitution')
   .then((response)=> {
     const responsedata = response.data;
     _mpccontent = responsedata;
   })
 return _mpccontent;
}
async function getPopularPostsContent() {
 let _popularcontent = undefined;
 await axiosCreatedInstance.get('/content/popularposts')
   .then((response)=> {
     const responsedata = response.data;
     _popularcontent = responsedata;
   })
 return _popularcontent;
}
async function getLatestContents() {
 let _latestcontents = undefined;
 await axiosCreatedInstance.get('/content/latestcontents')
   .then((response)=> {
     const responsedata = response.data;
     _latestcontents = responsedata;
   })
 return _latestcontents;
}

//// mpcholder 
async function getUserData(_mpcholder) {

    let userlocation = undefined;
    let userdata = undefined;
    let _mpcholderdata = null;
   
    switch(_mpcholder.userstatus) {
      case 'Visitor':
         return _mpcholder;
      break;
      case 'Registered':
    
       await axiosCreatedInstance.post('/mpcholder/userdata/', {
                                 mobileidnumber: _mpcholder.mobileidnumber
                              }).then( async (response)=> {
                               _mpcholderdata = response.data;
                              })
  
       return _mpcholderdata;
      break;
      default:
        return
    }   

    // qeurying user collection to get a favorite items on cart

    {/*const url = '/futuremacholder/getcurrentlyloginmacuser/';
    axios.post(url, { 
      user: parsedUser
    })
  
     .then( async (response)=> {
  
      
       
       }
  
      getIfCurrentlyLoginUser((user)=> user = response.data)
     // getMacCredits((credits)=> credits = Number(response.data.maccredits.based) + Number(response.data.maccredits.investment))
    //  await getMacSetItems(response.data.userlocation)
      
     })
    */}
  
}

//// marketing
async function getAllMarketingProducts() {
  const _marketingproducts = {
     _mpcsets: await getMPCMarketingProductSets(),
     _merchandises: await getMerchandises()
  }

  return _marketingproducts;
}  
async function getMPCMarketingProductSets() {
 let sets = undefined;
   await axiosCreatedInstance.get('/marketing/set/mpcmarketing')
         .then((response)=>{
           sets = response.data;
          })
   return sets;
}
async function getMerchandises() {
  let _merchandises = undefined
 
  await axiosCreatedInstance.get('/marketing/all/merchandises')
     .then((response)=> {
       const responsedata = response.data;
       _merchandises = responsedata;
   })
    
  return _merchandises;
}






  