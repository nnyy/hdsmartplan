import axios from "axios"
import {Message, MessageBox} from "element-ui";
import {getToken} from './token'
import store from "@/store";
import appSetting from '@/settings.js'


const service = axios.create({
    baseURL: appSetting.baseUrl,
    timeout: 5000
})

service.interceptors.request.use(config => {
    debugger
    if (store.getters.token) {
        config.headers['H-Token'] = getToken()
    }
    return config

}, error => {
    console.log(error) // for debug
    return Promise.reject(error)
})


service.interceptors.response.use(response => {
    debugger
    const data = response.data, status = data.status
    if (data.status === '200') {
        return data;
    } else {
        if (status === 403) {
            MessageBox.confirm('系统检测登录已经过期我,请重新登录', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '退出',
                type: 'warning'
            }).then(() => {
                store.dispatch()
            })
        } else
            Message({
                type: data.type,
                message: data.message,
                duration: 3 * 1000
            })
        return Promise.reject(new Error(data.message || 'Error'))
    }

}, error => {
    console.log(error)
    Promise.reject(error)
})


export default service



