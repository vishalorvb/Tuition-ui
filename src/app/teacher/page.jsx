import { lastestTeacher } from "../Service/TeacherService"
import TeacherBlock from "./TeacherBlock"

async function page() {

    const teacherList = await lastestTeacher()
    return (
        <div>
            <TeacherBlock
                initialTeacherList={teacherList}
                redirectUrl="/teacher/online-tuition/"
            ></TeacherBlock>
        </div>
    )
}

export default page
