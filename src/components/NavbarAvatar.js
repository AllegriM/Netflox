import { Button, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react"
import { BsFillCaretDownFill } from "react-icons/bs"
import { FaPlus, FaSignOutAlt, FaUserCircle, FaRegUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { theme } from "theme"

function NavbarAvatar( {disconnect} ) {

    return (
        <Stack direction='row' align='center' cursor='pointer'>

            <Menu className='menu'>
                <MenuButton className="avatar-button" as={Button} variant='unstyled' >
                    <Stack direction='row' align='center' cursor='pointer'>
                        <FaRegUserCircle size='1.5em'/>
                        <BsFillCaretDownFill className="avatar-arrow" size='.75em' />
                    </Stack>
                </MenuButton>
                <MenuList bg={theme.colors.black}>
                    <MenuItem display='flex' alignItems='center' gap='10px'>
                        <FaUserCircle size='1.2em' />
                        <Text mt='.2em'>Perfil</Text>
                    </MenuItem>
                    <MenuItem as={Link} to='/watchlist' minH="48px" display='flex' alignItems='center' gap='10px'>
                        <FaPlus size='1.2em' />
                        <Text mt='.2em'>Mi lista</Text>
                    </MenuItem>
                    <MenuItem display='flex' alignItems='center' gap='10px' onClick={() => disconnect()}>
                        <FaSignOutAlt size='1.2em' />
                        <Text mt='.2em'>Cerrar sesión</Text>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Stack>

    )
}

export default NavbarAvatar