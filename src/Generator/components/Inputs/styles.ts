import styled from "styled-components";
// import { device } from "./../../../device";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";

export const InputContainer = styled.div`
  width: 70%;
`;

export const StyledInputLabel = styled(InputLabel)`
  font-size: 25px !important;
  color: black !important;
  margin-bottom: 8px !important;
  margin-top: 16px !important;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px !important;
  font-weight: bold !important;
  height: 50px !important;
`;
