import { Button, Stack } from "@chakra-ui/react"
import Icon from "components/ui/Icon"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useNavigate } from "react-router-dom"
import NavbarInput from "./NavbarInput"
import NavbarAvatar from "./NavbarAvatar"

function Navbar() {

    const navigate = useNavigate()

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
                {/* <Menu>
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
                </Menu> */}
            </Stack>
            <Stack direction='row' gap='10px' align='flex-end'>
                <NavbarInput />
                <NavbarAvatar disconnect={logOut} />
            </Stack>
        </nav>
    )
}

export default Navbar