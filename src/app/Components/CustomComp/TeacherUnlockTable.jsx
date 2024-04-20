'use client'
import styles from "../../Css/Table.module.css"
import Anchor from "../MiniComp/Anchor"
import CallIcon from '@mui/icons-material/Call';

function TeacherUnlockTable({ teacherList }) {
    return (
        <div>
            <div className={styles.tabledata}>
                <div className={styles.tableheading}>
                    <h4>Viewed Teacher</h4>
                </div>
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <td>Teacher Name</td>
                                <td>Contact</td>
                                <td>Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            {teacherList?.map(t =>
                                <tr key={t.id}>
                                    <td>{t.name}</td>
                                    <td><CallIcon /> <a href={`tel:${t.phone_number}`}>{t.phone_number}</a></td>
                                    <td><Anchor link={`teacher/${t.slug}/${t.id}`}>Details</Anchor></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                {teacherList?.length == 0 && <p className="endmessage">No post</p>}
            </div>
        </div>
    )
}

export default TeacherUnlockTable
