import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
    const { currentUser }= useContext(AuthContext)
    return (currentUser !== null) ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes