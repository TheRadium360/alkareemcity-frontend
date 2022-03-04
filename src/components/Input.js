import React from 'react';

const Input = (props) => {
    return (
        <div >
            <input type="text" id="fname" name="fname" className='input' placeholder={props.placeholder} />

        </div>
    );
};

export default Input;