import { createContext, useState } from "react"

export const MovieContext = createContext()


function MovieContextProvider( {children} ) {

    const [keyword, setKeyword] = useState("")

    const handleOnChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <MovieContext.Provider value={{
            handleOnChange,
            keyword
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider