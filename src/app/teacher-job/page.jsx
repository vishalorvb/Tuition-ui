
import { getLatestTuition } from '../Service/Tuitionservice';
import TuitionBlock from './TuitionBlock';


async function Page() {
    let t = await getLatestTuition()
    let tuition = t.data
    return (
        <div className='container'>
            <TuitionBlock
                initialTuitionList={tuition}
                redirectOnsearchurl={"/teacher-job/home-tuition/"}
            ></TuitionBlock>
        </div>
    )
}




export default Page
