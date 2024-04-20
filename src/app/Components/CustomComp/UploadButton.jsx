'use client'
import { useRef, useState } from "react"
import styles from "../../Css/upload.module.css"
import useGlobal from "../Hooks/useGlobal";


function UploadButton({ onUpload, onCancel }) {

    const { setSnackbarData } = useGlobal();
    const file = useRef(null)
    const [showcancel, setShowcancel] = useState(false)


    function handleUpload(e) {
        const file = e.target.files[0]; // Get the selected file
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
            onUpload(reader.result, e.target.files[0]); // Set selected image URL
        };
        reader.readAsDataURL(file);
    }

    return (
        <div>
            <input ref={file} className={styles.upload} type="file" onChange={handleUpload} accept=".jpg,.jpeg,.png" />
            <div className={styles.btn}>
                <div className={styles.uploadbtn}
                    onClick={e => file.current.click()}
                >
                    Upload
                </div>
                {showcancel && <div className={styles.cancelbtn}
                    onClick={e => {
                        file.current.value = null
                        setShowcancel(false)
                        onCancel()
                    }}
                >
                    Cancel
                </div>}
            </div>

        </div>
    )
}

export default UploadButton
