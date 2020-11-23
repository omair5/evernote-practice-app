const initialState = []
const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searched array':
            return action.payload
        case 'empty search array':
            return action.payload
        default:
            return state
    }
}
export default SearchReducer;