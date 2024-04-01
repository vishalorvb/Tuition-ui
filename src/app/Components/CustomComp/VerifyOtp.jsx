"use client"
import { Grid } from "@mui/material"
import styles from "../../Css/form.module.css"
import FormPage from "../CustomComp/FormPage"
import Link from "next/link"
import { useRouter } from "next/navigation";
import useGlobal from "../Hooks/useGlobal";
import { useState } from "react"
import { getotp, login } from "@/app/Service"
import { signIn } from "next-auth/react"

function VerifyOtp({ phone_number }) {

    const [otp, setOtp] = useState()
    const { setSnackbarData } = useGlobal();

    function handleSignin(data) {
        if (data.Full_name != undefined && data.access != undefined && data.refresh != undefined && data.roleId != undefined) {
            signIn('credentials', data)
        }

    }

    function handleLogin(e) {
        e.preventDefault()
        let data = { "username": phone_number, "password": otp }
        login(data).then(res => {
            if (res.opration) {
                handleSignin(res.info)
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
    return (
        <FormPage>
            <div className="form">
                <form onSubmit={e => handleLogin(e)} >
                    <h1 className={styles.heading}>Verify</h1>
                    <label >Enter otp:</label>
                    <input
                        onChange={e => setOtp(e.target.value)}
                        type="tel" name="otp" placeholder="Enter otp" required />
                    <input
                        type="submit" value="Verify"></input>
                </form>
            </div>
        </FormPage>
    )
}

export default VerifyOtp
