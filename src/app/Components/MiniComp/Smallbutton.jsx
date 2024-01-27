import styles from '../../Css/smallbutton.module.css'

function Smallbutton({ title, children, events }) {
    return (
        <div>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default Smallbutton
