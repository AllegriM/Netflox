import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
    const { loggedIn }= useContext(AuthContext)
    return loggedIn ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes