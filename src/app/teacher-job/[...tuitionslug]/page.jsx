
function page({ params }) {
    console.log(params)
    console.log(params.tuitionslug.length)
    return (
        <div>
            this is slug
        </div>
    )
}

export default page
