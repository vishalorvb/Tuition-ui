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


export async function getPin(pin) {
    return await axios.get(`${baseUrl}/getPincode?pincode=${pin}`).then(res => {
        return res.data
    }).catch(err => console.log(err))

}

export async function createTeacher(data, token) {
    return await axios({
        method: 'post',
        data: data,
        url: `${baseUrl}/teacher/create_teacher`,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
    }).then(res => {
        return { opration: true, message: res.data.message }
    }).catch(err => {
        return { opration: false, message: "Failed" }
    })
}

export async function postTuition(data, token) {
    return await axios({
        method: 'post',
        data: data,
        url: `${baseUrl}/tuition/createTuition`,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
    }).then(res => {
        return { opration: true, message: res.data.message }
    }).catch(err => {
        return { opration: false, message: "Failed" }
    })
}