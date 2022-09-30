import styled from "styled-components";
import { device } from "device";
import Button from "@mui/material/Button";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 100%;
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

export const TextBox = styled.div`
  position: absolute;
  font-size: ${(props) => props.theme.fontWeight}px;
  left: ${(props) => props.theme.x}px;
  top: ${(props) => props.theme.y}px;
  color: ${(props) => props.theme.color};
  -webkit-text-stroke: ${(props) => props.theme.outlineWeight}px
    ${(props) => props.theme.colorOutlined};
`;

export const StyledButton = styled(Button)`
  width: 90%;
  font-weight: bold !important;
  height: 50px !important;
  @media ${device.laptop} {
    width: 55%;
  }
`;
