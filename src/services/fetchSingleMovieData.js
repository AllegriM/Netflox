import { API_KEY } from "data/API_DATA"


async function fetchSingleMovieData( movieID ) {

    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=es-AR`);
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchSingleMovieData