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
import { AnyCnameRecord } from "dns";
import { Box } from "types/Box";

const Inputs: React.FC = () => {
  const { selectedImage, textBoxes, setTextBoxes } =
    useContext(SelectImageContext);
  const handleChange = (color: string) => {
    console.log(color);
  };
  const handleUpdateFieldChanged = (
    index: number,
    value: any,
    fieldName: string
  ) => {
    let newArr: Box[] = textBoxes ? [...textBoxes] : [];
    newArr[index][fieldName as keyof Box] = value;
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
                // onChange={(event) =>
                //   handleUpdateFieldChanged(index, event.target.value, "color")
                // }
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
