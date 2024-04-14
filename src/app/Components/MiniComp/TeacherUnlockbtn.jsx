'use client'
import { useState } from 'react';
import styles from '../../Css/tuitionunlockbtn.module.css'
import CallIcon from '@mui/icons-material/Call';
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import useGlobal from '../Hooks/useGlobal';
import { unlockTeacher } from '@/app/Service/TeacherService';

function TeacherUnlockbtn({ phoneNumber, teacherId }) {
    const [phone, setPhone] = useState(phoneNumber)
    let data = useSession()
    const { setSnackbarData } = useGlobal()


    function handleClick(event) {
        if (data.status == "loading") {
            return;
        }
        if (data.status != "authenticated") {
            redirect("/login");
        }
        unlockTeacher(teacherId, data.data.access_token).then(res => {
            if (res.contact != null) {
                setPhone(res.contact)
                setSnackbarData({
                    status: true,
                    message: "Unlock Successfully!",
                    severity: "success",
                })
            }
            else {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "error",
                })
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

export default TeacherUnlockbtn
