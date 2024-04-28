import { ApiUrl as BU } from "@/Environment";
import axios from "axios";

const baseUrl = "http://localhost:8000"



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






export async function getPin(pin) {
    console.log(BU)
    return await axios.get(`${baseUrl}/getPincode?pincode=${pin}`).then(res => {
        return res.data
    }).catch(err => console.log(err))

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


