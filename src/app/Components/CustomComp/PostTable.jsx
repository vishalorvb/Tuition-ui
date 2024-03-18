import styles from "../../Css/Table.module.css"

function PostTable() {
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
                                    <td>found</td>
                                    <td><button>view Details</button></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

export default PostTable
