import { Heading, Img, Stack, Text } from "@chakra-ui/react"
import { FaUserAlt } from "react-icons/fa"

function MovieCredits( {movieInfo} ) {

    const { credits } = movieInfo
    
    const casting = credits?.cast.length !== 0 && credits?.cast.length > 15 ? credits?.cast.slice(0, 15) : null
    const crew = credits?.crew?.filter( (member,index) => credits?.crew?.indexOf(member.id) === index.id)
    
    return (
        crew.length === 0 & casting === null ?
        null
        :
        <Stack borderTop='2px solid rgba(140,140,140, 1)' pt='1rem'>
            <Heading textAlign='start' as='h3' size='lg' p='1rem 0'>Elenco</Heading>
            <Text fontSize='1.5rem' textAlign='start'>Crew</Text>
            <Stack display='grid' gridTemplateColumns='repeat(auto-fit, minmax(160px, 180px))' alignItems='center'>
                {
                    crew?.map(person => {
                        return (
                            <Stack key={`${person.id}-${person.credit_id}`}>
                                {
                                    person.profile_path === null ?
                                        <Stack w='160px' h='200px' bg='rgba(242,242,242, 1)' borderRadius='6px' align='center' justify='center'>
                                            <FaUserAlt color="black" fontSize='8rem' />
                                        </Stack>
                                        :
                                        <Img objectFit='contain' backgroundSize='contain' w='160px' h='200px' borderRadius='6px' src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`} />
                                }
                                <Text textAlign='start' fontWeight='600'>{person.name}</Text>
                                <Text textAlign='start' fontStyle='italic'>{person.known_for_department}</Text>
                            </Stack>
                        )
                    })
                }
            </Stack>
            <Text fontSize='1.5rem' textAlign='start'>Cast</Text>
            <Stack display='grid' gridTemplateColumns='repeat(auto-fit, minmax(160px, 180px))' alignItems='center'>
                {
                    casting?.map(person => {
                        return (
                            <Stack key={person.id}>
                                {
                                    person.profile_path === null ?
                                        <Stack w='160px' h='200px' bg='rgba(242,242,242, 1)' borderRadius='6px' align='center' justify='center'>
                                            <FaUserAlt color="black" fontSize='8rem' />
                                        </Stack>
                                        :
                                        <Img w='160px' h='200px' borderRadius='6px' src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`} />
                                }
                                <Text textAlign='start' fontWeight='600'>{person.name}</Text>
                                <Text textAlign='start' fontStyle='italic'>{person.known_for_department}</Text>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default MovieCredits


