import { Badge, Heading, Img, Stack, Text } from '@chakra-ui/react'
import WatchListButton from 'components/WatchListButton'
import { FaCalendarAlt, FaRegClock} from 'react-icons/fa'

function MovieOverview({ movieInfo }) {


    const { id, poster_path,
        title, release_date,
        adult, runtime,
        genres, overview,
        tagline } = movieInfo

    const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`

    return (
        <Stack key={id}>
            <Stack className="movie-detail-container" minH='70vh' wrap='nowrap' direction='row' h='100%' gap='15px'>
                <Stack height='100%' w='100%' position='relative'>
                    <Img maxH='100%' src={posterImage} />
                    <WatchListButton movieID={id} moviePoster={posterImage} />
                </Stack>
                <Stack wrap='wrap' padding='0 1rem'>
                    <Stack w='100%'>
                        <Heading textAlign='left' as='h3' size='xl'>{title} ({release_date.slice(0, 4)})</Heading>
                        <Text fontSize='2rem' textAlign='left' fontStyle='italic'>{tagline}</Text>
                        <Stack direction='row' justify='flex-start' align='center' gap='20px'>
                            <Stack direction='row' align='center'>
                                <FaCalendarAlt />
                                <Text fontSize='1.15rem' ml='0' pt='.2em' textAlign='left'>{release_date}</Text>
                            </Stack>
                            {
                                adult ?
                                    <Badge fontSize='1.15rem' bg="white" variant='solid' border='1px solid white' color='black'>
                                        18+
                                    </Badge>
                                    :
                                    null
                            }
                            <Stack direction='row' align='center'>
                                <FaRegClock />
                                <Text fontSize='1.15rem' pt='.1em' textAlign='left'>
                                    {(runtime % 3600 / 60).toFixed(2).replace(".", "h ") + "min"}
                                </Text>
                            </Stack>
                        </Stack>
                        {
                            genres.length !== 0 ?
                                <Stack gap='10px' direction='row' wrap='wrap' justify='flex-start' pt='1rem'>
                                    {
                                        genres.map(genre => {
                                            return (
                                                <Badge fontSize='1.25rem' key={genre.id} border='1px solid white' borderRadius='5px'>{genre.name}</Badge>
                                            )
                                        })
                                    }

                                </Stack>
                                :
                                null
                        }
                        <Text fontSize='1.15rem' textAlign='left' p='2rem 0'>{overview}</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MovieOverview

