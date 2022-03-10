import React from 'react';


const Input=( { type, name, placeholder, width, onChange, disabled=false, value="" } ) => {
    return (

        <input type={type} id="fname" name={name} className='input' placeholder={placeholder} style={{ width: width }} onChange={onChange} required disabled={disabled} value={value} />

    );
};

export default Input;