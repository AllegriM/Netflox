import { Stack } from '@chakra-ui/react'
import LoginFormFormik from 'components/LoginForm'
import { useState } from 'react'
import RegisterFormFormik from 'components/RegisterFormHook'
import Icon from 'components/Icon'

function Login() {

    const [loginForm, setLoginForm] = useState(true)


    return (
        <Stack className='login-background'>
            <Stack direction='column' w='100%'>
                <Stack zIndex='10' w='235px' justifySelf='start'>
                    <Icon />
                </Stack>
                <Stack w='100%' align='center' h='100%'>
                    <Stack className='login-form' minH='660px' bg='rgba(0,0,0,.75)' p='5rem' borderRadius='4px'>
                        <Stack maxW='314px' h='auto'>
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