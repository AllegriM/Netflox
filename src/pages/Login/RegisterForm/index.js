import { Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"

function RegisterFormFormik({ displayLogin }) {

    const { signUp } = useContext(AuthContext)

    //***** States *****//
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = values => {
        setIsSubmitting(false)
        signUp(values.email, values.password, values.FirstName);
    }
    return (
        <Stack h='400px' w='314px' borderRadius={6}>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Regístrate</Text>
            {
                !errors.password && !errors.email && !errors.FirstName ? null
                    :
                    <Stack backgroundColor='rgba(232,124,3,1)' p='.45rem 0' borderRadius={6}>
                        {
                            errors.FirstName?.type === 'pattern' ?
                                <Text fontSize={14} textAlign='start' m='0' p='0 .35rem' fontWeight={600} >
                                    {errors.FirstName?.type === 'pattern' ? "Nombre invalido" : null}
                                </Text>
                                :
                                null
                        }
                        {
                            errors.email?.type === 'pattern' ?
                                <Text fontSize={14} textAlign='start' m='0' p='0 .35rem' fontWeight={600}>
                                    {errors.email?.type === 'pattern' ? "Email invalido" : null}
                                </Text>
                                : null
                        }
                        {
                            errors.password?.type === 'pattern' ?
                                <Text fontSize={14} textAlign='start' m='0' p='0 .35rem' fontWeight={600} >
                                    {errors.password?.type === 'pattern' ? "Contraseña con minimo 6 caracteres." : null}
                                </Text>
                                : null
                        }
                    </Stack>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name='FirstName'
                    placeholder="Nombre"
                    type='username'
                    className={`inputField  ${errors.FirstName ? 'input-error' : ''}`}
                    margin='.75em 0'
                    {...register("FirstName", {
                        min: 3,
                        required: true,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^[a-zA-Z\-]+$/,
                        // message: 'Este campo es obligatorio'
                    })}
                />
                <Input
                    name='email'
                    placeholder="Email"
                    type='email'
                    className={`inputField  ${errors.email ? 'input-error' : ''}`}
                    margin='.75em 0'
                    {...register("email", {
                        required: true,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        // message: 'Este campo es obligatorio'
                    })}
                />
                <Input
                    name='password'
                    placeholder='Contraseña'
                    className={`inputField  ${errors.password ? 'input-error' : ''}`}
                    type='password'
                    margin='.75em 0'
                    {...register("password", {
                        required: true,
                        min: 6,
                        // message: 'Este campo es obligatorio'
                        // Minimum eight characters, at least one letter and one number:
                        // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                    })}
                />
                <button disabled={isSubmitting} className="form-btns">Crear cuenta</button>
            </form>
            <button onClick={() => displayLogin(true)} className="form-btns">Ir al inicio</button>
        </Stack>
    )
}
export default RegisterFormFormik