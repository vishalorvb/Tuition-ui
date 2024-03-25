
'use client'
import React, { useState } from 'react'
import styles from "../../Css/navbar.module.css"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import { Drawer } from '@mui/material'
import { useSession } from 'next-auth/react';
import { login } from '@/app/Api';

function Navbar() {






    const [drawer, setDrawer] = useState(false)
    let { status } = useSession()
    let data = useSession()
    //{
    //    1: always
    //    2:when login
    //    3:when logout
    //}
    const navList = [
        { id: 1, tag: "Home", link: "/", open: 1 },
        { id: 2, tag: "Tuition", link: "/teacher-job", open: 1 },
        { id: 3, tag: "Teacher", link: "/teacher", open: 1 },
        { id: 4, tag: "Login", link: "/login", open: 3 },
        { id: 5, tag: "Logout", link: "/logout", open: 2 },
        { id: 6, tag: "Registration", link: "/registration", open: 3 },
        { id: 9, tag: "Post Tuition", link: "/home-tuition", open: 1 },

        { id: 7, tag: "Profile", link: "/profile", open: 2 },
        { id: 8, tag: "Join as Teacher", link: "/join_teacher", open: 1 },
    ]


    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}><img src="/logo.jpg" alt='logo' /></div>
                <div className={styles["hamburger-icon"]}>
                    <IconButton
                        color='inherit'
                        onClick={() => setDrawer(true)}
                    ><MenuIcon></MenuIcon></IconButton>
                </div>
                <div className={styles.listitem}>
                    <ul>
                        {navList.filter(nav => {
                            if (nav.open == 1) return true
                            if (nav.open == 2 && status == "authenticated") return true
                            if (nav.open == 3 && status == "unauthenticated") return true
                        }).map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                    </ul>
                </div>
                <div className={styles.btn}>
                    <Button variant="outlined" sx={{ color: "inherit", background: "white" }} size="small">Book Free Demo</Button>

                </div>
            </div>
            <div >
                <Drawer
                    anchor={"right"}
                    open={drawer}
                    onClose={() => { }}
                >
                    <div className={styles.drawerdiv}>
                        <div className={styles.drawerhead}>
                            <h6><IconButton
                                color='inherit'
                                onClick={() => setDrawer(false)}
                            ><CloseIcon></CloseIcon></IconButton>Welcome!</h6>
                        </div>


                        <div className={styles.drawer}>
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
