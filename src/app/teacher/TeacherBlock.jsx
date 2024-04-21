'use client'

import { useState } from "react"
import Header from "../Components/CustomComp/Header"
import TeacherList from "./TeacherList"
import CityList from "../Components/CustomComp/CityList"
import SearchBox from "../Components/CustomComp/SearchBox"
import { searchTeacher } from "../Service/TeacherService"

function TeacherBlock({ initialTeacherList, redirectUrl }) {

    const [teacher, setTeacher] = useState(initialTeacherList)
    const cityUrl = "teacher/online-tuition/"


    function handleSearch(words) {
        setTeacher([])
        searchTeacher(words).then(res => setTeacher(res.data))
    }
    return (
        <div>

            <div className="row">
                <div className="col-12">
                    <Header
                        heading={"Discover Limitless Learning Opportunities"}
                        subHeading={` Empower your education journey with our platform that seamlessly
                        connects students and teachers. Explore freelance teaching opportunities, post tuition listings for free,
                        and enjoy complimentary demo classes.`}
                    ></Header>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row justify-content-between" >
                        <div className="col-10">
                            <SearchBox
                                heading={"Find Tuition By: city , subject, courses etc"}
                                redirectUrl={redirectUrl}
                                getWord={words => {
                                    handleSearch(words)
                                }}
                            ></SearchBox>
                        </div>
                    </div>
                    <TeacherList
                        teacherList={teacher}
                    ></TeacherList>

                </div>
                <div className="col-lg-3">
                    <CityList
                        baseUrl={cityUrl}
                        heading={"Teacher in Top City"}
                    ></CityList>
                </div>

            </div>

        </div>
    )
}

export default TeacherBlock
