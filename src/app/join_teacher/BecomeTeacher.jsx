"use client"
import { Autocomplete } from '@mui/material'
import styles from "../Css/form.module.css"
import { useRef, useState } from 'react'
import { getPin } from '../Service'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import useGlobal from '../Components/Hooks/useGlobal'
import FormPage from '../Components/CustomComp/FormPage'
import { createTeacher, updateTeacher } from '../Service/TeacherService'
import UploadButton from '../Components/CustomComp/UploadButton'

function BecomeTeacher({ teacherInfo }) {

    const list = [
        "Free Registration",
        "Direct Student Contact",
        "Expand Your Reach to Students",
        "Flexible Teaching Options",
        "Keep 100% of Your Earnings",
        "Receive Verified Student Requests",
        "Access Student Profiles",
        "Build Your Reputation with Ratings",
        "Connect with a Teaching Community",
        "Showcase Your Profile to Students",
        "Receive Contact Requests from Students",
        "Set Your Own Tuition Rates",
        "Receive Notifications for New Opportunities",
        "Gain Exposure to a Diverse Student Base",
        "Enhance Your Teaching Skills",
    ]

    const { data } = useSession()
    const { setSnackbarData } = useGlobal();
    const router = useRouter()

    const f = useRef()
    const [pincode, setPincode] = useState([])
    const [selectedpin, setSelectedPin] = useState(teacherInfo?.pincode ?? 0)
    const [online, setOnline] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageurl] = useState(teacherInfo?.photo)

    function handleSubmit(e) {
        e.preventDefault()
        let payload = new FormData(f.current)
        //payload = Object.fromEntries(payload)
        payload.append("pincode", selectedpin?.Pincode ?? selectedpin)
        payload.append('photo', selectedImage);
        if (teacherInfo == undefined) {
            createTeacher(payload, data.access_token).then(res => {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: res.opration ? "success" : "error",
                })
                if (res.opration) {
                    router.push("/")
                }
            })
        }
        else {
            updateTeacher(payload, data.access_token).then(res => {
                if (res.status) {
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
                        <FormPage
                            AdHeading="What makes joining as a teacher worthwhile?"
                            AdList={list}
                        >
                            <div className="form">
                                <h4 className={styles.heading}>Become an educator with us and make a difference! </h4>
                                <div className={styles.photo}>
                                    <img src={imageUrl ?? '/profilepic.png'} alt="" />
                                    <UploadButton
                                        onUpload={(url, file) => {
                                            setImageurl(url)
                                            setSelectedImage(file)
                                        }}
                                        onCancel={() => {
                                            setSelectedImage(null)
                                            setImageurl(null)
                                        }}
                                    ></UploadButton>
                                </div>
                                <form method="post" onSubmit={handleSubmit} ref={f}>
                                    <label >Name:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.name} type="text" name="teacher_name" placeholder="Your Full Name" required />

                                    <label > Gender:<span className="req">*</span></label>
                                    <label className={styles.inlinelable}> Male:</label>
                                    <input defaultChecked={teacherInfo?.gender == "male"} type="radio" name="gender" value="male" />
                                    <label className={styles.inlinelable} > Female:</label>
                                    <input defaultChecked={teacherInfo?.gender == "female"} type="radio" name="gender" value="female" />

                                    <label >Experience:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.experience} type="number" name="experience" pattern="[0-9]" placeholder="Experience in Year" required />



                                    <label >Qualification:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.qualification} type="text" name="qualification" placeholder="Ex-B.Tech in computer science" required />

                                    <label >Subject:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.subject} type="text" name="subject" placeholder="Ex-Maths,English,Physics etc" required />

                                    <label >Standard:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.classes} type="text" name="classes" placeholder="Ex-CBSE, IIT, NEET, State Board" required />

                                    <label > Mode of teaching:</label>
                                    <label className={styles.inlinelable}> Online:</label>
                                    <input defaultChecked={teacherInfo?.teaching_mode == 'online'} onChange={e => setOnline(true)} type="radio" name="mode" value="online" />
                                    <label className={styles.inlinelable}  > Offline:</label>
                                    <input defaultChecked={teacherInfo?.teaching_mode == 'offline'} onChange={e => setOnline(false)} type="radio" name="mode" value="offline" />
                                    <label className={styles.inlinelable} > Both:</label>
                                    <input defaultChecked={teacherInfo?.teaching_mode == 'both'} onChange={e => setOnline(true)} type="radio" name="mode" value="both" />

                                    <label >Location:<span className="req">*</span></label>
                                    <input defaultValue={teacherInfo?.location} disabled={!online} type="text" name="location" placeholder="Location" required />

                                    <label >Age:</label>
                                    <input defaultValue={teacherInfo?.age} type="number" name="age" pattern="[0-9]" placeholder="Your age" required />

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
                                                <input type="text" {...params.inputProps} placeholder='Enter Atleast 3 Digit' />
                                            </div>
                                        )}
                                    />
                                    <label >Fee:</label>
                                    <input defaultValue={teacherInfo?.fee} type="number" name="fee" pattern="[0-9]" placeholder="Fee/hour" required />

                                    <label >About:</label>
                                    <textarea defaultValue={teacherInfo?.about} placeholder="Tell us about yourself and your passion for teaching. Share your educational philosophy, experience, and what makes you a great addition to our community." name="about" rows="5"></textarea>

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
