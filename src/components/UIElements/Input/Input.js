import React, {useState} from 'react';
import { StyledInputContainer } from './Input.styled';



const Input = ({id, label,type,name, width, height}) => {


    

   

  //testez control

 return(
     <StyledInputContainer width={width} height={height} >
         <label htmlFor={id}>{label}</label> 
         <input type={type} name={name} id={id}  />

     </StyledInputContainer>

 )
}



export default Input;