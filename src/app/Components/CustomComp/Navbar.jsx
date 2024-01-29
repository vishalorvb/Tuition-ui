
'use client'
import React, { useState } from 'react'
import "../../Css/navbar.css"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import { Drawer } from '@mui/material'

function Navbar() {


    const [drawer, setDrawer] = useState(false)

    const navList = [
        { id: 1, tag: "Home", link: "/" },
        { id: 2, tag: "Tuition", link: "/teacher-job" },
        { id: 3, tag: "Teacher", link: "/teacher" },
        { id: 4, tag: "Login", link: "/login" },
        { id: 5, tag: "Logout", link: "/logout" },
        { id: 6, tag: "Registration", link: "/registration" },

        { id: 7, tag: "Profile", link: "/profile" },

    ]
    return (
        <div>
            <div className="navbar">
                <div className='logo'><img src="logo.jpg" alt='logo' /></div>
                <div className="hamburger-icon ">
                    <IconButton
                        color='inherit'
                        onClick={() => setDrawer(true)}
                    ><MenuIcon></MenuIcon></IconButton>
                </div>
                <div className="listitem">
                    <ul>
                        {navList.map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                    </ul>
                </div>
                <div className="btn">
                    <Button variant="outlined" sx={{ color: "inherit", background: "white" }} size="small">Book Free Demo</Button>

                </div>
            </div>
            <div >
                <Drawer
                    anchor={"right"}
                    open={drawer}
                    onClose={() => { }}
                >
                    <div className='drawerdiv'>
                        <div className="drawerhead">
                            <h6><IconButton
                                color='inherit'
                                onClick={() => setDrawer(false)}
                            ><CloseIcon></CloseIcon></IconButton>Welcome!</h6>
                        </div>


                        <div className='drawer'>
                            <ul>
                                {navList.map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>


    )
}


export default Navbar
