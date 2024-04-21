import axios from "axios";

let baseUrl = "http://localhost:8000";

export async function lastestTeacher(pageNumber = 1) {
    return axios.get(`${baseUrl}/teacher/latestTeacher/${pageNumber}`).then(res => {
        return res.data.data
    }).catch(err => {
        return []
    })
}

export async function unlockTeacher(teacherId, token) {
    return axios({
        method: 'POST',
        data: { "teacher_id": teacherId },
        url: `${baseUrl}/teacher/unlock_teacher`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        return res.data
    }).catch(err => {

    })
}


export async function getTeacherDetails(teacherId, token = null) {

    const headers = {
        'Content-Type': 'application/json' // You can add other headers if needed
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return await axios.get(`${baseUrl}/teacher/getTeacherById/${teacherId}`, { headers }).then(res => {
        return res.data.data;
    })
        .catch(err => {
            return null
        })
}

export async function getTeacherinfo(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/teacher/getTecher_info`, { headers }).then(res => {
        return res.data;
    }).catch(err => {
        return null
    })

}

export async function searchTeacher(queryString, pageNumber = 1) {
    return await axios.get(`${baseUrl}/teacher/search/${pageNumber}?query=${queryString}`).then(res => {
        return ({ opration: true, data: res.data.data, message: res.message })
    }).catch(err => {
        return { opration: false, data: [], message: err.response.data.message }
    })
}


export async function getunlockedTeacher(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.get(`${baseUrl}/teacher/unlockedteacher`, { headers }).then(res => {
        return res.data.data
    }).catch(err => { })
}

export async function createTeacher(data, token) {
    console.log(data)
    return await axios({
        method: 'post',
        data: data,
        url: `${baseUrl}/teacher/create_teacher`,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    }).then(res => {
        return { opration: true, message: res.data.message }
    }).catch(err => {
        return { opration: false, message: err.response.data.message }
    })
}

export async function updateTeacher(data, token) {
    return await axios({
        method: "put",
        url: `${baseUrl}/teacher/update_teacher_profile`,
        data: data,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    }).then(res => {
        return { message: res.data.message, status: true }
    }).catch(err => {
        return { message: err.response.data.message, status: false }
    })
}