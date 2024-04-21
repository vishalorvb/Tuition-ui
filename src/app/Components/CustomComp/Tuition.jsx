import { Grid, IconButton } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styles from "../../Css/tuition.module.css"
import Anchor from '../MiniComp/Anchor';
import Call from "../CustomComp/Call"

function Tuition({ imgUrl, name, description, course, subject, date, location, verify, link, phoneNumber }) {
    return (
        <div className={styles.main}>
            <div className={styles.tuition}>
                <div className={styles.head}>
                    <div className="row">
                        <div className="col-2">
                            <div className={styles.pic}>
                                <img src={imgUrl} alt="" />
                            </div>

                        </div>
                        <div className="col-10">
                            <div className={styles.name}>
                                <h4>{name} {verify && <img className='icon' src="/verify.png" alt="" />}</h4>
                            </div>
                            <div className={styles.desc}>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mid}>
                    <div className="row justify-content-start">
                        <div className="col">

                            <p className={styles.tag}><IconButton size='small'><SchoolOutlinedIcon /></IconButton>{course} </p>
                            <p className={styles.tag}><IconButton size='small'><MenuBookIcon /></IconButton>{subject}</p>

                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className="row">
                        <div className="col-6">
                            <p><IconButton size='small'><CalendarMonthOutlinedIcon /> </IconButton>{date}</p>

                        </div>
                        <div className="col-6">
                            <p><IconButton size='small'><LocationOnOutlinedIcon /> </IconButton>{location}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className="row">
                        <div className="col-6">
                            <Call
                                phoneNumber={phoneNumber}
                            ></Call>
                        </div>
                        <div className="col-6">
                            <Anchor link={link}>Details</Anchor>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tuition
