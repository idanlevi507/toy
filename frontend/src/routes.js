import Home from './pages/Home.jsx'

export const routes = [
    {
        path: '/toy/details/:toyId',
        component: ToyDetails
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