

import styles from "../../Css/call.module.css"
function Call({ phoneNumber }) {
    return (
        <div className={styles.main}
        >
            <img className="icon" src="/call.png" alt="" />
            <a href={`tel:${phoneNumber}`}>CALL</a>
        </div>
    )
}

export default Call
