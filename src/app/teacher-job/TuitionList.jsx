
import Tuition from "../Components/CustomComp/Tuition"
import { formateDate } from "../utility"

function TuitionList({ tuitionList }) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {tuitionList?.map(tut =>
                        <div key={tut.id} className="col-lg-6 col-sm-12">
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
                        </div>
                    )}
                </div>
                {tuitionList?.length == 0 && <div className="row">
                    <div className="col">
                        <p className="endmessage">No posts were found. Please try searching with a different keyword.</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default TuitionList
