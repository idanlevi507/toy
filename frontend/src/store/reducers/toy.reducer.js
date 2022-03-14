const initialState = {
    toys: null
}

export function toyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'SET_SEARCH_RESULT':
            console.log("reducer", action);
            return { ...state, searchedToy: action.apiResult }
        case 'ADD_TOY':
            return { ...state, toys: [action.apiResult, ...state.toys] }
        case 'REMOVE_TOY':
            return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }
        case 'UPDATE_TOY':
            const idx = state.toys.findIndex(toy => toy._id === action.toy._id)
            return { ...state, toys: [...state.toys.slice(0, idx), { ...action.toy }, ...state.toys.slice(idx + 1)] }
    }
}