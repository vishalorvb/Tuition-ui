import axios from "axios";

let baseUrl = "http://localhost:8000";



export async function getUserinfo(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/usermanager/userinfo`, { headers }).then(res => {
        return res.data.data
    }).catch(err => { })
}