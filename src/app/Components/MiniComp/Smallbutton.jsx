'use client'

import styles from '../../Css/smallbutton.module.css'

function Smallbutton({ children, ...props }) {
    return (

        <div className={styles.main} {...props}>
            {children}
        </div>

    )
}

export default Smallbutton
