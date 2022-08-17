import { Spinner, Stack } from "@chakra-ui/react"
import Navbar from "components/Navbar"
import { useParams } from "react-router-dom"
import MovieRecommendations from "./MovieRecommendations"
import MovieCredits from "./MovieCredits"
import { useEffect, useState } from "react"
import fetchFullSingleMovieData from "services/fetchFullSingleMovieData"
import MovieTrailer from "./MovieTrailer"
import MovieOverview from "./MovieOverview"

function MovieDetail() {

    const { movieID } = useParams()

    const [movieDetailInfo, setMovieDetailInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchMovieInfo = async () => {
            try {
                const response = await fetchFullSingleMovieData(movieID)
                setMovieDetailInfo(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieInfo()
        window.scrollTo(0, 0)
        return () =>  window.scrollTo(0, 0)
    }, [movieID])

    return (
        <>
            <Navbar />
            {
                loading ?
                    <Stack mt='6em' p='0 8rem' h='80vh' justify='center' align='center'>
                        <Spinner size='xl' color='red' />
                    </Stack>
                    :
                    <Stack className="movie-detail-bg" style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original/${movieDetailInfo.backdrop_path}")` }}>
                        <Stack bg='black' p='1.5rem' className="movie-detail-bigContainer" justify='center' m='0 auto' minH='80vh' mt='8rem' borderRadius='6px'>
                            <MovieOverview movieInfo={movieDetailInfo} />
                            <MovieTrailer movieInfo={movieDetailInfo} />
                            <MovieCredits movieInfo={movieDetailInfo} />
                            <MovieRecommendations movieInfo={movieDetailInfo} />
                        </Stack>
                    </Stack>
            }
        </>
    )
}

export default MovieDetail