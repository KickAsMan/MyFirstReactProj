import MyButton from 'components/UI/button/MyButton'
import MyInput from 'components/UI/input/MyInput'
import { AuthContext } from 'context'
import React, { useContext } from 'react'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder="Введите логин" />
                <MyInput type='password' placeholder="Введите пароль"/>
                <MyButton type='submit'>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
