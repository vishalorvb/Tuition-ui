import axios from "axios";
import { ApiUrl } from "@/Environment";

const baseUrl = "http://localhost:8000"

export async function getUserinfo(token) {
    const headers = {
        "Content-Type": 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/usermanager/userinfo`, { headers }).then(res => {
        return res.data.data
    }).catch(err => { })
}

export async function updateUser(data, token) {

    return await axios({
        method: "put",
        url: `${baseUrl}/usermanager/updateProfile`,
        data: data,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    }).then(res => {
        return { message: res.data.message, status: true }
    }).catch(err => {
        console.log(err.response.data.message)
        return { message: err.response.data.message, status: false }
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
        return { opration: false, message: "Somethin went wrong" }
    })
}

export async function login(data) {
    return await axios({
        method: "post",
        data: data,
        url: `${baseUrl}/usermanager/login`
    }).then(res => {
        return { opration: true, message: res.data.message, info: res.data.data }
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}