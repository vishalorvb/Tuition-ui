import Tuition from "@/app/Components/CustomComp/Tuition"
import { formateDate } from "@/app/utility"


function RelatedTuitionList({ tutionList }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4>Related Post</h4>
                </div>

                {tutionList?.map(tut =>
                    <div key={tut.id} className="col-12">
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
            {tutionList?.length == 0 && <div className="row">
                <div className="col">
                    <p className="endmessage">No related posts were found.</p>
                </div>
            </div>}
        </div>


    )
}

export default RelatedTuitionList
