const initialState = []
const NotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add note':
            return [action.payload, ...state]
        case 'filtered array':
            return action.payload
        default:
            return state
    }
}

export default NotesReducer;