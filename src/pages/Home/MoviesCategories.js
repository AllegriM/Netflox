import { Container, Spinner, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { fetchDashboardInfo } from "services/fetchDashboardMovies";
import MovieSlider from "./MovieSlider";

const MoviesCategories = () => {

    const [popularList, setPopularList] = useState(null);
    const [nowPlayingList, setNowPlayingList] = useState(null);
    const [upcomingList, setUpcomingList] = useState(null);
    const [topRatedList, setTopRatedList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch and save all the lists of movies
    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const { popularList, nowPlayingList, upcomingList, topRatedList } =
                    await fetchDashboardInfo();
                setPopularList(popularList);
                setNowPlayingList(nowPlayingList);
                setUpcomingList(upcomingList);
                setTopRatedList(topRatedList);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    return (

        isLoading ?
            <Stack mt='6em' p='0 8rem' h='80vh' justify='center' align='center'>
                <Spinner size='xl' color='red' />
            </Stack>
            :
            <Container mx='0' w='100%' maxW='100%' px='2em' h='100%' m='-6em 0'>
                <MovieSlider title='Populares en Netflix' movieList={popularList} />
                <MovieSlider title='Tendencias' movieList={nowPlayingList} />
                <MovieSlider title='Por estrenarse...' movieList={upcomingList} />
                <MovieSlider title='Mejor Puntuadas' movieList={topRatedList} />
            </Container>
    )
}

export default MoviesCategories