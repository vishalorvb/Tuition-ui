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
        <div>
            <div className={styles.section}>
                <Grid container columnSpacing={2} alignItems="center" justifyContent="flex-start" alignContent="center">
                    <Grid item md={1} xs={2}>
                        <div className={styles.pic}>
                            <img src={imgUrl} alt="" />
                        </div>
                    </Grid>
                    <Grid item md={10} xs={10}>
                        <h3 className={styles.hightlight}>{name} ({gender}-{age})</h3>
                        <p className={styles.text}>{qualification}</p>
                    </Grid>
                </Grid>
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
                <Grid container columnSpacing={2}>
                    <Grid item md={3} xs={4}>
                        <div className={styles.mode}>
                            <h5 className={styles.test}><WifiOutlinedIcon /></h5>
                            <h5 className={styles.test}><WifiOffOutlinedIcon /></h5>
                        </div>
                        <p>Teaching Mode</p>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <div className={styles.mode}>
                            <h5 className={styles.test}>₹ {fee}/Hr</h5>
                        </div>
                        <p>Fee</p>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <TeacherUnlockbtn
                            phoneNumber={phone_number}
                            teacherId={teacherId}
                        ></TeacherUnlockbtn>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default TeacherDetails
