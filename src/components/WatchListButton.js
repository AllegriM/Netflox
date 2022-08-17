import { Button, Spinner, Stack, Text } from '@chakra-ui/react'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { watchListContext } from 'context/watchListContext'


function WatchListButton({ movieID, moviePoster }) {

    const { addMovieToWatchList, removeMovieFromWatchList, watchList, onChange } = useContext(watchListContext)

    const isInWatchList = watchList.some(movie => movie.movieID === movieID)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onChange()
        setLoading(false)
    }, [])

    return (
        <>
            {
                loading ?
                    <Stack mt='6em' p='0 8rem' h='80vh' justify='center' align='center'>
                        <Spinner size='xl' color='red' />
                    </Stack>
                    :
                    isInWatchList ?
                        <Button
                            onClick={
                                () => {
                                    removeMovieFromWatchList(movieID);
                                }
                            }
                            display='flex' alignItems='center' justifyContent='center'
                            variant='unstyled'
                            position='absolute'
                            borderRadius='50%'
                            bottom='20px'
                            right='20px'
                        >
                            < Text fontSize='1.45rem'><FaMinusCircle fontSize='1.5em' /></Text>
                        </Button >
                        :
                        <Button
                            onClick={() => {
                                addMovieToWatchList({ movieID, moviePoster });
                            }}
                            display='flex' alignItems='center' justifyContent='center'
                            variant='unstyled'
                            position='absolute'
                            borderRadius='50%'
                            bottom='20px'
                            right='20px'
                        >
                            <Text fontSize='1.45rem' ><FaPlusCircle fontSize='1.5em' /></Text>
                        </Button>
            }

        </>




    )
}

export default WatchListButton