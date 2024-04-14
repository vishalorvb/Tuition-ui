import React from 'react'
import Teacher from '../Components/CustomComp/Teacher'

function TeacherList({ teacherList }) {
    return (
        <div className="container">
            <div className="row">
                {teacherList?.map(t =>
                    <div key={t.id} className="col-lg-6 col-sm-12">
                        <Teacher
                            id={t.id}
                            imgUrl={t.photo ?? "/profilepic.png"}
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
                    <p className="endmessage">No posts were found. Please try searching with a different keyword.</p>
                </div>
            </div>}
        </div>
    )
}

export default TeacherList
