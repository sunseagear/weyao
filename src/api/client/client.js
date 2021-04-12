import request from '@/utils/request'
export function fetchClientList(data) {
  return request({
    url: '/json/client/list',
    method: 'post',
    data
  })
}

export function getClient(id) {
  return request({
    url: '/json/client/detail/' + id,
    method: 'get'
  })
}

export function createClient(data) {
  return request({
    url: '/json/client/add',
    method: 'post',
    data
  })
}

export function updateClient(data) {
  return request({
    url: '/json/client/update',
    method: 'post',
    data
  })
}

export function deleteClient(ids) {
  return request({
    url: '/json/client/delete',
    method: 'post',
    data: { ids }
  })
}