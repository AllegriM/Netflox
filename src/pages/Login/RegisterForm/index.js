import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { useForm  } from "react-hook-form"
import { theme } from "theme"
import { ErrorMessage } from "@hookform/error-message"

function RegisterFormFormik( {displayLogin} ) {
    
    const { signUp } = useContext(AuthContext)

    //***** States *****//
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState: { errors }  } = useForm()
    
    const onSubmit = values => {
        setIsSubmitting(false)
        signUp(values.username, values.password, values.FirstName);
    }
    
    return (
        <>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Regístrate</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name = 'FirstName'
                    placeholder="Nombre" 
                    type='FirstName'
                    className= {`inputField  ${errors.FirstName ? 'input-error' : ''}`}  
                    {...register("FirstName", {
                        min: 3,
                        required: true,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^[a-zA-Z\-]+$/
                    })}
                />
                <ErrorMessage name='FirstName' errors={errors} as="small" />
                <input 
                    name = 'username'
                    placeholder="Email o número de teléfono" 
                    type='username'
                    className= {`inputField  ${errors.username ? 'input-error' : ''}`}  
                    {...register("username", {
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
                <button disabled={isSubmitting} className="form-btns">Crear cuenta</button>
            </form>
            <Button onClick={ ()=> displayLogin(true) } mt='1em' bg={theme.colors.red[50]} w='100%' py='1.5rem'>Ir al inicio</Button>
        </>
    )
}
export default RegisterFormFormik