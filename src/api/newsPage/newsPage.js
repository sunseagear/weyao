import request from '@/utils/request'
// 获取新闻列表
export function newsPage() {
  return request({
    url: '/json/newsType/list',
    method: 'post'
  })
}
// 获取新闻内容
export function newsPageContent(data) {
  return request({
    url: '/json/newsContent/list',
    method: 'post',
    data
  })
}
// 获取新闻内容详情
export function newsContent(id, userID) {
  return request({
    url: `/json/newsContent/detail/${id}/${userID}`,
    method: 'get'
  })
}
