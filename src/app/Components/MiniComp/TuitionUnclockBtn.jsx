
'use client'
import { useState } from 'react';
import styles from '../../Css/tuitionunlockbtn.module.css'
import CallIcon from '@mui/icons-material/Call';



function TuitionUnclockBtn({ phoneNumber, tuitionId }) {

    const [phone, setPhone] = useState(phoneNumber)

    return (
        <div className={styles.main}>

            <CallIcon /> <a href={`tel:${phone ?? ""}`}>{phone ?? "View Contact"}</a>
        </div>
    )
}

export default TuitionUnclockBtn
