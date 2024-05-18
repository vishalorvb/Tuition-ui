"use client"
import styles from "../../Css/form.module.css"
import FormPage from "../CustomComp/FormPage"
import useGlobal from "../Hooks/useGlobal";
import { useState } from "react"
import { signIn } from "next-auth/react"
import { redirect, useRouter } from "next/navigation";
import { login } from "@/app/Service/Userservice";

function VerifyOtp({ phone_number }) {

    const [otp, setOtp] = useState()
    const { setSnackbarData } = useGlobal();
    const router = useRouter();

    function handleSignin(data) {
        if (data.Full_name != undefined && data.access != undefined && data.roleId != undefined) {
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
