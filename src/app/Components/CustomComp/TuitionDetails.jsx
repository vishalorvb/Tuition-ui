import { Box, Button, Grid, IconButton, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import "../../Css/TuitionDetails.css"

function TuitionDetails() {

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
            <div className="tuition-details">
                <div className="name-details">
                    <Grid container spacing={2}>
                        <Grid item xs={1} sm={1} md={1}>
                            <div className='pic'>
                                <img src="logo.jpg" alt="" />
                            </div>
                        </Grid>

                        <Grid item xs={6} sm={6} md={6}>
                            <div className='name'>
                                <h4>Student  Name</h4>
                            </div>
                            <div className='desc'>
                                <p>Vishal Kumar</p>
                            </div>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5}>
                            <div>
                                <p className='full-desc'>Posted Date: 22-Jan-2024</p>
                            </div>
                            <div>
                                <p className='full-desc'>Status : Tuition Verified<IconButton size='small' color='primary'><VerifiedOutlinedIcon /></IconButton></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div >
                    <h5 className="desc-heading">Tuition Description:</h5>
                    <p className='full-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem labore, blanditiis explicabo quo, aperiam repudiandae omnis hic aliquam voluptate itaque commodi reprehenderit officia necessitatibus cupiditate nulla cum ipsa sed placeat.</p>
                </div>
                <div className="mid">
                    <Grid container spacing={2} alignContent={'flex-start'}>
                        <Grid item >
                            <div >
                                <p className='tag'><IconButton size='small'><SchoolOutlinedIcon /></IconButton>10th state </p>
                            </div>
                        </Grid>

                        <Grid item>
                            <div className='tag'>
                                <p><IconButton size='small'><MenuBookIcon /></IconButton>Maths And Physics</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="more-info">
                    <p><IconButton size='small' color="primary"><LocationOnOutlinedIcon /> </IconButton>Madhapur, Hydrabad,near hitech cinema</p>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4}>

                            <p><IconButton size='small' color="primary"><VisibilityOutlinedIcon /></IconButton>3 user view contact </p>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>

                            <p><IconButton size='small' color="primary"><MoneyOutlinedIcon /></IconButton> 200/hr </p>

                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>

                            <p><IconButton size='small' color="primary"><WifiOutlinedIcon /></IconButton></p>

                        </Grid>
                    </Grid>

                </div>
                <h5 className="desc-heading">Updates:</h5>
                <div className="steper">
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
                </div>
                <div className="contactbtn">
                    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                        <Grid item >
                            <Button variant="contained">View Contact</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default TuitionDetails
