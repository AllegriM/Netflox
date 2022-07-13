import { createContext, useState } from "react"


export const userContext = createContext({})

// export const useUserContext = useContext(userContext)

function UserContextProvider( { children } ) {

    // States that are going to sotre login & register data
    const [registerUser, setRegisterUser] = useState(null)
    const [loginUser, setLoginUser] = useState(null)

    return (
        <userContext.Provider value={{
            registerUser,
            loginUser,
            setRegisterUser,
            setLoginUser
        }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider