import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

const API_URL = "https://pokeapi.co/api/v2/pokemon/"
var axios = Axios.create({
    withCredentials: false
})

export const httpService = {
    getAPI(endpoint, data = null) {
        console.log("5 - http ajaxDB");
        return ajaxAPI(endpoint, 'GET', data)
    }    
}

async function ajaxAPI(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${API_URL}${endpoint}`,
            method
        })
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            window.location.assign('/#/login')
            // window.location.assign('/login')
            //     router.push('/login')
            // }
            throw err
        }
    }
}