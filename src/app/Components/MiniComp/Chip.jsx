import styles from "../../Css/chip.module.css"

function Chip({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default Chip
