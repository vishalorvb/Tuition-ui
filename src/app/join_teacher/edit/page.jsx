import { getTeacherinfo } from "@/app/Service/TeacherService";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import BecomeTeacher from "../BecomeTeacher";
import { redirect } from "next/navigation";


async function page() {

    const session = await getServerSession(authOptions)

    if (session === null) {
        redirect("/login");
    }
    const token = session.access_token
    const teacherData = await getTeacherinfo(token)
    if (teacherData === null) {
        redirect("/join_teacher");
    }
    return (
        <div>
            <BecomeTeacher
                teacherInfo={teacherData}
            ></BecomeTeacher>
        </div>
    )
}

export default page
