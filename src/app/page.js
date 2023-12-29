import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/CustomComp/Navbar'
import Tuition from './Components/CustomComp/Tuition'
export default function Home() {
    return (
        <main >
            <Navbar></Navbar>
            <Tuition></Tuition>
        </main>
    )
}
