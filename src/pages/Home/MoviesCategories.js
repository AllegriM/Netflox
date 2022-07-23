import { Container } from "@chakra-ui/react"
import Category from "./Category"
import GenreCategory from "./GenreCategory"

const MoviesCategories = () => {

    return (
        <Container mx='0' w='100%' maxW='100%' px='2em' h='100%' m='75vh 0'>
            <Category title='Populares en Netflix' keyword='popular' />
            <Category title='Tendencias' keyword='top_rated' />
            <Category title='Por estrenarse...' keyword='upcoming' />
            <GenreCategory title='Accion' genreId='28' />
            <GenreCategory title='Adventure' genreId='99' />
            <GenreCategory title='Animation' genreId='878' />
            <GenreCategory title='Crime' genreId='80' />

        </Container>
    )
}

export default MoviesCategories