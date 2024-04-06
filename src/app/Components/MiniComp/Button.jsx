'use client'

import styles from '../../Css/button.module.css'

function Button({ children, ...props }) {
    return (

        <div className={styles.main} {...props}>
            {children}
        </div>

    )
}

export default Button
