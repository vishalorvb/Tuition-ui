import { lastestTeacher } from '@/app/Service/TeacherService'
import React from 'react'
import TeacherBlock from '../TeacherBlock'

async function page() {
    const teacherList = await lastestTeacher()
    return (
        <div>
            <TeacherBlock
                initialTeacherList={teacherList}
            ></TeacherBlock>
        </div>
    )
}

export default page
