import React, { useState, useEffect } from 'react';
import NotesContext from './NotesContext';
import Api from '../../Api';

const NoteState=( props ) => {
  const allnotes=[]

  const [ notes, setNotes ]=useState( allnotes );

  useEffect( () => {
    fetchNotes();
  }, [] )


  // Fetch All notes:
  const fetchNotes=async () => {

    const response=await Api.get( `/api/v1/users/detail` );
    // console.log( response );
    setNotes( response.data.data.notes )
    console.log( response.data.data.notes );

  }


  // Add Notes:
  const addNote=async ( data ) => {

    const response=await Api.post( `/api/v1/notes`, data )
    console.log( response )

  }



  // Delete Note:
  const deleteNote=async ( id ) => {
    console.log( "deleteing note with id "+id )
    setNotes( notes.filter( el => el._id!==id ) );
    await Api.delete( `/api/v1/notes/${id}` );
    // notes.filter(el=>el.)

  }



  // Update Note:

  const updateNote=() => {

  }


  return (

    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NotesContext.Provider>

  )
}

export default NoteState