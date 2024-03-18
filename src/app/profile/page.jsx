import React from 'react'
import Profile from './Profile'

function page() {
    return (
        <div>
          
            <Profile
            name="Vishal Bhai"
            email="vishal@bhai.com"
            mobile="445555"
            imageUrl="https://profilephoto.blob.core.windows.net/profilepic/profilepic/profilepic.png"
            editUrl="/"
            ></Profile>
        </div>
    )
}

export default page
