import axios from '../request'

export function getUserInfo(params) {
  return axios({
    url: '/',
    method: 'get',
    params
  })
}
