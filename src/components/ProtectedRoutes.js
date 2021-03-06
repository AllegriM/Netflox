import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
    const { user, loggedIn }= useContext(AuthContext)
    return (user !== null & loggedIn) ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes