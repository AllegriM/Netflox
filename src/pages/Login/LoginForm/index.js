import { Button, Checkbox, Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { theme } from "theme"

function LoginFormFormik({ displayLogin }) {

    const { logIn, LoginWithGoogleIcon } = useContext(AuthContext)

    //***** States *****//
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = values => {
        setIsSubmitting(false)
        logIn(values.email, values.password);
    }
    return (
        <>
            <Text textAlign='start' fontSize={"4xl"} fontWeight={'semibold'}>Inicia sesión</Text>
            {
                !errors.password && !errors.email ? null
                    :
                    <Stack backgroundColor='rgba(232,124,3,1)' p='.45rem 0' borderRadius={6}>
                        {
                            errors.email?.type === 'pattern' ?
                                <Text fontSize={14} textAlign='start' m='0' p='0 .35rem' fontWeight={600}>
                                    {errors.email?.type === 'pattern' ? "Email incorrecto o no existente" : null}
                                </Text>
                                : null
                        }
                        {
                            errors.password?.type === 'pattern' ?
                                <Text fontSize={14} textAlign='start' m='0' p='0 .35rem' fontWeight={600} >
                                    {errors.password?.type === 'pattern' ? "Contraseña incorrecta o no existente" : null}
                                </Text>
                                : null
                        }
                    </Stack>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name='email'
                    placeholder="Email o número de teléfono"
                    type='email'
                    className={`${errors.email ? 'input-error' : ''}`}
                    {...register("email", {
                        min: 3,
                        required: true,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    })}
                />
                <Input
                    name='password'
                    placeholder='Contraseña'
                    className={`${errors.password ? 'input-error' : ''}`}
                    type='password'
                    {...register("password", {
                        min: 6,
                        required: true,
                        // Minimum eight characters, at least one letter and one number:
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                    })}
                />
                <button disabled={isSubmitting} className="form-btns">Iniciar sesión</button>
            </form>
            <button onClick={() => displayLogin(false)} className="form-btns">Crear cuenta</button>
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
            <Button onClick={LoginWithGoogleIcon} bg='rgba(66,133,244, 1)' h='46px' p='0 5px' _hover={{ bg: 'rgba(66,133,244, 1)' }}>
                <svg viewBox="0 0 46 46" width="40px" height="40px" className="icon-google"><g id="Google-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="9-PATCH" transform="translate(-608.000000, -219.000000)"></g><g id="btn_google_dark_normal" transform="translate(-1.000000, -1.000000)"><g id="button" transform="translate(4.000000, 4.000000)" filter="url(#filter-1)"><g id="button-bg"><use fill="#4285F4" fillRule="evenodd"></use><use fill="none"></use><use fill="none"></use><use fill="none"></use></g></g><g id="button-bg-copy"><use fill="#FFFFFF" fillRule="evenodd"></use><use fill="none"></use><use fill="none"></use><use fill="none"></use></g><g id="logo_googleg_48dp" transform="translate(15.000000, 15.000000)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path><path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path></g></g><g id="handles_square"></g></g></svg>
                <Text mr='auto'>Iniciar sesíon con Google</Text>
            </Button>
        </>
    )
}
export default LoginFormFormik