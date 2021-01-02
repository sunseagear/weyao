import request from '@/utils/request'

/**
 * 获取所有字典数据
 */
export function fetchDicts() {
  return request({
    url: '/json/dict',
    method: 'get'
  })
}
