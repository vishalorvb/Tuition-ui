import { Button, Grid, IconButton } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styles from "../../Css/teacher.module.css"
import Smallbutton from '../MiniComp/Smallbutton';
import Anchor from '../MiniComp/Anchor';


function Teacher({ imgUrl, name, gender, location, subject, qualification, experience, link }) {
    return (
        <div className={styles.main}>
            <div className={styles.tuition}>
                <div className={styles.head}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2} md={2}>
                            <div className={styles.pic}>
                                <img src={imgUrl} alt="" />
                            </div>
                        </Grid>

                        <Grid item xs={8} sm={8} md={8}>
                            <div className={styles.name}>
                                <h4>{name} -{(gender)}</h4>
                            </div>
                            <div className={styles.desc}>
                                <p>{qualification}</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.mid}>
                    <Grid container spacing={2} alignContent={'flex-start'}>
                        <Grid item >
                            <div className={styles.tag}>
                                <h3>{experience} Year </h3>
                                <p ><IconButton size='small'><SchoolOutlinedIcon /></IconButton>Experience </p>
                            </div>
                        </Grid>

                        <Grid item>
                            <div className={styles.tag}>
                                <h3> {subject}</h3>
                                <p><IconButton size='small'><MenuBookIcon /></IconButton>Subject</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.bottom}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p><IconButton size='small'><LocationOnOutlinedIcon /> </IconButton>{location}</p>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.bottom}>
                    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={3} sm={3} md={3}  >

                            <Anchor link={link}>Details</Anchor>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default Teacher
