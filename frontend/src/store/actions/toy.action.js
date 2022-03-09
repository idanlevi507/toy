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