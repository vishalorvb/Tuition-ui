import axios from "axios";

let baseUrl = "http://localhost:8000";


export async function getLatestTuition(pageNumber = 1) {
    return await axios.get(`${baseUrl}/tuition/getLatesttuition/${pageNumber}`).then(res => {
        return ({ opration: true, data: res.data.data, message: res.message })
    }).catch(err => {
        return { opration: false, data: [], message: err.message }
    })
}

export async function searchTuition(queryString, pageNumber = 1) {
    return await axios.get(`${baseUrl}/tuition/search/${pageNumber}?query=${queryString}`).then(res => {
        return ({ opration: true, data: res.data.data, message: res.message })
    }).catch(err => {
        return { opration: false, data: [], message: err.response.data.message }
    })
}

export async function getTuitionDetails(tuitionId, token = null) {

    const headers = {
        'Content-Type': 'application/json' // You can add other headers if needed
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return await axios.get(`${baseUrl}/tuition/getTuitionByid/${tuitionId}`, { headers }).then(res => {
        return res.data.data;
    })
        .catch(err => {
            return null
        })
}

export async function unlockTuition(tuitionId, token) {
    console.log("api called")
    return axios({
        method: 'POST',
        data: { "tuition_id": tuitionId },
        url: `${baseUrl}/tuition/unlockTuition`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        return res.data
    }).catch(err => {

    })

}

export async function getMypost(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/tuition/getuserpost`, { headers }).then(res => {
        return res.data.data
    }).catch(err => { })
}

export async function getunlockedTuition(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/tuition/unlockedtuition`, { headers }).then(res => {
        return res.data.data
    }).catch(err => { })
}


export async function changeStatus(tuitionId, token) {
    return axios({
        method: 'POST',
        data: { "tuition_id": tuitionId },
        url: `${baseUrl}/tuition/changeStatus`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        return { status: true, message: res.data.message }
    }).catch(err => {
        return { status: false, message: "Something went wrong" }
    })
}