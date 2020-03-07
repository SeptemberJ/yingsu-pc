import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-AUTH-TOKEN'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 200, it is judged as an error.
    if (response.status !== 200) {
      switch (response.status) {
        case 401:
          Message({
            message: '很抱歉，登录已过期，请重新登录!',
            type: 'error',
            duration: 3000
          })
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
          break
        case 504:
          Message({
            message: '网络超时!',
            type: 'error',
            duration: 1500
          })
          break
        case 404:
          Message({
            message: '资源未找到!',
            type: 'error',
            duration: 1500
          })
          break
        case 403:
          Message({
            message: '拒绝访问!',
            type: 'error',
            duration: 1500
          })
          break
        default:
          Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 1500
          })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error) // for debug
    switch (error.response.status) {
      case 401:
        Message({
          message: '很抱歉，登录已过期，请重新登录!',
          type: 'error',
          duration: 3000
        })
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
        break
      case 504:
        Message({
          message: '网络超时!',
          type: 'error',
          duration: 1500
        })
        break
      case 404:
        Message({
          message: '资源未找到!',
          type: 'error',
          duration: 1500
        })
        break
      case 403:
        Message({
          message: '拒绝访问!',
          type: 'error',
          duration: 1500
        })
        break
      default:
        Message({
          message: error.message,
          type: 'error',
          duration: 1500
        })
    }
    return Promise.reject(error)
  }
)

export default service
