import { Img, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { fetchMovieByCategory } from "services/fetchMoviesByCategory";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { Link } from "react-router-dom";

function GenreCategory({ title = "", genreId = 28 } = {}) {

    const [categoryMovies, setCategoryMovies] = useState([])

    useEffect(() => {
        fetchMovieByCategory(genreId)
            .then(movies => setCategoryMovies(movies))
    }, [])

    return (
        <Stack height='325px' p='2rem 2.5rem' justify='center'>
            <Stack h='50px'>
                <Text cursor='pointer' fontSize='26px' textAlign='start'>{title}</Text>
            </Stack>
            <Stack className="movie-list" direction='row' overflowX='scroll' overflowY='hidden' width='100%' gap='5px'>
                <Swiper
                    slidesPerView={5}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        categoryMovies.map(movie => {
                            return (
                                <SwiperSlide key={movie.id}>
                                    <Link to={`/movie/${movie.id}`}>
                                        <Stack flexShrink='0'>
                                            <Img className="category-img" src={movie.url_image_backdrop} position='relative' />
                                        </Stack>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Stack>
        </Stack>
    )
}

export default GenreCategory