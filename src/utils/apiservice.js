import service from "./request";

export function get(url, params) {
    service({url: url, method: 'get', params: params})
}

export function post(url, params) {
    const headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    return service({url: url, method: 'post', headers: headers, params: params})
}

export function json(url, params) {
    const headers = {"Content-Type": 'application/json;charset=utf-8'}
    return service({url: url, method: 'post', headers: headers, params: params})
}

export function uploadfile(url, params) {
    const headers = {"Content-Type": 'multipart/form-data'}
    return service({url: url, method: 'post', headers: headers, params: params})
}




