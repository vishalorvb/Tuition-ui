"use client"
import { Grid } from "@mui/material"
import FormPage from "../CustomComp/FormPage"
import styles from "../../Css/form.module.css"
import Link from "next/link"
import useGlobal from "../Hooks/useGlobal"
import { useRef, useState } from "react"
import { createUser } from "@/app/Service"
import VerifyOtp from "../CustomComp/VerifyOtp"
function Register() {

    const { setSnackbarData } = useGlobal();
    const f = useRef()
    const [phone_number, setPhoneNumber] = useState()
    const [otp, setOtp] = useState(false)
    const AdList = [
        " Find Freelancing Teacher Jobs",
        "Post Tuitions for Free",
        " Get 3 Free Demo Classes",
        "Discover Qualified and Verified Teachers",
        " Connect with Local Teachers for In-Person Learning",
        " Customer Support for Any Assistance",
        "Access a Wide Range of Subjects and Skills"
    ]
    function handleSubmit(e) {
        e.preventDefault()
        let data = new FormData(f.current)
        data = Object.fromEntries(data)
        createUser(data).then(res => {
            if (res.opration) {
                f.current.reset();
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
                setPhoneNumber(data.phone_number)
                setOtp(true)
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
                        {otp == false && <FormPage
                            AdHeading="Register now and find tuition and teachers for free!"
                            AdList={AdList}
                        >
                            <div className="form">
                                <h1 className={styles.heading}>Registration</h1>
                                <form action="/" method="post" onSubmit={handleSubmit} ref={f}>
                                    <label >Name:</label>
                                    <input type="text" name="full_name" placeholder="Your Full Name" required />

                                    <label >Email:</label>
                                    <input type="email" name="email" placeholder="Something@example.com" required />

                                    <label >Phone Number:</label>
                                    <input type="tel" id="phoneNumber" name="phone_number" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />

                                    <p>   <input type="checkbox" id="acceptTerms" name="acceptTerms" required /> I accept the terms and conditions <Link href="/tnc">terms and conditions</Link></p>
                                    <input
                                        type="submit" value="Submit"></input>
                                    <p>Already have an account ? <Link href="/login">Login</Link> </p>
                                </form>
                            </div>
                        </FormPage>}
                        {otp && <VerifyOtp phone_number={phone_number}></VerifyOtp>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
