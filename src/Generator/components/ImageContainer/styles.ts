import styled from "styled-components";
import { device } from "device";
import Button from "@mui/material/Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 100%;
  box-shadow: 0 2px 6px rgb(18 17 36 / 3%), 0 0 16px rgb(18 17 36 / 8%);
`;

export const StyledImageContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
  position: relative;
  @media ${device.laptop} {
    width: 55%;
    height: auto;
  }
`;

export const StyledButton = styled(Button)`
  width: 90%;
  font-weight: bold !important;
  height: 50px !important;
  @media ${device.laptop} {
    width: 55%;
  }
`;
