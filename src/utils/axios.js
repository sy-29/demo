import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";
const instance = axios.create({
   baseURL: import.meta.env.VITE_RES_URL,
   timeout: 5000,
   headers: {
      'Content-Type': 'application/json;charset=UTF-8'
   }
});

let loading;

let requestCount = 0
const showLoading = ()=>{
   if(requestCount === 0 && !loading){
      loading = ElLoading.service({
         text: 'Loading',
         background: 'raba(0,0,0, 0.7)',
         spinner: 'el-icon-loading'
      })
   }
   requestCount++;
}
const hideLoading=() =>{
   requestCount--
   if(requestCount == 0){
      loading.close()
   }
}
// 添加请求拦截器
instance.interceptors.request.use((config) => {
   showLoading()
   const token = window.localStorage.getItem('token');
   token && (config.headers.Authorization = token)

   if(config.method === 'POST'){
      config.data = JSON.stringify(config.data)
   }
   return config;
   // 在发送请求之前做些什么
  // config.headers["Content-type"] = "application/json";
  // return config;
},(error) => {
   // 对请求错误做些什么
   return Promise.reject(error);
});
  
// 添加响应拦截器
instance.interceptors.response.use((response) => {
   // 对响应数据做点什么
   // 隐藏加载图
   // 获取code
   hideLoading()
   const res = response.data;
   // 返回成功
   if (res == 200) {
      return res;
   }
   // token 异常
   if (res === 508 || res === 512 || res === 514 || res === 500) {
      // 登出 清除token缓存
   }
   return response;
},(error) => {
   if(error.response && error.response.status){
      const status = error.response.status
      let message;
      switch(status){
         case 400:
            message = '请求错误';
            break;
         case 401:
            message = '请求错误';
            break;
         case 404:
            message = '请求地址出错';
            break;
         case 408:
            message = '请求超时';
            break;
         case 500:
            message = '服务器内部错误！';
            break;
         case 501:
            message = '服务未实现！';
            break;
         case 502:
            message = '网关错误！';
            break;
         case 503:
            message = '网关超时！';
            break;
         case 504:
            message = 'HTTP版本不受支持';
            break;
         default: 
            message = '请求失败'
      }
      ElMessage.error( message );
      return Promise.reject(error)
   }
   // 对响应错误做点什么
   return Promise.reject(error);
});
  
export default instance;