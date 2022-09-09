import React from "react";
import { OutlinedInput } from "@mui/material";
import { InputContainer, StyledInputLabel, StyledButton } from "./styles";

const Inputs = () => {
  return (
    <div>
      <InputContainer>
        <StyledInputLabel htmlFor="top-text">Top Text</StyledInputLabel>
        <OutlinedInput id="top-text" placeholder="Think" fullWidth />
        <StyledInputLabel htmlFor="bottom-text">Bottom Text</StyledInputLabel>
        <OutlinedInput id="bottom-text" placeholder="About it" fullWidth />
        <StyledButton variant="contained" fullWidth>
          Save
        </StyledButton>
      </InputContainer>
    </div>
  );
};

export default Inputs;
