import { AuthContext } from 'context'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'router/routes'

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
        ?
        <Routes>
                {privateRoutes.map(route => 
                    <Route element={route.element} path={route.path}/>
                )}
        </Routes>
        :
        <Routes>
                {publicRoutes.map(route => 
                    <Route element={route.element} path={route.path}/>
                )}
        </Routes>
    )
}

export default AppRouter
