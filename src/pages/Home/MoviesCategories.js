import { Container } from "@chakra-ui/react"
import Category from "./Category"

const MoviesCategories = () => {

    return (
        <Container mx='0' w='100%' maxW='100%' px='2em' h='100%' p='75vh 0'>
            <Category title='Populares en Netflix' keyword='popular' />
            <Category title='Tendencias' keyword='top_rated' />
            <Category title='Por estrenarse...' keyword='upcoming' />
        </Container>
    )
}

export default MoviesCategories