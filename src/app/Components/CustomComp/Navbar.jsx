
'use client'
import React, { useState } from 'react'
import "../../Css/navbar.css"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import { Drawer } from '@mui/material'
import { useSession } from 'next-auth/react';

function Navbar() {


    const [drawer, setDrawer] = useState(false)
    let { status } = useSession()
    const navList = [
        { id: 1, tag: "Home", link: "/", open: 1 },
        //{ id: 2, tag: "Tuition", link: "/teacher-job", open: 1 },
        //{ id: 3, tag: "Teacher", link: "/teacher", open: 1 },
        { id: 4, tag: "Login", link: "/login", open: 3 },
        { id: 5, tag: "Logout", link: "/logout", open: 2 },
        { id: 6, tag: "Registration", link: "/registration", open: 3 },

        { id: 7, tag: "Profile", link: "/profile", open: 2 },

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
                        {navList.filter(nav => {
                            if (nav.open == 1) return true
                            if (nav.open == 2 && status == "authenticated") return true
                            if (nav.open == 3 && status == "unauthenticated") return true
                        }).map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
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
                                {navList.filter(nav => {
                                    if (nav.open == 1) return true
                                    if (nav.open == 2 && status == "authenticated") return true
                                    if (nav.open == 3 && status == "unauthenticated") return true
                                }).map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>


    )
}


export default Navbar
