import {get, post} from '@/utils/apiservice'


export function login(params) {

    const url = "/auth/login";
    return post(url, params);
}

export function getuser(token) {
    const url = "/auth/getuser"
    return post(url, {toekn: token})

}

export function loginout(params) {
    const url = "/auth/loginout";
    return post(url, params)
}
