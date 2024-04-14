import Link from "next/link"
import styles from "../../Css/profile.module.css"

function Profile({ userInfo }) {
    return (
        <div>
            <div className={styles.userinfo}>
                <Link href="/" className={styles.edit_link}>Edit</Link>
                <img src={userInfo.profilepic} alt="Profile Image" />
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{userInfo.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userInfo.email}</td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>{userInfo.phone_number}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile
