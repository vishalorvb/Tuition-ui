'use client'
import { useEffect, useRef } from 'react';
import { useState } from "react"
import CityList from "../Components/CustomComp/CityList"
import TuitionList from "./TuitionList"
import Header from "../Components/CustomComp/Header";
import SearchBox from "../Components/CustomComp/SearchBox";
import { getLatestTuition, searchTuition } from '../Service/Tuitionservice';

function TuitionBlock({ initialTuitionList, redirectOnsearchurl }) {

    const [tuition, setTuition] = useState(initialTuitionList);
    let debounce = true
    let end = false
    let pagenumber = 1
    //to redirect on city
    let url = "/teacher-job/home-tuition/"
    let [dataend, setDataend] = useState(false)


    function handleSearch(words) {
        if (redirectOnsearchurl != undefined) {
            return
        }
        setTuition([])
        searchTuition(words, pagenumber).then(res => {
            if (res.data.length > 0) {
                setTuition(res.data)
            }
        })
    }


    function handleScroll() {
        if (debounce == false || end) {
            return
        }
        debounce = false
        if (redirectOnsearchurl == undefined) {
            getLatestTuition(pagenumber).then(res => {
                debounce = true
                if (res.data.length > 0) {
                    setTuition(pv => [...pv, res.data])
                }
                else {
                    end = true
                    setDataend(true)
                }
            })
        }
        else {
            searchTuition(searchKeyword, pagenumber).then(res => {
                if (res.data.length > 0) {
                    setTuition(pv => [...pv, res.data])
                }
                else {
                    end = true
                    setDataend(true)
                }
            })
        }
        pagenumber++
    }

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0 // Fire callback as soon as target enters the viewport
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                handleScroll()
            }
        });
    }, options);




    useEffect(() => {


        const targetElement = document.getElementById('loading');
        observer.observe(targetElement)

    }, [])





    return (
        <div >
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
                            baseUrl={url}
                            heading={"Tuition in Top City"}
                        ></CityList>

                    </div>
                    <div className="col-9">
                        <div className="row justify-content-end" >
                            <div className="col-12">
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
                </div>
                {dataend ? <div>
                    <p>No data to load</p>
                </div> :
                    <div className="d-flex justify-content-center" id="loading">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default TuitionBlock
