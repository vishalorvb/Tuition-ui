import { Box, IconButton, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styles from "../../Css/tuitiondetails.module.css"
import { formateDate } from "@/app/utility";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import TuitionUnclockBtn from "../MiniComp/TuitionUnclockBtn";

function TuitionDetails({ tuition }) {
    const steps = [
        {
            date: '22-Jan-2024',
            label: 'Home Tuiton Requirments Posted',
            description: `This is Tuition in posted `,
        },
        {
            label: 'Verification',
            description:
                'Our customer service executive  called student/parent and verified home tuition requirement.',
        },
    ];

    return (
        <div>
            <div className={styles["tuition-details"]}>
                <div className={styles["name-details"]}>
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <div className={styles.pic}>
                                    <img src="/logo.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className={styles.name}>
                                    <h4>{tuition.student_name}</h4>
                                    {tuition.verify && <p className={styles["full-desc"]}>Verified<IconButton size='small' color='primary'><VerifiedOutlinedIcon /></IconButton></p>}
                                </div>
                            </div>
                            <div className="col-5">
                                <p className={styles["full-desc"]}>Posted Date: {formateDate(tuition.posted_date)}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <h5 className={styles["desc-heading"]}>Tuition Description:</h5>
                    <p className={styles["full-desc"]}>{tuition.description}</p>
                </div>
                <div className={styles.mid}>

                    <div className="row">
                        <div className="col">
                            <p className={styles.tag}><IconButton size='small'><SchoolOutlinedIcon /></IconButton>{tuition.course} </p>
                            <p className={styles.tag}><IconButton size='small'><MenuBookIcon /></IconButton>{tuition.subject}</p>
                        </div>
                    </div>
                </div>
                <div className={styles["more-info"]}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {tuition.teaching_mode != "online" && <p className={styles.tuitiondeatils}><IconButton size='small' color="primary"><LocationOnOutlinedIcon /> </IconButton>{tuition.locality}</p>}
                                <p className={styles.tuitiondeatils}><IconButton size='small' color="primary"><VisibilityOutlinedIcon /></IconButton> View:{tuition.unlocks} </p>
                                <p className={styles.tuitiondeatils}><IconButton size='small' color="primary"><CurrencyRupeeIcon /></IconButton> {tuition.fee}/hr </p>

                                {tuition.teaching_mode == "offline" ? <p className={styles.tuitiondeatils}><IconButton size='small'><WifiOffIcon /></IconButton></p> :
                                    <p className={styles.tuitiondeatils}><IconButton size='small' color="primary"><WifiOutlinedIcon /></IconButton></p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contactbtn}>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <TuitionUnclockBtn
                                phoneNumber={tuition.phone_number}
                                tuitionId={tuition.id}
                            ></TuitionUnclockBtn>
                        </div>
                    </div>
                </div>
                {tuition.verify && <p className={styles.note}>Note:This recuirment is verified by our executive</p>}
                {tuition.unlocks == 0 && <p className={styles.note}>Note:Be the trailblazer! As of now, no one has unlocked this offer. Take the lead and be the first to seize the opportunity!</p>}
                {/*<h5 className={styles["desc-heading"]}>Updates:</h5>
                <div className={styles.steper}>
                    <Box sx={{ maxWidth: 400 }}>
                        <Stepper orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label} active>
                                    <StepLabel>
                                        <p>
                                            {step.date}:{step.label}
                                        </p>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div>*/}
            </div>
        </div>
    )
}

export default TuitionDetails
