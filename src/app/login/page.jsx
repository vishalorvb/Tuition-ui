import React from 'react'
import Loginpage from './Loginpage'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";
import { metadata } from '../layout';

async function page() {
    const session = await getServerSession(authOptions)
    metadata.title = "Login"
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
