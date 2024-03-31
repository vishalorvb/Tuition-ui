import Link from 'next/link'
import styles from '../../Css/anchor.module.css'

function Anchor({ children, link = "" }) {
    return (
        <div className={styles.main}>
            <Link href={link}>{children}</Link>
        </div>
    )
}

export default Anchor
