import { API_URL, API_KEY } from "./API_DATA"



async function fetchMovies() {
    // Getting data from the MOVIES API
    try{
        let data =  await fetch(`${API_URL}/movie/550?api_key=${API_KEY}`)
        let response = data.json()
        return response
    }
    catch(error){
        console.log(error)
    }        
    
}

export default fetchMovies