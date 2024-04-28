
"use client"
import styles from "../../Css/form.module.css"
import FormPage from "../CustomComp/FormPage"
import Link from "next/link"
import useGlobal from "../Hooks/useGlobal";
import { useState } from "react"
import { getotp } from "@/app/Service/Userservice"

import VerifyOtp from "../CustomComp/VerifyOtp"

function Login() {
    const { setSnackbarData } = useGlobal();

    const [phone_number, setPhoneNumber] = useState()
    const [sendOtp, setSendOtp] = useState(false)


    const adList = [
        " Find Freelancing Teacher Jobs",
        "Post Tuitions for Free",
        "Get 3 Free Demo Classes",
        "Discover Qualified and Verified Teachers",
    ]



    function handleSubmit(e) {
        e.preventDefault()
        let data = { "phone_number": phone_number }
        getotp(data).then(res => {
            if (res.opration) {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
                setSendOtp(true)
            }
            else {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "error",
                })
            }
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {sendOtp == false &&
                            <FormPage
                                AdHeading="Welcome Back!"
                                AdList={adList}
                            >
                                <div className="form">
                                    <form onSubmit={e => handleSubmit(e)} >
                                        <h1 className={styles.heading}>Login</h1>
                                        <label >Phone Number:</label>
                                        <input
                                            onChange={e => setPhoneNumber(e.target.value)}
                                            type="tel" name="phone_number" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />
                                        <input
                                            type="submit" value="GET OTP"></input>
                                        <p>Not a member? <Link href="/registration">Register</Link> </p>
                                    </form>
                                </div>
                            </FormPage>}
                        {sendOtp && <VerifyOtp phone_number={phone_number}></VerifyOtp>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
