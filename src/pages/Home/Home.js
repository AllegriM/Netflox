// import { Img } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import fetchMovies from "services/fetchMovies";
const { default: Navbar } = require("components/Navbar");

function Home() {

    // const [movies, setMovies] = useState([])
    // useEffect(() => {
    //     fetchMovies()
    //         .then(data => setMovies(data))
    // }, [])

    return (
        <>
            <Navbar />
            {/* <Img w='100%' h='500px' backgroundSize='contain' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} /> */}
        </>
    )
}

export default Home