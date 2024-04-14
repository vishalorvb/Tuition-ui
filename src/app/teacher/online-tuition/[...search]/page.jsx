import React from 'react'
import TeacherBlock from '../../TeacherBlock'
import { searchTeacher } from '@/app/Service/TeacherService'

async function page({ params }) {
    let string = params.search[0]
    string = string.split("-").join(" ")
    const teacher = (await searchTeacher(string)).data
    return (
        <div>
            <TeacherBlock
                initialTeacherList={teacher}
            ></TeacherBlock>
        </div>
    )
}

export default page
