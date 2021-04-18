import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { Typography } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router"
import { Form } from "./Form/Form"
import { Input } from "./Form/Input"
import { MainContainer } from "./Form/MainContainer"
import { PrimaryButton } from "./Form/PrimaryButton"
import { useDispatch } from "react-redux"
import { email } from '../store/root'

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Введите корректный формат')
        .required('Пустое поле. Введите email'),    
})

export const Step2 = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        dispatch(email(data))
        history.push('/step3')
    }
    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                Шаг 2/3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("email")}
                    type='email'
                    name='email'
                    label='Email'
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}