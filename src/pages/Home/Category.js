import { Img, Stack, Text } from "@chakra-ui/react"
import useMovieData from "hooks/useMovieData"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";



function Category({ title = "", keyword = "" } = {}) {

    const movies = useMovieData({ keyword })

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
                >
                    {
                        movies.map(movie => {
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

export default Category