import styled from "styled-components";
import { device } from "device";
import Button from "@mui/material/Button";
import { OutlinedInput } from "@mui/material";
import { MuiColorInput } from "mui-color-input";

export const InputsContainer = styled.div`
  width: 90%;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    display: block;
    width: 70%;
    margin-top: 0px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 35px;
  border: 1px;
`;

export const CoordinateOutlinedInput = styled(OutlinedInput)`
  width: 50%;
  margin-top: 5px;
  p {
    color: black;
  }
`;


export const ColorPicker = styled(MuiColorInput)`
  width: 50%;
  margin-top: 5px !important;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px !important;
  font-weight: bold !important;
  height: 50px !important;
`;
