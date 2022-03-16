import React from 'react';


const Input=( { type, name, placeholder, width, onChange, disabled=false, margin, defaultValue, label, labelVal } ) => {


    return (
        <>
            <input type={type} id={name} name={name} className={`input ${margin}`} placeholder={placeholder} style={{ width: width }} onChange={onChange} required disabled={disabled} defaultValue={defaultValue===''? '':defaultValue}
                data-content="Popover with data-trigger" rel="popover" data-placement="bottom" data-original-title="Title" data-trigger="hover" />
            <p className={`input_label_${label}`} style={{ width: width }}>{labelVal}</p>
        </>


    );
};

export default Input;