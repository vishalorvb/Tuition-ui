

import { getLatestTuition } from '@/app/Service/Tuitionservice';
import TuitionBlock from '../TuitionBlock';




async function Page() {
    let t = await getLatestTuition()
    let tuition = t.data
    return (
        <div>
            <TuitionBlock
                initialTuitionList={tuition}
            ></TuitionBlock>
        </div>
    )
}




export default Page
