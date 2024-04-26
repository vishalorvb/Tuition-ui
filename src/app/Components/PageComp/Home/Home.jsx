
import Carousel from './Carousel'
import Display from './Display'
import { getLatestTuition } from '@/app/Service/Tuitionservice'
import TuitionList from '@/app/teacher-job/TuitionList'
import styles from '../../../Css/home.module.css'
import TeacherList from '@/app/teacher/TeacherList'
import { lastestTeacher } from '@/app/Service/TeacherService'

async function Home() {
    let t = await getLatestTuition()
    let tuition = t.data
    const teacherList = await lastestTeacher()
    return (
        <div>

            <Carousel></Carousel>
            <Display
                url='/beacome-teacher'
                imageUrl="/teacherdisplay.jpg"
                name="Beacome teacher"
                heading="Teach. Connect. Thrive.!"
                subHeading="Enlist as a teacher and stand out to students for free. Your profile will be visible to all students, enabling them to connect with you effortlessly."
            ></Display>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 align-self-center">
                        <h4 className={styles.heading}>Latest Tuition for you</h4>
                        <TuitionList
                            tuitionList={tuition.slice(0, 6)}
                        ></TuitionList>
                    </div>
                </div>
            </div>

            <Display
                url='/home-tuition'
                imageUrl="./tuition.jpeg"
                name="Post tuition"
                heading="Post tuition , get free demo!"
                subHeading="Post your tuition for free, unlock a complimentary demo class, and connect with qualified tutors to start your learning journey!"
            ></Display>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 align-self-center">
                        <h4 className={styles.heading}>Latest Teacher for you</h4>
                        <TeacherList
                            teacherList={teacherList.slice(0, 6)}
                        ></TeacherList>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
