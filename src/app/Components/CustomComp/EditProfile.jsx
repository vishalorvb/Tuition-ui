'use client'

import Link from "next/link"
import UploadButton from "./UploadButton"
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { updateUser } from "@/app/Service/Userservice";
import useGlobal from "../Hooks/useGlobal";
import { useRouter } from "next/navigation";

function EditProfile({ userInfo }) {
    const { setSnackbarData } = useGlobal();
    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState(userInfo.profilepic);
    const [imageFile, setImagefile] = useState(null)
    const { data } = useSession()
    const f = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        let payload = new FormData(f.current)
        if (imageFile != null) {
            payload.append('photo', imageFile);
        }
        updateUser(payload, data.access_token).then(res => {
            if (res.status) {
                setSnackbarData({
                    status: true,
                    message: res.message,
                    severity: "success",
                })
                router.push("/profile")
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
            <div className="container justify-content-center">
                <div className="row d-flex justify-content-center align-items-center    ">
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4">
                                <img className="profilepic" src={selectedImage ?? "/profilepic.png"} alt="" />
                                <UploadButton
                                    onUpload={(url, file) => {
                                        setSelectedImage(url)
                                        setImagefile(file)
                                    }}
                                    onCancel={() => {
                                        setSelectedImage(null)
                                        setImagefile(null)
                                    }}
                                ></UploadButton>
                            </div>
                            <div className="col-8">
                                <form action="/" method="post" ref={f} onSubmit={handleSubmit}>
                                    <label >Name:</label>
                                    <input defaultValue={userInfo?.Full_name} type="text" name="full_name" placeholder="Your Full Name" required />

                                    <label >Email:</label>
                                    <input defaultValue={userInfo?.email} type="email" name="email" placeholder="Something@example.com" required />

                                    <label >Phone Number:</label>
                                    <input defaultValue={userInfo?.phone_number} disabled type="tel" id="phoneNumber" name="phone_number" pattern="[0-9]{10}" placeholder="10 Digit Phone Number" required />
                                    <input
                                        type="submit" value="Submit"></input>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditProfile
