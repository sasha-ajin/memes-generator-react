import React, { useContext } from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import {
  Container,
  StyledButton,
  InputContainer,
  CoordinateOutlinedInput,
  ColorPicker,
} from "./styles";
import { SelectImageContext } from "context/context";
import Typography from "@mui/material/Typography";
import { Box } from "types/Box";

type InputsContainerProps = {
  saveMeme: () => any;
};

const InputsContainer: React.FC<InputsContainerProps> = (props) => {
  const { selectedImage, textBoxes, setTextBoxes } =
    useContext(SelectImageContext);
  const handleUpdateFieldChanged = (
    index: number,
    value: any,
    fieldName: keyof Box
  ) => {
    let newArr: Box[] = textBoxes ? [...textBoxes] : [];
    // @ts-ignore
    newArr[index][fieldName] = value;
    setTextBoxes(newArr);
  };
  return (
    <div>
      <Container>
        {textBoxes ? (
          textBoxes.map((textBox, index) => (
            <InputContainer key={index}>
              <OutlinedInput
                id="top-text"
                fullWidth
                value={textBox.text}
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
                value={textBox.x}
                onChange={(event) => {
                  if (Number(event.target.value) <= 0)
                    handleUpdateFieldChanged(index, 0, "x");
                  else if (textBox.maxX <= Number(event.target.value))
                    handleUpdateFieldChanged(index, textBox.maxX, "x");
                  else
                    handleUpdateFieldChanged(
                      index,
                      Number(event.target.value),
                      "x"
                    );
                }}
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">Y: </InputAdornment>
                }
                value={textBox.y}
                onChange={(event) => {
                  if (Number(event.target.value) <= 0)
                    handleUpdateFieldChanged(index, 0, "y");
                  else if (textBox.maxY <= Number(event.target.value))
                    handleUpdateFieldChanged(index, textBox.maxY, "y");
                  else
                    handleUpdateFieldChanged(
                      index,
                      Number(event.target.value),
                      "y"
                    );
                }}
              />
              <ColorPicker
                value={textBox.color}
                format="hex"
                label="text color"
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
                value={textBox.fontWeight}
                onChange={(event) => {
                  if (Number(event.target.value) <= 1)
                    handleUpdateFieldChanged(index, 1, "fontWeight");
                  else
                    handleUpdateFieldChanged(
                      index,
                      Number(event.target.value),
                      "fontWeight"
                    );
                }}
              />
              <ColorPicker
                value={textBox.colorOutlined}
                format="hex"
                label="outlined color"
                onChange={(color) =>
                  handleUpdateFieldChanged(index, color, "colorOutlined")
                }
              />
              <CoordinateOutlinedInput
                id="top-text"
                type="number"
                startAdornment={
                  <InputAdornment position="start">SIZE(px): </InputAdornment>
                }
                value={textBox.outlineWeight}
                onChange={(event) => {
                  if (Number(event.target.value) <= 1)
                    handleUpdateFieldChanged(index, 1, "outlineWeight");
                  else
                    handleUpdateFieldChanged(
                      index,
                      Number(event.target.value),
                      "outlineWeight"
                    );
                }}
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
          onClick={props.saveMeme}
        >
          save
        </StyledButton>
      </Container>
    </div>
  );
};

export default InputsContainer;
