import styled from "styled-components";
import { device } from "./../device";

export const GeneratorContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div`
  background-color: red;
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const InputsContainer = styled.div`
  background-color: green;
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`;
