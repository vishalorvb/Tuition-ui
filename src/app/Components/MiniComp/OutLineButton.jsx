'use client'

import styles from '../../Css/outlinebutton.module.css'

function OutLineButton({ children, ...props }) {
    return (

        <div className={styles.main} {...props}>
            {children}
        </div>

    )
}

export default OutLineButton
