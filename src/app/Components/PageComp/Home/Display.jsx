import styles from '../../../Css/display.module.css'
import Become from '../../MiniComp/Become'

function Display() {
    return (
        <div className={styles.main}>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-5">
                        <div className={styles.photo}>
                            <img src="/teacherdisplay.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.text}>
                            <h1 className={styles.heading}>Teach. Connect. Thrive.!</h1>
                            <p className={styles.desc}>Enlist as a teacher and stand out to students for free. Your profile will be visible to all students, enabling them to connect with you effortlessly.</p>
                            <Become></Become>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Display
