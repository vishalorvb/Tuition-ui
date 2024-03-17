import Link from "next/link"
import styles from "../Css/profile.module.css"

function Profile() {
    return (
        <div>
            <div className={styles.userinfo}>
                <Link href="" className={styles.edit_link}>Edit</Link>
                <img src="{{user.profilepic.url}}" alt="Profile Image" />
                <table class={styles.table}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>vishal kumar</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>vishal@gmaail.com</td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>1111111111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            this is profile
        </div>
    )
}

export default Profile
