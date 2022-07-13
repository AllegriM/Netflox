import { Button, Input, Text } from "@chakra-ui/react"
import { AuthContext } from "context/AuthContext"
import { useContext, useState } from "react"
import { theme } from "theme"

function RegisterForm( {displayLogin} ) {
    
    //======= function from useUser hook that storages register data =======//

    // const { submitRegister } = useUser()
    const { signUp } = useContext(AuthContext)

    //======= Storaging the register data =======//

    const [registerUserName, setRegisterUserName] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerName, setRegisterName] = useState("")

    //======= Function =======//

    // Submit register info

    const submitRegisterData = () => {
        // submitRegister({registerName, registerUserName, registerPassword})
        signUp(registerUserName, registerPassword, registerName)
    }


    return (
        <>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Regístrate</Text>
            <form>
                <Input onChange={ (e) => setRegisterName(e.target.value)} _placeholder={{ fontWeight: 100, color: '#8c8c8c' }} my='1em' placeholder='Nombre' size={'lg'} bg='#333' border='none'></Input>
                <Input onChange={ (e) => setRegisterUserName(e.target.value)} _placeholder={{ fontWeight: 100, color: '#8c8c8c' }} my='1em' placeholder="Email o número de teléfono" size={'lg'} bg='#333' border='none'></Input>
                <Input onChange={ (e) => setRegisterPassword(e.target.value)} _placeholder={{ fontWeight: 100, color: '#8c8c8c' }} my='1em' placeholder='Contraseña' size={'lg'} bg='#333' border='none'></Input>
                <Button onClick={submitRegisterData} mt='1em' bg={theme.colors.red[50]} w='100%' py='1.5rem'>Crear cuenta</Button>
            </form>
            <Button onClick={ () => displayLogin(true) } mt='1em' bg={theme.colors.red[50]} w='100%' py='1.5rem'>Ir al inicio</Button>
            {/* <Stack pt='1em' textAlign='start'>
                <Text color={theme.colors.gray}>¿Primera vez en Netflix? <span className='suscribe'>Suscríbete ahora</span>.</Text>
                <Text fontSize='xs' color={theme.colors.gray}>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <span className='more-info'>Más info</span>.</Text>
            </Stack> */}
        </>
    )
}

export default RegisterForm