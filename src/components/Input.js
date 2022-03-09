import React from 'react';

const Input = (props) => {
    return (

        <input type={props.type} id="fname" name={props.name} className='input' placeholder={props.placeholder} style={{ width: props.width }} onChange={props.onChange} />

    );
};

export default Input;