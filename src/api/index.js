import axios from '@/utils/request'
//请求示例
//get
export const mokeGet = (data) => {
   return axios({
      url: "/loginIndex",
      method: "get",
      data,
      config: {
         headers: {
            'Request-Type': 'application/json'
         },
         timeout: 10000
      }
   })
}
//post
export const mokePost = (data) => {
   return axios({
      url: "/api/test",
      method: "post",
      data,
      config: {
         headers: {
            'Request-Type': 'application/json'
         },  
         timeout: 10000
      }
   })
}