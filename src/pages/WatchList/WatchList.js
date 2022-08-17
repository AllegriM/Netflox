import { Grid, Heading, Img, Spinner, Stack } from "@chakra-ui/react"
import Navbar from "components/Navbar"
import { watchListContext } from "context/watchListContext"
import { Link } from "react-router-dom"
import moviePoster from 'imgs/no-movie-poster.png'
import { useContext, useEffect, useState } from "react"

function WatchList() {

    const { watchList, onChange } = useContext(watchListContext)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        onChange()
        setLoading(false)
    }, [])

    return (
        <>
            <Navbar />
            {
                loading ?
                    <Stack mt='6em' p='0 8rem' h='80vh' justify='center' align='center'>
                        <Spinner size='xl' color='red' />
                    </Stack>
                    :
                    watchList.length === 0 ?
                    <Stack h='80vh' justify='center' align='center'>
                        <Heading fontStyle='italic'>No agregaste ninguna pelicula todavia...</Heading>
                    </Stack>
                    :
                    <Stack Stack mt='6em' p='0 8rem'>
                        <Grid templateColumns='repeat(auto-fit, minmax(180px, 250px))' gap={1}>
                            {
                                watchList.map(movies => {
                                    const movieImage = movies.moviePoster === null ? moviePoster : `https://image.tmdb.org/t/p/w500/${movies.moviePoster}`
                                    return (
                                        <Link to={`/movie/${movies.movieID}`} key={movies.movieID}>
                                            <Stack flexShrink='0'>
                                                <Img maxH='300px' maxW='100%' src={movieImage} position='relative' />
                                            </Stack>
                                        </Link>
                                    )
                                })
                            }
                        </Grid>
                    </Stack>

            }

        </>
    )
}

export default WatchList