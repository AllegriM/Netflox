import { Img, Stack, Text } from "@chakra-ui/react"
import useMovieData from "hooks/useMovieData"

function Category({ title = "", keyword = "" } = {}) {
    
    const movies = useMovieData({ keyword })

    return (
        <Stack height='325px' p='2rem 2.5rem' justify='center'>
            <Stack h='50px'>
                <Text cursor='pointer' fontSize='26px' textAlign='start'>{title}</Text>
            </Stack>
            <Stack className="movie-list" direction='row' overflowX='scroll' overflowY='hidden' width='100%' gap='5px'>
                {
                    movies.map(movie => {
                        return (
                            <Stack key={movie.id} flexShrink='0'>
                                <Img className="category-img" src={movie.url_image_backdrop} position='relative' />
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default Category