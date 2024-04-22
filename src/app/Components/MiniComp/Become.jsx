import Link from 'next/link'
import styles from '../../Css/become.module.css'

function Become() {
    return (
        <div className={styles.main}>
            <Link href="/join_teacher"> Join as Teacher &#8594;</Link>
        </div>
    )
}

export default Become
