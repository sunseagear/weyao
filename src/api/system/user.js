import request from '@/utils/request'
// 个人信息
export function fetchUserList(id) {
  return request({
    url: `/json/user/detail/${id}`,
    method: 'get'
  })
}
export function getUser(id) {
  return request({
    url: `/json/user/detail/${id}`,
    method: 'get'
  })
}

