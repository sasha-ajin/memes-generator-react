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
  box-shadow: 0 2px 6px rgb(18 17 36 / 4%), 0 0 16px rgb(18 17 36 / 8%);
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

interface ITextBox {
  fontWeight: number;
  x: number;
  y: number;
  outlineWeight: number;
  colorOutlined: string;
  color: string;
}

export const TextBox = styled.div<ITextBox>`
  position: absolute;
  font-family: arial;
  font-size: ${(props) => props.fontWeight}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  color: ${(props) => props.color};
  -webkit-text-stroke-width: ${(props) => props.outlineWeight}px;
  -webkit-text-stroke-color: ${(props) => props.colorOutlined};
`;

export const StyledButton = styled(Button)`
  width: 90%;
  font-weight: bold !important;
  height: 50px !important;
  @media ${device.laptop} {
    width: 55%;
  }
`;
