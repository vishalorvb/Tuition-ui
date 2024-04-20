import EditProfile from '@/app/Components/CustomComp/EditProfile';
import { getUserinfo } from '@/app/Service/Userservice';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react'

async function page() {

    const session = await getServerSession(authOptions);
    if (session === null) {
        redirect("/login");
    }
    const token = session.access_token
    const userData = await getUserinfo(token)
    return (
        <div>
            <EditProfile
                userInfo={userData}
            ></EditProfile>
        </div>
    )
}

export default page
