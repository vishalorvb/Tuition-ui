'use client'

import { useState } from "react"
import CityList from "../Components/CustomComp/CityList"
import TuitionList from "./TuitionList"
import Header from "../Components/CustomComp/Header";
import SearchBox from "../Components/CustomComp/SearchBox";

function TuitionBlock({ initialTuitionList, redirect }) {

    const [tuition, setTuition] = useState(initialTuitionList);

    let url = "/teacher-job/home-tuition/"


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
                <div className="row justify-content-end" >
                    <div className="col-9">
                        <SearchBox
                            heading={"Find Tuition By: city , subject, courses etc"}
                            redirectUrl={url}
                            getWord={(words) => { console.log(words) }}
                        ></SearchBox>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <CityList
                            baseUrl={url}
                            heading={"Tuition in Top City"}
                        ></CityList>

                    </div>
                    <div className="col-9">
                        <TuitionList
                            tuitionList={tuition}
                        ></TuitionList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuitionBlock
