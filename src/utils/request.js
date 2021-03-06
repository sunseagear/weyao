import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

// 转换请求方式
axios.defaults.transformRequest = [function(data) {
  const str = qs.stringify(data, { allowDots: true })
  // console.log('transformRequest', str)
  return str
}]
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

// // request interceptor
// service.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     if (store.getters.token) {
//       // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//       config.headers['access_token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (!res.success) {
      Toast.fail(res.message)
    }
    return Promise.resolve(response)
  },
  error => {
    Toast.fail(error.message)
    return Promise.reject(error)
  }
)

export default service
