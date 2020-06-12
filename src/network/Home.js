import {request} from "./request";

function getHomemultidata() {
  return request({
    url:'/home/multidata',

  })
}

function getHomegoodsdata(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }

  })
}
export{
  getHomemultidata,
  getHomegoodsdata
}
