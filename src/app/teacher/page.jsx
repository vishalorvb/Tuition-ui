import { lastestTeacher } from "../Service/TeacherService"
import TeacherList from "./TeacherList"

async function page() {

    const teacherList = await lastestTeacher()
    return (
        <div>
            <TeacherList
                teacherList={teacherList}
            ></TeacherList>
        </div>
    )
}

export default page
