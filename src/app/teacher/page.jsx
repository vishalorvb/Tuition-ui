import { lastestTeacher } from "../Service/TeacherService"
import TeacherBlock from "./TeacherBlock"
import TeacherList from "./TeacherList"

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
