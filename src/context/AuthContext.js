import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {

    //*******  Local Storage (Persistent login) ******* //

    const user = JSON.parse(localStorage.getItem("user"))
    const isLogged = JSON.parse(localStorage.getItem("log"))

    //*******  States ******* //

    const [currentUser, setCurrentUser] = useState( user || null)
    const [errorMessage, setErrorMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(isLogged || false)

    const navigate = useNavigate()

    //*******  Firebase Authentication Functions ******//

    // Create user through firebase //

    const signUp = async(email, password, username) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password, username)
            console.log(`El usuario de ${username} va a ser creado!`)
        }catch (error){
            console.log(error.code)
            if (error.code === "auth/invalid-email") return setErrorMessage("Ese mail no es valido")
            if (error.code === "auth/email-already-in-use") return setErrorMessage("Una cuenta con ese mail ya existe. Intente cambiando el mail.")
            if (error.code === "auth/invalid-email") return setErrorMessage()
        }
    }

    // Sing out user through firebase //

    const logOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.setItem("log", JSON.stringify(false))
                localStorage.setItem("user", JSON.stringify(null))
                setTimeout(()=>{
                    navigate('/')
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    // Verify user logged through firebase //

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
        });
        return unsubscriber
    }, [])

    const logIn = async( email, password ) => {
        setLoggedIn(false)
        try{
            await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("user", JSON.stringify(auth.currentUser))
            localStorage.setItem("log", JSON.stringify(true))
            setLoggedIn(true)
            navigate("/home")
        }catch(error){
            console.log(error.code)
            if (error.code === "auth/invalid-email") return setErrorMessage("No podemos encontrar una cuenta con esta dirección de email. Reinténtalo o crea una cuenta nueva.")
            if (error.code === "auth/wrong-password") return setErrorMessage("Contraseña incorrecta. Reinténtalo o crea una contraseña nueva.")
        }
    }
    
    return (
        <AuthContext.Provider
        value={{
            currentUser,
            loggedIn,
            errorMessage,
            user,
            logOut,
            logIn,
            signUp
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider