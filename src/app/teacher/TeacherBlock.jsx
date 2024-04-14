'use client'

import { useState } from "react"
import Header from "../Components/CustomComp/Header"
import TeacherList from "./TeacherList"
import CityList from "../Components/CustomComp/CityList"
import SearchBox from "../Components/CustomComp/SearchBox"

function TeacherBlock({ initialTeacherList, redirectUrl }) {

    const [teacher, setTeacher] = useState(initialTeacherList)
    const cityUrl = "teacher/online-tuition/"


    function handleSearch(words) {

    }
    return (
        <div>
            <div className="container">
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
                    <div className="col-3">
                        <CityList
                            baseUrl={cityUrl}
                            heading={"Teacher in Top City"}
                        ></CityList>
                    </div>
                    <div className="col-9">
                        <div className="row justify-content-end" >
                            <div className="col-12">
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
                </div>
            </div>
        </div>
    )
}

export default TeacherBlock
