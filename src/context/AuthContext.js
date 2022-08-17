import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../data/firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {

    //*******  Local Storage (Persistent login) ******* //

    //*******************  States **************************** //

    const [errorMessage, setErrorMessage] = useState("")

    const [currentUser, setCurrentUser] = useState(() =>  JSON.parse(localStorage.getItem("user")) || null)

    const navigate = useNavigate()

    //**************  Firebase Authentication Functions *****************//

    // Create user through firebase //

    const signUp = async (email, password, username) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password, username)
        } catch (error) {
            if (error.code === "auth/invalid-email") return setErrorMessage("Ese mail no es valido")
            if (error.code === "auth/email-already-in-use") return setErrorMessage("Una cuenta con ese mail ya existe. Intente cambiando el mail.")
            if (error.code === "auth/invalid-email") return setErrorMessage()
        }
    }

    // LogIn through firebase //

    const logIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("user", JSON.stringify(auth.currentUser))
            navigate("/home")
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email") return setErrorMessage("No podemos encontrar una cuenta con esta dirección de email. Reinténtalo o crea una cuenta nueva.")
            if (error.code === "auth/wrong-password") return setErrorMessage("Contraseña incorrecta. Reinténtalo o crea una contraseña nueva.")
        }
    }

    const LoginWithGoogleIcon = async () => {
        const auth = getAuth();
        try {
            await signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    console.log(token)
                    // The signed-in user info.
                    const user = result.user;
                    localStorage.setItem("user", JSON.stringify(auth.currentUser))
                    console.log(user)
                    // ...
                    if(user){
                        navigate('/home')
                    }
                })
        } catch (error) {
            const errorCode = error.code;
            console.log(errorCode)

            const errorMessage = error.message;
            console.log(errorMessage)

            // The email of the user's account used.
            const email = error.customData.email;
            console.log(email)

            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential)
        }
    }

        // Sing out user through firebase //

        const logOut = () => {
            signOut(auth)
                .then(() => {
                    localStorage.setItem("user", JSON.stringify(null))
                    setTimeout(() => {
                        navigate('/')
                    })
                })
                .catch((error) => {
                    console.log(error)
                });
        }

        // Verify user logged through firebase //

        useEffect(() => {
            const unsubscriber = auth.onAuthStateChanged(user => {
                setCurrentUser(user);
            });
            return unsubscriber
        }, [currentUser])


        return (
            <AuthContext.Provider
                value={{
                    errorMessage,
                    currentUser,
                    LoginWithGoogleIcon,
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