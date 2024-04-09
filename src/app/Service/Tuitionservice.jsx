import axios from "axios";

let baseUrl = "http://localhost:8000";


export async function getLatestTuition(pageNumber = 1) {
    return await axios.get(`${baseUrl}/tuition/getLatesttuition/${pageNumber}`).then(res => {
        return ({ opration: true, data: res.data.data, message: res.message })
    }).catch(err => {
        console.log(err)
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

export async function getTuitionDetails(tuitionId) {
    return await axios.get(`${baseUrl}/tuition/getTuitionByid/${tuitionId}`).then(res => {
        return res.data.data;
    })
        .catch(err => {
            return null
        })
}