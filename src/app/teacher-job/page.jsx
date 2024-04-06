
import { Grid } from '@mui/material';
import Tuition from '../Components/CustomComp/Tuition'
import { getLatestTuition } from '../Service/Tuitionservice';
import TuitionList from './TuitionList';
import SearchBox from '../Components/CustomComp/SearchBox';


async function Page() {
    let t = await getLatestTuition()
    let tuition = t.data
    return (
        <div>
            <SearchBox
                redirectUrl={"/"}
            ></SearchBox>

        </div>
    )
}




export default Page
