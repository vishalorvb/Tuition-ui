import styles from "../../Css/homebutton.module.css"

function HomeButton({ children }) {
    return (
        <div className={styles["gradient-border"]}>
            {children}
        </div>
    )
}

export default HomeButton
