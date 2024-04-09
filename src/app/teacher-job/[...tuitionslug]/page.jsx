import TuitionDetails from "@/app/Components/CustomComp/TuitionDetails"
import { getTuitionDetails, searchTuition } from "@/app/Service/Tuitionservice"
import RelatedTuitionList from "./RelatedTuitionList";

async function page({ params }) {

    const encodedString = params.tuitionslug[0];
    const slug = decodeURIComponent(encodedString).replace("-", " ");

    const tution = await getTuitionDetails(params.tuitionslug[1])
    let relatedTuition = []
    if (tution != null) {
        relatedTuition = (await searchTuition(slug)).data
    }
    return (
        <div>
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <TuitionDetails
                            tuition={tution}
                        ></TuitionDetails>
                    </div>
                    <div className="col-lg-4">
                        <RelatedTuitionList
                            tutionList={relatedTuition}
                        ></RelatedTuitionList>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
