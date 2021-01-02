const getters = {
  userInfo: state => state.user.userInfo,
  dicts: state => state.dict.dicts,
  defaultPageSize: state => state.dict.defaultPageSize
}
export default getters
