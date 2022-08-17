import { Grid, Img, Spinner, Stack, Text } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import { MovieContext } from "context/SearchMovieContext";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchSearchMovie } from "services/fetchSearchMovie";
import moviePoster from 'imgs/no-movie-poster.png';
import useDebounce from 'hooks/useDebounce'


function SearchMovie() {

    const { keyword } = useContext(MovieContext)
    const [moviesSearched, setMoviesSearched] = useState([])
    const [loading, setLoading] = useState(true)

    const debouncedSearch = useDebounce(keyword, 800)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchSearchData() {
            try {
                let response = await fetchSearchMovie(debouncedSearch)
                return setMoviesSearched(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        if (debouncedSearch) fetchSearchData()
    }, [debouncedSearch])

    useEffect(() => {
        if (!pathname.includes('/search/')) {
            setMoviesSearched('');
        }
    }, [pathname, setMoviesSearched]);

    // Return to Dashboard when clearing search input
    useEffect(() => {
        if (keyword.length === 0 && pathname.includes('/search')) {
            navigate(`/home`);
        }
    }, [pathname, keyword, navigate]);

    return (
        <>
            <Navbar />
            {
                loading ?
                    <Stack mt='6em' p='0 8rem' h='80vh' justify='center' align='center'>
                        <Spinner size='xl' color='red' />
                    </Stack>
                    :
                    <Stack mt='6em' p='0 8rem'>
                        <Text textAlign='start' fontSize='1.5rem'>Search results for: {keyword} </Text>
                        <Grid templateColumns='repeat(auto-fit, minmax(180px, 250px))' gap={1}>
                            {
                                moviesSearched.results.map(movies => {
                                    const movieImage = movies.poster_path === null ? moviePoster : `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                                    return (
                                        <Link to={`/movie/${movies.id}`} key={movies.id}>
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

export default SearchMovie