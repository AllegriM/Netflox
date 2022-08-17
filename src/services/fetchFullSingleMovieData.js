import { API_KEY } from "data/API_DATA"

async function fetchFullSingleMovieData( movieID ) {

    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&append_to_response=release_dates,credits,videos,recommendations&language=es-AR`);
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchFullSingleMovieData