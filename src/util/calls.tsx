import { signInWithEmailAndPassword } from "firebase/auth";
import axios, { AxiosError } from 'axios'
const baseUrl = 'http://localhost'

// Interceptors are called on every request / response
// TODO: Implement some logic in the interceptors below (e.g. page loading)
axios.interceptors.request.use(config => {
    return config
}, error => Promise.reject(error))

axios.interceptors.response.use(response => {
    return response
}, error => Promise.reject(error))

export function login () : Promise<any> {
    return new Promise(async (resolve, reject) => {
        // Logic

    })
}

export function SAMPLE_GET () : Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `${baseUrl}/sample`
        axios.get(url)
            .then(res => {
                const resBody = res.data
                resolve(resBody)
            })
            .catch((error : AxiosError) => {
                console.error(error.response)
                reject(error.response)
            })
    })
}
export function SAMPLE_POST () : Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `${baseUrl}/sample`
        const params = {
            p1 : 'test',
            p2 : 12,
            p3 : true
        }

        axios.post(url, params)
            .then(res => {
                const resBody = res.data
                resolve(resBody)
            })
            .catch((error : AxiosError) => {
                console.error(error.response)
                reject(error.response)
            })
    })
}
