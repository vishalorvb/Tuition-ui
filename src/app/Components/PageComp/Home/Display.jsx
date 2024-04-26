import styles from '../../../Css/display.module.css'
import Become from '../../MiniComp/Become'

function Display({ heading, subHeading, url, name, imageUrl }) {
    return (
        <div className={styles.main}>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-5">
                        <div className={styles.photo}>
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.text}>
                            <h1 className={styles.heading}>{heading}</h1>
                            <p className={styles.desc}>{subHeading}</p>
                            <Become
                                url={url}
                                name={name}
                            ></Become>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Display
