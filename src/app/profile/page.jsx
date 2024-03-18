import React from 'react'
import Profile from './Profile'
import  Card  from "../Components/CustomComp/Card"
import PostTable from '../Components/CustomComp/PostTable'

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
            <Card
            data="10"
            heading="Credit point"
            ></Card>
            <PostTable></PostTable>
        </div>
    )
}

export default page
