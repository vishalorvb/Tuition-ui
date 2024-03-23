import Link from "next/link"
import styles from "../../Css/profile.module.css"

function Profile({ name, email, mobile, imageUrl, editUrl }) {
    return (
        <div>
            <div className={styles.userinfo}>
                <Link href={editUrl} className={styles.edit_link}>Edit</Link>
                <img src={imageUrl} alt="Profile Image" />
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>{mobile}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile
