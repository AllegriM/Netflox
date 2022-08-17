import { Heading, Stack } from "@chakra-ui/react"


function MovieTrailer({ movieInfo }) {

    const { videos } = movieInfo
    const trailer = videos.results?.length > 0 ?
    videos.results?.find(video => video.type === "Trailer" || "Clip")
    : null;
    
    return (
        <Stack borderTop='2px solid rgba(140,140,140, 1)' pt='1rem'>
            <Heading textAlign='start' as='h3' size='lg' p='1rem 0'>Trailer</Heading>
            {
                trailer ?
                    <Stack align='center'>
                        <iframe
                            width='100%'
                            height='355'
                            src={`https://www.youtube.com/embed/${trailer?.key}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            title='Movie Trailer'></iframe>
                    </Stack>
                    :
                    <>
                        <Heading textAlign='center' as='h4' size='md' p='4rem 0' fontWeight='100'>No hay trailer aun...</Heading>
                    </>
            }
        </Stack>
    )
}

export default MovieTrailer