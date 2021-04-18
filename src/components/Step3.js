// import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Form } from "./Form/Form"
import { Input } from "./Form/Input"
import { MainContainer } from "./Form/MainContainer"
import { PrimaryButton } from "./Form/PrimaryButton"
import { password } from '../store/root'
import { Typography } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const schema = yup.object().shape({
    password: yup
        .string()
        .min(6, 'Минимум 6 символов')
        .max(20)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null])
})

export const Step3 = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        dispatch(password(data))
        history.push('/result')
    }
    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                Шаг 3/3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("password")}
                    type='text'
                    name='password'
                    label='Пароль'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Input
                    {...register("confirmPassword")}
                    type='text'
                    name='confirmPassword'
                    label='Подтверждение пароля'
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword && 'Пароль не совпадает'}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}