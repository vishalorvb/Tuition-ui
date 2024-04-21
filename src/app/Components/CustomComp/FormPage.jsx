import styles from '../../Css/formpage.module.css'

function FormPage({ AdHeading, AdList, imageUrl, children }) {
    return (
        <div className={styles.main}>
            <div className="row justify-content-center ">
                <div className="col-lg-6 order-lg-last">
                    {children}
                </div>
                <div className="col-lg-6 order-lg-first">
                    <div className={styles.left}>
                        {imageUrl && <img src={imageUrl} alt="" />}
                        {AdList &&
                            <div className={styles.features}>
                                <h1 className={styles["features-heading"]}>{AdHeading}</h1>
                                <ul>
                                    {AdList.map(l => <li key={l}>&#x27A9; {l}</li>)}
                                </ul>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormPage
