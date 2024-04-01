
import { Grid } from '@mui/material';
import Tuition from '../Components/CustomComp/Tuition'
import { getLatestTuition } from '../Service/Tuitionservice';


async function Page() {
    let t = await getLatestTuition()
    let tuition = t.data
    return (
        <div>
            <div>
                {tuition.map(tut =>
                    <Tuition
                        imgUrl={'/logo.jpg'}
                        name={tut.student_name}
                        description={tut.description}
                        course={tut.course}
                        subject={tut.subject}
                        date={tut.date}
                        location={tut.locality}
                        verify={tut.verify}
                        link={"/"}
                    ></Tuition>
                )}
            </div>

        </div>
    )
}




export default Page
