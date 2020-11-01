import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './notes.css'
import Grid from '@material-ui/core/Grid';
import { Animated } from "react-animated-css";
import parser from 'html-react-parser';
import DeleteIcon from '@material-ui/icons/Delete';
const Notes = () => {
    // -----------------LOGIC
    const myNotes = useSelector((state) => state.myNotes)
    console.log(myNotes)
    const dispatch = useDispatch()
    const deleteItem = (id) => {
        const apply_animation = myNotes.findIndex((value) => value.id === id)
        const new_arr = [...myNotes]
        new_arr[apply_animation] = { ...new_arr[apply_animation], visibility: true }
        dispatch({
            type: 'for delete animation',
            payload: new_arr
        })
        setTimeout(() => dispatch({
            type: 'filtered array',
            payload: myNotes.filter((value) => value.id !== id)
        }), 1000)


    }


    // -----------------USER INTERFACE
    return (
        <>
            {myNotes.length === 0
                ?
                <div className='center-appear-note'>
                    <h5>YOUR NOTES WILL APPEAR HERE...</h5>
                </div>
                :
                /* USING custom-scroll CLASSNAME FROM textEditor.css */
                <div className=' main-div-notes notes'>
                    <Grid container spacing={2} >
                        {myNotes.map((value) => (
                            <Grid item xs={12} md={6} lg={4} key={value.id}>
                                <Animated animationIn="zoomIn" animationOut="zoomOutDown" isVisible={value.visibility ? false : true} >
                                    <div className='cards custom-scroll'>
                                        <div className='note-title-delete'>
                                            <h1 className='note-title'>{value.title}</h1>
                                            <DeleteIcon onClick={() => deleteItem(value.id)} className='deleteIcon' style={{ fontSize: '25px' }} />
                                        </div>
                                        <div className='note-body'>
                                            {parser(value.note)}
                                        </div>
                                    </div>
                                </Animated>
                            </ Grid>
                        ))}
                    </Grid>
                </div>
            }
        </>
    );
}

export default Notes;