import { Button, Grid, IconButton } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import "../../Css/Tuition.css"

function Tuition() {
    return (
        <div className='main'>
            <div className='tuition'>
                <div className="head">
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2} md={2}>
                            <div className='pic'>
                                <img src="logo.jpg" alt="" />
                            </div>
                        </Grid>

                        <Grid item xs={8} sm={8} md={8}>
                            <div className='name'>
                                <h4>Your Name</h4>
                            </div>
                            <div className='desc'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odit rerum, ab saepe dolorem dolorum rem eius assumenda tempore expedita provident voluptas soluta, esse ipsa itaque eveniet optio. Pariatur, sint.</p>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2}>

                            <p><VerifiedOutlinedIcon /></p>

                        </Grid>
                    </Grid>
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
                <div className="bottom">
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p><IconButton size='small'><CalendarMonthOutlinedIcon /> </IconButton>Posted Date:20-Jan-2023</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <p><IconButton size='small'><LocationOnOutlinedIcon /> </IconButton>Madhapur, Hydrabad</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Tuition
