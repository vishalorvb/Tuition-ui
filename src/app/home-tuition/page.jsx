import React from 'react'
import PostTuition from './PostTuition'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function page() {

    const session = await getServerSession(authOptions)
    if (session === null) {
        redirect("/login");
    }
    return (
        <div>
            <PostTuition></PostTuition>
        </div>
    )
}

export default page
