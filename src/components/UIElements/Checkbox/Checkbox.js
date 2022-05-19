import React from "react";
import { StyledCheckbox } from "./Checkbox.styled";

const Checkbox = ({ id, name, label, onChange, onClick }) => {
  return (
    <>
      <StyledCheckbox>
        <input type="checkbox" onClick={onClick} id={id} name={name} value={id} onChange={onChange} />
        <label style={{ marginLeft: "1rem" }} htmlFor={id}>
          {label}
        </label>
      </StyledCheckbox>
    </>
  );
};

export default Checkbox;
