import '../css/FormDropdown.css';
import React, { Component,useEffect,useState } from 'react';




export const FormDropdown = (props) => {
  
  const [name,setName]= useState(props.name);
  
  const handleSelection=(e)=>{
    setName(e.target.getAttribute('value'));
  };
  
  return(
    <div className="btn-group " style={{width:props.width}}>
  <button value={name===props.name?'':name} className="btn btn_name" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor:props.backgroundColor,color:props.color}}>
    {name}
  </button>
  <ul className="dropdown-menu list"  style={{width:'100%'}} onClick={handleSelection}>

  {
    props.list.map((e)=><li className='list_item' value={e}>{e}</li>)
  }
    
  </ul>
</div>

  )
}
