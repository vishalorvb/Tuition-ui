import { Grid } from "@mui/material"
import styles from "../../Css/teacherdetails.module.css"
import Chip from "../MiniComp/Chip"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import TeacherUnlockbtn from "../MiniComp/TeacherUnlockbtn";
function TeacherDetails({ imgUrl, name, gender, age, qualification, about, subject, location, classes, fee, mode, phone_number, teacherId }) {
    return (
        <div className={styles.main}>
            <div className={styles.section}>
                <div className="row">
                    <div className="col-2">
                        <div className={styles.pic}>
                            <img src={imgUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-10">
                        <h3 className={styles.hightlight}>{name} ({gender}-{age})</h3>
                        <p className={styles.text}>{qualification}</p>
                    </div>

                </div>
            </div>
            <div className={styles.section}>
                <h4 className={styles.hightlight} >About:</h4>
                <p className={styles.text}>{about}</p>
            </div>
            <div className={styles.section}>
                <h4 className={styles.hightlight}> Subject and Expertise</h4>
                <Chip>{subject}</Chip>
            </div>
            <div className={styles.section}>
                <p className={styles.teacherinfo}>  <LocationOnOutlinedIcon /> {location}</p>

            </div>
            <div className={styles.section}>
                <p className={styles.teacherinfo}><CastForEducationOutlinedIcon /> {classes}</p>

            </div>
            <div className={styles.section}>
                <div className="row">
                    <div className="col">
                        <div className={styles.mode}>
                            <h5 className={styles.test}><WifiOutlinedIcon /></h5>
                            <h5 className={styles.test}><WifiOffOutlinedIcon /></h5>
                        </div>
                        <p>Teaching Mode</p>
                    </div>
                    <div className="col">
                        <div className={styles.mode}>
                            <h5 className={styles.test}>₹ {fee}/Hr</h5>
                        </div>
                        <p>Fee</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3">
                    <TeacherUnlockbtn
                        //phoneNumber={phone_number}
                        teacherId={teacherId}
                    ></TeacherUnlockbtn>
                </div>
            </div>
        </div>
    )
}

export default TeacherDetails
