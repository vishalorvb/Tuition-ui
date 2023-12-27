
'use client'
import React, { useState } from 'react'
import "../../Css/navbar.css"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Navbar() {


    const [drawer, setDrawer] = useState(false)

    const navList = [
        { id: 1, tag: "item1", link: "#" },
        { id: 2, tag: "item2", link: "#" },
        { id: 3, tag: "item3", link: "#" },
        { id: 4, tag: "item4", link: "#" },
        { id: 5, tag: "item5", link: "#" },
    ]


    return (
        <div>
            <nav>
                <div className='logo'><img src="next.svg" alt='logo' /></div>
                <div className="hamburger-icon ">
                    <IconButton
                        color='inherit'
                        onClick={() => setDrawer(true)}
                    ><MenuIcon></MenuIcon></IconButton>

                </div>
                <ul>
                    {navList.map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                </ul>
            </nav>
            <div >
                <Drawer
                    anchor={"left"}
                    open={drawer}
                    onClose={() => { }}
                >
                    <IconButton
                        color='inherit'
                        onClick={() => setDrawer(false)}
                    ><CloseIcon></CloseIcon></IconButton>

                    <div className='drawer'>
                        <ul>
                            {navList.map(nav => <li key={nav.id}><Link href={nav.link}>{nav.tag}</Link></li>)}
                        </ul>
                    </div>

                </Drawer>
            </div>
        </div>


    )
}
import { Drawer } from '@mui/material'

export default Navbar
