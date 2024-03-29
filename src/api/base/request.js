import axios from 'axios'

const request = axios.create({
    baseURL: '/',
    timeout: 8000
})

// request interceptor
request.interceptors.request.use(
    config => {
        console.log('config>' + JSON.stringify(config))
        return config
    },
    error => {
        console.log('request-error>'+error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    response => {
        console.log(response.data)
        const res = response.data
        console.log(res.code)
        if (res.code !== 0) {
            // return Promise.reject(new Error(res.msg || 'Error'))
          return res
        } else {
            return res
        }
    },
    error => {
        console.log('response-error>'+error)
        return Promise.reject(error)
    }
)

export default request
