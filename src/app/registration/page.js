import React from 'react'
import Register from '../Components/PageComp/Register'
import Header from '../Components/CustomComp/Header'

function page() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Header
                            heading="Discover Limitless Learning Opportunities"
                            subHeading="Empower your education journey with our platform that seamlessly connects students and teachers. Explore freelance teaching opportunities, post tuition listings for free, and enjoy complimentary demo classes."
                        ></Header>
                    </div>
                </div>
            </div>
            <Register></Register>
        </div>
    )
}

export default page
