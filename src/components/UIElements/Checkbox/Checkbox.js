import React from "react";
import { StyledCheckbox } from "./Checkbox.styled";

const Checkbox = ({ id, name, label, onChange }) => {
  return (
    <>
      <StyledCheckbox>
        <input type="checkbox" id={id} name={name} onChange={onChange} />
        <label style={{ marginLeft: "1rem" }} htmlFor={id}>
          {label}
        </label>
      </StyledCheckbox>
    </>
  );
};

export default Checkbox;
