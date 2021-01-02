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
export function getCookie(key) {
  return Cookies.get(key)
}

export function setCookie(key, token) {
  return Cookies.set(key, token)
}

export function removeCookie(key) {
  return Cookies.remove(key)
}

const RefreshTokenKey = 'Admin-REFRESH_TOKEN'

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token)
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey)
}
