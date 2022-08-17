import { specificMovieData } from "./fetchMovies"

const { API_KEY, API_URL } = require("data/API_DATA")

// API call to get movies by category data

export const fetchMovieByCategory = async( id ) => {

    try{
        let response = await fetch(`${API_URL}/list/${id}?api_key=${API_KEY}&language=es-AR`)
        let {items} = await response.json()
        return specificMovieData(items.slice(0, 15))
    }catch (error){
        console.log(error)
    }
}