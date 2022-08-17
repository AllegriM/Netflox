import { API_URL, API_KEY } from "data/API_DATA"

// API call to get movies by category data

export const specificMovieData = (apiResponse) => {
    if (Array.isArray(apiResponse)) {
        const movies = apiResponse.map(movie => {
            const { poster_path, backdrop_path } = movie;
            const url_image_poster = `https://image.tmdb.org/t/p/original${poster_path}`
            const url_image_backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`
            return { ...movie, url_image_poster, url_image_backdrop }
        })
        return movies
    }
}

async function fetchMovies( keyword ) {
    // Desestructuring data
    
    // Getting data from the MOVIES API
    try {
        return await fetch(`${API_URL}/movie/${keyword}?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => specificMovieData(data.results.slice(0,15)))
    } catch (error) {
        console.log(error)
    }
}
export default fetchMovies

