import { Grid, IconButton } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styles from "../../Css/tuition.module.css"
import Anchor from '../MiniComp/Anchor';

function Tuition({ imgUrl, name, description, course, subject, date, location, verify, link }) {
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
                                <h4>{name}</h4>
                            </div>
                            <div className={styles.desc}>
                                <p>{description}</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.mid}>
                    <Grid container spacing={2} alignContent={'flex-start'}>
                        <Grid item >
                            <div >
                                <p className={styles.tag}><IconButton size='small'><SchoolOutlinedIcon /></IconButton>{course} </p>
                            </div>
                        </Grid>

                        <Grid item>
                            <div className={styles.tag}>
                                <p><IconButton size='small'><MenuBookIcon /></IconButton>{subject}</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.bottom}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p><IconButton size='small'><CalendarMonthOutlinedIcon /> </IconButton>Posted Date:{date}</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <p><IconButton size='small'><LocationOnOutlinedIcon /> </IconButton>{location}</p>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.bottom}>
                    <Grid container spacing={2} justifyContent={'flex-end'} alignItems={'center'}>
                        <Grid item xs={9} sm={9} md={9}>
                            {verify == true && <p><IconButton size='small' color='primary'><VerifiedOutlinedIcon /></IconButton>Tuition Verified</p>}
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}  >
                            <Anchor link={link}>Details</Anchor>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default Tuition
