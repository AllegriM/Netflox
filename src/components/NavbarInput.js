import { Stack } from '@chakra-ui/react'
import { MovieContext } from 'context/SearchMovieContext'
import { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function NavbarInput() {

    const navigate = useNavigate()

    const [openSearchInput, setOpenSearchInput] = useState(false)

    const {keyword, handleOnChange}= useContext(MovieContext)

    useEffect(() => {
        let inputSearched = keyword.trim();
        if(inputSearched.length > 0){
            navigate(`/search/${keyword}`)
        }
    }, [keyword])


    return (
        <Stack className="nav-search" h='30px'>
            <FaSearch onClick={() => setOpenSearchInput(!openSearchInput)} className={`icon-search ${openSearchInput ? 'open-icon' : ''}`} size={"1.25em"} cursor='pointer' />
            <input
                placeholder="Títulos, personas, géneros"
                className={`input-search ${openSearchInput ? 'open-input' : ''}`}
                type='text'
                onChange={handleOnChange}
                value={keyword}
            />
        </Stack>
    )
}

export default NavbarInput