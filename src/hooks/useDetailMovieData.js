import { useEffect, useState } from "react"
import fetchSingleMovieData from "services/fetchSingleMovieData"


function useSingleMovieData(movieID) {

    const [singleMovieData, setSingleMovieData] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=> {
        fetchSingleMovieData(movieID)
            .then(setSingleMovieData)
            .catch(error => setError(error))
            .finally(setLoading(false))
    }, [movieID])

    return {singleMovieData, loading, error};

}

export default useSingleMovieData