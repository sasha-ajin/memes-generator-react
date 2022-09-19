import React, { useContext } from "react";
import { OutlinedInput } from "@mui/material";
import { InputContainer, StyledInputLabel, StyledButton } from "./styles";
import { SelectImageContext } from "../../../context/context";

const Inputs = () => {
  const { choosedImage } = useContext(SelectImageContext);

  return (
    <div>
      <InputContainer>
        <StyledInputLabel htmlFor="top-text">Top Text</StyledInputLabel>
        <OutlinedInput id="top-text" placeholder="Think" fullWidth />
        <StyledInputLabel htmlFor="bottom-text">Bottom Text</StyledInputLabel>
        <OutlinedInput id="bottom-text" placeholder="About it" fullWidth />
        <StyledButton
          disabled={choosedImage === null && true}
          variant="contained"
          fullWidth
        >
          Save
        </StyledButton>
      </InputContainer>
    </div>
  );
};

export default Inputs;
