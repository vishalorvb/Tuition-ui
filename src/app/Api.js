import axios from "axios";

let baseUrl = "http://localhost:8000";


export async function createUser(data) {
    return await axios({
        method: "post",
        data: data,
        url: `${baseUrl}/usermanager/createUser`
    }).then(res => {
        return { opration: true, message: res.data.message }
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}


export async function getotp(data) {
    return await axios({
        method: "post",
        data: data,
        url: `${baseUrl}/usermanager/sendOtp`
    }).then(res => {
        return { opration: true, message: res.data.message }
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}


export async function login(data) {
    return await axios({
        method: "post",
        data: data,
        url: `${baseUrl}/usermanager/login`
    }).then(res => {
        return { opration: true, message: res.data.message, info: res.data }
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}