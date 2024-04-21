'use client'
import { useState } from "react"
import CityList from "../Components/CustomComp/CityList"
import TuitionList from "./TuitionList"
import Header from "../Components/CustomComp/Header";
import SearchBox from "../Components/CustomComp/SearchBox";
import { searchTuition } from '../Service/Tuitionservice';

function TuitionBlock({ initialTuitionList, redirectOnsearchurl }) {

    const [tuition, setTuition] = useState(initialTuitionList);

    let url = "/teacher-job/home-tuition/"

    function handleSearch(words) {
        setTuition([])
        searchTuition(words).then(res => {
            if (res.data.length > 0) {
                setTuition(res.data)
            }
        })
    }


    return (
        <div >
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
                <div className="col-lg-9 ">
                    <div className="row justify-content-between" >
                        <div className="col-10">
                            <SearchBox
                                heading={"Find Tuition By: city , subject, courses etc"}
                                redirectUrl={redirectOnsearchurl}
                                getWord={words => {
                                    handleSearch(words)
                                }}
                            ></SearchBox>
                        </div>
                    </div>
                    <TuitionList
                        tuitionList={tuition}
                    ></TuitionList>
                </div>
                <div className="col-lg-3 ">
                    <CityList
                        baseUrl={url}
                        heading={"Tuition in Top City"}
                    ></CityList>
                </div>
            </div>
        </div>
    )
}

export default TuitionBlock
