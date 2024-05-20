
"use client"
import { Grid } from "@mui/material"
import styles from "../../../Css/home.module.css"
import TranparentButton from "../../MiniComp/TranparentButton"
import { useRouter } from "next/navigation";
import Typing from "../../CustomComp/Typing";

function Carousel() {
    const router = useRouter();
    const list = [
        "Tuition",
        "Teacher"
    ]
    return (
        <div className={styles.main}>
            <div className={styles["video-container"]}>

                <video autoPlay muted loop >
                    <source src="edu.mp4" type="video/mp4" />
                </video>

            </div>

            <div className={styles.content}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h1> <strong>Find <Typing list={list} duration={200} ></Typing></strong> </h1>
                            <p>Discover the Perfect Tutor for Your Learning Journey</p>
                            <div className={styles.btn}>
                                <TranparentButton
                                    onClick={e => router.push("/registration")}
                                >Get Started</TranparentButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Carousel
