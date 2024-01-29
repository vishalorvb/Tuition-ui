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