import { Badge, Button, Grid, Heading, Img, Stack, Text } from "@chakra-ui/react"
import Navbar from "components/Navbar"
import useSingleMovieData from "hooks/useSingleMovieData"
import { Link, useParams } from "react-router-dom"
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa'


function MovieDetail() {

    const { movieID } = useParams()

    const [singleMovieData, recommendedMovies] = useSingleMovieData(movieID)
    console.log(singleMovieData, recommendedMovies)

    return (
        <>
            <Navbar />
            <Stack className="movie-detail-bigContainer" justify='center' maxW='55%' margin='0 auto' minH='80vh' p='2rem 0'>
                {
                    singleMovieData.map(data => {
                        console.log((data.runtime % 3600 / 60).toFixed(2).replace(".", "h "))
                        return (
                            <>
                                <Stack className="movie-detail-container" wrap='nowrap' direction='row' h='100%' key={data.id} gap='15px'>
                                    <Stack height='100%' w='100%' position='relative'>
                                        <Img h='100%' maxH='600px' src={data.url_image_poster} />
                                        <Button position='absolute' outline='2px solid white' borderRadius='50%' bottom='10px' right='10px' bg='black'>
                                            +
                                        </Button>
                                    </Stack>
                                    <Stack wrap='wrap' padding='0 1rem'>
                                        <Stack w='100%'>
                                            <Heading textAlign='left'>{data.title} ({data.release_date.slice(0, 4)})</Heading>
                                            <Text fontSize='22px' textAlign='left' fontStyle='italic'>{data.tagline}</Text>
                                            <Stack direction='row' justify='flex-start' align='center' gap='20px'>
                                                <Stack direction='row' align='center'>
                                                    <FaCalendarAlt />
                                                    <Text ml='0' pt='.2em' textAlign='left'>{data.release_date}</Text>
                                                </Stack>
                                                {
                                                    data.adult ?
                                                        <Badge bg="white" variant='solid' border='1px solid white' color='black'>
                                                            18+
                                                        </Badge>
                                                        :
                                                        null
                                                }
                                                <Stack direction='row' align='center'>
                                                    <FaRegClock />
                                                    <Text fontSize='15px' pt='.1em' textAlign='left'>
                                                        {(data.runtime % 3600 / 60).toFixed(2).replace(".", "h ") + "min"}
                                                    </Text>
                                                </Stack>
                                            </Stack>
                                            {
                                                data.genres.length !== 0 ?
                                                    <Stack gap='10px' direction='row' wrap='wrap' justify='flex-start' pt='1rem'>
                                                        {
                                                            data.genres.map(genre => {
                                                                return (
                                                                    <Badge key={genre.id} border='1px solid white' borderRadius='5px'>{genre.name}</Badge>
                                                                )
                                                            })
                                                        }

                                                    </Stack>
                                                    :
                                                    null
                                            }
                                            <Text fontSize='14px' textAlign='left' p='2rem 0'>{data.overview}</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack borderTop='2px solid rgba(140,140,140, 1)' pt='1rem'>
                                    <Heading textAlign='start' as='h4' size='md'>Más títulos similares a este</Heading>
                                    <Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={6}>
                                        {
                                            recommendedMovies.map(movie => {
                                                return (
                                                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                                                        <Stack flexShrink='0'>
                                                            <Img className="recommended-img" src={movie.url_image_backdrop} position='relative' />
                                                        </Stack>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Stack>
                            </>

                        )
                    })
                }
            </Stack>
        </>
    )
}

export default MovieDetail