import cookis from "js-cookie"

const _TOKEN_KEY_ = 'token-key'

export function getToken() {
  //  const token=cookis.get(_TOKEN_KEY_);
    return cookis.get(_TOKEN_KEY_)
}

export function setToken(token) {
    return cookis.set(_TOKEN_KEY_, token)
}

export function removeToken() {
    return cookis.remove(_TOKEN_KEY_)
}

