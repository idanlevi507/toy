import { toyService } from '../../services/toy.service.js'


export function loadToys(filterBy = { txt: '', inStock: 'all' }) {
    console.log("im in 1");
    return async (dispatch) => {
        try {
            console.log("im in 2");
            const toys = await toyService.query(filterBy);
            dispatch({ type: 'SET_TOYS', toys })
        } catch (err) {
            throw err
        }
    }
}

export function addToy(pokemonName) {
    console.log("before", pokemonName);
    return async (dispatch) => {
        try {
            const apiResult = await toyService.getFromAPI(pokemonName)
            if (apiResult) toyService.save(buildToyObject(apiResult))
            else dispatch({ type: 'ADD_TOY', apiResult })
        } catch (err) {
            throw err
        }
    }
}

export function updateToy(toyToUpdate) {
    return async dispatch => {
        try {
            const toy = await toyService.save(toyToUpdate)
            dispatch({ type: 'UPDATE_TOY', toy })
        } catch (err) {
            throw err
        }
    }
}

export function remove(toyId) {
    console.log(toyId);
    return async (dispatch) => {
        try {
            console.log(toyId);
            await toyService.removeToy(toyId)
            dispatch({ type: 'REMOVE_TOY', toyId })
        } catch (err) {
            throw err
        }
    }
}

function buildToyObject(apiResult) {
    if (!apiResult) return null;
    else return {
        name: apiResult.name,
        picture: apiResult.sprites.front_default,
        type: apiResult.types[apiResult.types.length - 1].type.name,
        weight: convertToKG(apiResult.weight)
    }

    function convertToKG(weight) {
        return Math.round((weight / 2.205))
    }

}