import React from 'react'
import Register from '../Components/PageComp/Register'
import Header from '../Components/CustomComp/Header'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function page() {

    const session = await getServerSession(authOptions)

    if (session !== null) {
        redirect("/profile");
    }
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <Header
                        heading="Discover Limitless Learning Opportunities"
                        subHeading="Empower your education journey with our platform that seamlessly connects students and teachers. Explore freelance teaching opportunities, post tuition listings for free, and enjoy complimentary demo classes."
                    ></Header>
                </div>
            </div>
            <Register></Register>
        </div>
    )
}

export default page
