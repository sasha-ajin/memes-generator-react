import styled from "styled-components";
import { RefObject } from "react";
interface ITextBoxDiv {
  fontWeight: number;
  x: number;
  y: number;
  outlineWeight: number;
  colorOutlined: string;
  color: string;
  ref: RefObject<HTMLDivElement> | null;
}

export const TextBoxDiv = styled.div<ITextBoxDiv>`
  user-select: none;
  position: absolute !important;
  font-size: ${(props) => props.fontWeight}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  color: ${(props) => props.color};
  text-shadow: 0 0 ${(props) => props.outlineWeight}px
      ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined},
    0 0 ${(props) => props.outlineWeight}px ${(props) => props.colorOutlined};
`;
