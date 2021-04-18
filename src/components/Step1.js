import React from 'react'
import { Typography } from "@material-ui/core"
import { Form } from "./Form/Form"
import { MainContainer } from "./Form/MainContainer"
import { PrimaryButton } from "./Form/PrimaryButton"
import { Input } from './Form/Input'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../store/root'
import { useHistory } from 'react-router'

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Только латинские буквы')
        .required('Пустое поле. Введите Имя'),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Только латинские буквы')
        .required('Пустое поле. Введите Фамилию'),
    middleName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Только латинские буквы')
        .required('Пустое поле. Введите Отчество'),
    date: yup
        .string()
        .required('Пустое поле. Введите дату рождения')
})

export const Step1 = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useSelector(state => state.auth)
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit = data => {
        dispatch(auth(data))
        history.push('/step2')
    }

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                Шаг 1/3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("lastName")}
                    type="text"
                    label="Фамилия"
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <Input
                    {...register("firstName")}
                    type="text"
                    label="Имя"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input
                    {...register("middleName")}
                    type="text"
                    label="Отчество"
                    name="middleName"
                    error={!!errors.middleName}
                    helperText={errors?.middleName?.message}
                />
                <Input
                    {...register("date")}
                    type="date"
                    name="date"
                    error={!!errors.date}
                    helperText={errors?.date?.message}
                />
                <PrimaryButton>
                    Next
                </PrimaryButton>
            </Form>
        </MainContainer>
    )
}
