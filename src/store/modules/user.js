import { login } from '@/api/system/login'
import { getToken, setToken, getCookie, setCookie, removeToken, removeCookie } from '@/utils/cookie'

const key = 'info'

const state = {
  userInfo: ''
}

const mutations = {

  SET_INFO: (state, info) => {
    state.userInfo = info
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        setCookie(key, userInfo)
        const data = response.data.data
        commit('SET_INFO', data)
        setToken(data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      let data = getToken()
      if (data) {
        data = JSON.parse(data)
        commit('SET_INFO', data)
        resolve()
        return
      }
      let userInfo = getCookie(key)
      if (!userInfo) {
        resolve()
        return
      }
      userInfo = JSON.parse(userInfo)
      login(userInfo).then(response => {
        const data = response.data.data
        commit('SET_INFO', data)
        setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_INFO', '')
      removeToken()
      removeCookie(key)
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
