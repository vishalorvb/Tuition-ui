import { IconButton } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import styles from "../../Css/teacher.module.css"
import Anchor from '../MiniComp/Anchor';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Call from './Call';

function Teacher({ imgUrl, name, gender, location, subject, qualification, experience, link, phoneNumber }) {
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
                        <div className="col-8">
                            <h4 className={styles.name}>{name} -{gender}</h4>
                            <p className={styles.desc}>{qualification}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className={styles.tag} ><IconButton size='small'><WorkOutlineIcon /></IconButton>{experience} Year </p>
                        <p className={styles.tag}><IconButton size='small'><MenuBookIcon /></IconButton>{subject}</p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-12">
                        <div className={styles.bottom}>
                            <p><IconButton size='small'><LocationOnOutlinedIcon /> </IconButton>{location}</p>
                        </div>
                    </div>
                    <div className="col">
                        <Call
                            phoneNumber={phoneNumber}
                        ></Call>
                    </div>
                    <div className="col">
                        <div className={styles.bottom}>
                            <Anchor link={link}>Details</Anchor>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
