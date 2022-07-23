import { Button, Stack, Text } from "@chakra-ui/react"
import useMovieData from "hooks/useMovieData"
import { FaPlus, FaInfoCircle } from 'react-icons/fa';


function BannerMainMovie() {

    const movies = useMovieData({ keyword: "popular" })
    const random = Math.floor(Math.random() * movies.length - 1 )
    


    return (
        <Stack className="movie-banner" position='absolute' top='0' maxH='90%' h='100%' zIndex='-1' w='100%'>
            <Stack h='100%' w='100%' key={movies[random]?.id} zIndex='1'>
                <Stack className="movie-banner-img" maxH='90vh' h='100%' style={{ backgroundImage: `url("${movies[random]?.url_image_backdrop}")`}} position='relative' opacity='.7' />
                <Stack position='absolute' top='50%' p='0 5rem'>
                    <Text fontSize='2.5rem' color='white' textAlign='left' wordBreak='none'>{movies[random]?.title}</Text>
                    <Text fontSize='1.3rem' color='white' textAlign='left' width='35vw'>{movies[random]?.overview.split(" ").length > 24 ? `${movies[random]?.overview.split(" ").slice(0,24).join(" ")} ...` : movies[random]?.overview}</Text>
                    <Stack direction='row' gap='5px'>
                        <Button zIndex='2' p='1.5rem 1rem' display='flex' variant='unstyled' bg='rgba(109, 109, 110, 0.7)' color='white' fontSize='1.2rem'><FaInfoCircle className="button-banner-icons" size='1.4em'/>Más Información</Button>
                        <Button zIndex='2' p='1.5rem 1rem' display='flex' variant='unstyled' bg='white' color='black' fontSize='1.2rem'><FaPlus className="button-banner-icons" size='1em'/>Mi Lista</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BannerMainMovie
