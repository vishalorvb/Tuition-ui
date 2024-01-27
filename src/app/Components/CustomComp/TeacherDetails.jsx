import { Grid } from "@mui/material"
import styles from "../../Css/teacherdetails.module.css"
import Chip from "../MiniComp/Chip"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import TeacherContactBtn from "../MiniComp/TeacherContactBtn";
function TeacherDetails() {
    return (
        <div>
            <div className={styles.section}>
                <Grid container columnSpacing={2} alignItems="center" justifyContent="flex-start" alignContent="center">
                    <Grid item md={1} xs={2}>
                        <div className={styles.pic}>
                            <img src="logo.jpg" alt="" />
                        </div>
                    </Grid>
                    <Grid item md={10} xs={10}>
                        <h3 className={styles.hightlight}>Vishal Kumar (Male-22)</h3>
                        <p className={styles.text}>B.Tech in Electronic and communication</p>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.section}>
                <h4 className={styles.hightlight} >About:</h4>
                <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis reiciendis enim. Sapiente sequi laborum voluptate eius ipsa minus distinctio consequuntur voluptatibus tempore deserunt, nulla a enim mollitia, doloremque ea!</p>
            </div>
            <div className={styles.section}>
                <h4 className={styles.hightlight}> Subject and Expertise</h4>
                <Chip>Physics</Chip>
            </div>
            <div className={styles.section}>
                <p className={styles.teacherinfo}>  <LocationOnOutlinedIcon /> Hydrabad telengana</p>

            </div>
            <div className={styles.section}>
                <p className={styles.teacherinfo}><CastForEducationOutlinedIcon /> 12th IIT</p>

            </div>
            <div className={styles.section}>
                <Grid container columnSpacing={2}>
                    <Grid item md={3} xs={3}>
                        <div className={styles.mode}>
                            <h5 className={styles.test}><WifiOutlinedIcon /></h5>
                            <h5 className={styles.test}><WifiOffOutlinedIcon /></h5>
                        </div>
                        <p>Teaching Mode</p>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <div className={styles.mode}>
                            <h5 className={styles.test}>₹ 200/Hr</h5>
                        </div>
                        <p>Fee</p>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <TeacherContactBtn></TeacherContactBtn>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default TeacherDetails
