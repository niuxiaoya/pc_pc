import axios from 'axios'
import SHA1 from '@/plugin/sha1'

let service = axios.create({
  headers: {}
})
const AppId = 'swisstimevip';
const AppSecret = '469d8b353e271ea4750793fb656cc331d8fd6bc1';
let ClientType = 3;
let ClientId;
let AppDigest;
let TokenHeaders;
AppDigest = SHA1(AppId + AppSecret);
ClientId = SHA1(new Date().getTime() + Math.floor(Math.random() * 9999));

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (localStorage.getItem('AccessToken')) {
    config.headers['AccessToken'] = localStorage.getItem('AccessToken')
    if (localStorage.getItem('userId')) {
      config.headers['Authorization'] = localStorage.getItem('userId')
    }
  } else {
    config.headers['RequestToken'] = AppDigest
    config.headers['ClientType'] = ClientType
    config.headers['ClientId'] = ClientId
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})


// 添加响应拦截器
service.interceptors.response.use(function (response) {

  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
