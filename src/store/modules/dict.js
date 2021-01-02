import { fetchDicts } from '@/api/system/dict'

const state = {
  dicts: [],
  defaultPageSize: 10,
  // 邀请人员
  personMessage: [],
  studyList: { }
}

const mutations = {
  SET_DICTS: (state, dicts) => {
    state.dicts = dicts
  },
  SET_PAGEARRAY: (state, pageArray) => {
    state.pageArray = pageArray
    state.defaultPageSize = pageArray[0]
  },
  personMessage: (state, val) => {
    state.personMessage.push(val)
  },
  clearPersonMessage: (state) => {
    state.personMessage = []
  },
  studyList: (state, val) => {
    state.studyList = val
    console.log(state.studyList)
  },
  clearTtudyList: (state) => {
    state.studyList = {}
    console.log(state.studyList)
  }
}
const actions = {
  // 获取数据字典
  getDicts({ commit, state }) {
    return new Promise((resolve, reject) => {
      fetchDicts().then(response => {
        const data = response.data.data
        const value = []
        data['page'].forEach((row) => {
          value.push(Number.parseInt(row.value))
        })
        commit('SET_DICTS', data)
        commit('SET_PAGEARRAY', value)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
