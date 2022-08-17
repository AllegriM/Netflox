import { userContext } from "context/UserContextProvider"
import { useCallback, useContext } from "react"

function useUser() {
    const { loginUser, setRegisterUser, setLoginUser } = useContext(userContext)

    const submitLogin = useCallback( loginData => {
        setLoginUser(loginData)
    }, [setLoginUser])

    const submitRegister = useCallback( registerData => {
        setRegisterUser(registerData)
    }, [setRegisterUser])

    return {
        isLoggedIn: Boolean(loginUser),
        submitRegister,
        submitLogin,
    }
}

export default useUser