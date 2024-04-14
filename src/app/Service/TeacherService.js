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