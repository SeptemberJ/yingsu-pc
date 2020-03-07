import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserId(id) {
  return Cookies.set('id', id)
}

export function getUserId() {
  return Cookies.get('id')
}

export function removeUserId() {
  return Cookies.remove('id')
}
