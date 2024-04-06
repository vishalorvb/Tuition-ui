'use client'

import { Grid } from "@mui/material"
import Tuition from "../Components/CustomComp/Tuition"
import { formateDate } from "../utility"

function TuitionList({ tuitionList }) {

    return (
        <div>
            <Grid container direction="row" columnSpacing={2} justifyContent="flex-end" >
                {tuitionList.map(tut =>
                    <Grid item md={6} sm={12} justifyContent="flex-end">
                        <Tuition
                            imgUrl={'/logo.jpg'}
                            name={tut.student_name}
                            description={tut.description}
                            course={tut.course}
                            subject={tut.subject}
                            date={formateDate(tut.posted_date)}
                            location={tut.locality}
                            verify={tut.verify}
                            link={"/teacher-job/" + tut.slug + '/' + tut.id}
                        ></Tuition>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default TuitionList
