import { getLatestTuition, searchTuition } from '@/app/Service/Tuitionservice'
import React from 'react'
import TuitionBlock from '../../TuitionBlock'

async function page({ params }) {
    let string = params.search[0]
    string = string.split("-").join(" ")
    let t = await searchTuition(string)
    let tuition = t.data
    return (
        <div>
            <TuitionBlock
                initialTuitionList={tuition}
            ></TuitionBlock>
        </div>
    )
}

export default page
