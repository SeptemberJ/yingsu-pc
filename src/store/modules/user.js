import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken, setUserId, getUserId, removeUserId } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { Message } from 'element-ui'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  butRoles: [],
  zRegisterInfo: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_BUTROLES: (state, butRoles) => {
    state.butRoles = butRoles
  },
  SET_REGISTERINFO: (state, info) => {
    state.zRegisterInfo = info
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        const { data } = res
        switch (res.respCode) {
          case '0':
            console.log('backInfo', data.zRegister)
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            setUserId(data.zRegister.id)
            resolve(0)
            break
          default:
            Message({
              message: res.message || 'Error',
              type: 'error',
              duration: 1500
            })
            resolve(-1)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(getUserId()).then(response => {
        const userMenu = [
          {
            name: 'order',
            children: [
              {
                name: 'general'
              },
              {
                name: 'dangerous'
              },
              {
                name: 'coldchain'
              },
              {
                name: 'container'
              }
            ]
          },
          {
            name: 'userCenter',
            children: [
              {
                name: 'myInfo'
              },
              {
                name: 'wallet'
              }
            ]
          }
        ]
        commit('SET_REGISTERINFO', response.data)
        commit('SET_NAME', response.data.fname)
        commit('SET_BUTROLES', ['delete', 'editor'])
        resolve(userMenu)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      removeUserId()
      resetRouter()
      // reset visited views and cached views
      // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   commit('SET_ROLES', [])
      //   removeToken()
      //   resetRouter()

      //   // reset visited views and cached views
      //   // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      //   dispatch('tagsView/delAllViews', null, { root: true })

      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

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
