
import pathnamelocation from '../lib/pathnamelocation'
import loadprevioususer from '../lib/loadprevioususer';
import syncdata from '../lib/syncdata';


export default async function loadsyncdata() {
 
  let pathname = await pathnamelocation();

  switch(pathname) {
    case '/':
      let previoususer = await loadprevioususer()
      let data = await syncdata(previoususer)
      return data
    break;
  }

}