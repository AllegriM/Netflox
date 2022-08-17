import { useEffect, useState } from "react"
import fetchMovies from "services/fetchMovies"


function useMovieData({ keyword = "popular" }) {

    const [movies, setMovies] = useState([])
    const id = Math.round(Math.random() * (movies.length - 1));
    const randomMovie = movies[id]

    useEffect(() => {
        fetchMovies(keyword)
            .then(movies => setMovies(movies))
    }, [keyword])

    return { movies, randomMovie }
}

export default useMovieData