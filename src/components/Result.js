import { Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { MainContainer } from "./Form/MainContainer"

export const Result = () => {
  const state = useSelector(state => state)

  return (
    <MainContainer>
      <Typography variant='h5'>
        УРА!
      </Typography>
      <Typography variant='h6'>
        Поздравляем с заполнением всех полей!
        <pre>Фамилия: {state.auth.lastName}</pre>
        <pre>Имя: {state.auth.firstName}</pre>
        <pre>Отчество: {state.auth.middleName}</pre>
        <pre>Дата рождения: {state.auth.date}</pre>
        <pre>Email: {state.email.email}</pre>
      </Typography>
    </MainContainer>
  )
}