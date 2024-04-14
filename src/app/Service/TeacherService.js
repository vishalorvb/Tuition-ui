import axios from "axios";

let baseUrl = "http://localhost:8000";

export async function lastestTeacher(pageNumber = 1) {
    return axios.get(`${baseUrl}/teacher/latestTeacher/${pageNumber}`).then(res => {
        return res.data.data
    }).catch(err => { })
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
