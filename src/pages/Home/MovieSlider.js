import { Img, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";


function MovieSlider({title , movieList}) {
    return (
        <Stack className="movie-list-container" height='270px' p='2rem 2.5rem' justify='center'>
            <Stack h='50px'>
                <Text cursor='pointer' fontSize='26px' textAlign='start' zIndex='100'>{title}</Text>
            </Stack>
            <Stack className="movie-list" direction='row' overflowX='scroll' overflowY='hidden' width='100%' gap='5px'>
                <Swiper
                    slidesPerView={6}
                    slidesPerGroup={6}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        480: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                        1400: {
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                        }
                    }}
                >
                    {
                        movieList.map(movie => {
                            return (
                                <SwiperSlide key={movie.id}>
                                    <Link to={`/movie/${movie.id}`}>
                                        <Stack flexShrink='0'>
                                            <Img loading="lazy" className="category-img" src={movie.url_image_backdrop} position='relative' />
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

export default MovieSlider