import styled from "styled-components";
// import { device } from "./../../../device";
import Button from "@mui/material/Button";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 60%;
  margin-bottom: 15px;
`;

export const StyledButton = styled(Button)`
  width: 60%;
  font-weight: bold !important;
  height: 50px !important;
`;

