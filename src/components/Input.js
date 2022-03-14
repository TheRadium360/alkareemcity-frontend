import React from 'react';


const Input=( { type, name, placeholder, width, onChange, disabled=false, margin } ) => {
    return (

        <input type={type} id="fname" name={name} className={`input ${margin}`} placeholder={placeholder} style={{ width: width }} onChange={onChange} required disabled={disabled} />

    );
};

export default Input;