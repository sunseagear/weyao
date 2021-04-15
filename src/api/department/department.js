import request from '@/utils/request'
export function fetchDepartmentList(data) {
  return request({
    url: '/json/department/list',
    method: 'post',
    data
  })
}

export function getDepartment(id) {
  return request({
    url: '/json/department/detail/' + id,
    method: 'get'
  })
}

export function createDepartment(data) {
  return request({
    url: '/json/department/add',
    method: 'post',
    data
  })
}

export function updateDepartment(data) {
  return request({
    url: '/json/department/update',
    method: 'post',
    data
  })
}

export function deleteDepartment(ids) {
  return request({
    url: '/json/department/delete',
    method: 'post',
    data: { ids }
  })
}