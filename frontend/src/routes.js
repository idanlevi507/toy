import Home from './pages/Home.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToysApp } from './pages/ToysApp.jsx'
import { LoginUser } from './pages/LoginUser.jsx'

export const routes = [
    {
        path: '/toy/details/:toyId',
        component: ToyDetails
    },
    {
        path: '/toy/edit/:toyId',
        component: ToyEdit
    },
    {
        path: '/login',
        component: LoginUser
    },
    {
        path: '/toy',
        component: ToysApp
    },
    {
        path: '/',
        component: Home,
    }
]