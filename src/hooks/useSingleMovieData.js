import { useEffect, useState } from "react"
import { specificMovieData } from "services/fetchMovies"
import fetchRecommendations from "services/fetchRecommendations"
import fetchSingleMovieData from "services/fetchSingleMovieData"


function useSingleMovieData( movieID ) {

    const [singleMovieData, setSingleMovieData] = useState([])
    const [recommendedMovies, setRecommendedMovies] = useState([])

    useEffect( () => {
        fetchSingleMovieData(movieID)
            .then(movie => setSingleMovieData(specificMovieData([movie])))
        fetchRecommendations(movieID)
            .then(movies => setRecommendedMovies(specificMovieData(movies.results.slice(0, 15))))
    }, [movieID])

    return [singleMovieData, recommendedMovies];
    
}

export default useSingleMovieData