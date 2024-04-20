"use client"

import { useSession } from "next-auth/react"
import Login from "../Components/PageComp/Login"
function Loginpage() {

    let { status } = useSession()
    return (
        <div>
            {status == "loading" && <div>
                <p>loading...</p>
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
