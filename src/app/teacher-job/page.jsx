
import { Grid } from '@mui/material';
import Tuition from '../Components/CustomComp/Tuition'
import { getLatestTuition } from '../Service/Tuitionservice';
import TuitionList from './TuitionList';
import SearchBox from '../Components/CustomComp/SearchBox';
import CityList from '../Components/CustomComp/CityList';


async function Page() {
    let t = await getLatestTuition()
    let tuition = t.data
    return (
        <div>
            <CityList></CityList>
        </div>
    )
}




export default Page
