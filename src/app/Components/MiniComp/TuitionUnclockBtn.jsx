
'use client'
import { useState } from 'react';
import styles from '../../Css/tuitionunlockbtn.module.css'
import CallIcon from '@mui/icons-material/Call';
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import { unlockTuition } from '@/app/Service/Tuitionservice';



function TuitionUnclockBtn({ phoneNumber, tuitionId }) {

    const [phone, setPhone] = useState(phoneNumber)
    let data = useSession()
    console.log(data)
    function handleClick(e) {
        if (data.status == "loading") {
            return;
        }
        if (data.status != "authenticated") {
            redirect("/login");
        }
        unlockTuition(tuitionId, data.data.access_token).then(res => {
            if (res.contact != null) {
                setPhone(res.contact)
            }
        })
    }

    return (
        <div className={styles.main} onClick={handleClick}>
            {phone == undefined ? <div
                onClick={handleClick}
            >
                View Contact
            </div> :
                <div>
                    <CallIcon /> <a href={`tel:${phone}`}>{phone}</a>
                </div>}
        </div>
    )
}

export default TuitionUnclockBtn
