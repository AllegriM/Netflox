import { Avatar, Button, ListItem, Menu, MenuButton, MenuItem, MenuList, Stack, Text, UnorderedList } from "@chakra-ui/react"
import Icon from "components/ui/Icon"
import { FaSearch } from 'react-icons/fa'
import { BsFillCaretDownFill } from "react-icons/bs"
import { theme } from "theme"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const [openSearchInput, setOpenSearchInput] = useState(false)
    const { logOut } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const hideNavBar = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", hideNavBar)
        return () => window.addEventListener("scroll", hideNavBar)
    }, [show])

    return (
        <nav className={`nav-bar ${show ? 'hide-navbar' : ''}`}>
            <Stack className="nav-left" direction='row' align='center'>
                <Button onClick={() => navigate('/home')} variant="unstyled">
                    <Icon />
                </Button>
                <Menu>
                    <MenuButton className='responsive-categories' as={Button} bg='none' _hover={{ bg: "none" }} _active={{ bg: "none" }} p='0'>
                        <Stack direction='row' align='center' cursor='pointer'>
                            <Text>Categorias</Text>
                            <BsFillCaretDownFill size='.75em' />
                        </Stack>
                    </MenuButton>
                    <MenuList bg={theme.colors.black}>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Inicio
                        </MenuItem>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Series
                        </MenuItem>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Peliculas
                        </MenuItem>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Novedades populares
                        </MenuItem>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Mi lista
                        </MenuItem>
                        <MenuItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Explora por idiomas
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Stack>
                    <UnorderedList style={{ listStyle: "none" }} display='flex'>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Inicio
                        </ListItem>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Series
                        </ListItem>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Peliculas
                        </ListItem>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Novedades populares
                        </ListItem>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Mi lista
                        </ListItem>
                        <ListItem mr='1em' cursor='pointer' _hover={{ opacity: 0.5, transition: ".3s" }}>
                            Explora por idiomas
                        </ListItem>
                    </UnorderedList>
                </Stack>
            </Stack>
            <Stack direction='row' gap='10px' align='center'>
                <Stack className="nav-search" h='30px'>
                    <FaSearch onClick={() => setOpenSearchInput(!openSearchInput)} className={`icon-search ${openSearchInput ? 'open-icon' : ''}`} size={"1.25em"} cursor='pointer' style={{ transform: 'rotate(-10deg)' }} />
                    <input placeholder="Títulos, personas, géneros" className={`input-search ${openSearchInput ? 'open-input' : ''}`} type='text' />
                </Stack>
                <Stack direction='row' align='center' cursor='pointer'>
                    <Menu className='menu'>
                        <MenuButton className="avatar-button" as={Button} bg='none' _hover={{ bg: "none" }} _active={{ bg: "none" }}>
                            <Stack direction='row' align='center' cursor='pointer'>
                                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                                <BsFillCaretDownFill className="avatar-arrow" size='.75em' />
                            </Stack>
                        </MenuButton>
                        <MenuList bg={theme.colors.black}>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem onClick={logOut}>Deslogear</MenuItem>
                        </MenuList>
                    </Menu>

                </Stack>
            </Stack>
        </nav>
    )
}

export default Navbar