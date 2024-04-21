

import BecomeTeacher from './BecomeTeacher'

import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";
import { getUserinfo } from '../Service/Userservice';

async function page() {

    const session = await getServerSession(authOptions)
    const token = session.access_token
    const userData = await getUserinfo(token)
    if (session === null || !userData) {
        redirect("/login");
    }
    if (userData.is_teacher) {
        redirect("/join_teacher/edit")
    }

    return (
        <div>
            <BecomeTeacher></BecomeTeacher>
        </div>
    )
}

export default page
