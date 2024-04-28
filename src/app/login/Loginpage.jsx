"use client"

import { useSession } from "next-auth/react"
import Login from "../Components/PageComp/Login"
import WaveSkeleton from "../Components/CustomComp/WaveSkeleton"
function Loginpage() {

    let { status } = useSession()
    return (
        <div>
            {status == "loading" && <div>
                <WaveSkeleton></WaveSkeleton>
            </div>}
            {status == "unauthenticated" && <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
                <Login></Login>
            </div>}
            {status == "authenticated" && <div>
                Already LoggedIn
            </div>}
        </div>
    )
}

export default Loginpage
