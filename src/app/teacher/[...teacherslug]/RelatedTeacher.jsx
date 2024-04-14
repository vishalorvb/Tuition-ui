import Teacher from "@/app/Components/CustomComp/Teacher"


function RelatedTeacher({ teacherList }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4>Related Post</h4>
                </div>
                {teacherList?.map(t =>
                    <div key={t.id} className="col-12">
                        <Teacher
                            id={t.id}
                            imgUrl={t.photo}
                            name={t.name}
                            gender={t.gender}
                            location={t.location}
                            subject={t.subject}
                            qualification={t.qualification}
                            experience={t.experience}
                            link={"/teacher/" + t.slug + '/' + t.id}
                        ></Teacher>
                    </div>
                )}
            </div>
            {teacherList?.length == 0 && <div className="row">
                <div className="col">
                    <p className="endmessage">No related posts were found.</p>
                </div>
            </div>}
        </div>
    )
}

export default RelatedTeacher
