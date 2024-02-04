"use client"

import { useSession, getSession } from "next-auth/react"
import Login from "../Components/PageComp/Login"
function Loginpage() {

    let { status } = useSession()
    return (
        <div>
            {status == "loading" && <div>
                <p>loading...</p>
            </div>}
            {status == "unauthenticated" && <div>
                <Login></Login>
            </div>}
            {status == "authenticated" && <div>
                Already LoggedIn
            </div>}
        </div>
    )
}

export default Loginpage
