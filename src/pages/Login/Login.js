import { Stack } from '@chakra-ui/react'
import LoginFormFormik from 'pages/Login/LoginForm'
import { useContext, useState } from 'react'
import RegisterFormFormik from 'pages/Login/RegisterForm'
import Icon from 'components/ui/Icon'
import { AuthContext } from 'context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState(true)

    if(currentUser) return navigate('/home')
    return (
        <Stack className='login-background' h='100%' maxH='100vh'>
            <Stack direction='column' w='100%' h='100%'>
                <Stack zIndex='10' w='235px' justifySelf='start' mt={4}>
                    <Icon />
                </Stack>
                <Stack w='100%' h='100%' align='center' flexGrow='1' justify='center'>
                    <Stack className='login-form' minH='660px' justify='center' bg='rgba(0,0,0,.75)' p='5rem' borderRadius='4px'>
                        <Stack maxW='314px' w='100%' h='auto'>
                            {
                                loginForm ?
                                    <LoginFormFormik displayLogin={setLoginForm} />
                                    :
                                    <RegisterFormFormik displayLogin={setLoginForm} />
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login