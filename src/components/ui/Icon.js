
import { Img } from '@chakra-ui/react'
import logo from '../../imgs/logo.png'

function Icon() {
    return (
        <Img display='flex' justify='center' align='center' className='icon-svg' src={logo} objectFit='contain' />
    )
}

export default Icon