import EditProfile from '@/app/Components/CustomComp/EditProfile';
import { getUserinfo } from '@/app/Service/Userservice';
import React from 'react'

async function page() {


    const token = "jwt token"
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
