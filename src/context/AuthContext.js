import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {

    // Info of the user brougth from register Context

    //*******  States ******* //

    const [currentUser, setCurrentUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

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

    signOut(auth).then(() => {
    }).catch((error) => {
        console.log(error)
    });

    // Verify user logged through firebase //

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
        });
        return unsubscriber
    })

    const logIn = async( email, password ) => {
        setLoggedIn(false)
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Me logie!")
            setLoggedIn(true)
            navigate("/home")
            console.log("Fuimos al home!")
        }catch(error){
            console.log(error.code)
            if (error.code === "auth/invalid-email") return setErrorMessage("No podemos encontrar una cuenta con esta dirección de email. Reinténtalo o crea una cuenta nueva.")
            if (error.code === "auth/wrong-password") return setErrorMessage("Contraseña incorrecta. Reinténtalo o crea una contraseña nueva.")
        }
    }

    const user = auth.currentUser;

    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
    } else {
        // No user is signed in.
    }


    return (
        <AuthContext.Provider
        value={{
            currentUser,
            loggedIn,
            errorMessage,
            logIn,
            signUp
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider