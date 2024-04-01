import axios from "axios";

let baseUrl = "http://localhost:8000";


export async function getLatestTuition() {
    return await axios.get(`${baseUrl}/tuition/getLatesttuition`).then(res => {
        return ({ opration: true, data: res.data.data, message: res.message })
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}