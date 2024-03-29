import About from "pages/About";
import Login from "pages/Login";
import PostIdPage from "pages/PostIdPage";
import Posts from "pages/Posts";
import React from "react";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '*', element: <Posts/>},
]

export const publicRoutes = [
    {path:'/login', element: <Login/>},
    {path:'*', element: <Login/>},
]