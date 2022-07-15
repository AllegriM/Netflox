import { Button, Checkbox, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { useForm  } from "react-hook-form"
import { theme } from "theme"
import { ErrorMessage } from "@hookform/error-message"

function LoginFormFormik( {displayLogin} ) {
    
    const { logIn } = useContext(AuthContext)

    //***** States *****//
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState: { errors }  } = useForm()
    const onSubmit = values => {
        setIsSubmitting(false)
        logIn(values.username, values.password);
    }
    
    return (
        <>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Inicia sesión</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name = 'username'
                    placeholder="Email o número de teléfono" 
                    type='username'
                    className= {`inputField  ${errors.username ? 'input-error' : ''}`}  
                    {...register("username", {
                        min: 3,
                        required: true,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    })}
                />
                <ErrorMessage name='username' errors={errors} as="small" />
                <input 
                    name = 'password'
                    placeholder='Contraseña'
                    className= {`inputField  ${errors.password ? 'input-error' : ''}`}
                    type='password'
                    {...register ("password", {
                        min: 6,
                        required: true,
                        // Minimum eight characters, at least one letter and one number:
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                    })}
                />  
                <ErrorMessage name='password' errors={errors} as="small" />
                <button disabled={isSubmitting} className="form-btns">Iniciar sesión</button>
            </form>
            <Button onClick={ ()=> displayLogin(false) } mt='1em' bg={theme.colors.red[50]} w='100%' py='1.5rem'>Crear cuenta</Button>
            <Stack justifyContent='space-between' direction='row' mt='1em' alignItems='center'>
                <Checkbox size='md' alignItems='center'>
                    <Text color={theme.colors.gray} fontSize={'sm'}>Recuérdame</Text>
                </Checkbox>
                <Text color={theme.colors.gray} fontSize={'sm'}>¿Necesitas ayuda?</Text>
            </Stack>
            <Stack pt='2em' textAlign='start'>
                <Text color={theme.colors.gray}>¿Primera vez en Netflix? <span className='suscribe'>Suscríbete ahora</span>.</Text>
                <Text fontSize='xs' color={theme.colors.gray}>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <span className='more-info'>Más info</span>.</Text>
            </Stack>
        </>
    )
}
export default LoginFormFormik