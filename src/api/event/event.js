import request from '@/utils/request'
export function fetchEventList(data) {
  return request({
    url: '/json/event/list',
    method: 'post',
    data
  })
}

export function getEvent(id) {
  return request({
    url: '/json/event/detail/' + id,
    method: 'get'
  })
}

export function createEvent(data) {
  return request({
    url: '/json/event/add',
    method: 'post',
    data
  })
}

export function updateEvent(data) {
  return request({
    url: '/json/event/update',
    method: 'post',
    data
  })
}

export function deleteEvent(ids) {
  return request({
    url: '/json/event/delete',
    method: 'post',
    data: { ids }
  })
}