import styled from "styled-components";
import { device } from "device";
import Button from "@mui/material/Button";
import { InputLabel, OutlinedInput } from "@mui/material";

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

export const StyledInputLabel = styled(InputLabel)`
  font-size: 25px !important;
  color: black !important;
  margin-bottom: 8px !important;
  margin-top: 16px !important;
`;

export const CoordinateOutlinedInput = styled(OutlinedInput)`
  width: 50%;
  margin-top: 5px;
  p {
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px !important;
  font-weight: bold !important;
  height: 50px !important;
`;
