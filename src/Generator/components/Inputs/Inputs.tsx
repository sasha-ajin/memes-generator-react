import React, { useContext } from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import {
  InputsContainer,
  StyledButton,
  InputContainer,
  CoordinateOutlinedInput,
  ColorPicker,
} from "./styles";
import { SelectImageContext } from "context/context";
import Typography from "@mui/material/Typography";
import { Box } from "types/Box";

const Inputs: React.FC = () => {
  const { selectedImage, textBoxes, setTextBoxes } =
    useContext(SelectImageContext);
  const handleUpdateFieldChanged = (
    index: number,
    value: any,
    fieldName: keyof Box
  ) => {
    let newArr: Box[] = textBoxes ? [...textBoxes] : [];
    newArr[index][fieldName] = value;
    setTextBoxes(newArr);
  };
  return (
    <div>
      <InputsContainer>
        {textBoxes ? (
          textBoxes.map((textBox, index) => (
            <InputContainer key={index}>
              <OutlinedInput
                id="top-text"
                fullWidth
                defaultValue={textBox.text}
                onChange={(event) =>
                  handleUpdateFieldChanged(index, event.target.value, "text")
                }
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                startAdornment={
                  <InputAdornment position="start">X: </InputAdornment>
                }
                defaultValue={textBox.x}
                onChange={(event) =>
                  handleUpdateFieldChanged(
                    index,
                    Number(event.target.value),
                    "x"
                  )
                }
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">Y: </InputAdornment>
                }
                defaultValue={textBox.y}
                onChange={(event) =>
                  handleUpdateFieldChanged(
                    index,
                    Number(event.target.value),
                    "y"
                  )
                }
              />
              <ColorPicker
                value={textBox.color}
                onChange={(color) =>
                  handleUpdateFieldChanged(index, color, "color")
                }
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">SIZE(px): </InputAdornment>
                }
                defaultValue={textBox.fontWeight}
                onChange={(event) =>
                  handleUpdateFieldChanged(
                    index,
                    Number(event.target.value),
                    "fontWeight"
                  )
                }
              />
            </InputContainer>
          ))
        ) : (
          <Typography variant="h3">Select Image</Typography>
        )}
        <StyledButton
          disabled={selectedImage === null && true}
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
