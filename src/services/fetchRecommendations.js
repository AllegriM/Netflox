import { API_KEY } from "data/API_DATA"


async function fetchRecommendations(movieID) {

    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${API_KEY}&language=es-AR&page=1`)
        let data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}

export default fetchRecommendations