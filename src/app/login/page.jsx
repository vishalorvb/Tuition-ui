import React from 'react'
import Login from '../Components/PageComp/Login'
import Loginpage from './Loginpage'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";

async function page() {



    const session = await getServerSession(authOptions)

    if (session !== null) {
        redirect("/profile");
    }
    return (
        <div>
            <Loginpage></Loginpage>
        </div>
    )
}

export default page
