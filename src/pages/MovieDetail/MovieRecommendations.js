import { Heading, Img, Stack, Grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import moviePoster from 'imgs/no-movie-poster.png'

function MovieRecommendations({ movieInfo }) {

    const { recommendations } = movieInfo

    return (
        <Stack borderTop='2px solid rgba(140,140,140, 1)' pt='1rem'>
            <Heading textAlign='start' as='h3' size='lg' p='1rem 0'>Más títulos similares a este</Heading>
            <Grid templateColumns='repeat(auto-fit, minmax(160px, 1fr))' gap={3}>
                {
                    recommendations?.results?.map(movie => {
                        const movieImage = movie.poster_path === null ? moviePoster : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <Stack flexShrink='0'>
                                    <Img loading="lazy" className="recommended-img" src={movieImage} position='relative' />
                                </Stack>
                            </Link>
                        )
                    })
                }
            </Grid>
        </Stack>

    )
}

export default MovieRecommendations