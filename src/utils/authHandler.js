import axios from "axios";


export const apiAuth = axios.create({
    baseURL: "https://zabqer.net/api/v1/",
    withCredentials: true,
})
apiAuth.defaults.withCredentials = true;

apiAuth.interceptors.request.use(
    async request => {
        console.log("Intercepting request")
        console.log(request)
        return request
    },
    async error => {
        console.log("ERROR")
        return Promise.reject(error)
    }
)

apiAuth.interceptors.response.use(
    res => {
        return res
    },
    async err => {
        let originalConfig = err.config;
        if (err.response) {
            if(err.response.status === 401 && !originalConfig._retry && originalConfig.url !== 'auth/renew'){
                try {
                    const refreshToken = await apiAuth.post('auth/renew')
                    console.log("GDSJLKGHLSKDGHlGHDLDKSGHLKGDHLKGDHDGLKJHGDLKHGDLKHGD")
                    return apiAuth(originalConfig)
                } catch(e) {
                    return Promise.reject(e)
                }
            }
        }
        return Promise.reject(err)
    }
)