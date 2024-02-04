"use client"
import { Autocomplete, Grid, TextField } from '@mui/material'
import styles from "../Css/form.module.css"
import { useEffect, useRef, useState } from 'react'
import { createTeacher, getPin } from '../Api'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import useGlobal from '../Components/Hooks/useGlobal'

function BecomeTeacher() {

    const { data } = useSession()
    const { setSnackbarData } = useGlobal();
    const router = useRouter()

    const f = useRef()
    const [pincode, setPincode] = useState([])
    const [selectedpin, setSelectedPin] = useState(0)
    function handleSubmit(e) {
        e.preventDefault()
        let payload = new FormData(f.current)
        payload = Object.fromEntries(payload)
        createTeacher(payload, data.access_token).then(res => {
            if (res.opration) {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
                router.push("/")
            }
        })
    }

    function fetchPin(pin) {

        if (pin.length >= 3) {
            getPin(pin).then(res => {
                setPincode(res)
            })
        }
    }


    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} xs={12}>

                    <div className="form">
                        <h1 className={styles.heading}>Join </h1>
                        <form action="/" method="post" onSubmit={handleSubmit} ref={f}>
                            <label >Name:</label>
                            <input type="text" name="teacher_name" placeholder="Your Full Name" required />

                            <label > Gender:</label>
                            <label className={styles.inlinelable}> Male:</label>
                            <input type="radio" name="gender" value="male" />
                            <label className={styles.inlinelable} > Female:</label>
                            <input type="radio" name="gender" value="female" />

                            <label >Experience:</label>
                            <input type="number" name="experience" pattern="[0-9]" placeholder="Experience in Year" required />

                            <label >Location:</label>
                            <input type="text" name="location" placeholder="Location" required />

                            <label >Qualification:</label>
                            <input type="text" name="qualification" placeholder="Ex-B.Tech in computer science" required />

                            <label >Subject:</label>
                            <input type="text" name="subject" placeholder="Ex-Maths,English,Physics etc" required />

                            <label >Standard:</label>
                            <input type="text" name="classes" placeholder="Ex-CBSE, IIT, NEET, State Board" required />

                            <label > Mode of teaching:</label>
                            <label className={styles.inlinelable}> Online:</label>
                            <input type="radio" name="mode" value="online" />
                            <label className={styles.inlinelable}  > Offline:</label>
                            <input type="radio" name="mode" value="offline" />
                            <label className={styles.inlinelable} > Both:</label>
                            <input type="radio" name="mode" value="both" />


                            <label >Age:</label>
                            <input type="number" name="age" pattern="[0-9]" placeholder="Your age" required />

                            <label>Pincode:</label>
                            <Autocomplete
                                id="project_id"
                                options={pincode}
                                value={selectedpin}
                                fullWidth
                                getOptionLabel={(option) => option.Pincode?.toString() ?? ""}
                                onChange={(e, value) => {
                                    setSelectedPin(value);
                                }}
                                onInputChange={(e, value) => {
                                    fetchPin(value)
                                }}
                                renderInput={(params) => (
                                    <div ref={params.InputProps.ref}>
                                        <input name='pincode' type="text" {...params.inputProps} placeholder='Enter Atleast 3 Digit' />
                                    </div>
                                )}
                            />
                            <label >Fee:</label>
                            <input type="number" name="fee" pattern="[0-9]" placeholder="Fee/hour" required />

                            <label >About:</label>
                            <textarea placeholder="Tell us about yourself and your passion for teaching. Share your educational philosophy, experience, and what makes you a great addition to our community." name="about" ></textarea>

                            <input type="submit" value="Join Now"></input>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default BecomeTeacher
