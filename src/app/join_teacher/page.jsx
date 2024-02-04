

import BecomeTeacher from './BecomeTeacher'

import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";

async function page() {

    const session = await getServerSession(authOptions)

    if (session === null) {
        redirect("/login");
    }
    return (
        <div>
            <BecomeTeacher></BecomeTeacher>
        </div>
    )
}

export default page
