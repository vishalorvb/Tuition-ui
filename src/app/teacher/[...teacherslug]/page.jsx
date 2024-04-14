import Header from '@/app/Components/CustomComp/Header';
import TeacherDetails from '@/app/Components/CustomComp/TeacherDetails';
import { getTeacherDetails } from '@/app/Service/TeacherService';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react'

async function page({ params }) {

    const encodedString = params.teacherslug[0];
    const slug = decodeURIComponent(encodedString).replace("-", " ");

    const session = await getServerSession(authOptions);
    const token = session?.access_token ?? null
    const teacherId = params.teacherslug[1]

    const teacher = await getTeacherDetails(teacherId, token)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header
                            heading="Discover Qualified and Verified Teachers"
                            subHeading="Get  free demo classes when you post your tuition requirements! Experience top-quality teaching firsthand and find your perfect match hassle-free. Don't wait, start learning with us today!"
                        ></Header>
                    </div>
                    <div className="col-12">
                        <p>Note: Each unlock(view of contact) reduce your credit point by 1</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <TeacherDetails
                            imgUrl={teacher.photo ?? "/profilepic"}
                            name={teacher.name}
                            gender={teacher.gender}
                            experience={teacher.experience}
                            location={teacher.location}
                            qualification={teacher.qualification}
                            subject={teacher.subject}
                            classes={teacher.classes}
                            about={teacher.about}
                            teachingMode={teacher.teaching_mode}
                            pincode={teacher.pincode}
                            age={teacher.age}
                            fee={teacher.fee}
                            slug={teacher.slug}
                            mode={teacher.teaching_mode}
                            teacherId={teacher.id}
                            phone_number={teacher.phone_number}
                        ></TeacherDetails>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
