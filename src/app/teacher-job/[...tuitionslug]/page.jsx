import TuitionDetails from "@/app/Components/CustomComp/TuitionDetails"

function page({ params }) {
    console.log(params)
    console.log(params.tuitionslug.length)
    return (
        <div>
            <TuitionDetails></TuitionDetails>
        </div>
    )
}

export default page
