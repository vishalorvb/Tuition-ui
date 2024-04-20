'use client'
import { useState } from "react";
import styles from "../../Css/Table.module.css"
import CallIcon from '@mui/icons-material/Call';
import Link from "next/link";
import Button from "../MiniComp/Button";
import { useSession } from "next-auth/react";
import { changeStatus } from "@/app/Service/Tuitionservice";
import useGlobal from "../Hooks/useGlobal";

function PostTable({ tuitionList }) {

    const [tuition, setTuition] = useState(tuitionList)
    const { setSnackbarData } = useGlobal();
    let data = useSession()

    let token = data?.data?.access_token
    function handleStatuschange(tuitionId) {
        changeStatus(tuitionId, token).then(res => {
            if (res.status) {
                setTuition(prevTuition => {
                    return prevTuition?.map(t => {
                        if (t.id === tuitionId) {
                            return { ...t, status: !t.status };
                        }
                        return t; // Return the original object if the condition is not met
                    });
                });
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
            }
        })
    }

    return (
        <div>
            <div className={styles.tabledata}>
                <div className={styles.tableheading}>
                    <h4>Your Post</h4>
                </div>
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <td>Student Name</td>
                                <td>Contact</td>
                                <td>Status</td>
                                <td>change status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {tuition?.map(tut =>
                                <tr key={tut.id}>
                                    <td> <Link href={`teacher-job/${tut.slug}/${tut.id}`}>{tut.student_name}</Link> </td>
                                    <td> <CallIcon /> <a href={`tel:${tut.phone_number}`}>{tut.phone_number}</a></td>
                                    <td className="link">{tut.status ? "Not found" : "Found"}</td>
                                    <td><Button
                                        onClick={e => {
                                            handleStatuschange(tut.id)
                                        }}
                                    >change status</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {tuition?.length == 0 && <p className="endmessage">No post</p>}
            </div>
        </div>
    )
}

export default PostTable
