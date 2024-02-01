import styles from '../../Css/tranparentbutton.module.css'

function TranparentButton(props) {
    return (
        <div className={styles.main} {...props}>
            {props.children}
        </div>
    )
}

export default TranparentButton
