"use client"
import { Autocomplete } from '@mui/material'
import styles from "../Css/form.module.css"
import { useRef, useState } from 'react'
import { getPin } from '../Service'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import useGlobal from '../Components/Hooks/useGlobal'
import FormPage from '../Components/CustomComp/FormPage'
import Button from '../Components/MiniComp/Button'
import OutLineButton from '../Components/MiniComp/OutLineButton'
import { createTeacher } from '../Service/TeacherService'

function BecomeTeacher() {

    const { data } = useSession()
    const { setSnackbarData } = useGlobal();
    const router = useRouter()

    const f = useRef()
    const file = useRef()
    const [pincode, setPincode] = useState([])
    const [selectedpin, setSelectedPin] = useState(0)
    const [online, setOnline] = useState(true)
    const [selectedImage, setSelectedImage] = useState("/profilepic.png");
    const [showcancel, setShowcancel] = useState(false)




    function handleImgaeUpload(event) {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a FileReader object
        const allowedExtensions = ['jpg', 'jpeg', 'png'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (file && !allowedExtensions.includes(fileExtension) && file.size > 5 * 1024 * 1024) {
            setErrorMessage('Please select a JPG, JPEG, or PNG image file.');
            setSnackbarData({
                status: true,
                message: "Please select a JPG, JPEG, or PNG image file. Less than 5MB",
                severity: "error",
            })
        }
        setShowcancel(true)
        // Callback function to handle FileReader onload event
        reader.onload = () => {
            setSelectedImage(reader.result); // Set selected image URL
        };
        reader.readAsDataURL(file);
    }

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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <FormPage>
                            <div className="form">
                                <h4 className={styles.heading}>Become an educator with us and make a difference! </h4>
                                <div className={styles.photo}>
                                    <img src={selectedImage} alt="" />

                                    <Button
                                        onClick={e => {
                                            file.current.click()

                                        }}
                                    >upload</Button>
                                    {showcancel && <OutLineButton
                                        onClick={e => {
                                            file.current.value = null
                                            setSelectedImage("/profilepic.png")
                                            setShowcancel(false)
                                        }}
                                    >cancel</OutLineButton>}

                                </div>
                                <form method="post" onSubmit={handleSubmit} ref={f}>
                                    <input className={styles.upload} ref={file} type="file" onChange={handleImgaeUpload} accept=".jpg,.jpeg,.png" name='photo' />
                                    <label >Name:<span className="req">*</span></label>
                                    <input type="text" name="teacher_name" placeholder="Your Full Name" required />

                                    <label > Gender:<span className="req">*</span></label>
                                    <label className={styles.inlinelable}> Male:</label>
                                    <input type="radio" name="gender" value="male" />
                                    <label className={styles.inlinelable} > Female:</label>
                                    <input type="radio" name="gender" value="female" />

                                    <label >Experience:<span className="req">*</span></label>
                                    <input type="number" name="experience" pattern="[0-9]" placeholder="Experience in Year" required />



                                    <label >Qualification:<span className="req">*</span></label>
                                    <input type="text" name="qualification" placeholder="Ex-B.Tech in computer science" required />

                                    <label >Subject:<span className="req">*</span></label>
                                    <input type="text" name="subject" placeholder="Ex-Maths,English,Physics etc" required />

                                    <label >Standard:<span className="req">*</span></label>
                                    <input type="text" name="classes" placeholder="Ex-CBSE, IIT, NEET, State Board" required />

                                    <label > Mode of teaching:</label>
                                    <label className={styles.inlinelable}> Online:</label>
                                    <input onChange={e => setOnline(true)} type="radio" name="mode" value="online" />
                                    <label className={styles.inlinelable}  > Offline:</label>
                                    <input onChange={e => setOnline(false)} type="radio" name="mode" value="offline" />
                                    <label className={styles.inlinelable} > Both:</label>
                                    <input onChange={e => setOnline(true)} type="radio" name="mode" value="both" />

                                    <label >Location:<span className="req">*</span></label>
                                    <input disabled={!online} type="text" name="location" placeholder="Location" required />

                                    <label >Age:</label>
                                    <input type="number" name="age" pattern="[0-9]" placeholder="Your age" required />

                                    <label>Pincode:</label>
                                    <Autocomplete
                                        id="pincode"
                                        disabled={!online}
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
                                    <textarea placeholder="Tell us about yourself and your passion for teaching. Share your educational philosophy, experience, and what makes you a great addition to our community." name="about" rows="5"></textarea>

                                    <input type="submit" value="Join Now"></input>

                                </form>
                            </div>

                        </FormPage>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeTeacher
