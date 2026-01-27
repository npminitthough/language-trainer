import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"

export default function OAuthSuccessPage() {
    const navigate = useNavigate()
    const {login} = useAuth()
    const ran = useRef(false);
    // get token from url

    useEffect(() => {
        if (ran.current) return
        ran.current = true;
        
        const token = new URLSearchParams(window.location.search).get("token")
        
        if (!token) navigate("/login")
        else {
            login(token)
            navigate('/quizes')
        }   
    }, [])

    return null
}