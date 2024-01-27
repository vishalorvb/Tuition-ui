import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/CustomComp/Navbar'
import Tuition from './Components/CustomComp/Tuition'
import TuitionDetails from './Components/CustomComp/TuitionDetails'
import Teacher from './Components/CustomComp/Teacher'
import TeacherDetails from './Components/CustomComp/TeacherDetails'
export default function Home() {
    return (
        <main >
            <Navbar></Navbar>
            {/*<Tuition></Tuition>*/}
            {/*<Teacher></Teacher>*/}
            {/*<TuitionDetails></TuitionDetails>*/}
            <TeacherDetails></TeacherDetails>
        </main>
    )
}
