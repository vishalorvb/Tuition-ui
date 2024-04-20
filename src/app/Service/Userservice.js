import axios from "axios";

let baseUrl = "http://localhost:8000";



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