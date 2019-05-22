/**
 * Created by zhangyupeng on 18/12/5.
 */
import axios from 'axios'
import Config from '@/config' // 项目全局配置
import router from '@/router'
import self from '../main' // vue的实例
import qs from 'qs' // 解决axios传参服务端无法解析问题

let baseUrl = ''
// 判断是开发还是测试环境
if (process.env.NODE_ENV === 'development') {
  baseUrl = '//localhost:9999'
} else {
  baseUrl = '//localhost:9999'
}

axios.defaults.timeout = 10000 // 请求超时
axios.defaults.baseURL = baseUrl // 公用url

// 接口请求之前的拦截器
axios.interceptors.request.use(config => {
  // 配置header
  config.headers['Authorization'] = 'Bearer ' + getToken()
  // 全局统一参数
  config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = {...config.params}
  return config
}, error => {
  return Promise.reject(error)
})

// 接口响应做的操作。
axios.interceptors.response.use(response => {
  if (response && response.status >= 200 && response.status < 400) {
    // 4012为token失效重新登录
    if (response.data && response.data.code === 4012) {
      router.push('/login')
    } else {
      return response.data
    }
  }
  return {// 接口响应错误,可以弹出一个错误提示，告诉用户
    code: Config.ERROR_CODE,
    msg: '网络错误'
  }
}, error => {
  if (error) {
    self.$message({
      type: 'warning',
      message: error
    })
  }
  // return Promise.resolve(error.response)
})

export default {
  /***
   * GET 请求
   * @param url
   * @param responseType : 'json', 'text', 'file'
   */
  get (url, params, responseType = 'json') {
    return axios({
      method: 'get',
      url,
      params,
      responseType: responseType
    })
  },
  /***
   * POST 请求
   * @param url // url地址
   * @param data // 参数
   * @param responseType : 'json', 'text', 'file'
   */
  post (url, data, responseType = 'json') {
    return axios({
      method: 'post',
      url,
      data,
      responseType: responseType
    })
  }
}

// 获取token
function getToken () {
  return localStorage.getItem('token') ? localStorage.getItem('token') : ''
}
