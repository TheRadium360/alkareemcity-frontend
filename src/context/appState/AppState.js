import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';



const AppState=( props ) => {

  const onChangeGeneric=( stateVar, stateModifier ) => {

    return (
      ( event ) => {
        console.log( stateVar )
        stateModifier( { ...stateVar, [ event.target.name ]: event.target.value } )
      }
    )

  }
  return (

    <AppContext.Provider value={{ onChangeGeneric }}>
      {props.children}
    </AppContext.Provider>

  )
}

export default AppState