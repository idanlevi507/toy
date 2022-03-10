export function toyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'ADD_TOY':
            return { ...state, toys: [action.apiResult, ...state.toys] }
    }
}