import TuitionDetails from "@/app/Components/CustomComp/TuitionDetails"
import { getTuitionDetails, searchTuition } from "@/app/Service/Tuitionservice"
import RelatedTuitionList from "./RelatedTuitionList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/app/Components/CustomComp/Header";

async function page({ params }) {

    const encodedString = params.tuitionslug[0];
    const slug = decodeURIComponent(encodedString).replace("-", " ");

    const session = await getServerSession(authOptions);
    const token = session?.access_token ?? null

    const tution = await getTuitionDetails(params.tuitionslug[1], token)
    let relatedTuition = []
    if (tution != null) {
        relatedTuition = (await searchTuition(slug)).data
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header
                            heading="Discover Qualified and Verified Teachers"
                            subHeading="Get  free demo classes when you post your tuition requirements! Experience top-quality teaching firsthand and find your perfect match hassle-free. Don't wait, start learning with us today!"
                        ></Header>
                    </div>
                    <div className="col-12">
                        <p>Note: Each unlock(view of contact) reduce your credit point by 1</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <TuitionDetails
                            tuition={tution}
                        ></TuitionDetails>
                    </div>
                    <div className="col-lg-4">

                        <RelatedTuitionList
                            tutionList={relatedTuition.slice(0, 3)}
                        ></RelatedTuitionList>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
