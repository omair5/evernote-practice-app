import { combineReducers } from 'redux'
import NotesReducer from './notesReducer'

export default combineReducers({ myNotes: NotesReducer })