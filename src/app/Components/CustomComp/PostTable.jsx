'use client'
import styles from "../../Css/Table.module.css"
import Anchor from "../MiniComp/Anchor"
import CallIcon from '@mui/icons-material/Call';

function PostTable({ tuitionList }) {
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
                                <td>Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            {tuitionList.map(tut =>
                                <tr key={tut.id}>
                                    <td>{tut.student_name}</td>
                                    <td> <CallIcon /> <a href={`tel:${tut.phone_number}`}>{tut.phone_number}</a></td>
                                    <td className="link">found</td>
                                    <td><Anchor link={`teacher-job/${tut.slug}/${tut.id}`}>Details</Anchor></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PostTable
