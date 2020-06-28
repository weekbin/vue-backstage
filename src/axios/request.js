import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: http://127.0.0.1:5000,
  // timeout: 5000
})

// request interceptor
service.interceptors.request.use(

)

// response interceptor
service.interceptors.response.use(

)

export default service
