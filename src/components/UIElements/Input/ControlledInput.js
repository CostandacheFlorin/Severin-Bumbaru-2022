import React, {useEffect, useState} from 'react';
import { StyledInputContainer } from './Input.styled';



const ControlledInput = ({id, label,type,name, width, height, value, onChange}) => {
    const [defaultValue, setDefaultValue] = useState();
   useEffect(() => {
       setDefaultValue(value);

   }, [value])

    const onChangeHandler = (event) => {

        setDefaultValue(event.target.value);
        

    }


    

   

  //testez control

 return(
     <StyledInputContainer width={width} height={height} >
         <label htmlFor={id}>{label}</label> 
         <input type={type} name={name} id={id} value={defaultValue || ""} onChange={onChangeHandler}  />

     </StyledInputContainer>

 )
}



export default ControlledInput;