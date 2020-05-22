import {login, loginout, getuser} from "@/api/user"
import {getToken, removeToken, setToken} from "@/utils/token"


const state = {
    token:getToken(),
    id: '',
    name: '',
    dept: {},
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ID: (state, id) => {
        state.id = id
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_DEPT: (state, dept) => {
        state.dept = dept
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }

}

const actions = {
    login({commit}, userInfo) {
        // eslint-disable-next-line no-debugger
        debugger
        const user = {
            username: userInfo.username,
            password: userInfo.password
        }
        return new Promise((resolve, reject) => {
            login(user).then(response => {
                const {token} = response.data
                commit('SET_TOKEN', token)
                setToken(token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    getuser({commit, state}) {
        return new Promise((resolve, reject) => {
            const params = {
                token: state.token
            }
            getuser(params).then(response => {
                const {data} = response.data
                const {id, name, dept, roles} = data;
                commit('SET_ID', id)
                commit('SET_NAME', name)
                commit('SET_DEPT', dept)
                commit('SET_ROLES', roles)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    loginout({commit, state}) {
        return new Promise((resolve, reject) => {
            const params = {
                token: state.token
            }
            loginout(params).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                commit('SET_DEPT', {})
                removeToken();
                resolve();
            }).catch(error => {
                reject(error)
            })
        })
    }
}

const userauth = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default userauth
