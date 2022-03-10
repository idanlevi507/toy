
import { httpService } from './http.service'
// import { toyService } from '../../../backend/api/toy/toy.service'

// const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/toy' : 'http://localhost:3030/api/toy'

export const toyService = {
    getFromAPI,
    query,
    save
}

function getFromAPI(pokeName) {
    return httpService.getAPI(pokeName)
}

function query(filterBy) {
    console.log("2 - service");
    return httpService.get(`toy`, filterBy)
}

function save(toy) {
    if (toy._id) {
        return httpService.put('toy', toy)
    } else {
        return httpService.post('toy', toy)
    }
}