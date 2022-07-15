import { Stack, Text } from "@chakra-ui/react"
import useMovieData from "hooks/useMovieData"

function BannerMainMovie() {

    const movies = useMovieData({ keyword: "popular" })
    const random = Math.floor(Math.random() * movies.length - 1 )
    console.log()
    
    return (
        <Stack className="movie-banner" position='absolute' top='0' maxH='90%' h='100%' zIndex='-1' w='100%'>
            <Stack h='100%' w='100%' key={movies[random]?.id}>
                <Stack className="movie-banner-img" maxH='90vh' h='100%' style={{ backgroundImage: `url("${movies[random]?.url_image_backdrop}")`}} position='relative' opacity='.7' />
                <Stack position='absolute' top='50%' p='0 5rem'>
                    <Text fontSize='2.5rem' color='white' textAlign='left' wordBreak='none'>{movies[random]?.title}</Text>
                    <Text fontSize='1.3rem' color='white' textAlign='left' width='35vw'>{movies[random]?.overview.split(" ").length > 24 ? `${movies[random]?.overview.split(" ").slice(0,24).join(" ")} ...` : movies[random]?.overview}</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BannerMainMovie
