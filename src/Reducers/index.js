import { combineReducers } from 'redux'
import InputValueReducer from './inputValueReducer'
import NotesReducer from './notesReducer'
import SearchReducer from './searchReducer'

export default combineReducers(
    {
        myNotes: NotesReducer,
        searched: SearchReducer,
        inputValue:InputValueReducer
    }
)