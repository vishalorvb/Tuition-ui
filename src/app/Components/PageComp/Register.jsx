"use client"
import { Grid } from "@mui/material"
import FormPage from "../CustomComp/FormPage"
import styles from "../../Css/form.module.css"
import Link from "next/link"
import useGlobal from "../Hooks/useGlobal"

function Register() {

    const { snackbarData, setSnackbarData } = useGlobal();


    function handleSubmit(e) {
        e.preventDefault()
        console.log("submiteed")
    }

    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item md={10} sx={10}>
                    <FormPage>
                        <div className="form">
                            <h1 className={styles.heading}>Registration</h1>
                            <form action="/" method="post">
                                <label >Name:</label>
                                <input type="text" name="full_name" placeholder="Your Full Name" required />

                                <label >Email:</label>
                                <input type="email" name="email" placeholder="Something@example.com" required />

                                <label >Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />

                                <p>   <input type="checkbox" id="acceptTerms" name="acceptTerms" required /> I accept the terms and conditions <Link href="/tnc">terms and conditions</Link></p>
                                <input
                                    onSubmit={handleSubmit}
                                    type="submit" value="Submit"></input>
                                <p>Already have an account ? <Link href="/login">Login</Link> </p>
                            </form>
                        </div>
                    </FormPage>
                </Grid>
            </Grid>
        </div>
    )
}

export default Register
