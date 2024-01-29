
"use client"
import { Grid } from "@mui/material"
import styles from "../../Css/form.module.css"
import FormPage from "../CustomComp/FormPage"
import Link from "next/link"
import { useRouter } from "next/navigation";
import useGlobal from "../Hooks/useGlobal";
import { useRef, useState } from "react"
import { getotp, login } from "@/app/Api"

function Login() {
    const { setSnackbarData } = useGlobal();

    const [phone_number, setPhoneNumber] = useState()
    const [sendOtp, setSendOtp] = useState(false)
    const [otp, setOtp] = useState()
    const router = useRouter()

    function handleLogin(e) {
        e.preventDefault()
        let data = { "username": phone_number, "password": otp }
        login(data).then(res => {
            console.log(res)
            if (res.opration) {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
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

    function handleSubmit(e) {
        e.preventDefault()
        let data = { "phone_number": phone_number }
        getotp(data).then(res => {
            console.log(res)
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
            <Grid container justifyContent="center">
                <Grid item md={10} sx={10}>
                    <FormPage>
                        {sendOtp == false && <div className="form">
                            <form onSubmit={handleSubmit} >
                                <h1 className={styles.heading}>Login</h1>
                                <label >Phone Number:</label>
                                <input
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    type="tel" name="phone_number" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />
                                <input
                                    type="submit" value="GET OTP"></input>
                                <p>Not a member? <Link href="/registration">Register</Link> </p>
                            </form>
                        </div>}

                        {sendOtp && <div className="form">
                            <form onSubmit={handleLogin} >
                                <h1 className={styles.heading}>Verify</h1>
                                <label >Enter otp:</label>
                                <input
                                    onChange={e => setOtp(e.target.value)}
                                    type="tel" name="otp" placeholder="Enter otp" required />
                                <input
                                    type="submit" value="Verify"></input>
                            </form>
                        </div>}
                    </FormPage>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
