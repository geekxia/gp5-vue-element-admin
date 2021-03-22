import request from '@/utils/request'

export function fetchGoodList(params) {
  return request({
    url: '/good/list',
    method: 'get',
    params
  })
}

export default {
  fetchGoodList
}
