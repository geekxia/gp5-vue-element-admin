import request from '@/utils/request'

export function fetchGoodList(params) {
  return request({
    url: '/good/list',
    method: 'get',
    params
  })
}

export function fetchAllCates(params) {
  return request({
    url: '/good/cates',
    method: 'get',
    params: params || {}
  })
}

export function fetchGoodDel(data) {
  return request({
    url: '/good/del',
    method: 'post',
    data
  })
}

export default {
  fetchGoodList,
  fetchAllCates,
  fetchGoodDel
}
