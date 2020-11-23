const initialState = ''
const InputValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'update value':
            return action.payload
        default:
            return state
    }
}
export default InputValueReducer;