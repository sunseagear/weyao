import request from '@/utils/request'

// 组织结构
export function organization() {
  return request({
    url: `/json/organization/list`,
    method: 'post'
  })
}
