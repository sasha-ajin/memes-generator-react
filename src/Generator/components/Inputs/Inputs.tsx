import React, { useContext } from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import {
  InputsContainer,
  StyledButton,
  InputContainer,
  CoordinateOutlinedInput,
} from "./styles";
import { SelectImageContext } from "context/context";
import Typography from "@mui/material/Typography";

type InputsProps = {
  quantity: number;
};

const Inputs: React.FC<InputsProps> = (props) => {
  const { choosedImage } = useContext(SelectImageContext);
  console.log(props.quantity);
  return (
    <div>
      <InputsContainer>
        {props.quantity ? (
          [...Array(props.quantity)].map((index: number) => (
            <InputContainer>
              <OutlinedInput id="top-text" fullWidth />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">X</InputAdornment>
                }
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">Y</InputAdornment>
                }
              />
            </InputContainer>
          ))
        ) : (
          <Typography variant="h3">Select Image</Typography>
        )}
        <StyledButton
          disabled={choosedImage === null && true}
          variant="contained"
          fullWidth
        >
          Save
        </StyledButton>
      </InputsContainer>
    </div>
  );
};

export default Inputs;
