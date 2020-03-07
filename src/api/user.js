import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/tokens/registerLogin?fmobile=' + data.username + '&password=' + data.password,
    method: 'post'
  })
}

export function getUserInfo(id) {
  return request({
    url: '/api/zRegisterController/getOwnerInfo?id=' + id,
    method: 'post',
    data: {}
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function login1(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}
