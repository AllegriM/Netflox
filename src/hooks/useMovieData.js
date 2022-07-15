import { useEffect, useState } from "react"
import fetchMovies from "services/fetchMovies"


function useMovieData({ keyword = "popular" }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovies(keyword)
            .then(movies => setMovies(movies))
    }, [])

    return movies
}

export default useMovieData