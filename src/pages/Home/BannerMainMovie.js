import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { watchListContext } from "context/watchListContext";
import useMovieData from "hooks/useMoviesData"
import { useContext } from "react";
import { FaPlus, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function BannerMainMovie() {

    const { addMovieToWatchList } = useContext(watchListContext)
    const navigate = useNavigate()

    const { randomMovie } = useMovieData({ keyword: "popular" })

    return (

        <Stack className="movie-banner" h='90vh' maxH='90%' zIndex='-1' w='100%' position='relative'>
            <Stack h='100%' w='100%' key={randomMovie?.id} zIndex='1'>
                <Stack className="movie-banner-img" maxH='90vh' h='100%' style={{ backgroundImage: `url("${randomMovie?.url_image_backdrop}")`}} position='relative' opacity='.7' />
                <Stack className="movie-banner-data" position='absolute' top='50%' p='0 5rem'>
                    <Heading fontSize='2.5rem' color='white' textAlign='left' wordBreak='none'>{randomMovie?.title}</Heading>
                    <Text w='65%' className="movie-banner-description" fontSize='1.3rem' color='white' textAlign='left' pr='4rem'>{randomMovie?.overview.split(" ").length > 24 ? `${randomMovie?.overview.split(" ").slice(0,24).join(" ")} ...` : randomMovie?.overview}</Text>
                    <Stack direction='row' gap='5px'>
                        <Button onClick={() => navigate(`/movie/${randomMovie?.id}`)} zIndex='2' p='1.5rem 1rem' display='flex' variant='unstyled' bg='rgba(109, 109, 110, 0.7)' color='white' fontSize='1.2rem'><FaInfoCircle className="button-banner-icons" size='1.4em'/>Más Información</Button>
                        <Button onClick={() => addMovieToWatchList({movieID: randomMovie.id, moviePoster: randomMovie.url_image_poster})} zIndex='2' p='1.5rem 1rem' display='flex' variant='unstyled' bg='white' color='black' fontSize='1.2rem'><FaPlus className="button-banner-icons" size='1em'/>Mi Lista</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BannerMainMovie
