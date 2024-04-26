import Link from 'next/link'
import styles from '../../Css/become.module.css'

function Become({ url, name }) {
    return (
        <div className={styles.main}>
            <Link href={url}> {name} &#8594;</Link>
        </div>
    )
}

export default Become
