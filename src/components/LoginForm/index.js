import { Button, Checkbox, Input, Stack, Text } from "@chakra-ui/react"
import { AuthContext } from "context/AuthContext"
import { useContext, useState } from "react"
import { theme } from "theme"

function LoginForm( {displayLogin} ) {
    //***** States *****//
    
    // Storing user information when logging in.
    const { logIn } = useContext(AuthContext)
    // Storing both user and password into states.
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    //***** Functions *****//

    const submitUserInfo = (e) => {
        e.preventDefault()
        logIn(userName, password)
    }   

    return (
        <>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Inicia sesión</Text>
            <form onSubmit={submitUserInfo}>
                <Input onChange={(e) => setUserName(e.target.value)} value={userName} _placeholder={{ fontWeight: 100, color: '#8c8c8c' }} my='1em' placeholder="Email o número de teléfono" size={'lg'} bg='#333' border='none'></Input>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} _placeholder={{ fontWeight: 100, color: '#8c8c8c' }} my='1em' placeholder='Contraseña' size={'lg'} bg='#333' border='none'></Input>
                <button className="form-btns">Iniciar sesión</button>
            </form>
            <Button onClick={ ()=> displayLogin(false) } mt='1em' bg={theme.colors.red[50]} w='100%' py='1.5rem'>Crear cuenta</Button>
            <Stack justifyContent='space-between' direction='row' mt='.75em' alignItems='center'>
                <Checkbox size='md' alignItems='center'>
                    <Text color={theme.colors.gray} fontSize={'sm'}>Recuérdame</Text>
                </Checkbox>
                <Text color={theme.colors.gray} fontSize={'sm'}>¿Necesitas ayuda?</Text>
            </Stack>
            <Stack pt='1em' textAlign='start'>
                <Text color={theme.colors.gray}>¿Primera vez en Netflix? <span className='suscribe'>Suscríbete ahora</span>.</Text>
                <Text fontSize='xs' color={theme.colors.gray}>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <span className='more-info'>Más info</span>.</Text>
            </Stack>
        </>
    )
}
export default LoginForm