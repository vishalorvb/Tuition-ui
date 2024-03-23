'use client'
import styles from "../../Css/Table.module.css"
import Smallbutton from "../MiniComp/Smallbutton"


function TuitionUnlockTable() {
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

                            <tr>
                                <td>vishasl</td>
                                <td>122455</td>
                                <td className="link">found</td>
                                <td><Smallbutton
                                    onClick={e => console.log("hhelllo")}
                                >Details</Smallbutton></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TuitionUnlockTable
