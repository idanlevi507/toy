
import { httpService } from './http.service'
// import { toyService } from '../../../backend/api/toy/toy.service'

// const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/toy' : 'http://localhost:3030/api/toy'

export const toyService = {
    query,
    save,
    removeToy,
    getById,
    getFromAPI
}

function getFromAPI(pokeName) {
    return httpService.getAPI(pokeName)
}

function query(filterBy) {
    console.log("2 - service");
    return httpService.get(`toy`, filterBy)
}

function getById(toyId) {
    return httpService.get(`toy/${toyId}`)
}

function save(toy) {
    if (toy._id) {
        return httpService.put('toy', toy)
    } else {
        return httpService.post('toy', toy)
    }
}

function removeToy(toyId, /* loggedinUser */) {
    console.log(toyId);
    return httpService.delete(`toy/${toyId}`)
}