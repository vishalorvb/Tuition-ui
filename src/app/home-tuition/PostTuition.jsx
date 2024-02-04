"use client"
import { Autocomplete, Grid, Paper } from "@mui/material"
import styles from "../Css/form.module.css"
import FormPage from "../Components/CustomComp/FormPage"
import { getPin, postTuition } from "../Api"
import { useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import useGlobal from "../Components/Hooks/useGlobal"

function PostTuition() {

    const [pincode, setPincode] = useState([])
    const [selectedpin, setSelectedPin] = useState(0)
    const { data } = useSession()
    const { setSnackbarData } = useGlobal();
    const router = useRouter()
    const f = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        let payload = new FormData(f.current)
        payload = Object.fromEntries(payload)
        console.log(payload)
        postTuition(payload, data?.access_token).then(res => {
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
            <Grid container justifyContent="center">
                <Grid item md={12}>
                    <FormPage>

                        <div className="form">
                            <h1 className={styles.heading}>Post your requiment</h1>
                            <form onSubmit={handleSubmit} ref={f}>
                                <label >Student Name:</label>
                                <input type="text" name="student_name" placeholder="Student Name" required />

                                <label >Student Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="student_phone_number" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />

                                <label >Course:</label>
                                <input type="text" name="course" placeholder="Ex:CBSE, Engineering, IIT, NEET" required />

                                <label >Subject:</label>
                                <input type="text" name="subject" placeholder="Maths, Physics etc" required />

                                <label >Description:</label>
                                <input type="text" name="description" placeholder="Description" required />

                                <label >Fee:</label>
                                <input type="number" name="fee" pattern="[0-9]" placeholder="Fee/hour" required />

                                <label > Mode of teaching:</label>
                                <label className={styles.inlinelable}> Online:</label>
                                <input type="radio" name="mode" value="online" />
                                <label className={styles.inlinelable}  > Offline:</label>
                                <input type="radio" name="mode" value="offline" />
                                <label className={styles.inlinelable} > Both:</label>
                                <input type="radio" name="mode" value="both" />

                                <label>Pincode:</label>
                                <Autocomplete
                                    id="pincode"
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

                                <label >Locality:</label>
                                <input name="locality" placeholder="locality" />
                                <input type="submit" value="Submit"></input>
                            </form>

                        </div>

                    </FormPage>

                </Grid>
            </Grid>
        </div>
    )
}

export default PostTuition
