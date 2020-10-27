import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parser from 'html-react-parser';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './textEditor.css'



const TextEditor = () => {
    // --------------------LOGIC
    // const [note, setNote] = useState('')
    const [editorState, seteditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState) => {
        seteditorState(editorState)
        // setNote(draftToHtml(convertToRaw(editorState.getCurrentContent())))

    }


    // --------------------USER INTERFCAE
    return (
        <div className='main-div'>
            <input type="text" className='title' placeholder='Write Your Title Here...' />
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class bg"
                editorClassName="editor-class my-editor"
                toolbarClassName="toolbar-class"
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
            < AddCircleIcon style={{fontSize:'50px'}} className='addIcon'/>

            {/* {parser(note)} */}
        </div>
    );
}

export default React.memo(TextEditor);
