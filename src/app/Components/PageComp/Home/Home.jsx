
import Carousel from './Carousel'
import Display from './Display'
import { getLatestTuition } from '@/app/Service/Tuitionservice'
import TuitionList from '@/app/teacher-job/TuitionList'
import styles from '../../../Css/home.module.css'
import TeacherList from '@/app/teacher/TeacherList'
import { lastestTeacher } from '@/app/Service/TeacherService'
import HomeButton from '../../MiniComp/HomeButton'
import Link from 'next/link'


async function Home() {
    let t = await getLatestTuition()
    let tuition = t.data
    const teacherList = await lastestTeacher()
    return (
        <div>
            <Carousel></Carousel>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="row justify-content-center">
                            <div className="col-6 ">
                                <div className={styles.bt}>
                                    <HomeButton><Link href="/home-tuition">Post Tuition</Link></HomeButton>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles.bt}>
                                    <HomeButton><Link href="/teacher"> &nbsp; &nbsp;Find  &nbsp; Teacher &nbsp; &nbsp;</Link></HomeButton>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles.bt}>
                                    <HomeButton><Link href="/teacher-job">Find Tuition</Link></HomeButton>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles.bt}>
                                    <HomeButton><Link href="join_teacher">Beacome Teacher</Link></HomeButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <h4 className={styles.heading}>Tuition for you</h4>
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
                        <h4 className={styles.heading}>Teacher for you</h4>
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
