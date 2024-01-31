
"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Logout() {
    const router = useRouter()
    useEffect(() => {
        signOut()
        router.push("/")
    }, [])
    return (
        <div>

        </div>
    )
}

export default Logout
