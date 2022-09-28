import styled from "styled-components";
import { device } from "device";
import Button from "@mui/material/Button";

export const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 20px;
  }
`;
export const Container = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 90%;
  margin-bottom: 15px;
  @media ${device.laptop} {
    width: 55%;
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


