import { specificMovieData } from "./fetchMovies"

const { API_KEY, API_URL } = require("data/API_DATA")

// API call to get movies by category data

export const fetchMovieByCategory = async( id ) => {
    console.log(id)
    try{
        let response = await fetch(`${API_URL}/list/${id}?api_key=${API_KEY}&language=en-US`)
        let {items} = await response.json()
        return specificMovieData(items.slice(0, 25))
    }catch (error){
        console.log(error)
    }
}