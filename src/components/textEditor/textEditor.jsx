import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './textEditor.css'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';



const TextEditor = () => {
    // --------------------LOGIC
    const dispatch = useDispatch()
    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')
    const [alert, setAlert] = useState(false)
    const [editorState, seteditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState) => {
        seteditorState(editorState)
        setNote(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    const AddNote = () => {
        if (title === '') {
            setAlert(true)
        }
        else {
            setTitle('')
            seteditorState(EditorState.createEmpty())
            dispatch(
                {
                    type: 'add note',
                    payload: { title: title, note: note, id: uuidv4(), visibility: false }
                })
            setAlert(false)
            setNote('')
        }
    }

    const CancelNote = () => {
        setTitle('')
        seteditorState(EditorState.createEmpty())
        setNote('')
    }

    // --------------------USER INTERFCAE
    return (
        <div className='main-div'>
             {console.log('this is text editor component')}
            {alert && <span className='alert'>This field is required!</span>}
            <input type="text" className='title' value={title} placeholder='Write Your Title Here...' onChange={(e) => setTitle(e.target.value)} />
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class "
                editorClassName="editor-class my-editor custom-scroll"
                toolbarClassName="toolbar-class my-toolbar"
                onEditorStateChange={onEditorStateChange}
                placeholder='Write Your Note Here...'
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
                    inline: {
                        options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
                    },
                    link: {
                        options: ['link'],
                    },
                    list: {
                        options: ['unordered', 'ordered'],
                    },
                }}
            />
            <Tooltip title="Add" aria-label="add">
                < AddCircleIcon style={{ fontSize: '50px' }} className='addIcon' onClick={AddNote} />
            </Tooltip>
            {(title !== '') || (note !== '') ?
                <Tooltip title="Cancel" >
                    <CancelIcon style={{ fontSize: '50px' }} className='cancelIcon' onClick={CancelNote} />
                </Tooltip>
                :
                null}

        </div>
    );
}

export default React.memo(TextEditor);
