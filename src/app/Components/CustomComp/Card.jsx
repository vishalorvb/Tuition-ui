import styles from '../../Css/card.module.css'

function Card({data,heading}) {
    return (
        <div className={styles.creditinfo}>
            <div className={styles.credit}>
                <h1>{data}</h1>
                <h3>{heading}</h3>
               
            </div>
        </div>
    )
}

export default Card
